 <template>
  <figure class="md:flex rounded-xl p-8 md:p-0">
    <!-- <img class="Cv" src="@/assets/Cv_Borja_Garcia_2022.jpg" width="42%" height="100%" /> -->
     <!-- <iframe title="pdfCv" class="pdf" :src="require('@/assets/Manual.pdf')"  > </iframe>  -->
      

    <div class="pt-6 md:p-8 text-left md:text-left space-y-4">
     
     <div class="font-medium">
        <a class="text-sky-blue sub " download="Descarga mi CV" href="/Manual.pdf">Descargar Manual de identidad</a>
      </div> 

      <div class="text-light-primary dark:text-dark-primary">
        <img alt="skills" class="skills" src="@/assets/skills.png" />
      </div>

      <div><img alt="dafo" class="dafo" src="@/assets/dafo.png" /></div>
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

