<template>
  <div class="posts">
    <template v-if="arePostsLoaded">
      <BlogPost
       v-for="post in filteredPosts"
       :key="post.id"
       :post="post"
       @delete-clicked="handlePostDelete"/>

      <Pagination
       v-if="postsResponse.lastPage > 1"
       @page-changed="handlePageChange"
       :data="postsResponse"/>
    </template>
    <template v-else-if="arePostsLoaded && !filteredPosts?.length">
      <div class="">
        No posts here yet...
      </div>
    </template>
    <template v-else>
      <AdminPreloader height="calc(100vh - 400px)"/>
    </template>
    <template v-if="isModalOpen">
      <ConfirmDeleteModal
       :isOpen="isModalOpen"
       @confirm="handleDeleteConfirmed"
       @update:isOpen="isModalOpen = $event"
      />
    </template>
  </div>
</template>

<script
 setup
 lang="ts">
import {computed, onMounted, ref} from "vue";
import AdminPreloader from "~/components/Preloader/AdminPreloader/AdminPreloader.vue";
import repositoryFactory from "~/repositories/repositoryFactory";
import BlogPost from "~/components/Posts/BlogPost/BlogPost.vue";
import ConfirmDeleteModal from "~/components/Modals/ConfirmDeleteModal.vue";

useSeoMeta({
  title: "Все посты блога | Admin",
  description: "Просмотрите все посты блога. Упорядочивайте, редактируйте или удаляйте публикации.",
  keywords: "все посты блога, управление блогом, админка блога"
});

definePageMeta({
  layout: 'admin',
});

const isModalOpen = ref(false);
const postIdToDelete = ref('');
const posts = ref([]);
const postsResponse = ref({});
const user = ref({});
const searchInputValue = ref('');
const arePostsLoaded = ref(false);

const postRepository = repositoryFactory.get('Post');
const userRepository = repositoryFactory.get('User');

const fetchUser = async () => {
  try {
    const userEmail = localStorage.getItem('userEmail');
    const data = await userRepository.getUser(userEmail);
    user.value = data?.user || {};
  } catch (err) {
    console.log(err);
  }
};

const fetchPosts = async (page) => {
  try {
    arePostsLoaded.value = false;
    const data = await postRepository.get(page);
    postsResponse.value = {...data};
    posts.value = data?.posts || [];
    arePostsLoaded.value = true;

  } catch (err) {
    console.log(err);
  }
};

onMounted(async () => {
  await Promise.all([fetchUser(), fetchPosts()]);
});

const filteredPosts = computed(() => {
  if (posts.value.length === 0) {
    return [];
  }
  if (searchInputValue.value.length === 0) {
    return posts.value;
  }
  return posts.value.filter(post => post?.content?.title?.toLowerCase()?.includes(searchInputValue.value.toLowerCase()));
});

const handlePostDelete = (id) => {
  isModalOpen.value = true;
  postIdToDelete.value = id;
};

const handleDeleteConfirmed = async () => {
  await postRepository.delete(postIdToDelete.value);
  await fetchPosts();
  isModalOpen.value = false;
};

const handlePageChange = async (page: number) => {
  await fetchPosts(`page=${page}`);
}
</script>


<style lang="scss">
.posts {
  width: 100%;
  max-width: 860px;
  margin: 0 auto;
  padding-top: 16px;
}
</style>