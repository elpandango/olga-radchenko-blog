<template>
  <div class="add-edit-post py-6">
    <h1 class="text-3xl mb-4">Edit Post</h1>
    <template v-if="isLoaded">
      <AddEditPost @save-post="handleSaveClicked"/>
    </template>
    <template v-else>
      <Preloader height="calc(100vh - 400px)"/>
    </template>
  </div>
</template>

<script
 setup
 lang="ts">
import {reactive, ref} from "vue";
import AddEditPost from "~/components/posts/AddEditPost/AddEditPost.vue";
import repositoryFactory from "~/repositories/repositoryFactory";
import Preloader from "~/components/Preloader/index.vue";
import {useStorePosts} from "~/stores/storePosts";

definePageMeta({
  layout: 'admin',
  title: 'Edit post page',
  description: 'This is an edit post page',
});

const router = useRouter();
const route = useRoute();

interface PostData {
  title: string;
  content: string;
  image: File | null;
}

const isLoaded = ref(false);
const postId = route.params.id[0];

onMounted(async () => {
  try {
    const data = await postRepository.getPost(postId);
    if (data) {
      isLoaded.value = true;
      const storePosts = useStorePosts();
      storePosts.populateCurrentPost(data.post);
    }

  } catch (err) {
    console.log(err);
  }
});

const postRepository = repositoryFactory.get('Post');

const handleSaveClicked = async (data: PostData) => {
  const formData = new FormData();
  formData.append('title', data.title);
  formData.append('content', data.content);
  formData.append('image', data.image);

  try {
    await postRepository.editPost(postId, formData);
    await router.push('/admin/all-posts');
  } catch (err) {
    console.log(err);
  }
};
</script>
