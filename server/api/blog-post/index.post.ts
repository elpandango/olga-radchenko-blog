import {CustomError} from "~/server/interfaces/error";
import {PostModel} from "~/server/models/postModel";

export default defineEventHandler(async (event) => {
    try {
        // const errors: any = validationResult(req);
        // if (errors?.errors.length > 0) {
        //     generateError({statusCode: 422, message: 'Validation failed, entered data is incorrect.'});
        // }
        let imageUrl;

        if (!(<any>req).file) {
            imageUrl = 'images/empty-image.png';
        } else {
            const tempUrl = (<any>req).file.path;
            imageUrl = tempUrl.replace('dist/', '');
        }

        const body = await readBody(event);
        const title = body?.title;
        const post = new PostModel({
            title,
            content,
            imageUrl,
            creator: (<any>req).userId.toString(),
        });

        await post.save();

        return {
            status: 201,
            message: 'Post created successfully',
            post: {...(<any>post)._doc},
        }
    } catch (err: any) {
        console.log('error: ', err);
        const error: CustomError = new Error('Internal server error.');
        error.statusCode = 500;
        return error;
    }
});