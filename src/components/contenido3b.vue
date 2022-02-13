<template>
  <div class="" style="border: 1px solid powderblue">
    <v-row>
      <v-col>
        <v-card class="mx-auto" max-width="690" max-height="410">
       <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="594"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    

    <v-card-title>Concepto de alquenos </v-card-title>

    <v-divider class="mx-4"></v-divider>
    <p>También los pueden nombrar hidrocarburos insaturados, son cadenas alifáticas de carbonos que pueden presentar uno, dos, o más dobles enlaces. Estos dobles enlaces son consecuencia de la pérdida de hidrógenos por la molécula, que para equilibrarse energéticamente establece dobles enlaces entre los átomos de carbono. Su notación en química orgánica utiliza los prefijos mostrados anteriormente y la terminación eno, así ejemplos de alquenos son: buteno, penteno y octeno. El número de átomos de hidrógeno puede calcularse en función del número de átomos de carbono en la molécula.</p>
     <v-row>
     <v-col cols="auto">
      <v-dialog
        transition="dialog-top-transition"
        max-width="600"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            v-bind="attrs"
            v-on="on"
          >Ejemplos</v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="primary"
              dark
            >Ejemplos</v-toolbar>
            <v-card-text>
              <div class="text-h2 pa-6"> 
              <p>•	C2H4: eteno</p>
    
    <p>•	C4H8: buteno</p>
   
    <p>•	C8H18: octeno</p></div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
    <v-col cols="auto">
      <v-dialog
        transition="dialog-top-transition"
        max-width="600"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            v-bind="attrs"
            v-on="on"
          >Explicación</v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="primary"
              dark
            >Explicación de ejemplos</v-toolbar>
            <v-card-text>
              <div class="text-h4 pa-6"> 
             <p>En el ejemplo anterior, se observa que el eteno tiene 2 átomos de carbono y 4 de hidrógeno, el buteno tiene 4 átomos de carbono y 8 átomos de hidrógeno, finalmente el octeno tiene 8 átomos de hidrógeno y 16 de hidrógeno.</p>
            </div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
   
   </v-row>

    

    
   
  </v-card>
  
      


      
        </v-card>

        <v-card :loading="loading" class="mx-auto my-12" max-width="320">
          <v-card-actions>
            <div>
            <router-link :to="{ name: 'contenido3a' }" class="noneline">
              <v-btn class="ma-1" outlined large fab color="indigo">
                <v-img
                  max-height="20"
                  max-width="20"
                  src="https://i.ibb.co/vXhhW6t/angulo-doble-izquierda.png"
                ></v-img>
              </v-btn>
              </router-link>
              <router-link :to="{ name: 'contenido3a' }" class="noneline">
              <v-btn text color="primary"> Anterior </v-btn>
              </router-link>
            </div>

            <div>
             <router-link :to="{ name: 'contenido3c' }" class="noneline">
              <v-btn class="ma-1" outlined large fab color="indigo">
                <v-img
                  max-height="20"
                  max-width="20"
                  src="https://i.ibb.co/F6t4Jcm/angulo-doble-derecha.png"
                ></v-img>
              </v-btn>
              </router-link>
              <router-link :to="{ name: 'contenido3c' }" class="noneline">
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
