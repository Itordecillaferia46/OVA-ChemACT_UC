<template>
  <v-app>
    <div class="colorfondo">
      <v-container fluid>
        <v-card class="overflow-hidden">
          <v-app-bar
            absolute
            color="#0B19EE"
            dark
            height="100"
            scroll-target="#scrolling-techniques-2"
          >
            <template v-slot:img="{ props }">
              <v-img
                v-bind="props"
                gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
              ></v-img>
            </template>

            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-app-bar-title
              ><h4>Alquenos y alquinos</h4>
              <h6>Unidad didactica N°1</h6></v-app-bar-title
            >

            <v-spacer></v-spacer>
           

            <v-btn  icon onclick="location.href='https://es.khanacademy.org/science/organic-chemistry/alkenes-alkynes'">
               <v-img
                    max-height="40"
                    max-width="40"
                    src="https://i.ibb.co/fQCJpZs/add.png"
                  ></v-img>
            </v-btn>
       

          
          </v-app-bar>
          <v-sheet max-height="700">
            <v-container style="height: 1000px">
              <br />
              <br />
              <br />
              <br />
              <br />

              <div>
                <v-row>
                  <v-col cols="3">
                    <div>
                      <v-card class="mx-auto" max-width="600" outlined>
                        <v-card class="mx-auto" max-width="400" outlined>
                          <v-card-text class="pb-2">
                            <v-row>
                              <v-col>
                                <h2>Menú de navegación:</h2>
                              </v-col>
                              <v-col>
                              <div>
                                <router-link :to="{ name: 'contenido3' }" class="noneline">
                                  <v-btn color="error" dark  width="220">
                                    <v-img
                                      max-height="22"
                                      max-width="22"
                                      src="https://i.ibb.co/PcrDRc8/libro-alt.png"
                                    ></v-img>

                                   Inicio
                                  </v-btn>
                                  </router-link>
                                </div>
                                <br>
                                <div>
                                <router-link :to="{ name: 'contenido1' }" class="noneline">
                                  <v-btn color="primary" dark  width="220">
                                    <v-img
                                      max-height="22"
                                      max-width="22"
                                      src="https://i.ibb.co/NSq4LjS/pelicula.png"
                                    ></v-img>

                                    Multimedia
                                  </v-btn>
                                  </router-link>
                                </div>
                              </v-col>
                            </v-row>
                          </v-card-text>
                          <br />
                          <v-card-text class="text--primary" max-width="344">
                            <div>
                            <router-link :to="{ name: 'act1' }" class="noneline">
                              <v-btn color="success" dark  width="220"> 
                              <v-img
                                      max-height="22"
                                      max-width="22"
                                      src="https://i.ibb.co/gj1hJMd/lista-de-verificacion.png"
                                    ></v-img>
                                    Actividades </v-btn>
                                    </router-link>
                            </div>
                            <br />
                            <div>
                              <v-btn color="warning"  dark width="220" onclick="location.href='https://drive.google.com/drive/folders/1-aJ7T6dEsqlJIOln7RwSjNfqAYCHBP7v?usp=sharing'" >
                                <v-img
                                      max-height="22"
                                      max-width="22"
                                      src="https://i.ibb.co/4M00GDP/anadir.png"
                                    ></v-img> Anexos </v-btn>
                            </div>
                                        
  
                          </v-card-text>
                          <br />
                          <br />
                          <br />

                          <v-card-actions>
                          <router-link :to="{ name: 'creditos' }" class="noneline">
                            <v-btn color="primary" text> Creditos </v-btn>
                            </router-link>

                            <v-btn color="orange" text onclick="location.href='https://classroom.google.com/c/NDU5MzEwNjg3NzEz?cjc=vyi3sdq'"> Explore </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-card>
                    </div>
                  </v-col>

                  <v-col cols="9">
                    <div style="border: 0px solid powderblue">
                      <router-view></router-view>
                    </div>
                    <br />
                    <br />
                    <h1></h1>
                  </v-col>
                </v-row>
              </div>
            </v-container>
          </v-sheet>
        </v-card>
        <div class="screen">
          <!-- code -->
          <div class="innerdiv"></div>
        </div>
      </v-container>
    </div>
  </v-app>
</template>
<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<script></script>
<style>
.divbarrios {
  border-radius: 1rem;
}
.colorfondo {
  background-color: #076269;
}
.div-select {
  height: 30px;
  width: 65px;
  border-radius: 0.5rem;
}
.screen {
  position: relative;
}
.innerdiv {
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
