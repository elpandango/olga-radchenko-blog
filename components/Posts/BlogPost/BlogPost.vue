<template>
  <div class="blog-post">
    <PostImage :post="post" :postUrl="postUrl" />
    <PostDetails :post="post" :mode="mode" @delete-clicked="$emit('delete-clicked', $event)">
      <PostActions :mode="mode"
                   :post="post"
                   :postUrl="postUrl"
                   @delete-clicked="handleDeleteClicked" />
    </PostDetails>
  </div>
</template>

<script setup>
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

const postUrl = props.mode === 'edit' ? `/admin/edit-post/${props.post._id}` : `/post/${props.post._id}`;
</script>

<style
 lang="scss"
 src="./styles.scss"
 scoped></style>
