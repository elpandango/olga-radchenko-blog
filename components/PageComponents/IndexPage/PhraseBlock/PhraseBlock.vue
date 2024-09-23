<template>
  <section class="phrases bg-gray page-section">
    <div class="container">
      <div class="phrases-block">
        <blockquote class="blockquote">
          <p class="text">{{ props.phrase.content }}</p>
          <footer class="author">— <cite>{{ props.phrase.author }}</cite></footer>
        </blockquote>
      </div>
    </div>
  </section>
</template>

<script
 setup
 lang="ts">

const props = defineProps({
  phrase: {
    type: Object,
    default: () => ({
      author: 'Карл Юнг, "Воспоминания, сны, размышления"',
      content: 'Ваши видения станут ясными только тогда, когда вы сможете заглянуть в свое собственное сердце.'
    })
  }
});

</script>

<style
 lang="scss">
.phrases-block {
  .text {
    font-size: 44px;
    margin-bottom: 24px;
  }

  .author {
    font-size: 22px;
  }
}
</style>