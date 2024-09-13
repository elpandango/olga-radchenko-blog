import {getAllPosts} from "~/server/controllers/postController/getAllPosts";

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const currentPage: number = +(event?.context?.params?.page) || 1;
    const perPage: number = 10;
    return await getAllPosts(query.query, currentPage, perPage);
});