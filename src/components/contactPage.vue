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
          <v-btn color="primary" @click="submitForm">Envoyers</v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>

    <!-- Response Message -->
    <v-alert v-if="responseMessage" :type="responseType" dismissible>
      {{ responseMessage }}
    </v-alert>
  </v-container>
</template>

<script>
import { gql } from '@apollo/client';

export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
      responseMessage: "",
      responseType: "",
    };
  },
  methods: {
    submitForm() {
      // Effectuer une mutation GraphQL pour envoyer le message de contact
      const SEND_CONTACT_MESSAGE = gql`
        mutation SendContactMessage($input: ContactMessageInput) {
          sendContactMessage(input: $input) {
            success
            message
          }
        }
      `;

      this.$apollo.mutate({
        mutation: SEND_CONTACT_MESSAGE,
        variables: {
          input: {
            name: this.name,
            email: this.email,
            message: this.message,
          },
        },
      })
        .then(response => {
          // Traiter la réponse de la mutation GraphQL
          const { success, message } = response.data.sendContactMessage;
          this.responseMessage = message;
          this.responseType = success ? 'success' : 'error';
          this.clearForm();
        })
        .catch(error => {
          // Gérer les erreurs de la mutation GraphQL
          console.error(error);
          this.responseMessage = "Une erreur s'est produite. Veuillez réessayer.";
          this.responseType = 'error';
        });
    },
    clearForm() {
      // Effacer les champs du formulaire après l'envoi
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>

<style></style>
