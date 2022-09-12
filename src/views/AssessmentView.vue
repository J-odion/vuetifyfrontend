<template>
  <v-app>
  <v-main class="mt-8">
    <v-row>
      <v-container col-8 align-center >
        <StepperPannel />
      </v-container>
    </v-row>
  </v-main>
  </v-app>
</template>

<script>
import StepperPannel from '@/components/StepperPannel';
  

  export default {
    name: 'AssessmentView',

    components: {
      StepperPannel,
    },
  }
</script>
