<template>
  <div class="posts">
    <template v-if="isLoaded">
      <BlogPost
       mode="readonly"
       v-for="post in filteredPosts"
       :key="post.id"
       :post="post"/>

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
      <SitePreloader v-if="!isLoaded" />
    </template>
  </div>
</template>

<script
 setup
 lang="ts">

import BlogPost from "~/components/Posts/BlogPost/BlogPost.vue";
import {computed, onMounted, ref} from "vue";
import repositoryFactory from "~/repositories/repositoryFactory";
import SitePreloader from "~/components/Preloader/SitePreloader/SitePreloader.vue";

definePageMeta({
  layout: 'site-default-layout',
  title: 'All posts page',
  description: 'This is an all posts page',
});

const posts = ref([]);
const postsResponse = ref({});
const user = ref({});
const searchInputValue = ref('');
const isLoaded = ref(false);

const postRepository = repositoryFactory.get('Post');
const fetchPosts = async (page) => {
  try {
    isLoaded.value = false;
    const data = await postRepository.get(page);
    postsResponse.value = {...data};
    posts.value = data?.posts || [];
    setTimeout(() => {
      isLoaded.value = true;
    }, 1300);
  } catch (err) {
    console.log(err);
  }
};

onMounted(async () => {
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

const pageChangeHandler = async (page: number) => {
  await fetchPosts(`page=${page}`);
}

</script>

<style lang="scss">
.posts {
  width: 100%;
  max-width: 860px;
  margin: 0 auto;
  padding-top: 105px;
}
</style>