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

            <v-card-title>Cuadro comparativo Alquenos y Alquinos</v-card-title>

            <v-divider class="mx-4"></v-divider>
            <table>
              <tr>
                <th>Alquenos</th>

                <th>Alquinos</th>
              </tr>

              <tr>
                <td>Son hidrocarburos</td>

                <td>Son hidrocarburos</td>
              </tr>
              <tr>
                <td>Poseen entre dos de sus carbonos enlace doble</td>

                <td>Poseen entre dos de sus carbonos enlace doble</td>
              </tr>
              <tr>
                <td>
                  Los carbonos que sostienen el doble enlace tienen hibridación
                  sp2
                </td>

                <td>
                  Los carbonos que sostienen el doble enlace tienen hibridación
                  sp
                </td>
              </tr>
              <tr>
                <td>Su estructura general: R- CH=CH-R</td>

                <td>Su estructura general: R- C = C-R</td>
              </tr>
              <tr>
                <td>Fórmula General: Cn H2n</td>

                <td>Fórmula General: Cn H2n-2</td>
              </tr>
              <tr>
                <td>Terminación en sus nombres: ENO</td>

                <td>Terminación en sus nombres: INO</td>
              </tr>
              <tr>
                <td>Clasificación: Lineales y Ramificados</td>

                <td>Clasificación: Lineales y Ramificados</td>
              </tr>
              <tr>
                <td>Llevan a cabo reacciones de adición</td>

                <td>Llevan a cabo reacciones de adición</td>
              </tr>
            </table>
          </v-card>
        </v-card>

        <v-card :loading="loading" class="mx-auto my-12" max-width="320">
          <v-card-actions>
            <div>
              <router-link :to="{ name: 'contenido4' }" class="noneline">
                <v-btn class="ma-1" outlined large fab color="indigo">
                  <v-img
                    max-height="20"
                    max-width="20"
                    src="https://i.ibb.co/vXhhW6t/angulo-doble-izquierda.png"
                  ></v-img>
                </v-btn>
              </router-link>
              <router-link :to="{ name: 'contenido4' }" class="noneline">
                <v-btn text color="primary"> Anterior </v-btn>
              </router-link>
            </div>

            <div>
              <router-link :to="{ name: 'contenido6' }" class="noneline">
                <v-btn class="ma-1" outlined large fab color="indigo">
                  <v-img
                    max-height="20"
                    max-width="20"
                    src="https://i.ibb.co/F6t4Jcm/angulo-doble-derecha.png"
                  ></v-img>
                </v-btn>
              </router-link>
              <router-link :to="{ name: 'contenido6' }" class="noneline">
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
