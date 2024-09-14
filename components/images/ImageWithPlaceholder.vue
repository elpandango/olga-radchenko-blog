<template>
  <img
   :loading="loading ? 'lazy' : 'auto'"
   :class="cssClass"
   :src="imageSrc"
   :height="height"
   :width="width"
   alt="Image with Placeholder"/>
</template>


<script
 setup
 lang="ts">
import {ref, onMounted} from 'vue';

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: 'Image alt'
  },
  placeholder: {
    type: String,
    default: 'https://place.dog/300/200'
  },
  cssClass: {
    type: String
  },
  width: {
    type: String,
    default: '200'
  },
  height: {
    type: String,
    default: '200'
  },
  loading: {
    type: Boolean,
    default: true
  }
});

const imageSrc = ref(props.placeholder);

const checkImage = async (url) => {
  try {
    const response = await fetch(url, {method: 'HEAD'})
    if (response.ok) {
      imageSrc.value = url;
    }
  } catch (error) {
    console.error('Oops, something gone wrong!:', error);
  }
}

onMounted(() => {
  checkImage(props.src);
});
</script>

<style
 scoped
 lang="scss">

</style>