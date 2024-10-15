<template>
  <div class="container">
    <div class="posts">
      <template v-if="arePostsLoaded">
        <BlogPost
         mode="readonly"
         v-for="post in posts"
         :key="post.id"
         :post="post"/>

        <Pagination
         v-if="postsResponse.lastPage > 1"
         @page-changed="pageChangeHandler"
         :data="postsResponse"/>
      </template>
      <template v-else-if="arePostsLoaded && !posts?.length">
        <div class="">
          No posts here yet...
        </div>
      </template>
      <template v-else>
        <SitePreloader v-if="!arePostsLoaded"/>
      </template>
    </div>
  </div>
</template>

<script
 setup
 lang="ts">

import BlogPost from "~/components/Posts/BlogPost/BlogPost.vue";
import {onMounted, ref} from "vue";
import repositoryFactory from "~/repositories/repositoryFactory";
import SitePreloader from "~/components/Preloader/SitePreloader/SitePreloader.vue";

const route = useRoute();
const currentUrl = computed(() => process.client ? `${window.location.origin}${route.fullPath}` : '');

useSeoMeta({
  title: 'Блог - Ольга Радченко',
  description: 'Читайте статьи Ольги Радченко о психологии, личностном росте и способах справляться с жизненными трудностями.',
  ogTitle: 'Блог - Ольга Радченко',
  ogDescription: 'Узнайте больше о психологии и личностном росте в статьях Ольги Радченко. Советы и рекомендации для улучшения качества жизни.',
  ogImage: '/images/olga-photo-1.webp',
  ogUrl: currentUrl,
  twitterTitle: 'Блог - Ольга Радченко',
  twitterDescription: 'Читайте статьи Ольги Радченко, чтобы узнать больше о психологии, личностном развитии и преодолении трудностей.',
  twitterImage: '/images/olga-photo-1.webp',
  twitterCard: 'summary'
});

definePageMeta({
  layout: 'site-default-layout',
});

const posts = ref([]);
const postsResponse = ref({});
const user = ref({});
const arePostsLoaded = ref(false);

const postRepository = repositoryFactory.get('Post');
const fetchPosts = async (page = 1) => {
  try {
    arePostsLoaded.value = false;
    const data = await postRepository.get(page);
    postsResponse.value = {...data};
    posts.value = data?.posts || [];

    //SVG preloader animation
    setTimeout(() => {
      arePostsLoaded.value = true;
    }, 1300);
  } catch (err) {
    console.log(err);
  }
};

onMounted(async () => {
  await fetchPosts();
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