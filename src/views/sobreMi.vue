 <template>
  <figure class="md:flex rounded-xl p-8 md:p-0">
    <div class="pt-6 md:p-8 text-left md:text-left space-y-4">
      <div>
        <img alt="dafo" class="dafo" src="@/assets/dafo.png" />
      </div>
      <div class="text-light-primary dark:text-dark-primary">
        <img alt="skills" class="skills" src="@/assets/skills.png" />
      </div>
   
   
    <div class="font-medium sub">
      <a class="text-sky-blue sub hoover" download="Descarga mi CV" href="/CV_Borja.pdf">Descargar CV</a>
      <a class="text-sky-blue sub hoover" href="https://www.yumpu.com/xx/document/read/66915129/cv-borja" target="_blank">
      Visualizar en Yumpu
      </a>
    </div>
    </div>
  </figure>
</template>

<style scoped>
.sub {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.hoover:hover {
  transform: scale(1.1);
  transition: 0.3s;
}
.skills {
  width: 100%;
  height: 100%;
}
.dafo {
  width: 100%;
  height: 100%;
  margin: 0%;
}
</style>

