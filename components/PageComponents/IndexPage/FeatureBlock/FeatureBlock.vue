<template>
  <section class="features-block page-section">
    <div class="container">
      <h2 class="block-title mar-auto mar-b-10">
        <span class="block text-left">С какими запросами</span>
        <span class="block text-right">я могу помочь?</span>
      </h2>

      <ul class="features-list">
        <FeatureBillet
         v-for="feature in features"
         :key="feature.id"
         :imageUrl="feature.imageUrl">
          <template v-slot:description>{{ feature.description }}</template>
          <template v-slot:teaser>{{ feature.teaser }}</template>
        </FeatureBillet>
      </ul>
    </div>
  </section>
</template>

<script
 setup
 lang="ts">

import features from "~/data/features";
</script>

<style
 src="../AboutBlock/styles.scss"
 lang="scss">

</style>