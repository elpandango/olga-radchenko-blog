<template>
  <div class="post-details">
    <h4 class="post-title">{{ createdAt }}</h4>
    <h5 class="post-title-text">{{ post.title }}</h5>
    <p
     class="post-content"
     v-html="post.content"></p>
    <slot></slot>
  </div>
</template>

<script setup>
import {useFormatDate} from "~/use/useFormatDate.js";

const props = defineProps({
  post: {
    type: Object,
    required: true
  }
});

const createdAt = useFormatDate(props.post.createdAt);
</script>

<style src="./styles.scss"></style>
