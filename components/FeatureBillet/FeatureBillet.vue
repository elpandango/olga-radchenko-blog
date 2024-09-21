<template>
  <li class="feature-wrap">
    <div class="feature">
      <div
       class="feature-billet">
        <div class="bg-block"
             :style="{ backgroundImage: `url(${imageUrl})`}"></div>
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