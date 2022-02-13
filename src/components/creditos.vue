<template>
  <div class="" style="border: 1px solid powderblue">
    <v-row>
      <v-col>
        <v-card class="mx-auto" width="930" max-height="800">
          <v-card class="mx-auto" max-width="900">
            <v-img
              class="white--text align-end"
              height="120px"
              src="https://i.ibb.co/6HxZYGX/Copia-de-Mediaciones-4.png"
            >
            </v-img>

            <v-card-subtitle class="pb-0">
              <center><h3>Equipo de trabajo</h3></center>
            </v-card-subtitle>

            <v-card-text class="text--primary">
              <v-card class="mx-auto" max-width="704" outlined>
                <h3>Isaac Daniel Tordecilla Feria</h3>
                <h7> (itordecillaferia46@correo.unicordoba.edu.co)</h7>
              </v-card>
              <v-card class="mx-auto" max-width="704" outlined>
                <h3>Mara Sofía Torres Ortega</h3>
                <h7> (mstorresortega@correo.unicordoba.edu.co)</h7>
              </v-card>
              <v-card class="mx-auto" max-width="704" outlined>
                <h3>Yarlis Xilene García Chica</h3>
                <h7> (ygarciachica07@correo.unicordoba.edu.co)</h7>
              </v-card>
              <v-card class="mx-auto" max-width="704" outlined>
                <h3>Yeison Pacheco Rangel</h3>
                <h7> (ypachecorangel15@correo.unicordoba.edu.co)</h7>
              </v-card>
              <v-card class="mx-auto" max-width="704" outlined>
                <h3>Tatiana Jeronimo Montiel</h3>
                <h7> (tjeronimomontiel68@correo.unicordoba.edu.co)</h7>
              </v-card>

              <v-card-subtitle class="pb-0">
                <center><h3>Docente</h3></center>
              </v-card-subtitle>
              <v-card class="mx-auto" max-width="704" outlined>
                <h3>Johana Milena Meza Fernández</h3>
                <h7> (johanameza@correo.unicordoba.edu.co)</h7>
              </v-card>
            </v-card-text>

            <v-col
              class="primary lighten-2 py-4 text-center white--text"
              cols="12"
            >
              {{ new Date().getFullYear() }} —
              <strong>Universidad De Córdoba</strong>
            </v-col>
          </v-card>
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
