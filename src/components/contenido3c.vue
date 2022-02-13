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

    

    <v-card-title>Concepto de alquinos  </v-card-title>

    <v-divider class="mx-4"></v-divider>
    <p> A estos también los puedes llamar hidrocarburos insaturados, son cadenas alifáticas de carbonos que pueden presentar uno, dos o más triples enlaces. Los triples enlaces se forman al deshidrogenar dos átomos de carbono que ya están enlazados entre sí por un doble enlace. Se nombran utilizando los prefijos usados anteriormente y la terminación ino, por ejemplo: propino, pentino o nonino.</p>
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
              <p>•	C2H2: etino (acetileno)</p>
    
    <p>•	C4H6: butino</p>
   
    <p>•	C7H10: Heptino</p></div>
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
             <p>En este caso, el etino tiene 2 átomos de carbono y 2 de hidrógeno, además al etino también se le conoce como acetileno. El butino tiene 4 átomos de carbono y 6 de hidrógeno, finalmente el heptino tiene 7 átomos de carbono y 10 de hidrógeno.</p>
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
            <router-link :to="{ name: 'contenido3b' }" class="noneline">
              <v-btn class="ma-1" outlined large fab color="indigo">
                <v-img
                  max-height="20"
                  max-width="20"
                  src="https://i.ibb.co/vXhhW6t/angulo-doble-izquierda.png"
                ></v-img>
              </v-btn>
              </router-link>
              <router-link :to="{ name: 'contenido3b' }" class="noneline">
              <v-btn text color="primary"> Anterior </v-btn>
              </router-link>
            </div>

            <div>
             <router-link :to="{ name: 'contenido4' }" class="noneline">
              <v-btn class="ma-1" outlined large fab color="indigo">
                <v-img
                  max-height="20"
                  max-width="20"
                  src="https://i.ibb.co/F6t4Jcm/angulo-doble-derecha.png"
                ></v-img>
              </v-btn>
              </router-link>
               <router-link :to="{ name: 'contenido4' }" class="noneline">
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