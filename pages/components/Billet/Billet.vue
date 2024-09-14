<template>
  <div class="billet-wrap">
    <div class="billet">
      <figure class="billet-image">
        <ImagesImageWithPlaceholder
         :src="imageUrl"
         cssClass="image"
         alt="Post image"
         height="248"
         />

      </figure>
      <div class="billet-text-block">
        <div class="billet-content">
          <div class="billet-title">{{ props.title }}</div>
          <div
           class="billet-text"
           v-html="props.content"></div>
        </div>
        <div class="billet-footer">
          <div class="date">{{ date }}</div>
          <div class="read-more">Read More</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script
 setup
 lang="ts">

import {useFormatDate} from "~/use/useFormatDate";

const props = defineProps({
  content: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  createdAt: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  }
});

const date = useFormatDate(props.createdAt);

</script>

<style lang="scss" src="./style.scss">
</style>
