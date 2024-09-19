<template>
    <div>
    <NavBar/>
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from "~/components/Navbar/NavBar.vue";
import repositoryFactory from "~/repositories/repositoryFactory";

const router = useRouter();

onMounted(async() => {
  try {
    const userEmail = localStorage.getItem('userEmail');
    await repositoryFactory.get('User').getUser(userEmail);
  } catch (err) {
    router.push('/admin/auth')
  }
});
</script>

<style>

</style>