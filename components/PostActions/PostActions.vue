<template>
  <div class="space-x-2" v-if="mode === 'edit'">
    <router-link
     class="edit-button"
     :to="`${postUrl}`">Edit Post
    </router-link>
    <button
     class="delete-button"
     @click="handleDeleteClicked">
      Delete Post
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  mode: {
    type: String,
    default: 'edit'
  },
  post: {
    type: Object,
    required: true
  },
  postUrl: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['delete-clicked']);

const handleDeleteClicked = () => {
  emit('delete-clicked', props.post._id);
};
</script>

<style src="./styles.scss"></style>
