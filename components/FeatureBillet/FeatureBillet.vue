<template>
  <li class="feature-wrap">
    <div class="feature">
      <div
       class="feature-billet">

        <AppImage
         :src="`${imageUrl}`"
         cssClass="bg-block"
         alt="Feature image"
         height="150"
        />

        <div class="billet-content">
          <slot name="description"></slot>
        </div>
      </div>
      <div class="feature-teaser">
        <slot name="teaser"></slot>
      </div>
    </div>
  </li>
</template>

<script
 setup
 lang="ts">

import AppImage from "~/components/Images/AppImage.vue";

const props = defineProps({
  imageUrl: {
    type: String
  }
});

</script>

<style
 src="./styles.scss"
 lang="scss">
</style>