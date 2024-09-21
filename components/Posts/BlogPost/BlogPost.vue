<template>
  <div class="blog-post block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark mb-16 shadow-lg">
    <div
     class="relative overflow-hidden bg-cover bg-no-repeat"
     data-twe-ripple-init
     data-twe-ripple-color="light">
      <ImageWithPlaceholder
       :src="`/${post.imageUrl}`"
       cssClass="rounded-t-lg w-full object-cover"
       alt="Post image"
       height="650"
      />
      <router-link :to="`${postUrl}${post._id}`">
        <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
      </router-link>
    </div>
    <div class="p-6 text-surface dark:text-white">
      <div class="flex flex-wrap sm:flex-nowrap justify-between items-center mb-4">
        <div class="post-title">
          <h4 class="mb-2 italic">{{ createdAt }}</h4>
        </div>
        <div
         class="space-x-2"
         v-if="props.mode === 'edit'">
          <router-link
           class="px-4 py-2 bg-green-500 hover:bg-green-700 transition-bg-color duration-200 text-white rounded"
           :to="`${postUrl}${post._id}`">Edit Post
          </router-link>
          <button
           class="px-4 py-2 bg-red-500 hover:bg-red-700 transition-bg-color duration-200 text-white rounded"
           @click="handleDeleteClicked">
            Delete Post
          </button>
        </div>
      </div>

      <h5 class="mb-2 text-2xl font-bold leading-tight">{{ post.title }}</h5>
      <p
       class="mb-4 text-base"
       v-html="post.content">
      </p>
    </div>


  </div>
</template>

<script setup>
import {useFormatDate} from "~/use/useFormatDate.js";
import ImageWithPlaceholder from "~/components/Images/ImageWithPlaceholder.vue";

const emit = defineEmits(['delete-clicked']);

const props = defineProps({
  post: {
    type: Object,
    required: true
  },
  mode: {
    type: String,
    default: 'edit'
  }
});

const handleDeleteClicked = () => {
  emit('delete-clicked', props.post._id);
};

const createdAt = useFormatDate(props.post.createdAt);
const postUrl = props.mode === 'edit' ? '/admin/edit-post/' : '/post/'
</script>

<style
 lang="scss"
 src="./styles.scss"
 scoped></style>
