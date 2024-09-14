<template>
  <div class="add-edit-post py-6">
    <h1 class="text-3xl mb-4">Add New Post</h1>

    <AddEditPost @save-post="savePostHandler"/>
  </div>
</template>

<script setup lang="ts">
import {reactive, ref} from "vue";
import AddEditPost from "~/components/posts/AddEditPost/AddEditPost.vue";
import repositoryFactory from "~/repositories/repositoryFactory";

definePageMeta({
  layout: 'admin'
});

const router = useRouter();

const changesCounter = ref(0);
let newComponent = reactive({});

const updateFormHandler = (data) => {
  newComponent = {...data};
  changesCounter.value++;
};

const savePostHandler = async (data: any) => {
  const formData = new FormData();
  formData.append('title', data.title);
  formData.append('content', data.content);
  formData.append('image', data.image);

  try {
    const {data} = await repositoryFactory.get('Post').add(formData);
    if (!data?.status) {
      await router.push('/admin/all-posts');
    }

  } catch (err: any) {
    console.log(err);
  }
};
</script>
