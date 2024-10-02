<template>
  <div class="post-image">
    <AppImage
     :src="`/${post.imageUrl}`"
     cssClass="image"
     alt="Post image"
     height="650"
    />
    <router-link :to="postUrl">
      <div class="post-overlay"></div>
    </router-link>
  </div>
</template>

<script setup>
import AppImage from "~/components/Images/AppImage.vue";

const props = defineProps({
  post: {
    type: Object,
    required: true
  },
  postUrl: {
    type: String,
    required: true
  }
});
</script>

<style src="./styles.scss"></style>
