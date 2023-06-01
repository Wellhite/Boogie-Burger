<template>
  <div>
    <v-container fluid class="d-flex header justify-center align-center">
      <v-row class="text-center align-center justify-center">
        <v-col cols="6" xl="7" lg="7" md="5" sm="5" class="text-center justify-center pt-sm-12">
          <div class="justify-center">
            <img src="../assets/Boogie Burger header.png" :aspect-ratio="16 / 9" class="header-img" alt="" />
          </div>

          <v-btn v-bind="size" class="ma-2" outlined color="primary" @click="$vuetify.goTo('#services')">
            Voir nos menus
          </v-btn>
        </v-col>
        <v-col cols="6" xl="5" lg="5" md="7" sm="5">
          <v-spacer></v-spacer>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="news py-13 app">
      <v-row class="justify-center text-center">
        <v-col class="d-flex child-flex" cols="6" xl="4" lg="4" md="5" sm="6">
          <img contain aspect-ratio="1" max-width="500" min-width="200" src="../assets/banniere-Frites-maison.jpg"
            alt="" /></v-col>
        <v-col class="d-flex child-flex" cols="6" xl="4" lg="4" md="5" sm="6">
          <img contain aspect-ratio="1" max-width="500" src="../assets/NOUVEAU-veggie-burger.jpg" alt="" /></v-col>
        <v-col class="d-flex child-flex" cols="12" xl="8" lg="8" md="10" sm="12" color="black">
          <img contain max-width="500" src="../assets/Banniere-Ice-Cream.jpg" alt="" />
        </v-col>
      </v-row>
      <v-row class="justify-center mt-10 my-0 my-xl-12 my-lg-12 my-md-12 my-sm-12">
        <v-hover v-slot="{ hover }"><v-btn id="services" v-bind="size" v-bind:class="{ active: currentFilter === 'menu' }"
            v-on:click="setFilter('menu')" class="filter select text-lg-h6 font-weight-bold"
            :style="{ color: hover ? '#F57C00' : 'white' }" plain>Nos menus</v-btn></v-hover>
        <v-hover v-slot="{ hover }"><v-btn v-bind="size" v-bind:class="{ active: currentFilter === 'burger' }"
            @click="setFilter('burger')" class="filter select text-lg-h6 font-weight-bold"
            :style="{ color: hover ? '#F57C00' : 'white' }" plain>Burger</v-btn></v-hover>
        <v-hover v-slot="{ hover }"><v-btn v-bind="size" v-bind:class="{ active: currentFilter === 'glace' }"
            @click="setFilter('glace')" class="filter select text-lg-h6 font-weight-bold"
            :style="{ color: hover ? '#F57C00' : 'white' }" plain>Glace</v-btn></v-hover>
        <v-hover v-slot="{ hover }"><v-btn v-bind="size" v-bind:class="{ active: currentFilter === 'boisson' }"
            @click="setFilter('boisson')" class="filter select text-lg-h6 font-weight-bold"
            :style="{ color: hover ? '#F57C00' : 'white' }" plain>Boisson</v-btn></v-hover>
      </v-row>

      <v-container>
        <v-row class="justify-center">
      <v-col cols="6" xl="3" lg="3" md="6" sm="6" class="text-center d-flex child-flex" v-for="product in products" v-bind:key="product.id">
        <div class="d-flex project justify-center" v-if="currentFilter === product.category || currentFilter === 'ALL'">
          <transition name="fade">
            <v-card flat elevation="7" class="justify-center text-center">
              <div>
                <v-img :aspect-ratio="1.1" :src="product.img" alt=""></v-img>
              </div>
              <v-card-title class="d-block text-body-2 text-sm-body-1" v-if="product.name">{{ product.name }}</v-card-title>

              <v-card-text>
                <v-row align="center">
                  <v-col cols="12">
                    <v-divider class="mx-4"></v-divider>
                  </v-col>

                  <v-row class="my-1 align-center justify-center">
                    <v-col cols="6">
                      <v-btn v-bind="size" rounded color="primary"
                            class="white--text font-weight-bold py-xl-0 py-lg-0 py-md-1 py-sm-1 text-md-caption" @click="ajouterAuPanier(product)">Ajouter
                        <v-icon dark right>mdi-cart</v-icon>
                      </v-btn>
                    </v-col>
                    <v-col cols="5">
                      <h1 class="primary--text font-weight-bold text-body-2 text-xl-h6 text-md-h6 text-lg-h6 text-sm-subtitle-1" v-if="product.prix">
                        {{ product.prix }}€
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
    <v-container fluid class="primary">
      <countDown :date="end" @onFinish="finish()"></countDown>
    </v-container>
    <v-container fluid>
      <v-row class="align-center justify-center py-sm-12 my-12 my-xl-0 my-lg-0 my-md-0 my-sm-0">
        <v-col class="text-center order-2 order-xl-1 order-lg-1 order-md-1 order-sm-1" cols="10" xl="3" lg="5" md="6"
          sm="6">
          <h2 class="pb-8 pb-sm-5 text-uppercase font-weight-bold text-lg-h4 text-sm-h6"
            style="font-family: 'Oswald', sans-serif">
            Chez Boogie Burger
          </h2>

          <p class="text-center text-caption" style="font-family: 'Raleway', sans-serif; font-weight: normal">
            Boogie Burger l'endroit idéal pour vous régaler le tout dans une ambiance
            chaleureuse et conviviale en famille et entre amis.
          </p>
          <v-btn v-bind="size" class="my-2 my-xl-8 my-lg-8 my-md-8 my-sm-5" color="primary">
            En savoir plus</v-btn>
        </v-col>
        <v-col class="text-center order-xl-2 order-lg-2 order-md-2 order-sm-2 order-xs-1" cols="8" xl="3" lg="6" md="4"
          sm="4">
          <v-img v-if="$vuetify.breakpoint.smAndDown" contain src="../assets/front-view-burgers-stand.jpg" />
          <v-img v-else contain :aspect-ratio="1 / 3" max-height="593" max-width="293"
            src="../assets/high-angle-fresh-burger-fries-and-sauce.jpg" />
        </v-col>
      </v-row>
    </v-container>
    <newsLetter></newsLetter>
  </div>
