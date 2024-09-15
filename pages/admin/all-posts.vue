<template>
  <div class="posts">
    <template v-if="isLoaded">
      <BlogPost
       v-for="post in filteredPosts"
       :key="post.id"
       :post="post"
       @post-deleted="postDeletedHandler"/>
    </template>
    <template v-else-if="isLoaded && !filteredPosts?.length">
      <div class="">
        No components here yet...
      </div>
    </template>
    <template v-else>
      <Preloader height="calc(100vh - 400px)"/>
    </template>
  </div>
</template>

<script setup>
import {computed, onMounted, ref} from "vue";
import Preloader from "~/components/admin/Preloader/index.vue";
import repositoryFactory from "~/repositories/repositoryFactory";
import BlogPost from "~/components/admin/Blocks/BlogPost.vue";
// import {getUserFromToken} from "~/server/utils/auth";

definePageMeta({
  layout: 'admin',
  middleware: [
    function (to, from) {
      // Custom inline middleware
    },
    // 'auth',
  ],
});

const posts = ref([]);
const user = ref({});
const searchInputValue = ref('');
const isLoaded = ref(false);
// const componentTypes = ref([]);
// const selectedOption = ref('accordion');

isLoaded.value = false;

const fetchUser = async () => {
  try {
    const userEmail = localStorage.getItem('userEmail');
    const token = localStorage.getItem('token');

    console.log(userEmail);
    console.log(token);

    // getUserFromToken(token);

    const data = await repositoryFactory.get('User').getUser(userEmail);

    console.log('user data: ', data);

    user.value = data?.user || {};
  } catch (err) {
    console.log(err);
  }
};

const fetchPosts = async () => {
  try {
    const data = await repositoryFactory.get('Post').get();
    posts.value = data?.posts || [];
    isLoaded.value = true;

    console.log('posts: ', posts.value);
  } catch (err) {
    console.log(err);
  }
};

onMounted(async() => {
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

const postDeletedHandler = async () => {
  await fetchPosts();
};
</script>


<style lang="scss">
.posts {
  width: 100%;
  max-width: 860px;
  margin: 0 auto;
  padding-top: 16px;
}
</style>