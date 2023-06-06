<template>
    <v-container>
      <!-- Login form -->

        <v-list subheader two-line>
            <v-subheader class="text-h6 black primary--text mb-4">Se connecter</v-subheader>
            <v-list-item>
            <v-list-item-content>
                <v-list-item-title>
                <v-text-field label="Email" v-model="email"></v-text-field>
                </v-list-item-title>
                <v-list-item-subtitle>
                <v-text-field label="Mot de passe" v-model="password"></v-text-field>
                </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
                <v-btn color="primary" @click="submitForm">Connexion</v-btn>
            </v-list-item-action>
            </v-list-item>
        </v-list>
    </v-container>
</template>

<script>


</script>