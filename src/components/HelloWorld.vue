<template>
  <div>
    <v-container fluid class="d-flex header align-center">
      <v-row>
        <v-col cols="7" class="text-center justify-center">
          <div>
            <img src="../assets/Boogie Burger header.png" contain alt="" />
          </div>

          <v-btn class="ma-2" x-large outlined color="primary">
            Voir nos menus
          </v-btn>
        </v-col>
        <v-col cols="5">
          <v-spacer></v-spacer>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="news py-13">
      <v-row no-gutters class="justify-center text-center">
        <v-col class="py-5" cols="4">
          <img contain src="../assets/banniere-Frites-maison.jpg" alt=""
        /></v-col>
        <v-col class="py-5" cols="4">
          <img contain src="../assets/NOUVEAU-veggie-burger.jpg" alt=""
        /></v-col>
        <v-col cols="12" class="justify-center" color="black">
          <img src="../assets/Banniere-Ice-Cream.jpg" alt="" />
        </v-col>
      </v-row>
      <v-row class="justify-center my-12">
        <v-hover v-slot="{ hover }"
          ><v-btn
            class="select text-lg-h6 font-weight-bold"
            :style="{ color: hover ? '#F57C00' : 'white' }"
            plain
            >Nos menus</v-btn
          ></v-hover
        >
        <v-hover v-slot="{ hover }"
          ><v-btn
            class="select text-lg-h6 font-weight-bold"
            :style="{ color: hover ? '#F57C00' : 'white' }"
            plain
            >Burger</v-btn
          ></v-hover
        >
        <v-hover v-slot="{ hover }"
          ><v-btn
            class="select text-lg-h6 font-weight-bold"
            :style="{ color: hover ? '#F57C00' : 'white' }"
            plain
            >Glace</v-btn
          ></v-hover
        >
        <v-hover v-slot="{ hover }"
          ><v-btn
            class="select text-lg-h6 font-weight-bold"
            :style="{ color: hover ? '#F57C00' : 'white' }"
            plain
            >Boisson</v-btn
          ></v-hover
        >
      </v-row>
      <v-row class="justify-center">
        <v-col cols="12" xl="2" lg="2" md="2" sm="4" class="text-center">
          <v-card>
            <img src="../assets/logo.png" alt="" />
            <v-card-title>Cheese burger</v-card-title>
            <v-card-text>
              <v-row align="center">
                <v-col cols="12">
                  Smashburger looks for unique flavors & ingredients to build
                  our local burgers.</v-col
                >
                <v-row class="my-1 align-center justify-center">
                  <v-col cols="7" class="justify-center align-center">
                    <h1 class="primary--text">9,99€</h1>
                  </v-col>

                </v-row>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" xl="2" lg="2" md="2" sm="4" class="text-center">
          <v-card>
            <img src="../assets/logo.png" alt="" />
            <v-card-title>Burger farmer</v-card-title>
            <v-card-text>
              <v-row align="center">
                <v-col cols="12">
                  Smashburger looks for unique flavors & ingredients to build
                  our local burgers.</v-col
                >
                <v-row class="my-1 align-center justify-center">
                  <v-col cols="7" class="justify-center align-center">
                    <h1 class="primary--text">10,99€</h1>
                  </v-col>

                </v-row>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" xl="2" lg="2" md="2" sm="4" class="text-center">
          <v-card>
            <img src="../assets/logo.png" alt="" />
            <v-card-title>Bacon burger</v-card-title>
            <v-card-text>
              <v-row align="center">
                <v-col cols="12">
                  Smashburger looks for unique flavors & ingredients to build
                  our local burgers.</v-col
                >
                <v-row class="my-1 align-center justify-center">
                  <v-col cols="7" class="justify-center align-center">
                    <h1 class="primary--text">11,99€</h1>
                  </v-col>

                </v-row>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" xl="2" lg="2" md="2" sm="4" class="text-center">
          <v-card>
            <img src="../assets/logo.png" alt="" />
            <v-card-title>Mexican burger</v-card-title>
            <v-card-text>
              <v-row align="center">
                <v-col cols="12">
                  Smashburger looks for unique flavors & ingredients to build
                  our local burgers.</v-col
                >
                <v-row class="my-1 align-center justify-center">
                  <v-col cols="7" class="justify-center align-center">
                    <h1 class="primary--text">12,99€</h1>
                  </v-col>
                  
                </v-row>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="py-10">
        <!-- -----------------------------------------------
            Start Form Banner1
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" class="d-flex justify-center align-center">
            <div class="text-center py-9">
              <h2 class="text-lg-h3 font-weight-bold">
                Inscrivez-vous à notre newsletter!
              </h2>
              <p class="mt-9 pt-4 text-lg-h6">
                Recevez les dernières nouveautés, ainsi que les promotions.
              </p>
              <div class="mt-9 pt-2">
                <form>
                  <div class="d-flex ">
                    <v-text-field
                      placeholder="Enter Email Address"
                      outlined 
                    ><template slot="append">
                    <v-btn
                    
        
                      color="primary"
                      class="text-uppercase font-weight-medium"
                      
                    >
                      Envoyer
                    </v-btn>
                     </template></v-text-field>
                    
                  </div>
                </form>
              </div>
            </div>
          </v-col>
          
        </v-row>

        <!-- -----------------------------------------------
            End Form Banner1
        ----------------------------------------------- -->
      </v-container>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({}),
};
</script>
<style scoped>
.header {
  background-image: url("../assets/header\ boogie\ burger.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  height: 90vh;
}

.news {
  background-color: #131519;
  background-size: cover;
}

/** filter gallery */
.select {
  color: white;
}
.select:hover {
  color: "#F57C00";
}

</style>
