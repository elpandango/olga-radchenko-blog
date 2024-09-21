import { CustomError } from "~/server/interfaces/error";
import { PostModel } from "~/server/models/postModel";
import formidable from 'formidable';
import path from 'path';

export default defineEventHandler(async (event) => {
  try {
    const form = formidable({
      uploadDir: path.join(process.cwd(), 'public/uploads'),
      keepExtensions: true,
      multiples: false,
    });

    const { fields, files } = await new Promise<{ fields: any, files: any }>((resolve, reject) => {
      form.parse(event.node.req, (err, fields, files) => {
        if (err) {
          console.error('Formidable error:', err);
          return reject(err);
        }
        resolve({ fields, files });
      });
    });

    const title = fields?.title as string;
    const content = fields?.content as string;
    let imageUrl: string;

    if (!files?.image) {
      imageUrl = 'Images/empty-image.png';
    } else {
      const file = files.image[0] as formidable.File;
      imageUrl = `uploads/${path.basename(file.filepath)}`;
    }

    const post = new PostModel({
      title: title[0],
      content: content[0],
      imageUrl,
      // creator: 'some-user-id', //TODO Заменить на реальный ID пользователя
    });

    await post.save();

    return {
      status: 201,
      message: 'Post created successfully',
      post: post,
    };
  } catch (err: any) {
    console.error('Server error:', err); // Вывод ошибок
    const error: CustomError = new Error('Internal server error.');
    error.statusCode = 500;
    return error;
  }
});
