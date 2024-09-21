<template>
  <div class="add-edit-post py-6">
    <h1 class="text-3xl mb-4">Add New Post</h1>
    <AddEditPost @save-post="handleSaveClicked"/>
  </div>
</template>

<script setup lang="ts">
import AddEditPost from "~/components/Posts/AddEditPost/AddEditPost.vue";
import repositoryFactory from "~/repositories/repositoryFactory";

definePageMeta({
  layout: 'admin'
});

const router = useRouter();

interface PostData {
  title: string;
  content: string;
  image: File | null;
}

const postRepository = repositoryFactory.get('Post');

const handleSaveClicked = async (data: PostData) => {
  const formData = new FormData();
  formData.append('title', data.title);
  formData.append('content', data.content);
  formData.append('image', data.image);

  try {
    const {data} = await postRepository.add(formData);
    if (!data?.status) {
      await router.push('/admin/all-posts');
    }

  } catch (err: any) {
    console.log(err);
  }
};
</script>
