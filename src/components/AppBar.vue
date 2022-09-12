<script>
export default {
  name: "DashboardView",
  methods: {
    // startAssessment() {
    //   this.$router.push("/assessment");
    // },
  },
};
</script>
<template>
  <v-app-bar app color="primary" primary>
    <div class="d-flex align-center">
      <!-- <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        /> -->

      <!-- <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        /> -->
      <router-link class="white--text block mx-5" to="/"
        >Company Name</router-link
      >
    </div>

    <v-spacer></v-spacer>

    

    <router-link class="block white--text mx-5" to="">
      <v-icon dark>mdi-heart</v-icon>
    </router-link>
    <router-link class="block white--text mx-5" to="">
      <v-icon dark>mdi-at</v-icon>
    </router-link>
    <router-link class="block white--text mx-5" to="">
      <v-icon dark>mdi-logout</v-icon>
    </router-link>    
  </v-app-bar>
</template>