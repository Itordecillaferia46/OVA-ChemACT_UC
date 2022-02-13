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

            <v-col>
              <v-img
                max-height="310"
                max-width="660"
                src="http://quimicaonline.net/wp-content/uploads/2020/08/Alquenos-1-1024x577.png"
              ></v-img>
            </v-col>
          </v-card>
        </v-card>

        <v-card :loading="loading" class="mx-auto my-12" max-width="320">
          <v-card-actions>
            <div>
              <router-link :to="{ name: 'contenido5' }" class="noneline">
                <v-btn class="ma-1" outlined large fab color="indigo">
                  <v-img
                    max-height="20"
                    max-width="20"
                    src="https://i.ibb.co/vXhhW6t/angulo-doble-izquierda.png"
                  ></v-img>
                </v-btn>
              </router-link>
              <router-link :to="{ name: 'contenido5' }" class="noneline">
                <v-btn text color="primary"> Anterior </v-btn>
              </router-link>
            </div>

            <div>
              <router-link :to="{ name: 'contenido7' }" class="noneline">
                <v-btn class="ma-1" outlined large fab color="indigo">
                  <v-img
                    max-height="20"
                    max-width="20"
                    src="https://i.ibb.co/F6t4Jcm/angulo-doble-derecha.png"
                  ></v-img>
                </v-btn>
              </router-link>
              <router-link :to="{ name: 'contenido7' }" class="noneline">
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
