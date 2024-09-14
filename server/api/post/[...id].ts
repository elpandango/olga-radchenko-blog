import {getSinglePost} from "~/server/controllers/postController/getSinglePost";
import {updateSinglePost} from "~/server/controllers/postController/updateSinglePost";
import {deleteSinglePost} from "~/server/controllers/postController/deleteSinglePost";

export default defineEventHandler(async (event) => {
    const postId: string | undefined = event?.context?.params?.id || '';

    if (event._method === 'GET') {
        return await getSinglePost(postId);
    }

    if (event._method === 'PUT') {
        const body = await readBody(event);
        return await updateSinglePost(postId, body);
    }

    if (event._method === 'DELETE') {
        return await deleteSinglePost(postId);
    }
});