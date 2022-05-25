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
      <a class="text-sky-blue sub" download="Descarga mi CV" href="/CV_Borja.pdf">Descargar CV</a>
      <a class="text-sky-blue sub" href="https://www.yumpu.com/es/document/read/66915075/manualidentidad-porfolio" target="_blank"
        >Visualizar en Yumpu
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
.skills {
  width: 100%;
  height: 100%;
}
.dafo {
  width: 100%;
  height: 100%;
  margin: 0%;
}
.pdf {
  width: 100%;
  height: 550px;
  margin: 0%;
}
</style>

