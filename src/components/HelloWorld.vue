<template>
  <div id="app">
    <v-container fluid class="d-flex header justify-center align-center">
      <v-row class="text-center align-center justify-center">
        <v-col
          cols="12"
          xl="7"
          lg="7"
          md="5"
          sm="6"
          class="text-center justify-center"
        >
          <div class="justify-center">
            <img
              src="../assets/Boogie Burger header.png"
              aspect-ratio="16/9"
              class="header-img"
              alt=""
            />
          </div>

          <v-btn v-bind="size" class="ma-2" x-large outlined color="primary">
            Voir nos menus
          </v-btn>
        </v-col>
        <v-col cols="12" xl="5" lg="5" md="7" sm="7">
          <v-spacer></v-spacer>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="news py-13">
      <v-row class="justify-center text-center">
        <v-col class="d-flex child-flex" cols="12" xl="4" lg="4" md="3" sm="6">
          <img
            contain
            aspect-ratio="2"
            max-width="500"
            min-width="200"
            src="../assets/banniere-Frites-maison.jpg"
            alt=""
        /></v-col>
        <v-col class="d-flex child-flex" cols="12" xl="4" lg="4" md="3" sm="6">
          <img
            contain
            aspect-ratio="1"
            max-width="500"
            src="../assets/NOUVEAU-veggie-burger.jpg"
            alt=""
        /></v-col>
        <v-col
          class="d-flex child-flex"
          cols="12"
          xl="8"
          lg="8"
          md="10"
          sm="12"
          color="black"
        >
          <img
            contain
            max-width="500"
            src="../assets/Banniere-Ice-Cream.jpg"
            alt=""
          />
        </v-col>
      </v-row>
      <v-row class="justify-center my-12">
        <v-hover v-slot="{ hover }"
          ><v-btn
            v-bind="size"
            v-bind:class="{ active: currentFilter === 'menu' }"
            v-on:click="setFilter('menu')"
            class="filter select text-lg-h6 font-weight-bold"
            :style="{ color: hover ? '#F57C00' : 'white' }"
            plain
            >Nos menus</v-btn
          ></v-hover
        >
        <v-hover v-slot="{ hover }"
          ><v-btn
            v-bind="size"
            v-bind:class="{ active: currentFilter === 'burger' }"
            @click="setFilter('burger')"
            class="filter select text-lg-h6 font-weight-bold"
            :style="{ color: hover ? '#F57C00' : 'white' }"
            plain
            >Burger</v-btn
          ></v-hover
        >
        <v-hover v-slot="{ hover }"
          ><v-btn
            v-bind="size"
            v-bind:class="{ active: currentFilter === 'glace' }"
            @click="setFilter('glace')"
            class="filter select text-lg-h6 font-weight-bold"
            :style="{ color: hover ? '#F57C00' : 'white' }"
            plain
            >Glace</v-btn
          ></v-hover
        >
        <v-hover v-slot="{ hover }"
          ><v-btn
            v-bind="size"
            v-bind:class="{ active: currentFilter === 'boisson' }"
            @click="setFilter('boisson')"
            class="filter select text-lg-h6 font-weight-bold"
            :style="{ color: hover ? '#F57C00' : 'white' }"
            plain
            >Boisson</v-btn
          ></v-hover
        >
      </v-row>

      <v-container>
        <v-row class="justify-center">
          <v-col
            cols="6"
            xl="3"
            lg="3"
            md="4"
            sm="6"
            class="text-center d-flex child-flex"
            v-for="project in projects"
            v-bind:key="project.title"
          >
            <div
              class="d-flex project justify-center"
              v-if="
                currentFilter === project.category || currentFilter === 'ALL'
              "
            >
              <transition name="fade">
                <v-card
                  max-width="300"
                  elevation="7"
                  class="magic-card justify-center text-center"
                >
                  <v-img :aspect-ratio="1" :src="project.img" alt=""></v-img>
                  <v-card-title class="d-block" v-if="project.name">{{
                    project.name
                  }}</v-card-title>
                  <v-card-text>
                    <v-row align="center">
                      <v-col cols="12">
                        <v-divider class="mx-4"></v-divider
                      ></v-col>

                      <v-row class="my-1 align-center justify-center">
                        <v-col cols="5">
                          <v-btn
                            v-bind="size"
                            rounded
                            color="primary"
                            class=" white--text font-weight-bold text-lg-caption"
                          >
                            ajouter <v-icon dark right> mdi-cart </v-icon>
                          </v-btn>
                        </v-col>
                        <v-col cols="6">
                          <h1
                            class="primary--text font-weight-normal text-lg-h5"
                            v-if="project.prix"
                          >
                            {{ project.prix }}€
                          </h1>
                        </v-col>
                      </v-row>
                    </v-row>
                  </v-card-text>
                </v-card>
              </transition>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
    <v-container fluid>
      <countDown :date="end" @onFinish="finish()" ></countDown>
    </v-container>
    <v-parallax dark height="300" src="../assets/newsletter.jpg">
      <v-row justify="center">
        <v-col
          cols="12"
          xl="6"
          lg="6"
          md="6"
          class="d-flex justify-center align-center"
        >
          <div class="text-center py-9">
            <h2 class="primary--text text-lg-h3 font-weight-bold">
              Inscrivez-vous à notre newsletter!
            </h2>
            <p class="white--text mt-9 text-lg-h6">
              Recevez les dernières nouveautés, ainsi que les promotions.
            </p>
            <div class="mt-9 pt-2">
              <v-form ref="form">
                <v-text-field
                  outlined
                  solo
                  placeholder="Entrez votre adresse mail"
                >
                  <template v-slot:append>
                    <v-btn
                      v-bind="size"
                      depressed
                      plain
                      class="
                        primary--text
                        text-uppercase
                        font-weight-bold
                        text-lg-body-1
                      "
                    >
                      Envoyer
                    </v-btn>
                  </template>
                </v-text-field>
              </v-form>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>

