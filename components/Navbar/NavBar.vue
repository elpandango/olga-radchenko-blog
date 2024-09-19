<template>
  <div>

    <nav
     class="relative flex w-full flex-wrap items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:py-4"
     data-twe-navbar-ref>
      <div class="flex w-full flex-wrap items-center justify-between px-3">

        <button
         class="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
         type="button"
         data-twe-collapse-init
         data-twe-target="#navbarSupportedContent4"
         aria-controls="navbarSupportedContent4"
         aria-expanded="false"
         aria-label="Toggle navigation">
          <span
           class="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
        <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         fill="currentColor">
          <path
           fill-rule="evenodd"
           d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
           clip-rule="evenodd"/>
        </svg>
      </span>
        </button>

        <div
         class="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
         id="navbarSupportedContent4"
         data-twe-collapse-item>
          <ul
           class="list-style-none me-auto flex flex-col ps-0 lg:mt-1 lg:flex-row"
           data-twe-navbar-nav-ref>
            <li
             class="flex my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2 text-3xl"
             data-twe-nav-item-ref>
              <div
               class="text-black/60 transition duration-200 dark:text-white/60 lg:px-2"
              >Admin Panel
              </div>
              <RouterLink
               to="/"
               class="bg-blue-500 hover:bg-blue-700 text-white ml-4 me-3 inline-block rounded px-2 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-secondary-600 dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500">
                To Main Site
              </RouterLink>
            </li>
          </ul>

          <div
           class="flex items-center"
           v-if="authorized">
            <RouterLink
             @click="showMobileNav = false"
             class="me-3 inline-block rounded px-2 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-secondary-600 dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500"
             active-class="is-active"
             to="/admin/all-posts">
              Home
            </RouterLink>
            <RouterLink
             @click="showMobileNav = false"
             class="me-3 inline-block rounded px-2 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-secondary-600 dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500"
             active-class="is-active"
             to="/admin/add-post">
              Add New Post
            </RouterLink>
            <button
             type="button"
             data-twe-ripple-init
             data-twe-ripple-color="light"
             @click="handleLogout"
             class="bg-blue-500 hover:bg-blue-700 text-white me-3 inline-block rounded px-2 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-secondary-600 dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500">
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>

  </div>
</template>

<script setup>
import {ref} from "vue";
import {onClickOutside} from '@vueuse/core';

const props = defineProps({
  authorized: {
    type: Boolean,
    default: true
  }
});

let showMobileNav = ref(false);

const navbarMenuRef = ref(null);
const navbarBurgerRef = ref(null);
const router = useRouter();

onClickOutside(navbarMenuRef, event => {
  showMobileNav.value = false;
}, {
  ignore: [navbarBurgerRef]
});

const handleLogout = () => {
  localStorage.removeItem('userEmail');
  localStorage.removeItem('token');
  router.push('/admin/auth');
};
</script>

<style lang="scss">
.navbar {
  background-color: #fff;

  .container {
    display: flex;
    min-height: 3.25rem;
    width: 100%;
  }

  .navbar-menu {
    display: flex;
    align-items: center;
  }

  .navbar-item {
    &.is-active {
      background-color: #fff;
      color: #000000;
    }

    &.is-active:hover {
      background-color: #fafafa;
    }
  }
}

@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
