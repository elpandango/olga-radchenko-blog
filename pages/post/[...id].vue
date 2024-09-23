<template>
  <div class="post-view">
    <SitePreloader v-if="!isLoaded"/>

    <div
     class="container"
     v-else>

      <div class="poster">
        <AppImage
         :src="`/${post.imageUrl}`"
         cssClass="image"
         :alt="post.title"
         width="1200"
         height="650"
        />
      </div>

      <header class="post-header">
        <h1 class="block-title">{{ post.title }}</h1>
        <h4 class="date">{{ createdAt }}</h4>
      </header>

      <div
       class="post-content"
       v-html="post.content"
      ></div>
    </div>

  </div>
</template>

<script
 setup
 lang="ts">
import {ref} from "vue";
import repositoryFactory from "~/repositories/repositoryFactory";
import SitePreloader from "~/components/Preloader/SitePreloader/SitePreloader.vue";
import {useFormatDate} from "~/use/useFormatDate";
import AppImage from "~/components/Images/AppImage.vue";

definePageMeta({
  layout: 'site-default-layout',
  title: 'Post page',
  description: 'This is a post page',
});

const router = useRouter();
const route = useRoute();

interface PostData {
  title: string;
  content: string;
  image: File | null;
}

const createdAt = ref('');
const isLoaded = ref(false);
const postId = route.params.id[0];
const post = ref<{ title: string; description: string }>({title: '', description: ''});
const postRepository = repositoryFactory.get('Post');

onMounted(async () => {
  try {
    const data: PostData = await postRepository.getPost(postId);
    if (data) {
      post.value = {...data.post};
      createdAt.value = useFormatDate(post.value.createdAt);

      useSeoMeta({
        title: `${post.value.title} - Ольга Радченко`,
        description: post.value.description,
        ogTitle: post.value.title,
        ogDescription: post.value.description,
        ogImage: post.value.image || '/images/olga-photo-1.webp',
        ogUrl: `${window.location.origin}${route.fullPath}`,
        twitterTitle: post.value.title,
        twitterDescription: post.value.description,
        twitterImage: post.value.image || '/images/olga-photo-1.webp',
        twitterCard: 'summary'
      });

      setTimeout(() => {
        isLoaded.value = true;
      }, 1300);
    }
  } catch (err) {
    console.log(err);
  }
});
</script>

<style
 lang="scss"
 src="./styles.scss">
</style>