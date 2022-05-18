 <template>
  <figure class="md:flex rounded-xl p-8 md:p-0">
    <!-- <img class="Cv" src="@/assets/Cv_Borja_Garcia_2022.jpg" width="42%" height="100%" /> -->
    <iframe title="pdfCv" class="pdf" src="https://saba.eu/down/ManualBasicoSaba.pdf"> </iframe>

    <div class="pt-6 md:p-8 text-left md:text-left space-y-4">
      <div>
        <p class="text-lg font-medium text-light-primary dark:text-dark-primary">
          Este espacio está dedicado a que me conozcais un poco mejor. Cuales son mis habilidades, conocimientos, puntos fuertes y puntos débiles.
        </p>
      </div>

      <div class="text-light-primary dark:text-dark-primary">
        <img class="skills" src="@/assets/skills.png" />
      </div>

      <div>  <img class="dafo" src="@/assets/dafo.png" />  </div>
      
     
    </div>
  </figure>
</template>

<style scoped>

.skills {
  width: 100%;
  height: 100%;
}
.dafo {
  width: 100%;
  height: 100%;
}
</style>

