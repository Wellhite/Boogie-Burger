<template>
  <v-parallax
      dark
      height="400"
      src="../assets/newsletter.jpg"
      sizes="300vw"
      srcset="
      ../assets/newsletter_MD.jpg 380px,
      ../assets/newsletter_SM.jpg 500px"
    >
      <v-row justify="center">
        <v-col
          cols="12"
          xl="6"
          lg="6"
          md="7"
          sm="9"
          class="d-flex justify-center align-center"
        >
          <div class="text-center py-10">
            <h2
              class="primary--text text-lg-h4 text-sm-h6 font-weight-bold pt-10"
            >
              Inscrivez-vous à notre newsletter!
            </h2>
            <p class="white--text mt-9 text-lg-h6 text-sm-body-2">
              Recevez les dernières nouveautés, ainsi que les promotions.
            </p>
            <div class="mt-9 pt-2">
              <v-form ref="form">
                <v-text-field
                  outlined
                  solo
                  placeholder="Entrez votre adresse mail"
                >
                  <template v-slot:append>
                    <v-btn
                      v-bind="size"
                      depressed
                      plain
                      class="
                        primary--text
                        text-uppercase
                        font-weight-bold
                        text-lg-body-1
                      "
                    >
                      Envoyer
                    </v-btn>
                  </template>
                </v-text-field>
              </v-form>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-parallax>
</template>

<script>

export default {
  name: 'newsLetter',

}
</script>

<style>

</style>