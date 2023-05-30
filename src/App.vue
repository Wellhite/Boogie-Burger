<template>
  <v-app>
    <v-app-bar app fixed flat dark elevation="4" class="black align-center">
      <v-toolbar-title class="mx-12">
        <v-img
          height="auto"
          max-width="5vw"
          contain
          src="./assets/logo_boogie_burger.svg"
          alt="logo Webdesign and Com"
        ></v-img>
      </v-toolbar-title>
      <v-spacer></v-spacer>

        <v-app-bar-nav-icon
          class="hidden-md-and-up"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <div class="hidden-sm-and-down">
          <v-btn
            flat
            class="black white--text"
            @click="$vuetify.goTo('#services')"
          >
            Nos menus
          </v-btn>
          <v-btn
            flat
            class="black white--text"
            @click="$vuetify.goTo('#realisations')"
          >
            Nos produits
          </v-btn>
          <v-btn flat class="black white--text" @click="$vuetify.goTo('#avis')">
            Avis
          </v-btn>
          <v-btn
            flat
            class="black white--text"
            @click="$vuetify.goTo('#contact')"
          >
            Contact
          </v-btn>
          <v-btn flat class="black">
            <v-row justify="center">
              <v-btn
                rounded
                icon
                class="primary white--text"
                data-toggle="modal"
                data-target="#cartModal"
                @click.stop="dialog = true"
                ><v-icon medium>mdi-cart</v-icon>{{ totalItems }}
              </v-btn>
              <v-dialog v-model="dialog" width="500">
                <Panier /> </v-dialog></v-row
          ></v-btn>
        </div>

    </v-app-bar>

    <v-navigation-drawer class="dark grey" absolute fixed left v-model="drawer">
      <v-list dense>
        <v-list-item-group v-model="group">
          <v-list-item> </v-list-item>
          <v-list-item>
            <v-list-item-title @click="$vuetify.goTo('#services')">
              Nos menus
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
            <v-list-item-title>
              <v-dialog v-model="dialog" width="500">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    rounded
                    class="primary white--text"
                    data-toggle="modal"
                    data-target="#cartModal"
                    v-bind="attrs"
                    v-on="on"
                    ><v-icon medium>mdi-cart</v-icon>{{ totalItems }}</v-btn
                  >
                </template>

                <Panier />
              </v-dialog>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <HelloWorld />
    </v-main>
    <v-footer dark padless>
      <v-card width="100%" flat tile class="black white--text text-center">
        <v-row class="justify-center align-center py-md-15 py-sm-6">
          <!-- -----------------------------------------------
        First Column
      ----------------------------------------------- -->
          <v-col
            cols="12"
            xl="3"
            lg="3"
            md="4"
            sm="12"
            class="
              text-xl-left text-lg-left text-md-left text-sm-center
              px-xs-0
              order-2 order-sm-2 order-xl-1 order-lg-1 order-md-1
            "
          >
            <v-card-text
              class="
                text-caption
                text-xl-subtitle-1
                text-lg-subtitle-1
                text-md-body-2
              "
            >
              <p class="mt-4 mb-0">
                <v-icon color="primary"> mdi-map-marker</v-icon>17 rue Leon
                Gambetta, Lille
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
            </v-card-text>
          </v-col>
          <!-- -----------------------------------------------
        Second Column
      ----------------------------------------------- -->
          <v-col
            cols="10"
            xl="3"
            lg="3"
            md="5"
            sm="9"
            class="px-xs-0 order-sm-1 order-xl-2 order-lg-2 order-md-2"
          >
            <v-card-text
              class="
                white--text
                text-justify
                text-caption
                text-xl-subtitle-1
                text-lg-subtitle-1
                text-md-body-2
              "
            >
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
            cols="9"
            xl="3"
            lg="3"
            md="10"
            sm="12"
            class="justify-center align-center order-sm-3"
          >
            <ul
              class="
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
              "
            >
              <li class="my-1 mx-sm-1">
                <a class="white--text" href="">Nos menus</a>
              </li>
              <li><a class="white--text mx-sm-1" href="">Nos produits</a></li>
              <li class="my-1 mx-sm-1">
                <a class="white--text" href="">Avis</a>
              </li>
              <li><a class="white--text mx-sm-1" href="">Contact</a></li>
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
import HelloWorld from "./components/HelloWorld.vue";
import Panier from "./components/panierClient.vue";
export default {
  name: "App",

  components: {
    HelloWorld,
    Panier,
  },

  data: () => ({
    drawer: false,
    dialog: false,
    group: null,
    tab: null,
    products: [],
    cart: null,
    totalItems: 1,
  }),

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

      this.fetchProducts();
      this.fetchCart();
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

    fetchCart() {
      this.$commerce.cart
        .retrieve()
        .then((cart) => {
          this.cart = cart;
        })
        .catch((error) => {
          console.log("There is an error fetching the cart", error);
        });
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

v-btn {
  color: white;
}
</style>
