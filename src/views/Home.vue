<template >
  <figure class="md:flex rounded-xl md:p-0 scroll">
    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
      <div class="font-medium">
        <!-- <div class="text-sky-blue titulo">Proyectos DAW</div> -->

        <figure class="md:flex rounded-xl p-8 md:p-0 sub">
          <div class="pt-6 md:p-8 text-left md:text-left space-y-4">
            <div class="font-medium">
              <a href="https://github.com/Borja-garcia98/juego_templo" target="_blank">
                <div class="text-light-primary dark:text-dark-primary"></div>
                <img class="imgcharacter" :src="require('@/assets/CharacterRun.gif')" alt="character" width="65px" />
                <p class="text-light-primary dark:text-dark-primary p">
                  Juego creado con temática retro, el objetivo es evitar a los enemigos y no
                  perderse por el mapa. Consta de distintos niveles los cuales tienen dificultad propia, variando el número de enemigos y el
                  mapa de juego.
                </p>

                <p class="text-light-primary dark:text-dark-primary sub">JAVASCRIPT - HTML - CSS - BOOTSTRAP</p>
              </a>
              <video-embed title="templeVideo" class="video" src="https://youtu.be/Yd_c3mIK1WA"></video-embed>
              <a href="https://github.com/Borja-garcia98/Borjify" target="_blank">
                <img class="imagen" :src="require('@/assets/spoty.png')" alt="spoty"  width="55px" />
                <p class="text-light-primary dark:text-dark-primary p">
                  Simulador de un reproductor Mp3. Se puede reproducir diversas canciones y ampliar la portada de la cancion actual.
                </p>

                <p class="text-light-primary dark:text-dark-primary sub">JAVASCRIPT - HTML- CSS</p>
              </a>
              <div>
                <img  alt="spoty" class="gif" :src="require('@/assets/spoty_borja.gif')" />
              </div>

              <a href="https://github.com/Borja-garcia98/Pokemon" target="_blank">
                <img class="imagen" :src="require('@/assets/pokedex.png')" alt="pokemon" width="65px" />
                <p class="text-light-primary dark:text-dark-primary p">
                  Simulador de una pokedex. Las funciones son añadir un pokemon, editar información, eliminarlo de la BD y visualizar la pokedex.
                </p>
                <p class="text-light-primary dark:text-dark-primary sub">PHP - MYSQL - BOOTSTRAP</p>
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
.titulo{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

}
.video {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
}
.sub {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
}
.imagen {
  margin-top: 2rem;
  margin-bottom: 1rem;
}
.imgcharacter{
    margin-bottom: 1rem;
}

.imagen:hover {
  transform: scale(1.3);
  transition: 0.3s;
}

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
}
</style>

