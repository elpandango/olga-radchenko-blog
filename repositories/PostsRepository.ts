export default {
    async get(query: string) {
        if (!query) {
            return $fetch('/api/get-posts');
        }
        return $fetch(`/api/get-posts?query=${query}`);
    },
    async getPost(id: string) {
        return await $fetch(`/api/post/${id}`);
    },
    async add(payload: FormData) {
        return await $fetch('/api/post', {
            method: 'POST',
            body: payload,
        });
    },
    async update(id: string, payload: any,) {
        return await $fetch(`/api/post/${id}`, {
            method: 'put',
            body: {
                title: payload.title,
                content: payload.content,
                image: payload.image,
            }
        });
    },
    async delete(id: string) {
        return await $fetch(`/api/post/${id}`, {
            method: 'delete'
        });
    },
};
