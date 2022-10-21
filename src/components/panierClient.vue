<template>
  <v-container>
    <v-list subheader two-line>
      <v-subheader  class="text-h6 black primary--text mb-4">Votre panier</v-subheader>
      <template v-for="(product, index) in products">
        <v-list-item v-bind:key="product.id">
          <v-list-item-avatar>
            <img :src="product.img" :alt="product.description" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="product.name"></v-list-item-title>
            <v-list-item-subtitle v-html="product.text"></v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-text-field type="number" min="1" :v-model="product.qty">
            </v-text-field>
          </v-list-item-action>
          <v-list-item-action>
            <v-btn icon>
              <v-icon color="warning">mdi-delete</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>

        <v-divider
          v-if="index + 1 < products.lenght"
          v-bind:key="index"
        ></v-divider>
      </template>
    </v-list>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    name: "panierClient",
    products: [
      {
        id: 1,
        category: "menu",
        img: require("../assets/logo.png"),
        description: "photo du menu kids chez Boogie Burger",
        name: "Menu Kids",
        text: "Smashburger looks for unique flavors & ingredients to build our local burgers.",
        prix: "4,99",
        qty: 1,
      },
      {
        id: 1,
        category: "menu",
        img: require("../assets/logo.png"),
        description: "photo du menu kids chez Boogie Burger",
        name: "Menu Kids",
        text: "Smashburger looks for unique flavors & ingredients to build our local burgers.",
        prix: "4,99",
        qty: 1,
      },
    ],
    dialog: false,
  }),
};
</script>

<style>
</style>