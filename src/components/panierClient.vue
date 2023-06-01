<template>
  <v-container>
    <v-list subheader two-line>
      <v-subheader class="text-h6 black primary--text mb-4">Votre panier</v-subheader>

      <!-- Panier vide si aucun produit -->
      <v-list-item v-if="carts.length === 0">
        <v-list-item-content>
          <v-list-item-title class="text-h6 black primary--text mb-4">Votre panier est vide</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <!-- Liste des produits -->
      <v-list-item v-for="(product, index) in carts" :key="index">
        <v-list-item-avatar>
          <img :src="product.img" :alt="product.description" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ product.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ product.text }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-text-field type="number" min="1" v-model="product.qty"></v-text-field>
        </v-list-item-action>
        <v-list-item-action>
          <v-btn icon @click="supprimerDuPanier(index)">
            <v-icon color="warning">mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>

      <v-divider v-if="index + 1 < carts.length" :key="index"></v-divider>
    </v-list>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      carts: [],
    };
  },
  methods: {
    supprimerDuPanier(index) {
      this.carts.splice(index, 1);
    },
    ajouterAuPanier(product) {
      const cartItem = this.carts.find(item => item.id === product.id);
      if (cartItem) {
        cartItem.qty++;
      } else {
        this.carts.push({ ...product, qty: 1 });
      }
    },
  },
  mounted() {
    this.$root.$on("objet-ajoute", this.ajouterAuPanier);
  },
};
</script>

<style>
</style>
