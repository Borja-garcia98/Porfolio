<template>
  <router-link to="/" class="flex gap-x-3 items-center justify-center">

    <img alt="logo" :src="require('@/assets/logo.png')"  width="50px">
  
    <p class="font-bold text-sky-blue font-mono tracking-widest uppercase hidden md:block">Borja Garcia </p>
  
  </router-link>
</template>

<script>
export default {
  name: "TheLogo",
};
</script>
