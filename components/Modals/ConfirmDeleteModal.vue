<template>
  <Teleport to="body">
    <Modal v-model="isOpen">
      <template v-slot:header>
        Deleting the Post
      </template>
      <template v-slot:body>
        <p>Are you sure you want to delete this post?</p>
      </template>
      <template v-slot:footer>
        <button
         class="px-4 py-2 bg-stone-500 hover:bg-stone-700 transition-bg-color duration-200 text-white rounded"
         @click="onCancel">
          Cancel
        </button>
        <button
         class="px-4 py-2 bg-red-500 hover:bg-red-700 transition-bg-color duration-200 text-white rounded focus:outline-none"
         @click="onConfirm">
          Delete
        </button>
      </template>
    </Modal>
  </Teleport>
</template>

<script
 setup
 lang="ts">
import Modal from "~/components/Modals/Modal.vue";

const props = defineProps({
  isOpen: Boolean,
  onCancel: Function,
  onConfirm: Function
});
</script>

<style
 scoped
 lang="scss">

</style>