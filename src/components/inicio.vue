<template>
  <div class="colorf">
    <v-container fluid>
      <v-row>
        <v-col cols="11">
          <br />

          <v-hover>
            <br />
            <v-card
              slot-scope="{ hover }"
              class="mx-4"
              color="grey lighten-4"
              width="1100"
            >
              <v-img
                :aspect-ratio="19 / 9"
                src="https://i.ibb.co/z21PZRs/327.jpg"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out blue darken-2 v-card--reveal display-3 white--text"
                    style="height: 100%"
                  >
                    Bienvenido
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text class="pt-4" style="position: relative">
                <div class="text-center">
                  <router-link :to="{ name: 'contenido3' }" class="noneline">
                    <v-btn
                      class="ma-2"
                      rounded
                      absolute
                      width="190"
                      color="pink"
                      dark
                      fab
                      large
                      right
                      top
                    >
                      Iniciar
                    </v-btn>
                  </router-link>
                </div>
                <v-row>
                  <v-col>
                    <v-img
                      max-height="50"
                      max-width="50"
                      src="https://i.ibb.co/89qnzBh/fisica.gif"
                    ></v-img>
                    <v-col>
                      <h1 class="fuente" justify="center">
                        Alquenos y alquinos
                      </h1>
                    </v-col>
                  </v-col>
                  <v-col>
                    <v-img
                      max-height="50"
                      max-width="50"
                      src="https://i.ibb.co/51Dxst0/matraz.gif"
                    ></v-img>
                  </v-col>
                </v-row>
                
              
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
       <v-col>
     
        
          <v-row>
            <v-img
              max-height="90"
              max-width="90"
              src="https://i.ibb.co/8z4SKF0/quimico.png"
            ></v-img>
          </v-row>
          <br>
          <br>
          <br>
          <v-row>
            <v-img
              max-height="90"
              max-width="90"
              src="https://cdn-icons-png.flaticon.com/256/4819/4819821.png"
            ></v-img>
          </v-row>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <v-row>
            <v-img
              max-height="90"
              max-width="90"
              src="https://cdn-icons-png.flaticon.com/128/2759/2759166.png"
            ></v-img>
          </v-row>
        
       </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
.colorf {
  background-color: #076269;
}
.div1 {
  background-image: url("https://i.ibb.co/z21PZRs/327.jpg");
}
.fuente {
  color: black;
}
</style>
