<template>
  <main>
    <slot></slot>
  </main>
</template>

<script setup lang="ts">
import '~/assets/scss/global.scss';
</script>

<style
 scoped
 lang="scss">
.sidebar-link {
  line-height: 32px;
  padding: 0 8px;
  font-size: 18px;
  text-decoration: none;
  display: block;
  border-radius: 4px;
  transition: all .3s;

  &:hover {
    background-color: var(--neutral-500);
  }

  &.active {
    font-weight: bold;
    background-color: var(--neutral-600);
  }
}

.accordion-item {
  line-height: 32px;
  display: block;
  text-decoration: none;
  border-radius: 4px;
  transition: all .3s;
  padding: 0 8px;

  &:hover {
    background-color:var(--neutral-500);
  }

  &.active {
    font-weight: bold;
    background-color: var(--neutral-600);
  }
}

.link-text {
  font-size: 18px;
  padding: 0 8px;
}
</style>
