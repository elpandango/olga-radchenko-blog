<template>
  <Modal v-model="modalValue">
    <template v-slot:header>
      Deleting the Post
    </template>
    <template v-slot:body>
      <p>Are you sure you want to delete this post?</p>
    </template>
    <template v-slot:footer>
      <button
       class="px-4 py-2 bg-stone-500 hover:bg-stone-700 transition-bg-color duration-200 text-white rounded"
       @click="closeModal">
        Cancel
      </button>
      <button
       class="px-4 py-2 bg-red-500 hover:bg-red-700 transition-bg-color duration-200 text-white rounded focus:outline-none"
       @click="confirmDelete">
        Delete
      </button>
    </template>
  </Modal>
</template>

<script
 setup
 lang="ts">
import {ref} from 'vue';
import Modal from './Modal.vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
});

const modalValue = ref(props.isOpen);

const emit = defineEmits(['confirm']);

const closeModal = () => {
  emit('update:isOpen', false);
};

const confirmDelete = () => {
  emit('confirm');
};
</script>
