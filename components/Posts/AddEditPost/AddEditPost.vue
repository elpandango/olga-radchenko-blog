<template>
  <div class="bg-white p-8 rounded-lg shadow-lg">

    <div class="mb-4">
      <label
       for="title"
       class="block text-sm font-medium text-gray-700 mb-1">Post title</label>
      <input
       type="text"
       id="title"
       name="title"
       class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
       placeholder="Input post title"
       v-model="formInputData.title"
       required
      >
    </div>

    <div class="mb-6">
      <label
       for="file"
       class="block text-sm font-medium text-gray-700 mb-1">Choose file</label>
      <input
       type="file"
       id="file"
       name="file"
       class="w-full text-sm text-gray-500 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
       @change="handleFileChange"
       required
      >

      <img
       v-if="thumbnail"
       :src="computedImageUrl"
       class="thumbnail mt-6"
       alt="Thumbnail">
    </div>

    <div class="mb-6">
      <label
       class="block text-sm font-medium text-gray-700 mb-1">Post content</label>
      <div class="control">
        <div class="editor-wrap">
          <ClientOnly>
            <QuillEditor
             theme="snow"
             :toolbar=tooltipOpts
             content-type="html"
             placeholder="Write content..."
             v-model:content="formInputData.content"
             @update:content="editorChangeHandler"
             @ready="quill = $event"
            />
          </ClientOnly>
        </div>
      </div>
    </div>

    <div class="flex justify-end space-x-2">
      <button
       class="px-4 py-2 bg-gray-200 transition-bg-color duration-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
       @click="$router.back()"
      >
        Cancel
      </button>

      <button
       class="px-4 py-2 bg-blue-500 transition-bg-color duration-200 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
       @click="handleSaveClicked"
      >
        Save
      </button>
    </div>

  </div>
</template>

<script
 setup
 lang="ts">
import {computed, onMounted, reactive, ref} from 'vue';
import {QuillEditor} from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import {useStorePosts} from "~/stores/storePosts";

const emit = defineEmits(['save-post']);

const formInputData = reactive({
  title: '',
  content: '',
  image: null
});
const thumbnail = ref('');
const imageThumbLoaded = ref(false);

const handleFileChange = (event: Event) => {
  const image = event?.target?.files[0];
  formInputData.image = image;

  if (image) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e?.target?.result;
      if (typeof result === 'string') {
        thumbnail.value = result;
      }
      imageThumbLoaded.value = true;
    };
    reader.readAsDataURL(image);
  }
};

const handleSaveClicked = () => {
  emit('save-post', formInputData);
};


const quill = ref(null);
const tooltipOpts = [
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],
  // [{ header: 1 }, { header: 2 }, { header: 3 }, { header: 4 }, { header: 5 }, { header: 6 }],
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ script: 'sub' }, { script: 'super' }],
  [{ indent: '-1' }, { indent: '+1' }],
  [{ direction: 'rtl' }],
  [{ size: ['small', false, 'large', 'huge'] }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ color: [] }, { background: [] }],
  [{ font: [] }],
  [{ align: [] }],
  ['link', 'video', 'image'],
  ['clean'],
];

const editorChangeHandler = (editorContent: any) => {
  formInputData.content = editorContent;
};

onMounted(() => {
  const storePosts = useStorePosts();
  const currentPost = storePosts.getCurrentPost;
  const {title, content, imageUrl} = currentPost;

  formInputData.title = title;
  formInputData.content = content;
  formInputData.image = imageUrl;
  thumbnail.value = imageUrl;
  imageThumbLoaded.value = false;

});

const apiUrl = window.location.origin;

const computedImageUrl = computed(() => {
  return imageThumbLoaded.value ? thumbnail.value : `${apiUrl}/${thumbnail.value}`;
});

</script>

<style>
.thumbnail {
  max-height: 350px;
}

.editor-wrap {
  background-color: var(--secondary-color);
  border-radius: 4px;
  border: none;
}

.editor-wrap .ql-toolbar.ql-snow,
.editor-wrap .ql-container.ql-snow {
  border: none;
  flex-wrap: wrap;
  display: flex;
}

.ql-editor {
  width: 100%;
}
</style>
