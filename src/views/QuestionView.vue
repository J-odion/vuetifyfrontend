<script>
import AppBar from "@/components/AppBar.vue";
import QuestionNumer from "../components/QuestionNumer.vue";
export default {
  name: "QuestionView",
  components: { AppBar, QuestionNumer },
  methods: {
    // startAssessment() {
    //   this.$router.push("/assessment");
    // },
  },
  data: () => ({
      rating: 4,
    }),
};
</script>

<template>
  <v-app>
    <AppBar />
    <v-main>
    <p></p>
        <router-link class="texting" to="/dashboard">
            <v-icon > mdi-arrow-left</v-icon>
            Dashboard
        </router-link>

        <v-container >
            <v-card
    class="mx-auto"
    max-width="600"
  >
    <v-card-title>
        Evidence Based Decision Making
    </v-card-title>

    <v-card-subtitle class="pb-0">
      Coordination capability
    </v-card-subtitle>

    <v-card-text class="text--primary mt-5">
      <div>
      <p >
      To what extent are leadership decisions based on sound evidence and discoveries supported by robust data?
      </p>
      

      </div>
       <v-slider
      v-model="length"
      color="#1976D2"
      min="1"
      max="20"
    ></v-slider>


      <div>
      <p>
      Standard practice is to base decisions on management experience and judgment rather than evidence and data. Fast and decisive decision making is valued over careful consideration of data and evidence.
      </p>
      </div>
    </v-card-text>

   

    <v-card-actions>
      <v-btn
      muted
      flat
      text
      class="buttons"
      >
        PREVIOUS
      </v-btn>
      <v-btn
        muted
        flat
        text
        class="buttons"
      >
        NEXT
      </v-btn>
    </v-card-actions>
  </v-card>

  <QuestionNumer />
  
        </v-container>
    
    </v-main>
  </v-app>
</template>
