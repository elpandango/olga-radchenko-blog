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

    <section class="quotations page-section">
      <div class="container">
        <h2 class="block-title">Умные цитаты</h2>
      </div>
    </section>

    <section class="faq page-section">
      <div class="container">
        <h2 class="block-title">Ответы на частые вопросы</h2>
        <div class="faq-block">
          <Accordion
           height="32px">
            <template v-slot:header>
              <div class="link-text">Важные детали работы со мной</div>
            </template>
            <template v-slot:accordion-body>
              <div class="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam architecto aspernatur atque,
                blanditiis debitis deleniti deserunt ducimus earum est exercitationem facere harum incidunt, ipsam
                itaque labore nobis placeat qui quo recusandae reiciendis ullam ut? Blanditiis delectus in odit quos
                reprehenderit sunt, tempore! Atque distinctio eius eveniet, nobis nostrum numquam quae quas sint!
                Doloribus, id quas! A ab alias animi assumenda at aut autem, consectetur cum earum eos eveniet excepturi
                explicabo facere fugiat, illo ipsam minus neque nesciunt nulla placeat porro possimus quia quis sunt
                voluptate. Accusamus alias dolore facere, illum in molestias optio perspiciatis possimus quo, quos vel
                voluptate.
              </div>
            </template>
          </Accordion>

          <Accordion
           height="32px">
            <template v-slot:header>
              <div class="link-text">Сколько сессий мне понадобится?</div>
            </template>
            <template v-slot:accordion-body>
              <div class="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam architecto aspernatur atque,
                blanditiis debitis deleniti deserunt ducimus earum est exercitationem facere harum incidunt, ipsam
                itaque labore nobis placeat qui quo recusandae reiciendis ullam ut? Blanditiis delectus in odit quos
                reprehenderit sunt, tempore! Atque distinctio eius eveniet, nobis nostrum numquam quae quas sint!
                Doloribus, id quas! A ab alias animi assumenda at aut autem, consectetur cum earum eos eveniet excepturi
                explicabo facere fugiat, illo ipsam minus neque nesciunt nulla placeat porro possimus quia quis sunt
                voluptate. Accusamus alias dolore facere, illum in molestias optio perspiciatis possimus quo, quos vel
                voluptate.
              </div>
            </template>
          </Accordion>

          <Accordion
           height="32px">
            <template v-slot:header>
              <div class="link-text">Я не могу сформулировать свой запрос</div>
            </template>
            <template v-slot:accordion-body>
              <div class="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam architecto aspernatur atque,
                blanditiis debitis deleniti deserunt ducimus earum est exercitationem facere harum incidunt, ipsam
                itaque labore nobis placeat qui quo recusandae reiciendis ullam ut? Blanditiis delectus in odit quos
                reprehenderit sunt, tempore! Atque distinctio eius eveniet, nobis nostrum numquam quae quas sint!
                Doloribus, id quas! A ab alias animi assumenda at aut autem, consectetur cum earum eos eveniet excepturi
                explicabo facere fugiat, illo ipsam minus neque nesciunt nulla placeat porro possimus quia quis sunt
                voluptate. Accusamus alias dolore facere, illum in molestias optio perspiciatis possimus quo, quos vel
                voluptate.
              </div>
            </template>
          </Accordion>

          <Accordion
           height="32px">
            <template v-slot:header>
              <div class="link-text">Как проходит первая консультация?</div>
            </template>
            <template v-slot:accordion-body>
              <div class="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam architecto aspernatur atque,
                blanditiis debitis deleniti deserunt ducimus earum est exercitationem facere harum incidunt, ipsam
                itaque labore nobis placeat qui quo recusandae reiciendis ullam ut? Blanditiis delectus in odit quos
                reprehenderit sunt, tempore! Atque distinctio eius eveniet, nobis nostrum numquam quae quas sint!
                Doloribus, id quas! A ab alias animi assumenda at aut autem, consectetur cum earum eos eveniet excepturi
                explicabo facere fugiat, illo ipsam minus neque nesciunt nulla placeat porro possimus quia quis sunt
                voluptate. Accusamus alias dolore facere, illum in molestias optio perspiciatis possimus quo, quos vel
                voluptate.
              </div>
            </template>
          </Accordion>

          <Accordion
           height="32px">
            <template v-slot:header>
              <div class="link-text">С какими запросами я не работаю?</div>
            </template>
            <template v-slot:accordion-body>
              <div class="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam architecto aspernatur atque,
                blanditiis debitis deleniti deserunt ducimus earum est exercitationem facere harum incidunt, ipsam
                itaque labore nobis placeat qui quo recusandae reiciendis ullam ut? Blanditiis delectus in odit quos
                reprehenderit sunt, tempore! Atque distinctio eius eveniet, nobis nostrum numquam quae quas sint!
                Doloribus, id quas! A ab alias animi assumenda at aut autem, consectetur cum earum eos eveniet excepturi
                explicabo facere fugiat, illo ipsam minus neque nesciunt nulla placeat porro possimus quia quis sunt
                voluptate. Accusamus alias dolore facere, illum in molestias optio perspiciatis possimus quo, quos vel
                voluptate.
              </div>
            </template>
          </Accordion>
        </div>
      </div>
    </section>

  </div>
</template>

<script
 setup
 lang="ts">
import IntroBlock from "~/components/PageComponents/IndexPage/IntroBlock-2/IntroBlock.vue";
import AboutBlock from "~/components/PageComponents/IndexPage/AboutBlock/AboutBlock.vue";
import FeatureBlock from "~/components/PageComponents/IndexPage/FeatureBlock/FeatureBlock.vue";
import SitePreloader from "~/components/Preloader/SitePreloader/SitePreloader.vue";
import repositoryFactory from "~/repositories/repositoryFactory";
import {onMounted, ref} from "vue";
import SmallBlogPost from "~/components/Posts/SmallBlogPost/SmallBlogPost.vue";

useSeoMeta({
  title: 'Main page',
  description: 'This is a main page',
  ogTitle: 'Main page',
  ogDescription: '[og:description]',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: 'Main page',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary'
});

definePageMeta({
  layout: 'site-default-layout',
});

// useHead({
//   htmlAttrs: {
//     lang: 'en'
//   },
//   link: [
//     {
//       rel: 'icon',
//       type: 'image/png',
//       href: '/favicon.png'
//     }
//   ]
// });
//

const postRepository = repositoryFactory.get('Post');
const isLoaded = ref(false);
const posts = ref([]);
const postsResponse = ref({});

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

</script>

<style
 lang="scss"
 src="./styles.scss"></style>