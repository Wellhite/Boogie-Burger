<template>
  <v-container>
    <!-- Contact Form -->
    <v-list subheader two-line>
      <v-subheader class="text-h6 black primary--text mb-4">Nous contacter</v-subheader>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <v-text-field label="Nom" v-model="name"></v-text-field>
          </v-list-item-title>
          <v-list-item-subtitle>
            <v-text-field label="Email" v-model="email"></v-text-field>
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            <v-textarea label="Message" v-model="message"></v-textarea>
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn color="primary" @click="submitForm">Envoyer</v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
      dialog: false,
    };
  },
  methods: {
    submitForm() {
      // Perform form submission logic here
      console.log("Name:", this.name);
      console.log("Email:", this.email);
      console.log("Message:", this.message);
    },
  },
};
</script>

<style></style>
