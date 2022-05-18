<template>
  <figure class="md:flex rounded-xl p-8 md:p-0">
    <iframe  title="pdf" class="pdf" src="https://saba.eu/down/ManualBasicoSaba.pdf"> </iframe>
    <div class="pt-6 md:p-8 text-left md:text-left space-y-4">
      <div class="font-medium">
        <div class="text-sky-blue sub">Manual de identidad</div>
      </div>
      <div>
        <p class="text-lg font-medium text-light-primary dark:text-dark-primary">
          Diseño de la pagina web. Logo, tipografía , color ...
        </p>

        <video-embed title="videManual" class="video" src="https://youtu.be/Yd_c3mIK1WA"> </video-embed>
      </div>
    </div>
  </figure>
</template>



<style scoped>
.video {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}
.sub {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.pdf {
  width: 100%;
  height: 400px;
}
</style>

