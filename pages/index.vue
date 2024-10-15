<template>
  <div class="index-page">
    <SitePreloader v-if="!isLoaded"/>
    <IntroBlock/>
    <AboutBlock/>
    <FeatureBlock/>

    <section class="site-posts">
      <div class="container">
        <h2 class="block-title mar-b-8">Последние статьи</h2>
        <div class="blog-posts-grid">
          <template v-if="isLoaded">
            <SmallBlogPost
             v-for="post in posts"
             :key="post.id"
             :post="post"/>
          </template>
          <template v-else-if="isLoaded && !postsResponse?.length">
            <div class="">
              No posts here yet...
            </div>
          </template>
        </div>
        <NuxtLink
         to="/blog"
         class="link-button">Все статьи
        </NuxtLink>
      </div>
    </section>

    <PhraseBlock :phrase="phraseData" />

    <FaqBlock/>

  </div>
</template>

<script
 setup
 lang="ts">
import {onMounted, ref} from "vue";
import repositoryFactory from "~/repositories/repositoryFactory";
import IntroBlock from "~/components/PageComponents/IntroBlock/IntroBlock.vue";
import AboutBlock from "~/components/PageComponents/AboutBlock/AboutBlock.vue";
import FeatureBlock from "~/components/PageComponents/FeatureBlock/FeatureBlock.vue";
import SitePreloader from "~/components/Preloader/SitePreloader/SitePreloader.vue";
import SmallBlogPost from "~/components/Posts/SmallBlogPost/SmallBlogPost.vue";
import FaqBlock from "~/components/PageComponents/FaqBlock/FaqBlock.vue";
import PhraseBlock from "~/components/PageComponents/PhraseBlock/PhraseBlock.vue";

const route = useRoute();
const currentUrl = computed(() => process.client ? `${window.location.origin}${route.fullPath}` : '');

useSeoMeta({
  title: 'Главная - Ольга Радченко',
  description: 'Ольга Радченко — психолог и консультант. Узнайте больше о её услугах и подходе к работе, чтобы найти поддержку в трудные моменты жизни.',
  ogTitle: 'Главная - Ольга Радченко',
  ogDescription: 'Ольга Радченко — профессиональный психолог, который помогает людям справиться с жизненными трудностями. Узнайте больше о её методах и услугах.',
  ogImage: '/images/olga-photo-1.webp',
  ogUrl: currentUrl,
  twitterTitle: 'Главная - Ольга Радченко',
  twitterDescription: 'Ольга Радченко — психолог, который помогает в решении жизненных трудностей. Откройте для себя её подход к психологической поддержке.',
  twitterImage: '/images/olga-photo-1.webp',
  twitterCard: 'summary'
});

definePageMeta({
  layout: 'site-default-layout',
});

useHead({
  htmlAttrs: {
    lang: 'ru'
  },
});


const postRepository = repositoryFactory.get('Post');
const phraseRepository = repositoryFactory.get('Phrase');
const isLoaded = ref(false);
const posts = ref([]);
const phraseData = ref({});
const postsResponse = ref({});

const fetchPosts = async (page) => {
  try {
    isLoaded.value = false;
    const data = await postRepository.get(page);
    postsResponse.value = {...data};
    posts.value = data?.posts || [];

    //SVG preloader animation
    setTimeout(() => {
      isLoaded.value = true;
    }, 1300);

  } catch (err) {
    console.log(err);
  }
};

const fetchPhrase = async () => {
  try {
    const {phrase} = await phraseRepository.get();
    phraseData.value = {...phrase};
  } catch (err) {
    console.log(err);
  }
};

onMounted(async () => {
  await fetchPosts();
  await fetchPhrase();
});

</script>

<style
 lang="scss"
 src="./styles.scss"></style>