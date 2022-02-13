<template>
  <div class="" style="border: 1px solid powderblue">
    <v-row>
      <v-col>
        <v-card class="mx-auto" max-width="690" max-height="410">
          <v-card :loading="loading" class="mx-auto my-12" max-width="594">
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-card-title> ¿Sabias que...?</v-card-title>

            <v-divider class="mx-4"></v-divider>

            <v-row>
              <v-col>
                <v-img
                  max-height="160"
                  max-width="160"
                  src="https://i.ibb.co/ZN93VpR/pregunta.png"
                ></v-img>
              </v-col>
              <v-col>
                <p>
                  ...los alquenos y alquinos presentan propiedades similares a
                  los alcanos. Son poco polares y sus temperaturas de ebullición
                  dependen de las fuerzas de Van der Waals. Los alquenos se
                  obtienen principalmente del “cracking” del petróleo y también
                  a partir de reacciones de eliminación de otros compuestos
                  orgánicos.
                </p>
              </v-col>
            </v-row>
          </v-card>
        </v-card>

        <v-card :loading="loading" class="mx-auto my-12" max-width="320">
          <v-card-actions>
            <div>
              <router-link :to="{ name: 'contenido7' }" class="noneline">
                <v-btn class="ma-1" outlined large fab color="indigo">
                  <v-img
                    max-height="20"
                    max-width="20"
                    src="https://i.ibb.co/vXhhW6t/angulo-doble-izquierda.png"
                  ></v-img>
                </v-btn>
              </router-link>
              <router-link :to="{ name: 'contenido7' }" class="noneline">
                <v-btn text color="primary"> Anterior </v-btn>
              </router-link>
            </div>

            <div>
              <router-link :to="{ name: 'contenido1' }" class="noneline">
                <v-btn class="ma-1" outlined large fab color="indigo">
                  <v-img
                    max-height="70"
                    max-width="70"
                    src="https://i.ibb.co/k5x7CVd/video.gif"
                  ></v-img>
                </v-btn>
              </router-link>
              <router-link :to="{ name: 'contenido1' }" class="noneline">
                <v-btn text color="primary"> Siguiente </v-btn>
              </router-link>
            </div>
          </v-card-actions>

          <v-card-actions> </v-card-actions>
        </v-card>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </v-col>
    </v-row>
  </div>
</template>

<script>
// const axios = require('axios');

export default {
  data() {
    return {
      palabras: [],
    };
  },
};
</script>

<style scoped>
.degrade {
  background: radial-gradient(200px top, ellipse, white, #1162ac, black);
}
.borB {
  height: 170px;
  width: 250px;
  border-radius: 1rem;
  height: 100px;
  width: 175px;
}
.contenedormap1 {
  height: 600px;
  width: 1100px;
}
</style>
