<script>
export default {
  name: "LinkTooltip",
  methods: {
    // startAssessment() {
    //   this.$router.push("/assessment");
    // },
  },
};
</script>

<template>
  <div class="text-center d-flex align-center justify-space-around">
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-icon
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          mdi-home
        </v-icon>
      </template>
      <span>Tooltip</span>
    </v-tooltip>
    working
  </div>
</template>