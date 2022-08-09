<template>
  <v-app>
    <v-app-bar
      style="position: fixed"
      absolute
      elevate-on-scroll
      color="black"
      class="navbar d-flex align-center justify-space-between"
      v-if="$vuetify.breakpoint.mdAndUp"
    >
      <v-app-bar-nav-icon
        @click="drawer = true"
        class="d-flex d-sm-none"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="mx-12">
        <v-img
          class="logo"
          height="auto"
          max-width="6.5vw"
          contain
          src="./assets/logo_boogie_burger.svg"
          alt="logo Webdesign and Com"
        ></v-img>
      </v-toolbar-title>
      <template v-slot:extension>
        <v-tabs
          color="primary"
          v-model="tab"
          align-with-title
          class="d-none d-sm-flex mx-12 justify-space-around"
        >
          <v-tabs-slider></v-tabs-slider>

          <v-tab class="white--text" @click="$vuetify.goTo('#services')">
            Nos menus
          </v-tab>
          <v-tab class="white--text" @click="$vuetify.goTo('#realisations')">
            Nos produits
          </v-tab>
          <v-tab class="white--text" @click="$vuetify.goTo('#avis')">
            Avis
          </v-tab>
          <v-tab class="white--text" @click="$vuetify.goTo('#contact')">
            Contact
          </v-tab>
          <v-tab> <v-icon medium color="primary">mdi-cart</v-icon></v-tab>
        </v-tabs>
      </template>
      <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        v-if="$vuetify.breakpoint.mdAndDown"
      >
        <v-list nav dense>
          <v-list-item-group>
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
            <v-list-item>
              <v-list-item-title @click="$vuetify.goTo('#contact')">
                <v-icon medium color="primary"> mdi-cart </v-icon>
              </v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-app-bar>

    <v-main>
      <HelloWorld />
    </v-main>
    <v-footer dark padless>
      <v-card width="100%" flat tile class="black white--text text-center">
        <v-row class="justify-center py-0 py-md-15">
          <!-- -----------------------------------------------
        First Column
      ----------------------------------------------- -->
          <v-col
            cols="12"
            xl="3"
            sm="3"
            md="3"
            lg="3"
            class="text-left px-xs-0"
          >
            <p class="mt-4 mb-0">
              <v-icon color="primary"> mdi-map-marker</v-icon>17 rue Leon
              Gambetta, 59000 Lille
            </p>
            <p class="my-4">
              <v-icon color="primary"> mdi-phone</v-icon> 06 07 08 09 10
            </p>
            <p class="mb-0">
              <v-icon color="primary"> mdi-at</v-icon>

              <a class="dark-link white--text" href="/">
                info@webdesign-and-com.fr</a
              >
            </p>
          </v-col>
          <!-- -----------------------------------------------
        Second Column
      ----------------------------------------------- -->
          <v-col cols="12" xl="3" sm="3" md="3" lg="3" class="px-xs-0">
            <v-card-text class="white--text text-body-1 text-justify">
              Boogie Burger est un site fictif réalise par
              <a href="">Web Design & Com</a> comme outil démonstration pour sa
              clientèle, les informations indiquées sur le site sont fictives
              également. <br />
            </v-card-text>
          </v-col>
          <!-- -----------------------------------------------
        Third Column
      ----------------------------------------------- -->
          <v-col
            cols="12"
            xl="3"
            sm="3"
            md="3"
            lg="3"
            class="d-flex py-6 px-xs-0 justify-center align-center"
          >
          
            <ul class="text-left">
             <div class="primary--text">Plan du site</div>
              <li class="my-1"><a class="white--text" href="">Nos menus</a></li>
              <li><a class="white--text" href="">Nos produits</a></li>
              <li class="my-1"><a class="white--text" href="">Avis</a></li>
              <li><a class="white--text" href="">Contact</a></li>
            </ul>
          </v-col>
        </v-row>

        <v-card-text class="primary--text font-weight-bold">
          {{ new Date().getFullYear() }}
          <strong class="white--text"> - made by Web design & Com</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld,
  },

  data: () => ({
    drawer: false,
    tab: null,
  }),

  computed: {
    size() {
      const size = { xs: "x-small", sm: "small", lg: "large", xl: "x-large" }[
        this.$vuetify.breakpoint.name
      ];
      return size
        ? {
            [size]: true,
          }
        : {};
    },
  },

  methods: {
    created: function () {
      setInterval(() => {
        this.show = !this.show;
      }, 2000);
    },

    scrollTop: function () {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId);
        }
        window.scroll(0, window.pageYOffset - 50);
      }, 20);
    },

    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },

    mounted: function () {
      window.addEventListener("scroll", this.onScroll);
    },
    beforeDestroy: function () {
      window.removeEventListener("scroll", this.onScroll);
    },
  },
};
</script>
<style scoped>
li {
  list-style: none;
}

a {
  text-decoration: none;
}

.navbar {
  color: aliceblue;
}

v-tab {
  color: white;
}
</style>
