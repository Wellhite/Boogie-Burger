<template>
  <v-app>
    <v-app-bar app fixed flat dark elevation="4" class="black align-center">
      <v-toolbar-title class="mx-12">
        <v-img height="auto" max-width="5vw" contain src="./assets/logo_boogie_burger.svg" alt="logo Webdesign and Com"></v-img>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="hidden-sm-and-down">
        <v-btn flat class="black white--text" @click="$vuetify.goTo('#services')">
          Nos menus
        </v-btn>
        <v-btn flat class="black white--text" @click="$vuetify.goTo('#realisations')">
          Nos produits
        </v-btn>
        <v-btn flat class="black white--text" @click="$vuetify.goTo('#avis')">
          Avis
        </v-btn>
        <v-dialog v-model="contact" width="500">
          <template v-slot:activator="{ on }">
            <v-btn flat class="black white--text" v-on="on">
              Contact
            </v-btn>
          </template>
          <Contact />
        </v-dialog>

        <v-btn flat class="black">
          <v-row justify="center">
            <v-btn rounded icon class="primary white--text" data-toggle="modal" data-target="#cartModal" @click.stop="dialog = true">
              <v-icon medium>mdi-cart</v-icon>
              <span class="badge badge-pill badge-danger">{{ totalItems }}</span>
            </v-btn>
            <v-dialog v-model="dialog" width="500">
              <Panier />
            </v-dialog>
          </v-row>
        </v-btn>

        <!-- Bouton pour se connecter -->
        <v-btn flat class="black">
          <v-row justify="center">
            <v-btn rounded icon class="primary white--text" data-toggle="modal" data-target="#loginModal" @click="dialog = true">
              <v-icon medium>mdi-account</v-icon>
            </v-btn>
            <v-dialog v-model="dialog" width="500">
              <Login />
            </v-dialog>
          </v-row>
        </v-btn>


        <!-- Bouton pour switcher entre le mode jour et nuit -->
        <v-btn icon @click="toggleTheme()">
          <v-icon>{{ $vuetify.theme.dark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
        </v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer class="dark grey" absolute fixed left v-model="drawer">
      <v-list dense>
        <v-list-item-group v-model="group">
          <v-list-item>
            <v-list-item-title @click="$vuetify.goTo('#services')">
              Nos Menus
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title @click="$vuetify.goTo('#realisations')">
              Nos produits
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title @click="$vuetify.goTo('#avis')">
              Avis
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title @click="$vuetify.goTo('#contact')">
              Contact
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <vueAccueil />
    </v-main>

    <!-- Bouton de scroll -->
    <v-btn v-show="fab" style="color:#f57c00; background-color:black;" class="fab-button" icon @click="scrollTop()">
      <v-icon>mdi-arrow-up</v-icon>
    </v-btn>

    <v-footer dark padless>
      <v-card width="100%" flat tile class="black white--text text-center">
        <v-row class="justify-center align-center py-md-15 py-sm-6">
          <!-- -----------------------------------------------
        First Column
      ----------------------------------------------- -->
          <v-col cols="12" xl="3" lg="3" md="4" sm="12" class="
                                        text-xl-left text-lg-left text-md-left text-sm-center
                                        px-xs-0
                                        order-2 order-sm-2 order-xl-1 order-lg-1 order-md-1
                                      ">
            <v-card-text class="
                                          text-caption
                                          text-xl-subtitle-1
                                          text-lg-subtitle-1
                                          text-md-body-2
                                        ">
              <p class="mt-4 mb-0">
                <v-icon color="primary">mdi-map-marker</v-icon>17 rue Leon
                Gambetta, Lille
              </p>
              <p class="my-4">
                <v-icon color="primary">mdi-phone</v-icon> 06 07 08 09 10
              </p>
              <p class="mb-0">
                <v-icon color="primary">mdi-at</v-icon>
                <a class="dark-link white--text" href="/">
                  info@webdesign-and-com.fr
                </a>
              </p>
            </v-card-text>
          </v-col>
          <!-- -----------------------------------------------
        Second Column
      ----------------------------------------------- -->
          <v-col cols="10" xl="3" lg="3" md="5" sm="9" class="px-xs-0 order-sm-1 order-xl-2 order-lg-2 order-md-2">
            <v-card-text class="
                                          white--text
                                          text-justify
                                          text-caption
                                          text-xl-subtitle-1
                                          text-lg-subtitle-1
                                          text-md-body-2
                                        ">
              Boogie Burger est un site fictif réalisé par
              <a href="">Web Design & Com</a> comme outil démonstration pour sa
              clientèle, les informations indiquées sur le site sont fictives
              également. <br />
            </v-card-text>
          </v-col>
          <!-- -----------------------------------------------
        Third Column
      ----------------------------------------------- -->
          <v-col cols="9" xl="3" lg="3" md="10" sm="12" class="justify-center align-center order-sm-3">
            <ul class="
                                          pl-0
                                          d-flex
                                          flex-xl-column flex-lg-column flex-md-column
                                          d-sm-inline-flex
                                          align-center
                                          justify-space-around justify-sm-space-between
                                          text-caption
                                          text-xl-subtitle-1
                                          text-lg-subtitle-1
                                          text-md-body-2
                                        ">
              <li class="my-1 mx-sm-1">
                <a class="white--text" href="">Nos menus</a>
              </li>
              <li>
                <a class="white--text mx-sm-1" href="">Nos produits</a>
              </li>
              <li class="my-1 mx-sm-1">
                <a class="white--text" href="">Avis</a>
              </li>
              <li>
                <a class="white--text mx-sm-1" href="">Contact</a>
              </li>
            </ul>
          </v-col>
        </v-row>

        <v-card-text class="primary--text font-weight-bold">
          {{ new Date().getFullYear() }}
          <strong class="white--text"> - made by Web Design & Com</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import vueAccueil from "./components/vueAccueil.vue";
import Panier from "./components/panierClient.vue";
import Contact from "./components/contactPage.vue"; // importe le composant contactPage.vue
export default {
  name: "App",

  components: {
    vueAccueil,
    Panier,
    Contact, // ajoute le composant contactPage.vue
  },

  data() {
    return {
      drawer: false,
      dialog: false,
      group: null,
      tab: null,
      products: [],
      cart: null,
      carts: [],
      totalItems: 0,
      fab: false,
    };
  },

  watch: {
    group() {
      this.drawer = false;
    },
  },

  methods: {
    created: function () {
      setInterval(() => {
        this.show = !this.show;
      }, 2000);

      // Appeler scrollTop pour vérifier si le bouton flottant doit être affiché initialement
      this.scrollTop();
      this.fetchCart();
      this.fetchProducts();

      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        this.$vuetify.theme.dark = true;
      } else if (savedTheme === 'light') {
        this.$vuetify.theme.dark = false;
      }


    },

    // methode permettant de switcher entre le mode jour et nuit si dark = true alors le theme est sombre sinon il est clair
    toggleTheme() {
    this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    localStorage.setItem('theme', this.$vuetify.theme.dark ? 'dark' : 'light');
    },


    // Méthode pour récupérer le panier du client depuis l'API Commerce.js et le stocker dans la variable cart
    fetchCart() {
      this.$commerce.cart.retrieve().then((cart) => {
        this.cart = cart;
        this.totalItems = this.cart.total_items;
      });
    },
    
    scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  },

  // Méthode pour gérer le défilement de la page
  onScroll() {
    const top = window.pageYOffset || document.documentElement.scrollTop;
    this.fab = top > 20;
  }
},

mounted() {

  // Vérifier si le thème est déjà sauvegardé dans le stockage local
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
  this.$vuetify.theme.dark = true;
  } else if (savedTheme === 'light') {
  this.$vuetify.theme.dark = false;
  }

  // Ajouter un écouteur d'événement pour le défilement de la page
  window.addEventListener("scroll", this.onScroll);
},

beforeDestroy() {
  // Supprimer l'écouteur d'événement lors de la destruction du composant
  window.removeEventListener("scroll", this.onScroll);
},
};

</script>

<style scoped>
li {
  list-style: none;
}

/* Bouton flottant -> bouton pour remonter en haut de la page */
.fab-button {
  position: fixed; 
  bottom: 20px;
  right: 20px;
  z-index: 9999;
}

a {
  text-decoration: none;
}

.navbar {
  color: aliceblue;
}

v-btn {
  color: white;
}
</style>
