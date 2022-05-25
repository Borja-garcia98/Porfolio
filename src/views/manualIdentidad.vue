<template>
  <figure class="md:flex rounded-xl p-8 md:p-0 sub">
    <!-- <iframe  title="pdf" class="pdf" src="https://saba.eu/down/ManualBasicoSaba.pdf"> </iframe> -->
    <div class="video">
      <video-embed title="videoManual" class="video" src="https://youtu.be/1Xyf6hoOetY"> </video-embed>
    </div>
      <div class="font-medium text-left">
        <a class="text-sky-blue sub" download="Descarga mi Manual de Identidad" href="/ManualIdentidad_Porfolio.pdf"
          >Descargar manual de identidad
        </a>

        <a class="font-medium" href="https://www.yumpu.com/es/document/read/66915075/manualidentidad-porfolio" target="_blank">
          <p class="text-sky-blue sub">Visualizar en Yumpu</p>
        </a>
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
  margin-bottom: 2rem;
  margin-top: 2rem;
  display: flex;
}
.sub {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  display: flex;
}
/* .pdf {
  width: 100%;
  height: 550px;
} */
</style>

