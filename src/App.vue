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
          <v-tabs-slider ></v-tabs-slider>

          <v-tab class="white--text">
            <router-link class="link" to="/">Accueil</router-link>
          </v-tab>
          <v-tab class="white--text" @click="$vuetify.goTo('#services')"> Nos menus </v-tab>
          <v-tab class="white--text" @click="$vuetify.goTo('#realisations')"> Nos produits </v-tab>
          <v-tab class="white--text" @click="$vuetify.goTo('#avis')"> Avis </v-tab>
          <v-tab class="white--text" @click="$vuetify.goTo('#contact')"> Contact </v-tab>
          <v-tab>
            <v-icon medium color="primary"> mdi-cart </v-icon></v-tab
          >
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
              <v-list-item-title @click="tab = index">
                <router-link class="link" to="/">Accueil</router-link>
              </v-list-item-title>
            </v-list-item>
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
      <!-- Navigation bar ends -->
     <!-- <v-content class="py-12">
        <router-view></router-view>
      </v-content> -->
    </v-app-bar>

    <v-main>
      <HelloWorld />
    </v-main>
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
.navbar {
  color: aliceblue;
}

v-tab {
  color: white;
}
</style>
