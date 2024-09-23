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
const currentUrl = process.client ? `${window.location.origin}${route.fullPath}` : '';

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
  setTimeout(() => {
    isLoaded.value = true;
  }, 1300);
});

</script>

<style lang="scss">
.contact-page {
  padding-top: 105px;

  .contact-title {
    max-width: 750px;
    width: 100%;

    @media only screen and (max-width: 767px) {
      max-width: 100%;
    }

    .block.text-right {
      text-align: left;
    }
  }
}

.service-block {
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 767px) {
    flex-wrap: wrap;
  }
}

.service-col {
  width: calc(50% - 10px);
  min-height: 350px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  padding: 26px;
  border: 1px solid var(--fill-color);
  border-radius: 12px;

  @media only screen and (max-width: 767px) {
    width: 100%;
    margin-bottom: 24px;
  }

  .service-title {
    font-size: 28px;
    margin-bottom: 16px;
  }

  .service-description {
    text-align: justify;
    font-size: 20px;
  }

  .service-duration {
    margin-bottom: 12px;
  }
  .price {
    font-size: 22px;
  }
}
</style>