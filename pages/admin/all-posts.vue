<template>
  <div class="posts">
    <template v-if="isLoaded">
      <BlogPost
       v-for="post in filteredPosts"
       :key="post.id"
       :post="post"
       @delete-clicked="handlePostDelete"/>

      <Pagination v-if="postsResponse.lastPage > 1"
                  @page-changed="pageChangeHandler"
                  :data="postsResponse"/>
    </template>
    <template v-else-if="isLoaded && !filteredPosts?.length">
      <div class="">
        No posts here yet...
      </div>
    </template>
    <template v-else>
      <AdminPreloader height="calc(100vh - 400px)"/>
    </template>
    <template v-if="isModalOpen">
      <Teleport to="body">
        <Modal v-model="isModalOpen">
          <template v-slot:header>
            Deleting the Post
          </template>
          <template v-slot:body>
            <p>Are you sure you want to delete this post?</p>
          </template>
          <template v-slot:footer>
            <button
             class="px-4 py-2 bg-stone-500 hover:bg-stone-700 transition-bg-color duration-200 text-white rounded"
             @click="isModalOpen = false">
              Cancel
            </button>
            <button
             class="px-4 py-2 bg-red-500 hover:bg-red-700 transition-bg-color duration-200 text-white rounded focus:outline-none"
             @click="handleDeleteConfirmed">
              Delete
            </button>
          </template>
        </Modal>
      </Teleport>
    </template>
  </div>
</template>

<script setup lang="ts">
import {computed, onMounted, ref} from "vue";
import AdminPreloader from "~/components/Preloader/AdminPreloader/AdminPreloader.vue";
import repositoryFactory from "~/repositories/repositoryFactory";
import BlogPost from "~/components/Posts/BlogPost/BlogPost.vue";
import Modal from "~/components/Modals/Modal.vue";

definePageMeta({
  layout: 'admin',
  middleware: [
    function (to, from) {
      // Custom inline middleware
    },
    // 'auth',
  ],
});

const isModalOpen = ref(false);
const postIdToDelete = ref('');
const posts = ref([]);
const postsResponse = ref({});
const user = ref({});
const searchInputValue = ref('');
const isLoaded = ref(false);

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
    isLoaded.value = false;
    const data = await postRepository.get(page);
    postsResponse.value = {...data};
    posts.value = data?.posts || [];
    isLoaded.value = true;

    console.log('data?.Posts: ', data?.posts);
  } catch (err) {
    console.log(err);
  }
};

onMounted(async () => {
  await fetchUser();
  await fetchPosts();
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

const pageChangeHandler = async (page: number) => {
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