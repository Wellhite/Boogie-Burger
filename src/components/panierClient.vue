<template>
  <v-container>
    <v-list subheader two-line>
      <v-subheader class="text-h6 black primary--text mb-4">Votre panier</v-subheader>

      <!-- Panier vide si aucun produit -->
      <v-list-item v-if="carts.length === 0">
        <v-list-item-content>
          <v-list-item-title class="text-h6 primary--text mb-4">Votre panier est vide</v-list-item-title>
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
          <v-text-field
            type="number"
            min="1"
            v-model="product.qty"
            @input="updateCart(index)"
            @keydown.up.prevent="incrementQuantity(product)"
            @keydown.down.prevent="decrementQuantity(product)"
          ></v-text-field>
        </v-list-item-action>
        <v-list-item-action>
          <v-btn icon @click="supprimerDuPanier(index)">
            <v-icon color="warning">mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>

      <!-- Total -->
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6 primary--text mb-4">Total</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-list-item-title class="text-h6 primary--text mb-4">
            {{ getTotalPrice() }} €
          </v-list-item-title>
        </v-list-item-action>

        <v-list-item-action>
          <v-btn color="primary" @click="viderPanier()">Vider le panier</v-btn>
        </v-list-item-action>
      </v-list-item>

      <v-divider></v-divider>

      <!-- Bouton de validation -->
      <v-list-item v-if="carts.length > 0">
        <v-list-item-content>
          <v-list-item-title class="text-h6 primary--text mb-4">Valider votre commande</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn @click="validerCommande()" color="primary">Valider</v-btn>
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
      cart:[],
    };
  },
  methods: {
    // Supprimer un produit du panier
    supprimerDuPanier(index) {
      if (confirm("Voulez-vous vraiment supprimer ce produit du panier ?")) {
        this.carts.splice(index, 1);
        this.saveCart();
        this.updateTotalItems();
      }
    },
    // Ajouter un produit au panier
    ajouterAuPanier(product) {
      const cartItem = this.carts.find(item => item.id === product.id);
      if (cartItem) {
        cartItem.qty++;
      } else {
        this.carts.push({ ...product, qty: 1 });
      }
      this.saveCart();
      this.updateTotalItems();
    },
    // Mettre à jour la quantité d'un produit dans le panier
    updateCart(index) {
      const product = this.carts[index];
      if (product.qty < 1) {
        product.qty = 1;
        // Afficher un message d'erreur si la quantité est inférieure à 1
        this.$toast.error("La quantité doit être supérieure ou égale à 1.");
      }
      this.saveCart();
      this.updateTotalItems();
    },
    // Augmenter la quantité d'un produit
    incrementQuantity(product) {
      product.qty++;
      this.updateTotalItems();
    },
    // Diminuer la quantité d'un produit
    decrementQuantity(product) {
      if (product.qty > 1) {
        product.qty--;
        this.updateTotalItems();
      }
    },
    // Calculer le prix total du panier
    getTotalPrice() {
      const total = this.carts.reduce((acc, item) => acc + parseInt(item.qty) * parseFloat(item.prix), 0);
      return total.toFixed(2);
    },
    // Vider le panier
    viderPanier() {
      if (confirm("Voulez-vous vraiment vider votre panier ?")) {
        this.carts = [];
        this.saveCart();
        this.updateTotalItems();
        // Afficher un message de succès
        this.$toast.success("Panier vidé avec succès.");
      }
    },
    // Valider la commande
    validerCommande() {
      if (confirm("Voulez-vous vraiment valider votre commande ?")) {
        this.carts = [];
        this.saveCart();
        this.updateTotalItems();
        // Afficher un message de succès
        this.$toast.success("Commande validée avec succès.");
      }
    },
    // Enregistrer le panier dans le stockage local
    saveCart() {
      localStorage.setItem("carts", JSON.stringify(this.carts));
    },
    // Mettre à jour le nombre total d'articles dans le panier
    updateTotalItems() {
      const totalItems = this.carts.reduce((acc, item) => acc + parseInt(item.qty), 0);
      this.$emit("update-total-items", totalItems);
    },
  },
  mounted() {
    // Abonner à l'événement "objet-ajoute" pour ajouter un produit au panier
    this.$root.$on("objet-ajoute", this.ajouterAuPanier);
  },
  created() {
    // Récupérer le panier depuis le stockage local
    this.carts = JSON.parse(localStorage.getItem("carts")) || [];
    this.updateTotalItems();
  },
};
</script>

<style></style>
