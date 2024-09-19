<template>
  <article class="index-page">test
<!--    <section class="main">-->
<!--      <div class="container columns">-->
<!--        <div class="column text">-->
<!--          <div class="author-block">-->
<!--            <div class="author-name">Ольга Радченко</div>-->
<!--            <div class="section-title mar-b-8">Психолог / Блоггер</div>-->

<!--            <div class="author-subtitle mar-b-6">Консультирую по следующим вопросам:</div>-->
<!--            <ul class="service-list">-->
<!--              <li>Неуверенность в себе, комплексы, низкая самооценка, недовольство собой, обесценивание своих-->
<!--                трудов.-->
<!--              </li>-->
<!--              <li>Страх отказать и говорить «нет», неумение отстаивать личные границы.</li>-->
<!--              <li>Неумение получать удовольствие от жизни.</li>-->
<!--              <li>Непонимание себя, своих целей, призвания и смысла жизни.</li>-->
<!--              <li>Чувство одиночества.</li>-->
<!--              <li>Жизненные кризисы: возрастные, семейные.</li>-->
<!--              <li>Отсутствие психологической поддержки в трудных ситуациях.</li>-->
<!--              <li>Тяжелые эмоции: гнев, раздражение, агрессия, ненависть, зависть, ревность, страх, чувство вины.</li>-->
<!--              <li>Сильная обида на близкого человека.</li>-->
<!--              <li>Тревога, фобии, панические атаки.</li>-->
<!--              <li>Эмоциональное выгорание, усталость от жизни.</li>-->
<!--              <li>Трудные отношения и непонимание в браке, ссоры с партнером, расставание, неразделенная любовь.</li>-->
<!--              <li>Напряженные отношения с родителями, с детьми.</li>-->
<!--              <li>Межличностные конфликты и их последствия.</li>-->
<!--              <li>Психологические травмы: стресс, болезнь, потеря близкого человека, насилие.</li>-->
<!--              <li>Психосоматика.</li>-->
<!--            </ul>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="column image">-->
<!--          <img-->
<!--           src="https://i0.wp.com/olgaradchenko.com/wp-content/uploads/2020/12/cropped-IMG_4500-1-scaled-1-e1607710221703.jpg?fit=700%2C895&ssl=1"-->
<!--           height="700"-->
<!--           alt="Olga Radchenko photo">-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->
<!--    <section class="posts">-->
<!--      <div class="container">-->
<!--        <div class="section-title mb-32">Latest Posts</div>-->
<!--        <div class="billet-block">-->
<!--          <Billet-->
<!--           v-for="post in blogPosts"-->
<!--           :key="post._id"-->
<!--           :title="post.title"-->
<!--           :content="post.content"-->
<!--           :image-url="post.imageUrl"-->
<!--           :created-at="post.createdAt"/>-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->
  </article>
</template>

<script
 setup
 lang="ts">
// import Billet from "~/pages/components/Billet/Billet.vue";
//
// useSeoMeta({
//   title: 'Main page',
//   description: 'This is a main page',
//   ogTitle: 'Main page',
//   ogDescription: '[og:description]',
//   ogImage: '[og:image]',
//   ogUrl: '[og:url]',
//   twitterTitle: 'Main page',
//   twitterDescription: '[twitter:description]',
//   twitterImage: '[twitter:image]',
//   twitterCard: 'summary'
// })
//
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
// let blogPosts = ref([]);
// const baseURL: string = `${import.meta.env.VITE_APP_API_URL}`;
// const {data, pending, error, refresh} = await useFetch(`${baseURL}/api/get-posts`, {
//   query: {post: 1}
// });
//
// blogPosts.value = [...data?.value?.posts];
</script>

<style
 lang="scss"
 src="./styles.scss"></style>