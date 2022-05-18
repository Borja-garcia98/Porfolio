<template>
  <figure class="md:flex rounded-xl p-8 md:p-0 sub">
    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
      <div class="font-medium">
        <!-- <div class="text-sky-blue titulo">Proyectos Individuales</div> -->

        <figure class="md:flex rounded-xl  md:p-0">
          <div class="pt-6 md:p-8 text-left md:text-left space-y-4">
            <div class="font-medium">
              <a href="https://youtu.be/G4ZEfhuStlQ" target="_blank">
                <img class="imgjwt" :src="require('@/assets/jwt_logo.svg')" alt="jwt" width="50px" />
                <p title="descripcionJwt" class="text-light-primary dark:text-dark-primary p">
                  Desarrollo con JWT, parte back-end de una api de portal de películas, enfocado en la seguridad JSON Web Token. Incluyendo el uso de
                  un refreshToken y tecnologia de bcrypt al almacenar el password en la BD. 
                  <p class="text-light-primary dark:text-dark-primary p">En el siguiente video muestro las peticiones POST para registrar y iniciar sesión a nuevos usuarios.</p>

               
                <p class="text-light-primary dark:text-dark-primary sub">Java - Springboot - MySql - Postman</p>

                <video-embed title="videoJwt " class="video" src="https://youtu.be/G4ZEfhuStlQ"></video-embed>
              </a>

              <a href="https://youtu.be/XpoVg7-XoEI" target="_blank">
                <img class="imagen" :src="require('@/assets/aws.png')" alt="aws" width="50px" />
                <p class="text-light-primary dark:text-dark-primary p">
                  Experiencia trabajando con Springboot junto con Lambdas, en el siguiente video muestro el proceso de subida en AWS de una Lambda a traves de su handler. 


                </p>
                <p class="text-light-primary dark:text-dark-primary sub">Java - Springboot - Aws</p>

                <video-embed title="subidaLambda" class="video" src="https://youtu.be/XpoVg7-XoEI"></video-embed>
              </a>

              <a
                href="https://viewer.diagrams.net/?highlight=0000ff&edit=_blank&layers=1&nav=1&title=cambio%20contrase%C3%B1a.drawio#R7V1bd9q4Fv41rNU%2BkOUrl8dAQmfOSc%2FpNM10%2BnSWsAXo1FgeWYTQXz9bsmRsSwm0xUCTdHVNkSxZ9r7vT1uejj9ePrxjKFu8pzFOOp4TP3T8q47nub7nwD%2BiZ1P0BIOg6JgzEqtB245b8g2rTjVvviIxzmsDOaUJJ1m9M6JpiiNe60OM0XV92Iwm9VUzNMdGx22EErP3M4n5ougdeP1t%2F2%2BYzBd6Zbc3LK4skR6s3iRfoJiuK13%2BdccfM0p58Wv5MMaJIJ6my%2BffN5%2BTm6%2B9d%2F%2F6I%2F8b3Y3%2B%2Fek%2Ff3aLm02%2BZ0r5Cgyn%2FIdvjX6bB%2BnKH93xTfeuu3HzP%2F4Xd11f3fweJStFMfW2fKNJyOgqjbG4jdPxR%2BsF4fg2Q5G4ugahgb4FXybQcuHnns%2Bql8WM44cKp9Szv8N0iTnbwBB1NVRcUGI4CBWb1lum9n01ZlFhaOBoYVKCNC9vvSUW%2FFD0%2Bg7a9QYGpXAMsqealPEFndMUJdfb3lGdltsxN5RmioL%2Fx5xvlCKhFac%2FQ9%2BcrliEn3gJz1c6idgc8ycG%2BkouxCs%2ByS%2BGE8TJfV39Dk78YPCLyK2mgJJbdxiachv0TLkNtdk5vNwalLtOOYkRzLmE%2Fg8oz9eUxR9xjvkn%2BhWnnbHXuXQM8uZrskxQKqR6RlOu5V7QOlqQJL5BG7oSb5NzFH3VrdGCMvINxiNNebjMuJJ336mNuBUz1T0ZzmHMB80gt9H1Hj3UBt6gnOunoUmCspxM5fOJiUuQdpKOKOd0qQa1xf%2Bgbre0iaqwvxxSZb8bPsF%2BtdhH8JconcNblau5vfpytvUGluX8xmoo4ZiliOOR0KHckLnyPX9cDPuGGMLwpowBkbkUEQaCOKYJZdCf0kLoSJI0ulBC5ik0EzwT0wSXCIQCl6p7SeJYWuEczABJ5zdy2FWw7fmoSCK6KEyfJdLjL2Ai6IE%2FyihJuaRROIK%2FQLWxcxF2QnjWMbTdbRv%2BiuGMj2kKj4%2BIFCsMUrnGQjLBE3DE0bTUGVMAn9Te3QL4nRLXFIGD2RvTUnNpVV55fXBe907N66HB61WO2SMO5JXhP83w4akZ7pr5wxW8%2BfVDRhgQvTP2OyP%2FlfOH57zrnZr1Pdfg6xHyH%2FxA%2BF9iOvCjaH2pXLnSQaBsbH4ottuZM7n75kyBuuOZ5Ez6uWs5Uy8RUruCH3MuSVV0TCsdf68ExDH6b3IPtweFvhwKeITAf0AJQAdyLNXcRR0hk3q4vhM86rR5d%2BirrNgUoiQhWY5Pl7JpBOiJGNrVwl9L2drSNO8kSANQlW3%2B0vokGl%2B2eieaW2WTrba0rbentnlnpm1mni1ioVvM7kmEZySN76A52lwvEUkM%2Fm655%2B5WBJl%2BF2x04YVH8wRyeMWNwsdq6FPm2xrHbDPt9Z2gpkR%2BYFEiWyYatBapmLFpLjLn6SqPhOWSuPcqXyFGqCAJBCDAETBTTkQZw%2FSxIKbCBx2nREBMiHqfiFQkRlGJEuoBiIgxhD7miqffESq1xU9vWDeK%2FsDCz6GFn63BWGF4CqN4YONWbonsNG7%2BWRk3zwz7QUIh0hbvUmT3PbQUZiqd5pnNy%2F%2FqBi7060ib1cD1jmngdNjyKAL%2BMzFA2dgvBpCtD5gReDVhCdsIDPbeugh756U7ZhgeMYw4NpH3CWUiSHh2yhMMwpryBH1LMhseU3k8M1q7u%2Fv96oKhNKZL8fPN2wtOb6WRe%2FPWZtFUPHCq%2FdGmPXL3dNCt4QOeGXAJOV%2FSXEdbylM44jUSEXRFEH3FeoS4Mro6MzIHw7rkhhYyHxeGsezg4%2FSeKCoWYayOYIHsOAKVT0n0aDx7IsL26%2FlCYHGnnnNMugYmbHnUpHvrY7%2FUXOxRkm69278b4vLOyrfq567aHAnUriK%2Bdasq5X7mEWoDxrL6WPeYPtY3A5%2BCEQ6KUcYtcc5pTZLvN22SWbtxVI%2Fa805rkk6KAwb7psrueYX7gemfP%2BFlBktj0wQp8J3tQt8N4H2Luj9vK3b6NFt7vPouSo2PDPMVs0AgTrPrHU4hR47AM2XgpfBzZ17Psbkgy05Ke8wzq44YzhhEBinYFWkT8myFcy4QYSRuFyVEoLmyNs7unV4GANxvsNKmh8fFfwOLHjY4BEKeiZ9kKavEq6xqcoYLb1j23qApTj4A%2FTmh4upUlQqOEnFhhKKvc6mbmvgdz5%2FJPzBELnaZZ0U1u2Au0o0ZeRDaPFLPc7XgXJTBXwpKeJMoToMLyMxSsTmE2UUEK3qTGAlhnIh%2BSOgm%2BJ4kXdnoiu2kLhGSNhM2wZv0gCQTmDyHftcbXGQCj21HHNyeX5MHW%2BlRr2%2BKg%2B47uDjo6PaR2Ehpx%2BHKDzrb4oNtKYK9%2FEA0WsZCw303Sc%2BsjDs0YTeDjTt1cqdWG2Z5pzEFfXac0fXEKzylNCLLh7k4InOBvq0YvljiPC%2BMijTdmF3f48KCt5qSBM2kzkxJjlsEZFrhTwrV4ziNmYxYXUsoxAkEwQKSioVWLEkK4cjL9rBNBDfwTN5aIbD2TgqY2vkeEnadvnzEmdBGqlZ6sYxrbGZYt8ZtStka31wvOI4z%2FEFk4Bi7g%2F3%2Bnh7R1S7nTFyi6z1d2HAo5p2M3meGz%2FTNlLCsAjK8VtTEXZ5Zwu43jlkOQ4stO27ZlnucwP7A6qBT4Z3qoMXvTLRBP3dFGywHAp%2Bb2OujvE9JvY60jyP1jskHjQ4L%2BtXIr7FfcaFbxEXiIKc7yB5q5dgSUcZpIsECgXTJcwqR2HcxDVtZqF0s90it9ouK87zG4cqBDc60YdHtBXqODYz%2B1UEwdycItkBr9UvgGZPecBgGQ4mKdb2gC1LQVSgYR1nbSJjnhTulQn%2BsoHZaYNiaxzxy9P%2BdtYEH9rSusy%2F25TqDs%2FK15ZNXi86yWG4Mlsfwn32Zgt%2Bwqq5r875H3eIrBaVa3ozu8ZYnz4wHGpU%2FIxZYDpbqckGSQieJLfnZS45OwmbqZqn3OeoGnWs5b6hZ%2BMpAS2lp41MhrmOpLbXl3i1yMLSElw2eBc6fgpmP2sYXxUMvqG%2BL2i2prequRTD46dOjB98ZPeHB7L3Pipah17mEgpbToj9SJTZGy6k8vvhyCsSakKXrnAFmafs6WcG1PEOpFb2JCgslkBs2n76BZxOfoejIHT%2F96634KYFoifXM0JIkm2JOKSUdWbcKXMPJPRZm1bhSv0kFMPIEYFS7VjyluJhStpQFUZXLa0VMcT0onlNeTMBQQPKtPr5hnS%2B8Qldk%2BKma71TWlhdBfNN8BrP0%2FBSXA4Sjqd%2B%2BOn1aIhPdBlE98dk4RUxPbKXr32GFtDHJQe8UWUmakMrCs4QiXn2gJrwmfaGsJHvkGGSJqxWC8DSutkMbDUfalo71w4s6yDG0fHjGmiC09%2BEZjXRVdOyGzokJTlcItl%2FdR3941dMoVwX%2BMsKVJj5Whi17VqE0jSldcSFs4%2FJLqE6n%2FILNJ%2BmFuz01rfK8E%2FlHjPyKebTQ0xpFK%2FCQeImyi0SSqMVMspFKDm11grYihl57gmKmIa%2BCcnpBcbyGTXEt9S6uX46qCku%2FPWHZoyDtGQLq01UOApXn3WAAHnIic4aJ57eNnRt%2BBfKlviEEnuXzqLqvBQkwj61e5xEjUxEFpHj9muhawQrXdt7Y9kHm9hJdvVrtJGxEY7HB%2BQo0bXnnuk241xLNHXcf07cCTTJUjsm9NV%2BSSYLikojHFaOMiHxn4mXNgh67i9p8n6GofpNqttWYqhMB%2B4b6I%2FlA2S1f%2F6eyhGr00OqXrhunfaxVFN5hcgRobj%2B8L69V%2FvcF%2FvU%2F"
                target="_blank">
                <div class="text-light-primary dark:text-dark-primary"></div>
                <img class="imagen" :src="require('@/assets/password_reset.png')" alt="password" width="50px" />
                <p class="text-light-primary dark:text-dark-primary p">
                  Restablecer password: Desarrolo de un sistema back-office que permite restablecer la contraseña, mediante un token asociado al
                  usuario le permite reestablecer la contraseña en su correo.
                </p>
                <p class="text-light-primary dark:text-dark-primary sub">Java - Springboot - MySql</p>
                <iframe
                title="diagram"
                  class="diagram"
                  src="https://viewer.diagrams.net/?highlight=0000ff&edit=_blank&layers=1&nav=1&title=cambio%20contrase%C3%B1a.drawio#R7V1bd9q4Fv41rNU%2BkOUrl8dAQmfOSc%2FpNM10%2BnSWsAXo1FgeWYTQXz9bsmRsSwm0xUCTdHVNkSxZ9r7vT1uejj9ePrxjKFu8pzFOOp4TP3T8q47nub7nwD%2BiZ1P0BIOg6JgzEqtB245b8g2rTjVvviIxzmsDOaUJJ1m9M6JpiiNe60OM0XV92Iwm9VUzNMdGx22EErP3M4n5ougdeP1t%2F2%2BYzBd6Zbc3LK4skR6s3iRfoJiuK13%2BdccfM0p58Wv5MMaJIJ6my%2BffN5%2BTm6%2B9d%2F%2F6I%2F8b3Y3%2B%2Fek%2Ff3aLm02%2BZ0r5Cgyn%2FIdvjX6bB%2BnKH93xTfeuu3HzP%2F4Xd11f3fweJStFMfW2fKNJyOgqjbG4jdPxR%2BsF4fg2Q5G4ugahgb4FXybQcuHnns%2Bql8WM44cKp9Szv8N0iTnbwBB1NVRcUGI4CBWb1lum9n01ZlFhaOBoYVKCNC9vvSUW%2FFD0%2Bg7a9QYGpXAMsqealPEFndMUJdfb3lGdltsxN5RmioL%2Fx5xvlCKhFac%2FQ9%2BcrliEn3gJz1c6idgc8ycG%2BkouxCs%2ByS%2BGE8TJfV39Dk78YPCLyK2mgJJbdxiachv0TLkNtdk5vNwalLtOOYkRzLmE%2Fg8oz9eUxR9xjvkn%2BhWnnbHXuXQM8uZrskxQKqR6RlOu5V7QOlqQJL5BG7oSb5NzFH3VrdGCMvINxiNNebjMuJJ336mNuBUz1T0ZzmHMB80gt9H1Hj3UBt6gnOunoUmCspxM5fOJiUuQdpKOKOd0qQa1xf%2Bgbre0iaqwvxxSZb8bPsF%2BtdhH8JconcNblau5vfpytvUGluX8xmoo4ZiliOOR0KHckLnyPX9cDPuGGMLwpowBkbkUEQaCOKYJZdCf0kLoSJI0ulBC5ik0EzwT0wSXCIQCl6p7SeJYWuEczABJ5zdy2FWw7fmoSCK6KEyfJdLjL2Ai6IE%2FyihJuaRROIK%2FQLWxcxF2QnjWMbTdbRv%2BiuGMj2kKj4%2BIFCsMUrnGQjLBE3DE0bTUGVMAn9Te3QL4nRLXFIGD2RvTUnNpVV55fXBe907N66HB61WO2SMO5JXhP83w4akZ7pr5wxW8%2BfVDRhgQvTP2OyP%2FlfOH57zrnZr1Pdfg6xHyH%2FxA%2BF9iOvCjaH2pXLnSQaBsbH4ottuZM7n75kyBuuOZ5Ez6uWs5Uy8RUruCH3MuSVV0TCsdf68ExDH6b3IPtweFvhwKeITAf0AJQAdyLNXcRR0hk3q4vhM86rR5d%2BirrNgUoiQhWY5Pl7JpBOiJGNrVwl9L2drSNO8kSANQlW3%2B0vokGl%2B2eieaW2WTrba0rbentnlnpm1mni1ioVvM7kmEZySN76A52lwvEUkM%2Fm655%2B5WBJl%2BF2x04YVH8wRyeMWNwsdq6FPm2xrHbDPt9Z2gpkR%2BYFEiWyYatBapmLFpLjLn6SqPhOWSuPcqXyFGqCAJBCDAETBTTkQZw%2FSxIKbCBx2nREBMiHqfiFQkRlGJEuoBiIgxhD7miqffESq1xU9vWDeK%2FsDCz6GFn63BWGF4CqN4YONWbonsNG7%2BWRk3zwz7QUIh0hbvUmT3PbQUZiqd5pnNy%2F%2FqBi7060ib1cD1jmngdNjyKAL%2BMzFA2dgvBpCtD5gReDVhCdsIDPbeugh756U7ZhgeMYw4NpH3CWUiSHh2yhMMwpryBH1LMhseU3k8M1q7u%2Fv96oKhNKZL8fPN2wtOb6WRe%2FPWZtFUPHCq%2FdGmPXL3dNCt4QOeGXAJOV%2FSXEdbylM44jUSEXRFEH3FeoS4Mro6MzIHw7rkhhYyHxeGsezg4%2FSeKCoWYayOYIHsOAKVT0n0aDx7IsL26%2FlCYHGnnnNMugYmbHnUpHvrY7%2FUXOxRkm69278b4vLOyrfq567aHAnUriK%2Bdasq5X7mEWoDxrL6WPeYPtY3A5%2BCEQ6KUcYtcc5pTZLvN22SWbtxVI%2Fa805rkk6KAwb7psrueYX7gemfP%2BFlBktj0wQp8J3tQt8N4H2Luj9vK3b6NFt7vPouSo2PDPMVs0AgTrPrHU4hR47AM2XgpfBzZ17Psbkgy05Ke8wzq44YzhhEBinYFWkT8myFcy4QYSRuFyVEoLmyNs7unV4GANxvsNKmh8fFfwOLHjY4BEKeiZ9kKavEq6xqcoYLb1j23qApTj4A%2FTmh4upUlQqOEnFhhKKvc6mbmvgdz5%2FJPzBELnaZZ0U1u2Au0o0ZeRDaPFLPc7XgXJTBXwpKeJMoToMLyMxSsTmE2UUEK3qTGAlhnIh%2BSOgm%2BJ4kXdnoiu2kLhGSNhM2wZv0gCQTmDyHftcbXGQCj21HHNyeX5MHW%2BlRr2%2BKg%2B47uDjo6PaR2Ehpx%2BHKDzrb4oNtKYK9%2FEA0WsZCw303Sc%2BsjDs0YTeDjTt1cqdWG2Z5pzEFfXac0fXEKzylNCLLh7k4InOBvq0YvljiPC%2BMijTdmF3f48KCt5qSBM2kzkxJjlsEZFrhTwrV4ziNmYxYXUsoxAkEwQKSioVWLEkK4cjL9rBNBDfwTN5aIbD2TgqY2vkeEnadvnzEmdBGqlZ6sYxrbGZYt8ZtStka31wvOI4z%2FEFk4Bi7g%2F3%2Bnh7R1S7nTFyi6z1d2HAo5p2M3meGz%2FTNlLCsAjK8VtTEXZ5Zwu43jlkOQ4stO27ZlnucwP7A6qBT4Z3qoMXvTLRBP3dFGywHAp%2Bb2OujvE9JvY60jyP1jskHjQ4L%2BtXIr7FfcaFbxEXiIKc7yB5q5dgSUcZpIsECgXTJcwqR2HcxDVtZqF0s90it9ouK87zG4cqBDc60YdHtBXqODYz%2B1UEwdycItkBr9UvgGZPecBgGQ4mKdb2gC1LQVSgYR1nbSJjnhTulQn%2BsoHZaYNiaxzxy9P%2BdtYEH9rSusy%2F25TqDs%2FK15ZNXi86yWG4Mlsfwn32Zgt%2Bwqq5r875H3eIrBaVa3ozu8ZYnz4wHGpU%2FIxZYDpbqckGSQieJLfnZS45OwmbqZqn3OeoGnWs5b6hZ%2BMpAS2lp41MhrmOpLbXl3i1yMLSElw2eBc6fgpmP2sYXxUMvqG%2BL2i2prequRTD46dOjB98ZPeHB7L3Pipah17mEgpbToj9SJTZGy6k8vvhyCsSakKXrnAFmafs6WcG1PEOpFb2JCgslkBs2n76BZxOfoejIHT%2F96634KYFoifXM0JIkm2JOKSUdWbcKXMPJPRZm1bhSv0kFMPIEYFS7VjyluJhStpQFUZXLa0VMcT0onlNeTMBQQPKtPr5hnS%2B8Qldk%2BKma71TWlhdBfNN8BrP0%2FBSXA4Sjqd%2B%2BOn1aIhPdBlE98dk4RUxPbKXr32GFtDHJQe8UWUmakMrCs4QiXn2gJrwmfaGsJHvkGGSJqxWC8DSutkMbDUfalo71w4s6yDG0fHjGmiC09%2BEZjXRVdOyGzokJTlcItl%2FdR3941dMoVwX%2BMsKVJj5Whi17VqE0jSldcSFs4%2FJLqE6n%2FILNJ%2BmFuz01rfK8E%2FlHjPyKebTQ0xpFK%2FCQeImyi0SSqMVMspFKDm11grYihl57gmKmIa%2BCcnpBcbyGTXEt9S6uX46qCku%2FPWHZoyDtGQLq01UOApXn3WAAHnIic4aJ57eNnRt%2BBfKlviEEnuXzqLqvBQkwj61e5xEjUxEFpHj9muhawQrXdt7Y9kHm9hJdvVrtJGxEY7HB%2BQo0bXnnuk241xLNHXcf07cCTTJUjsm9NV%2BSSYLikojHFaOMiHxn4mXNgh67i9p8n6GofpNqttWYqhMB%2B4b6I%2FlA2S1f%2F6eyhGr00OqXrhunfaxVFN5hcgRobj%2B8L69V%2FvcF%2FvU%2F"
                  width="100%"
                  height="500px">
                </iframe>
              </a>
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
  margin-top: 1rem;
}
.sub {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  margin-top: 1rem;
}
.diagram {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.imagen {
  margin-top: 2rem;
  margin-bottom: 1rem;
}
.imgjwt{
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
</style>