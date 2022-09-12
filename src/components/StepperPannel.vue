<script>
import ExpansionPannel from "./ExpansionPannel";
import FormPannel from "./FormPannel.vue";

export default {
  // components: ExpansionPannel,

  methods: {
    home() {
      this.$router.push("/dashboard");
    },
  },
  data() {
    return {
      e1: 1,
    };
  },
  components: { ExpansionPannel, FormPannel },
};
</script>

<template>
  <v-stepper class="mt-10" v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">
        Additional information
        <small>Optional</small>
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2"> Aspiration </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3"> Ready To Go </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <!-- First pannel with form pane -->
      <v-stepper-content step="1">
        <FormPannel />

        <v-btn color="primary" @click="e1 = 2" small class="mr-4">
          Continue
        </v-btn>

        <v-btn small text @click="home()"> Back </v-btn>
      </v-stepper-content>
      <!-- second pannel with expansion pane -->
      <v-stepper-content class="item-center" step="2">
        <v-container class="mb-12 item-center justify-center align-center">
          <ExpansionPannel />
        </v-container>

        <v-btn color="primary" @click="e1 = 3" small class="mr-4">
          Continue
        </v-btn>

        <v-btn small @click="e1 = 1"> Back </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-container>
          <p class="font-weight-bold">Ready To Go</p>

          <p class="text-left texts text-caption mb-4">
            The Digital Maturity Scan is based on a survey which we use to
            assess the digital maturity of your organisation.
          </p>
          <p class="text-left texts text-caption">
            After completing the questions, you will receive an individual
            report with a score compared to the average in your sector.
          </p>
          <p class="text-left texts text-caption">
            In addition, you will find out what your strengths and working
            points are to make your digital transformation successful.
          </p>
        </v-container>

        <v-btn
          color="#1867c0 !important"
          dark
          @click="home()"
          small
          class="mr-4"
        >
          Go
        </v-btn>

        <v-btn small text @click="e1 = 2"> Back </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>
