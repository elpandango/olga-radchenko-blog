<template>
  <div class="add-edit-post py-6">
    <h1 class="text-3xl mb-4">Edit Post</h1>
    <template v-if="isLoaded">
      <AddEditPost
       mode="edit"
       @save-post="handleSaveClicked"/>
    </template>
    <template v-else>
      <AdminPreloader height="calc(100vh - 400px)"/>
    </template>
  </div>
</template>

<script
 setup
 lang="ts">
import {reactive, ref} from "vue";
import AddEditPost from "~/components/Posts/AddEditPost/AddEditPost.vue";
import repositoryFactory from "~/repositories/repositoryFactory";
import AdminPreloader from "~/components/Preloader/AdminPreloader/AdminPreloader.vue";
import {useStorePosts} from "~/stores/storePosts";

useSeoMeta({
  title: "Редактирование поста блога | Admin",
  description: "Измените существующий пост блога. Обновите текст, заголовок и настройки SEO.",
  keywords: "редактирование блога, правка поста, админка блога"
});

definePageMeta({
  layout: 'admin',
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
const postRepository = repositoryFactory.get('Post');

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
