<template>
  <header class="site-header">
    <div class="container">
      <div class="text-logo">
        Olga Radchenko
      </div>

      <nav class="nav-links" :class="{ 'active': isMenuOpen }">
        <NuxtLink to="/">Главная</NuxtLink>
        <NuxtLink to="/blog">Все статьи</NuxtLink>
        <NuxtLink to="/contact">Контакты</NuxtLink>
      </nav>

      <div class="burger" @click="toggleMenu">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<style lang="scss" src="./styles.scss">
</style>
