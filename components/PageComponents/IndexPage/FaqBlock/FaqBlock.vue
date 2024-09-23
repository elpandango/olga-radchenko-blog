<template>
  <section class="faq page-section">
    <div class="container">
      <h2 class="block-title mar-b-8">Ответы на частые вопросы</h2>
      <div class="faq-block">
        <Accordion
         height="52px">
          <template v-slot:header>
            <div class="link-text">Важные детали работы со мной</div>
          </template>
          <template v-slot:accordion-body>
            <div class="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam architecto aspernatur atque,
              blanditiis debitis deleniti deserunt ducimus earum est exercitationem facere harum incidunt, ipsam
              itaque labore nobis placeat qui quo recusandae reiciendis ullam ut? Blanditiis delectus in odit quos
              reprehenderit sunt, tempore! Atque distinctio eius eveniet, nobis nostrum numquam quae quas sint!
              Doloribus, id quas! A ab alias animi assumenda at aut autem, consectetur cum earum eos eveniet excepturi
              explicabo facere fugiat, illo ipsam minus neque nesciunt nulla placeat porro possimus quia quis sunt
              voluptate. Accusamus alias dolore facere, illum in molestias optio perspiciatis possimus quo, quos vel
              voluptate.
            </div>
          </template>
        </Accordion>

        <Accordion
         height="52px">
          <template v-slot:header>
            <div class="link-text">Сколько сессий мне понадобится?</div>
          </template>
          <template v-slot:accordion-body>
            <div class="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam architecto aspernatur atque,
              blanditiis debitis deleniti deserunt ducimus earum est exercitationem facere harum incidunt, ipsam
              itaque labore nobis placeat qui quo recusandae reiciendis ullam ut? Blanditiis delectus in odit quos
              reprehenderit sunt, tempore! Atque distinctio eius eveniet, nobis nostrum numquam quae quas sint!
              Doloribus, id quas! A ab alias animi assumenda at aut autem, consectetur cum earum eos eveniet excepturi
              explicabo facere fugiat, illo ipsam minus neque nesciunt nulla placeat porro possimus quia quis sunt
              voluptate. Accusamus alias dolore facere, illum in molestias optio perspiciatis possimus quo, quos vel
              voluptate.
            </div>
          </template>
        </Accordion>

        <Accordion
         height="52px">
          <template v-slot:header>
            <div class="link-text">Я не могу сформулировать свой запрос</div>
          </template>
          <template v-slot:accordion-body>
            <div class="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam architecto aspernatur atque,
              blanditiis debitis deleniti deserunt ducimus earum est exercitationem facere harum incidunt, ipsam
              itaque labore nobis placeat qui quo recusandae reiciendis ullam ut? Blanditiis delectus in odit quos
              reprehenderit sunt, tempore! Atque distinctio eius eveniet, nobis nostrum numquam quae quas sint!
              Doloribus, id quas! A ab alias animi assumenda at aut autem, consectetur cum earum eos eveniet excepturi
              explicabo facere fugiat, illo ipsam minus neque nesciunt nulla placeat porro possimus quia quis sunt
              voluptate. Accusamus alias dolore facere, illum in molestias optio perspiciatis possimus quo, quos vel
              voluptate.
            </div>
          </template>
        </Accordion>

        <Accordion
         height="52px">
          <template v-slot:header>
            <div class="link-text">Как проходит первая консультация?</div>
          </template>
          <template v-slot:accordion-body>
            <div class="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam architecto aspernatur atque,
              blanditiis debitis deleniti deserunt ducimus earum est exercitationem facere harum incidunt, ipsam
              itaque labore nobis placeat qui quo recusandae reiciendis ullam ut? Blanditiis delectus in odit quos
              reprehenderit sunt, tempore! Atque distinctio eius eveniet, nobis nostrum numquam quae quas sint!
              Doloribus, id quas! A ab alias animi assumenda at aut autem, consectetur cum earum eos eveniet excepturi
              explicabo facere fugiat, illo ipsam minus neque nesciunt nulla placeat porro possimus quia quis sunt
              voluptate. Accusamus alias dolore facere, illum in molestias optio perspiciatis possimus quo, quos vel
              voluptate.
            </div>
          </template>
        </Accordion>

        <Accordion
         height="52px">
          <template v-slot:header>
            <div class="link-text">С какими запросами я не работаю?</div>
          </template>
          <template v-slot:accordion-body>
            <div class="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam architecto aspernatur atque,
              blanditiis debitis deleniti deserunt ducimus earum est exercitationem facere harum incidunt, ipsam
              itaque labore nobis placeat qui quo recusandae reiciendis ullam ut? Blanditiis delectus in odit quos
              reprehenderit sunt, tempore! Atque distinctio eius eveniet, nobis nostrum numquam quae quas sint!
              Doloribus, id quas! A ab alias animi assumenda at aut autem, consectetur cum earum eos eveniet excepturi
              explicabo facere fugiat, illo ipsam minus neque nesciunt nulla placeat porro possimus quia quis sunt
              voluptate. Accusamus alias dolore facere, illum in molestias optio perspiciatis possimus quo, quos vel
              voluptate.
            </div>
          </template>
        </Accordion>
      </div>
    </div>
  </section>
</template>

<script
 setup
 lang="ts">

import Accordion from "~/components/Accordion/Accordion.vue";

</script>

<style
 scoped
 lang="scss">

</style>