<script>
import countDown from "./countDown.vue";
export default {
  name: "HelloWorld",
  components: { countDown },

  data: () => ({
    end: new Date("2022-09-02T16:37:00"),
    currentFilter: "burger",
    projects: [
      {
        category: "menu",
        img: require("../assets/logo.png"),
        name: "Menu Kids",
        text: "Smashburger looks for unique flavors & ingredients to build our local burgers.",
        prix: "4,99",
      },
      {
        category: "menu",
        img: require("../assets/logo.png"),
        name: "Menu Giant",
        text: "Smashburger looks for unique flavors & ingredients to build our local burgers.",
        prix: "9,99",
      },
      {
        category: "menu",
        img: require("../assets/logo.png"),
        name: "Menu Texan",
        text: "Smashburger looks for unique flavors & ingredients to build our local burgers.",
        prix: "9,99",
      },
      {
        category: "menu",
        img: require("../assets/logo.png"),
        name: "Menu XXL",
        text: "Smashburger looks for unique flavors & ingredients to build our local burgers.",
        prix: "9,99",
      },
      {
        category: "burger",
        img: require("../assets/spicyBurger.jpg"),
        name: "Farmer Burger",
        text: "Smashburger looks for unique flavors & ingredients to build our local burgers.",
        prix: "9,99",
      },
      {
        category: "burger",
        img: require("../assets/farmerBurger.jpg"),
        name: "Spicy Burger",
        text: "Smashburger looks for unique flavors & ingredients to build our local burgers.",
        prix: "9,99",
      },
      {
        category: "burger",
        img: require("../assets/towerBurger.jpg"),
        name: "Tower Burger",
        text: "Smashburger looks for unique flavors & ingredients to build our local burgers.",
        prix: "9,99",
      },
      {
        category: "burger",
        img: require("../assets/cheeseBurger.jpg"),
        name: "Cheese Burger",
        text: "Smashburger looks for unique flavors & ingredients to build our local burgers.",
        prix: "9,99",
      },
      {
        category: "burger",
        img: require("../assets/baconBurger.jpg"),
        name: "Bacon Burger",
        text: "Smashburger looks for unique flavors & ingredients to build our local burgers.",
        prix: "9,99",
      },
      {
        category: "burger",
        img: require("../assets/spaceBurger.jpeg"),
        name: "Space Burger",
        text: "Smashburger looks for unique flavors & ingredients to build our local burgers.",
        prix: "9,99",
      },
      {
        category: "burger",
        img: require("../assets/xllBurger.jpg"),
        name: "XXL Burger",
        text: "Smashburger looks for unique flavors & ingredients to build our local burgers.",
        prix: "9,99",
      },
      {
        category: "burger",
        img: require("../assets/spaceBurger.jpg"),
        name: "Chicken Burger",
        text: "Smashburger looks for unique flavors & ingredients to build our local burgers.",
        prix: "9,99",
      },

      {
        category: "glace",
        img: require("../assets/logo.png"),
        name: "Crunchy cookie",
        text: "Smashburger looks for unique flavors & ingredients to build our local burgers.",
        prix: "9,99",
      },
      {
        category: "glace",
        img: require("../assets/logo.png"),
        name: "Coupe America",
        text: "Smashburger looks for unique flavors & ingredients to build our local burgers.",
        prix: "9,99",
      },
      {
        category: "glace",
        img: require("../assets/logo.png"),
        name: "Baby Love",
        text: "Smashburger looks for unique flavors & ingredients to build our local burgers.",
        prix: "9,99",
      },
      {
        category: "glace",
        img: require("../assets/logo.png"),
        name: "Choco Pistache",
        text: "Smashburger looks for unique flavors & ingredients to build our local burgers.",
        prix: "9,99",
      },
      {
        category: "boisson",
        img: require("../assets/logo.png"),
        name: "Soda cola",
        text: "Smashburger looks for unique flavors & ingredients to build our local burgers.",
        prix: "2,99",
      },
      {
        category: "boisson",
        img: require("../assets/logo.png"),
        name: "Limonade",
        text: "Smashburger looks for unique flavors & ingredients to build our local burgers.",
        prix: "2,99",
      },
      {
        category: "boisson",
        img: require("../assets/logo.png"),
        name: "Orangade",
        text: "Smashburger looks for unique flavors & ingredients to build our local burgers.",
        prix: "2,99",
      },
      {
        category: "boisson",
        img: require("../assets/logo.png"),
        name: "Eau aromatisé",
        text: "Smashburger looks for unique flavors & ingredients to build our local burgers.",
        prix: "2,99",
      },
    ],
  }),

  methods: {
    setFilter(filter) {
      this.currentFilter = filter;
    },

    finish() {
      console.log("finish");
    },
  },

  computed: {
    size() {
      const size = { xs: "x-small", sm: "small", lg: "large", xl: "x-large" }[
        this.$vuetify.breakpoint.name
      ];
      return size ? { [size]: true } : {};
    },
  },
};
</script>
<style scoped>
.header {
  background-image: url("../assets/header\ boogie\ burger.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
  width: 100%;
  height: 43vw;
}

.header-img {
  min-width: 50%;
  max-width: 100%;
}

.fade-enter-active {
  transition: opacity 3s ease-in-out;
}

.fade-enter-to {
  opacity: 1;
}

.fade-enter {
  opacity: 0;
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

/* selecteur */
.project {
  transition: all 0.35s ease-in-out;
}

.projects-enter {
  transform: scale(0.5) translatey(-80px);
  opacity: 0;
}

.projects-leave-to {
  transform: translatey(30px);
  opacity: 0;
}

.projects-leave-active {
  position: absolute;
  z-index: -1;
}
</style>