</template>

<script>
import countDown from "./countDown.vue";
import newsLetter from "./newsLetter.vue";


export default {
  name: "HelloWorld",
  components: { countDown, newsLetter },

  data: () => ({
    end: new Date("2023-06-03T16:37:00"),
    currentFilter: "burger",
    carts: [],
    products: [
      {
        id: 1,
        category: "menu",
        img: require("../assets/logo.png"),
        name: "Menu Kids",
        text:
          "Smashburger looks for unique flavors & ingredients to build our local burgers.",
        prix: "4,99",
        qty: 1,
      },
      {
        id: 2,
        category: "menu",
        img: require("../assets/logo.png"),
        name: "Menu Giant",
        text:
          "Smashburger looks for unique flavors & ingredients to build our local burgers.",
        prix: "9,99",
        qty: 1,
      },
      {
        id: 3,
        category: "menu",
        img: require("../assets/logo.png"),
        name: "Menu Texan",
        text:
          "Smashburger looks for unique flavors & ingredients to build our local burgers.",
        prix: "9,99",
        qty: 1,
      },
      {
        id: 4,
        category: "menu",
        img: require("../assets/logo.png"),
        name: "Menu XXL",
        text:
          "Smashburger looks for unique flavors & ingredients to build our local burgers.",
        prix: "9,99",
        qty: 1,
      },
      {
        id: 5,
        category: "burger",
        img: require("../assets/spicyBurger.jpg"),
        name: "Farmer Burger",
        text:
          "Smashburger looks for unique flavors & ingredients to build our local burgers.",
        prix: "9,99",
        qty: 1,
      },
      {
        id: 6,
        category: "burger",
        img: require("../assets/farmerBurger.jpg"),
        name: "Spicy Burger",
        text:
          "Smashburger looks for unique flavors & ingredients to build our local burgers.",
        prix: "9,99",
        qty: 1,
      },
      {
        id: 7,
        category: "burger",
        img: require("../assets/towerBurger.jpg"),
        name: "Tower Burger",
        text:
          "Smashburger looks for unique flavors & ingredients to build our local burgers.",
        prix: "9,99",
        qty: 1,
      },
      {
        id: 8,
        category: "burger",
        img: require("../assets/cheeseBurger.jpg"),
        name: "Cheese Burger",
        text:
          "Smashburger looks for unique flavors & ingredients to build our local burgers.",
        prix: "9,99",
        qty: 1,
      },
      {
        id: 9,
        category: "burger",
        img: require("../assets/baconBurger.jpg"),
        name: "Bacon Burger",
        text:
          "Smashburger looks for unique flavors & ingredients to build our local burgers.",
        prix: "9,99",
        qty: 1,
      },
      {
        id: 10,
        category: "burger",
        img: require("../assets/spaceBurger.jpeg"),
        name: "Space Burger",
        text:
          "Smashburger looks for unique flavors & ingredients to build our local burgers.",
        prix: "9,99",
        qty: 1,
      },
      {
        id: 11,
        category: "burger",
        img: require("../assets/xllBurger.jpg"),
        name: "XXL Burger",
        text: "4 STEAK, cheddar, salade, bacon.",
        prix: "9,99",
        qty: 1,
      },
      {
        id: 12,
        category: "burger",
        img: require("../assets/spaceBurger.jpg"),
        name: "Chicken Burger",
        text:
          "Smashburger looks for unique flavors & ingredients to build our local burgers.",
        prix: "9,99",
        qty: 1,
      },

      {
        id: 13,
        category: "glace",
        img: require("../assets/logo.png"),
        name: "Crunchy cookie",
        text:
          "Smashburger looks for unique flavors & ingredients to build our local burgers.",
        prix: "9,99",
        qty: 1,
      },
      {
        id: 14,
        category: "glace",
        img: require("../assets/logo.png"),
        name: "Coupe America",
        text:
          "Smashburger looks for unique flavors & ingredients to build our local burgers.",
        prix: "9,99",
        qty: 1,
      },
      {
        id: 15,
        category: "glace",
        img: require("../assets/logo.png"),
        name: "Baby Love",
        text:
          "Smashburger looks for unique flavors & ingredients to build our local burgers.",
        prix: "9,99",
        qty: 1,
      },
      {
        id: 16,
        category: "glace",
        img: require("../assets/logo.png"),
        name: "Choco Pistache",
        text:
          "Smashburger looks for unique flavors & ingredients to build our local burgers.",
        prix: "9,99",
        qty: 1,
      },
      {
        id: 17,
        category: "boisson",
        img: require("../assets/logo.png"),
        name: "Soda cola",
        text:
          "Smashburger looks for unique flavors & ingredients to build our local burgers.",
        prix: "2,99",
        qty: 1,
      },
      {
        id: 18,
        category: "boisson",
        img: require("../assets/logo.png"),
        name: "Limonade",
        text:
          "Smashburger looks for unique flavors & ingredients to build our local burgers.",
        prix: "2,99",
        qty: 1,
      },
      {
        id: 19,
        category: "boisson",
        img: require("../assets/logo.png"),
        name: "Orangade",
        text:
          "Smashburger looks for unique flavors & ingredients to build our local burgers.",
        prix: "2,99",
        qty: 1,
      },
      {
        id: 20,
        category: "boisson",
        img: require("../assets/logo.png"),
        name: "Eau aromatisé",
        text:
          "Smashburger looks for unique flavors & ingredients to build our local burgers.",
        prix: "2,99",
        qty: 1,
      },
    ],
  }),

  methods: {
  setFilter(filter) {
    this.currentFilter = filter;
  },

  ajouterAuPanier(product) {
      this.$root.$emit("objet-ajoute", product);
    },

  finish() {
    // Logique à exécuter lorsque le compte à rebours est terminé
  },

  updateCart(key, quantity) {
    const cartItem = this.carts.find(item => item.id === key);
    if (cartItem) {
      cartItem.qty = quantity;
    } else {
      this.carts.push({ id: key, qty: quantity });
    }
  }
},

  computed: {
    size() {
      const size = {
        xs: "x-small",
        sm: "small",
        md: "medium",
        xl: "x-large",
      }[this.$vuetify.breakpoint.name];
      return size ? { [size]: true } : {};
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap");

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
