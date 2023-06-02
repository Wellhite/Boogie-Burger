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

        <v-btn flat class="black" @click="dialog = true">
          <v-row justify="center">
            <v-btn rounded icon class="primary white--text">
              <v-icon medium>mdi-cart</v-icon>
              <span class="badge badge-pill badge-danger">{{ totalItems }}</span>
            </v-btn>
            <v-dialog v-model="dialog" width="500">
              <Panier />
            </v-dialog>
          </v-row>
        </v-btn>

        <v-btn flat class="black" @click="dialog = true">
          <v-row justify="center">
            <v-btn rounded icon class="primary white--text">
              <v-icon medium>mdi-account</v-icon>
            </v-btn>
            <v-dialog v-model="dialog" width="500">
              <Login />
            </v-dialog>
          </v-row>
        </v-btn>

        <v-btn icon @click="toggleTheme()">
          <v-icon>{{ $vuetify.theme.dark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
        </v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer class="dark grey" absolute fixed left v-model="drawer" hide-overlay>
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
      <v-container>
        <!-- Le reste de votre contenu -->
      </v-container>
    </v-main>

    <v-btn
      v-if="fab"
      class="elevation-12"
      fab
      dark
      fixed
      bottom
      right
      color="primary"
      @click="scrollTop"
    >
      <v-icon>mdi-arrow-up</v-icon>
    </v-btn>
  </v-app>
</template>

<script>
import Contact from './components/Contact.vue';
import Panier from './components/Panier.vue';
import Login from './components/Login.vue';

export default {
  components: {
    Contact,
    Panier,
    Login,
  },
  data() {
    return {
      drawer: false,
      contact: false,
      dialog: false,
      group: null,
      fab: false,
    };
  },
  computed: {
    totalItems() {
      // Calcul du nombre total d'éléments dans le panier
      // Remplacez cette ligne par votre propre logique
      return 0;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      this.fab = window.scrollY > 200;
    },
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>
