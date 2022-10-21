<template>
  <v-container fluid class="justify-center">
    <v-col cols="12" class="text-center">
      <h1 class="font-weight-bold text-h6 text-xl-h1 text-lg-h2 text-md-h2 text-sm-h4 "> Deal du moment </h1>
    </v-col>
    <v-row class="justify-center">
      <div class="block">
        <p class="digit white--text">{{ days | FormatDigital }}</p>
        <p class="text">Jours</p>
      </div>
      <div class="block">
        <p class="digit white--text">{{ hours | FormatDigital }}</p>
        <p class="text">Heures</p>
      </div>
      <div class="block">
        <p class="digit white--text">{{ minutes | FormatDigital }}</p>
        <p class="text">Minutes</p>
      </div>
      <div class="block">
        <p class="digit white--text">{{ seconds | FormatDigital }}</p>
        <p class="text ">Secondes</p>
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "countDown",

  props: {
    date: null,
  },

  data() {
    return {
      now: Math.trunc(new Date().getTime() / 1000),
      finish: false,
    };
  },

  mounted() {
    window.setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000);
      if (!this.finish && this.calculatedDate - this.now <= 0) {
        this.finish = true;
        this.$emit("onFinish");
      }
    }, 1000);
  },

  computed: {
    secondCount() {
      return this.modifiedDate - this.now;
    },

    modifiedDate() {
      return Math.trunc(Date.parse(this.date) / 1000);
    },

    seconds() {
      if (this.secondCount < 0) return 0;
      return this.secondCount % 60;
    },

    minutes() {
      if (this.secondCount < 0) return 0;
      return Math.trunc(this.secondCount / 60) % 60;
    },

    hours() {
      if (this.secondCount < 0) return 0;
      return Math.trunc(this.secondCount / 60 / 60) % 24;
    },

    days() {
      if (this.secondCount < 0) return 0;
      return Math.trunc(this.secondCount / 60 / 60 / 24);
    },
  },

  filters: {
    FormatDigital(value) {
      /* Filter qui paramétre le décompte en format digital si la taille est inférieur ou égal à 1 on retourne zéro avant */
      if (value.toString().length <= 1) {
        return "0" + value.toString();
      }
      return value.toString();
    },
  },
};
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Russo+One&family=Yantramanav:wght@500&display=swap');

.block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
}

.v-application .text {
  background-color: none mp !important;
}

.text {
  font-size: 1.5vw;
  font-family: "Roboto Condensed", serif;
  font-weight: 40;
  text-align: center;
  font-weight: bolder;
  background-color: none;
}

.digit {
  font-size: 5vw;
  font-weight: 100;
  font-family: "Roboto", serif;
  margin: 10px;

  text-align: center;
  font-family: 'Russo One', sans-serif;
font-family: 'Yantramanav', sans-serif;
}

</style>