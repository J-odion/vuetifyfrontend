<script>
import AppBar from "@/components/AppBar.vue";
export default {
  name: "DashboardView",
  components: { AppBar },
  methods: {
    ShowResult() {
      this.$router.push("/result");
      },
    Question() {
      this.$router.push("/question");
    },
    Edit() {
        this.$router.push('/assessment')
        }
  },
};
</script>

<template>
  <v-main>
    <v-app>
      <AppBar />

      <v-row class="items-body flex">
        <v-col class="justify-center flex">
          <v-container class="col-body gap-4">

          <!-- single element -->
            <v-card :loading="loading" class="mx-auto my-3" max-width="250">
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-img
                height="250"
                src="../assets/v-img-1.png"
              >
                <p class="inline-text">0/15</p></v-img
              >

              <v-card-title> Strategic Dynamism</v-card-title>

              <v-card-text>
                <div>
                  Greyhound divisively hello coldly wonderfully marginally far
                  upon excluding.
                </div>
              </v-card-text>

              <v-card-actions>
                <v-btn small class="button" text @click="ShowResult()">
                  Generate Report
                </v-btn>
                <v-btn small @click="Edit()"> Edit </v-btn>
              </v-card-actions>
            </v-card>

              <v-card :loading="loading" class="mx-auto my-3" max-width="250">
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-img
                height="250"
                src="../assets/v-img-2.png"
              >
                <p class="inline-text">0/15</p></v-img
              >

              <v-card-title> Strategic Dynamism</v-card-title>

              <v-card-text>
                <div>
                  Greyhound divisively hello coldly wonderfully marginally far
                  upon excluding.
                </div>
              </v-card-text>

              <v-card-actions>
                <v-btn small class="button" text >
                  Generate Report
                </v-btn>
                <v-btn small @click="Edit()"> Edit </v-btn>
              </v-card-actions>
            </v-card>


            <v-card :loading="loading" class="mx-auto my-3" max-width="250">
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-img
                height="250"
                src="../assets/v-img-3.png"
                ><p class="inline-text-empty">0/15</p></v-img
              >

              <v-card-title> Strategic Dynamism</v-card-title>

              <v-card-text>
                <div>
                  Greyhound divisively hello coldly wonderfully marginally far
                  upon excluding.
                </div>
              </v-card-text>

              <v-card-actions>
                <v-btn small class="button" text @click="Question()">
                  Go To Question
                </v-btn>
              </v-card-actions>
            </v-card>

            <v-card :loading="loading" class="mx-auto my-3" max-width="250">
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-img
                height="250"
                src="../assets/v-img-4.png"
              >
                <p class="inline-text-empty">0/15</p></v-img
              >

              <v-card-title> Strategic Dynamism</v-card-title>

              <v-card-text>
                <div>
                  Greyhound divisively hello coldly wonderfully marginally far
                  upon excluding.
                </div>
              </v-card-text>

              <v-card-actions>
                <v-btn small class="button" text @click="Question()">
                  Go To Question
                </v-btn>
              </v-card-actions>
            </v-card>

            <v-card :loading="loading" class="mx-auto my-3" max-width="250">
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-img
                height="250"
                src="../assets/v-img-5.png"
              >
                <p class="inline-text">0/15</p></v-img
              >

              <v-card-title> Strategic Dynamism</v-card-title>

              <v-card-text>
                <div>
                  Greyhound divisively hello coldly wonderfully marginally far
                  upon excluding.
                </div>
              </v-card-text>

              <v-card-actions>
                <v-btn small class="button" text @click="ShowResult()">
                  Generate Report
                </v-btn>
                <v-btn small @click="Edit()"> Edit </v-btn>
              </v-card-actions>
            </v-card>

            <v-card :loading="loading" class="mx-auto my-3" max-width="250">
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-img
                height="250"
                src="../assets/v-img-6.png"
              >
                <p class="inline-text">0/15</p></v-img
              >

              <v-card-title> Strategic Dynamism</v-card-title>

              <v-card-text>
                <div>
                  Greyhound divisively hello coldly wonderfully marginally far
                  upon excluding.
                </div>
              </v-card-text>

              <v-card-actions>
                <v-btn small class="button" text @click="ShowResult()">
                  Generate Report
                </v-btn>
                <v-btn small @click="Edit()"> Edit </v-btn>
              </v-card-actions>
            </v-card>
          </v-container>
        </v-col>
      </v-row>
    </v-app>
  </v-main>
</template>

<style>
.items-body {
  padding: 30px;
  /* width: 70vw;
    display: flex; */
  justify-content: center;
  margin: auto;
}
.button {
  background-color: #1976D2;
  color: white !important;
}
.col-body {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  width: 70vw;
  margin: auto;
}
.inline-text {
  background-color: #51ca27;
  color: black;
  width: 50px;
  border-radius: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  left: 190px;
  margin-top: 8px;
  position: relative;
}
.inline-text-empty {
  background-color: #D9D9D9;
  color: black;
  width: 50px;
  border-radius: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  left: 190px;
  margin-top: 8px;
  position: relative;
}
</style>
