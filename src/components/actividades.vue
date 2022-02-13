<template>
  <div class="" style="border: 1px solid powderblue">
    <v-row>
      <v-col>
        <v-card class="mx-auto" max-width="730" max-height="600">

    <template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

   



    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
    

   
      </v-row>

      
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
    <v-card-actions>
     <div> <v-btn
      class="ma-2"
      outlined
      large
      fab
      color="indigo"
    >
    
       <v-img
              max-height="40"
              max-width="40"
              src="https://i.ibb.co/vXhhW6t/angulo-doble-izquierda.png"
            ></v-img>
      
    </v-btn>
     <v-btn
      text
      color="primary"
    >
    
   
      Anterior
    </v-btn></div>
   
     <div> <v-btn
      class="ma-2"
      outlined
      large
      fab
      color="indigo"
    >
    
      <v-img
              max-height="40"
              max-width="40"
              src="https://i.ibb.co/F6t4Jcm/angulo-doble-derecha.png"
            ></v-img>
    </v-btn>
     <v-btn
      text
      color="primary"
    >
    
   
      Siguiente
    </v-btn></div>
    </v-card-actions>

    <v-card-actions>
    
    </v-card-actions>
  </v-card>
</template>


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
  data(){
    return{
      palabras: [],
    }
  },
}



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