<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>

      <form @submit.prevent="onLogin">
        <div class="mb-4">
          <label for="email" class="block text-gray-700 font-medium mb-2">Email</label>
          <input
           type="email"
           id="email"
           class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
           placeholder="Enter your email"
           v-model="email"
           required
          />
        </div>

        <div class="mb-6">
          <label for="password" class="block text-gray-700 font-medium mb-2">Password</label>
          <input
           type="password"
           id="password"
           class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
           placeholder="Enter your password"
           v-model="password"
           required
          />
        </div>

        <button
         type="submit"
         class="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
        >
          Login
        </button>

        <p class="text-center my-6">OR</p>

        <router-link
         to="/"
         class="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 focus:outline-none text-center block"
        >
          Go to the Main Site
        </router-link>
      </form>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import repositoryFactory from "~/repositories/repositoryFactory";

definePageMeta({
  layout: 'not-authorized'
});

const router = useRouter()
const email = ref('');
const password = ref('');

const onLogin = async () => {
  try {
    const response = await repositoryFactory.get('Auth').login({email: email.value, password: password.value});
    localStorage.setItem('userEmail', email.value);
    localStorage.setItem('token', response.token);
    router.push('/admin/all-posts')
  } catch (error) {
    console.error(error);
  }
}
</script>

<style></style>