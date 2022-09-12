<script>
import AppBar from "@/components/AppBar.vue";
export default {
  name: "ResultView",
  components: { AppBar },
  methods: {
    // startAssessment() {
    //   this.$router.push("/assessment");
    // },
  },
};
</script>

<template>
  <v-app>
    <AppBar />
    <v-main>
      <p></p>
      <router-link class="texting" to="/dashboard">
        <v-icon> mdi-arrow-left</v-icon>
        Dashboard
      </router-link>

      <v-container>
        <v-card class="mx-auto" max-width="600">
          <v-card-title>Results</v-card-title>

          <v-card-subtitle class="pb-0">
            Your result : 85% - LEVEL 5 - OPTIMIZED
          </v-card-subtitle>

          <v-card-text class="text--primary mt-5">
            <div>
              <p>The detailed reports will be send to you by email:</p>
              <p class="ml-5">email@adres.com</p>
            </div>

            <div><p>You can contact us if you have any questions</p></div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="none"> FINISH </v-btn>

            <v-btn muted flat disabled> REDO </v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>
