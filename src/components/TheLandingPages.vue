<template>
  <fragment>
    <section class="h-full py-8 max-w-screen-lg mx-auto flex flex-col items-center justify-center">
      <transition name="fade" appear>
        <h1 class="text-7xl text-gray-800 dark:text-white text-center font-semibold leading-none tracking-tighter mb-4">Contacto</h1>
      </transition>
      <transition name="fade" appear>
        <h2 class="text-2xl text-gray-600 dark:text-gray-400 opacity-75 font-normal leading-tight mb-8">Back-end developer</h2>
      </transition>

      <transition name="fade" appear>
        <button class="bg-sky-blue dark:bg-dark-primary py-4 px-7 rounded-md text-white flex items-center gap-3" @click="navigateToGithub">
          <v-icon name="brands/github" class="fill-current" /> Github
        </button>
      </transition>
<br>
    <transition name="fade" appear>
        <button class="bg-sky-blue dark:bg-dark-primary py-4 px-6 rounded-md text-white flex items-center gap-3" @click="navigateToLinkedIn">
          <v-icon name="brands/linkedin-in" class="fill-current" /> LinkedIn
        </button>
      </transition>


<br>
      <transition name="fade" appear>
        <button class="bg-sky-blue dark:bg-dark-primary py-4 px-5 rounded-md text-white flex items-center gap-3" @click="navigateToInstagram">
          <v-icon name="brands/instagram" class="fill-current" />Instagram
        </button>
      </transition>

    </section>

  </fragment>
</template>

<script>
import { themes } from "@/store";

export default {
  name: "TheLandingPages",
  computed: {
    currentThemeIsDark() {
      return this.$store.state.theme === themes.dark;
    },
  },
  methods: {
    navigateToGithub() {
      window.location.href = "https://github.com/Borja-garcia98";
    },
    navigateToLinkedIn() {
      window.location.href = "https://es.linkedin.com/in/borja-garcia-bartolom%C3%A9-265696182?original_referer=https%3A%2F%2Fwww.google.com%2F";
    },
    navigateToInstagram() {
      window.location.href = "https://www.instagram.com/borja_garcia98/";
    },
  },
};
</script>
