<template>
  <div class="" style="border: 1px solid powderblue">
    <v-row>
      <v-col>
        <v-card class="mx-auto" max-width="690" max-height="410">
        <div>
    <div class="d-flex">
   
    </div>
 <v-card
    class="mx-auto"
    max-width="780"
  >
    <v-img
      class="white--text align-end"
      height="400px"
      src="https://i.ibb.co/wSxmhGt/1.jpg"
    >
      <v-card-title><h2>¿Qué son los alquenos y alquinos?</h2></v-card-title>
    </v-img>



    <v-card-text class="text--primary">
      <div>Quimica Organica</div>

      <div>Hidrocarburos</div>
    </v-card-text>

   
  </v-card>
    
  </div>
      


      
        </v-card>

        <v-card :loading="loading" class="mx-auto my-12" max-width="320">
          <v-card-actions>
        

            <div>
             <router-link :to="{ name: 'contenido3a' }" class="noneline">
              <v-btn class="ma-1" outlined large fab color="indigo">
                <v-img
                  max-height="20"
                  max-width="20"
                  src="https://i.ibb.co/F6t4Jcm/angulo-doble-derecha.png"
                ></v-img>
              </v-btn>
              </router-link>
              <router-link :to="{ name: 'contenido3a' }" class="noneline">
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
