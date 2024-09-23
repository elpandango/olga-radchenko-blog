<template>
  <div class="flex justify-center mt-8 mb-8">
    <nav aria-label="Page navigation">
      <ul class="inline-flex space-x-2">
        <li>
          <button
           class="px-4 py-2 transition-bg-color duration-200 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
           :disabled="!props?.data?.hasPrevPage"
           @click="prevPage">
            Previous
          </button>
        </li>

        <li
         v-for="page in props.data.lastPage"
         :key="page">
          <a
           href="#"
           @click="gotoPage(page)"
           :aria-label="`Goto page ${page}`"
           class="px-4 py-2 rounded-lg inline-flex transition-bg-color duration-200"
           :class="{'bg-blue-500 hover:bg-blue-600 text-white': props?.data?.currentPage === page,
         'text-gray-700 bg-gray-200 hover:bg-gray-300': props?.data?.currentPage !== page}"
          >{{ page }}</a>
        </li>
        <li>
          <button
           class="px-4 py-2 transition-bg-color duration-200 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
           :disabled="!props?.data?.hasNextPage"
           @click="nextPage">
            Next
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script
 setup
 lang="ts">

import {onMounted} from "vue";

const emits = defineEmits(['page-changed']);

const props = defineProps({
  data: {
    type: Object,
    default: () => ({
      currentPage: 1,
      hasNextPage: false,
      hasPrevPage: false,
      lastPage: 1,
      nextPage: 1,
      previousPage: 0,
      totalItems: 0,
      posts: []
    })
  }
});

// Go to previous page
const prevPage = () => {
  emits('page-changed', props.data.previousPage);
};

// Go to next page
const nextPage = () => {
  emits('page-changed', props.data.nextPage);
};

// Go to specific page
const gotoPage = (page: number) => {
  emits('page-changed', page);
};

// onMounted(() => {
//   console.log('props.data: ', props.data);
// });

</script>
