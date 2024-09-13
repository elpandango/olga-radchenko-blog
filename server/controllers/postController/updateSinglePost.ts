import {PostModel} from "~/server/models/postModel";
import {CustomError} from "~/server/interfaces/error";

interface PostBody {
    title?: string;
    content?: string;
    imageUrl?: string;
}

export const updateSinglePost = async (postId: string, body: PostBody) => {
    const title = body?.title || '';
    const content = body?.content || '';
    const imageUrl = body?.imageUrl || '';

    try {
        const post = await PostModel.findById(postId);

        post.title = title;
        post.content = content;
        post.imageUrl = imageUrl;
        const result = await post!.save();

        return {
            status: 200,
            message: 'Post updated.',
            post: result
        };
    } catch (err: any) {
        console.log('error: ', err);
        const error: CustomError = new Error('Internal server error.');
        error.statusCode = 500;
        return error;
    }
};