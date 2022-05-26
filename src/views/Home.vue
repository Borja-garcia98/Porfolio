<template >
  <figure class="md:flex rounded-xl md:p-0 scroll">
    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
      <div class="font-medium">
        <div class="text-sky-blue sub">Proyectos DAW</div>

        <figure class="md:flex rounded-xl p-8 md:p-0 sub">
          <div class="pt-6 md:p-8 text-left md:text-left space-y-4">
            <div class="font-medium">
              <a href="https://github.com/Borja-garcia98/juego_templo" target="_blank">
                <div class="text-light-primary dark:text-dark-primary"></div>
                <p class="text-light-primary dark:text-dark-primary p">
                  Juego creado con temática retro, el objetivo es evitar a los enemigos y no perderse por el mapa. Consta de distintos niveles los
                  cuales tienen dificultad propia, variando el número de enemigos y el mapa de juego.
                </p>

                <h3 class="text-light-primary dark:text-dark-primary ">JAVASCRIPT - HTML - CSS - BOOTSTRAP</h3>
              </a>
              <video-embed title="templeVideo" class="video" src="https://youtu.be/Yd_c3mIK1WA"></video-embed>
              <a href="https://github.com/Borja-garcia98/Borjify" target="_blank">
                <p class="text-light-primary dark:text-dark-primary p">
                  Simulador de un reproductor Mp3. Se puede reproducir diversas canciones y ampliar la portada de la cancion actual.
                </p>

                <h3 class="text-light-primary dark:text-dark-primary ">JAVASCRIPT - HTML- CSS</h3>
              </a>
              <div>
                <img alt="spoty" class="gif" :src="require('@/assets/spoty_borja.gif')" />
              </div>

              <a href="https://github.com/Borja-garcia98/Pokemon" target="_blank">
                <p class="text-light-primary dark:text-dark-primary p">
                  Simulador de una pokedex. Las funciones son añadir un pokemon, editar información, eliminarlo de la BD y visualizar la pokedex.
                </p>
                <h3 class="text-light-primary dark:text-dark-primary ">PHP - MYSQL - BOOTSTRAP</h3>
              </a>
              <video-embed title="pokemonVideo" class="video" src="https://youtu.be/Yd_c3mIK1WA"></video-embed>
            </div>
          </div>
        </figure>
      </div>
    </div>
  </figure>
</template>

 
 
<style scoped>

.p:hover {
  transform: scale(1.02);
  transition: 0.1s;
}
.gif {
  position: center;
  object-fit: fill;
  margin: auto;
  border-radius: 1rem;
  margin-top: 2rem;
  margin-bottom: 4rem;
}
</style>

