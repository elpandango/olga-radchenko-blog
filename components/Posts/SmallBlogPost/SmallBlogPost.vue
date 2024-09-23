<template>
  <div class="blog-post-wrap">
    <div class="blog-post">
      <div class="image-container">
        <AppImage
         :src="`/${post.imageUrl}`"
         cssClass="image"
         alt="Post image"
         height="250"
        />
        <router-link :to="`/post/${post._id}`">
          <div class="overlay"></div>
        </router-link>
      </div>
      <div class="content">
        <div class="header">
          <h4 class="date">{{ createdAt }}</h4>
        </div>

        <h5 class="title">
          <router-link :to="`/post/${post._id}`">
            {{ post.title }}
          </router-link>
        </h5>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useFormatDate} from "~/use/useFormatDate.js";
import AppImage from "~/components/Images/AppImage.vue";

const props = defineProps({
  post: {
    type: Object,
    required: true
  }
});

const createdAt = useFormatDate(props.post.createdAt);
</script>

<style
 lang="scss"
 src="./styles.scss"
 scoped>

</style>
