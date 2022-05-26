<template>
  <figure class="md:flex rounded-xl p-8 md:p-0 sub">
    <div class="video">
      <video-embed title="Manual" class="video" src="https://youtu.be/1Xyf6hoOetY"> </video-embed>
    </div>
    <transition class="sub" name="fade" appear>
      <button class="bg-sky-blue dark:bg-dark-primary py-4 px-8 rounded-md text-white flex items-center gap-3" @click="navigateToManual">
        <v-icon name="download" class="fill-current" />Manual de Identidad
      </button>
    </transition>
  </figure>
</template>

<script>
export default {
  name: "manualIdentidad",

  methods: {
    navigateToManual() {
      window.location.href = "/ManualIdentidad_Porfolio.pdf";
    },
  },
};
</script>


