<template>
  <header class="site-header">
    <div class="container">
      <div class="text-logo">
        Olga Radchenko
      </div>

      <nav
       class="nav-links"
       :class="{ 'active': isMenuOpen }">
        <NuxtLink
         to="/"
         @click="closeMenu">Главная
        </NuxtLink>
        <NuxtLink
         to="/blog"
         @click="closeMenu">Все статьи
        </NuxtLink>
        <NuxtLink
         to="/contact"
         @click="closeMenu">Контакты
        </NuxtLink>
      </nav>

      <div
       class="burger"
       @click="toggleMenu">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>
  </header>
</template>

<script setup>
import {ref} from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
}

const closeMenu = () => {
  isMenuOpen.value = false;
}
</script>

<style
 lang="scss"
 src="./styles.scss">
</style>
