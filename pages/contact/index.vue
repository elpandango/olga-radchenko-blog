<template>
  <div class="contact-page">
    <SitePreloader v-if="!isLoaded"/>
    <div class="container">
      <h1 class="block-title contact-title mar-b-8 mar-auto">
        <span class="block text-left">Услуги и стоимость</span>
        <span class="block text-right">работы со мной</span>
      </h1>
      <div class="service-block">
        <div class="service-col">
          <div class="service-content">
            <div class="service-title">Разовая сессия</div>
            <div class="service-description">Эта разовая услуга идеально подходит для тех, кто хочет ознакомиться с моим
              подходом. Она предоставляет возможность получить поддержку в решении текущих трудностей и помощи в
              принятии дальнейших решений.
            </div>
          </div>
          <footer class="service-footer">
            <div class="service-duration">60 минут</div>
            <div class="service-duration">Способ проведения сессии: <b>онлайн</b></div>
            <div class="price">500 гривен</div>
          </footer>
        </div>
        <div class="service-col bg-gray">
          <div class="service-content">
            <div class="service-title">Долгосрочная терапия</div>
            <div class="service-description">Для тех, кто стремится к глубоким изменениям в своей жизни и хочет
              эффективно решать возникшие трудности.
            </div>
          </div>
          <footer class="service-footer">
            <div class="service-duration">60 минут</div>
            <div class="service-duration">Способ проведения сессии: <b>онлайн</b></div>
            <div class="price">450 гривен</div>
          </footer>
        </div>
      </div>
    </div>

    <ContactForm />

  </div>
</template>

<script
 setup
 lang="ts">

import {onMounted, ref} from "vue";
import SitePreloader from "~/components/Preloader/SitePreloader/SitePreloader.vue";

const route = useRoute();
const currentUrl = computed(() => process.client ? `${window.location.origin}${route.fullPath}` : '');

definePageMeta({
  layout: 'contacts-layout',
});

useSeoMeta({
  title: 'Контакты - Ольга Радченко',
  description: 'Свяжитесь с Ольгой Радченко для получения консультации и помощи. Узнайте, как обратиться к ней по вопросам психологической поддержки.',
  ogTitle: 'Контакты - Ольга Радченко',
  ogDescription: 'Контактная информация для получения психологической консультации у Ольги Радченко.',
  ogImage: '/images/olga-photo-1.webp',
  ogUrl: currentUrl,
  twitterTitle: 'Контакты - Ольга Радченко',
  twitterDescription: 'Свяжитесь с Ольгой Радченко для получения консультации и помощи.',
  twitterImage: '/images/olga-photo-1.webp',
  twitterCard: 'summary'
});

const isLoaded = ref(false);

onMounted(async () => {
  //SVG preloader animation
  setTimeout(() => {
    isLoaded.value = true;
  }, 1300);
});

</script>

<style lang="scss" src="./styles.scss"></style>