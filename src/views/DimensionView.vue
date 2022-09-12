<script>
    import Vue from "vue";
    import AssessmentService from '../../services/AssessmentService';
    import { required, email, max } from 'vee-validate/dist/rules'
    import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

    setInteractionMode('eager')

    extend('required', {
        ...required,
        message: '{_field_} can not be empty',
    })

    extend('max', {
        ...max,
        message: '{_field_} may not be greater than {length} characters',
    })

    extend('email', {
        ...email,
        message: 'Email must be valid',
    })

    export default {
        name: 'SelectDimension',
        components: {
            ValidationProvider,
            ValidationObserver,
            },
        data(){
            return {
                expert : {
                    name : '',
                    email : '',
                    },
                dimensions : [],
                dimensionId : 0,
                assessmentUuid : 0,
                isResultPending : true
            }
        },
        methods: {
            shareAssessment(){
                this.$refs.shareAssessmentObserver.validate().then(() =>
                    AssessmentService.shareAssessment(this.expert)
                                    .then(() => {
                                        this.errorMessage = "shared"
                                    })
                                    .catch((error) => {
                                        this.errorMessage = error
                                    })
                );
            },

            startDimensionSurvey(){
                this.$refs.dimensionSurveyObserver.validate().then(() =>
                    AssessmentService.getDimension(this.dimensionId)
                                    .then((response) => {
                                        Vue.prototype.$metricCount = response.data.metricCount
                                        Vue.prototype.$firstMetricId = response.data.firstMetricId
                                        this.$router.push('survey')
                                    })
                                    .catch((error) => {
                                        this.errorMessage = error
                                    })
                );
            },

            getDimensions()
            {
                AssessmentService.getDimensions().then((response) => {
                            this.dimensions = response.data.dimensions;

                            var isResultPending = false;
                            console.log(isResultPending);
                            for (var i = 0; i != this.dimensions.length; i++) {
                                isResultPending = isResultPending | this.dimensions[i].metricCount != this.dimensions[i].scoreCount
                            }

                            this.isResultPending = Boolean(isResultPending)
                        });
            },

            getResult(){
                this.$router.push('result');
            }
        },
        created() {
            this.assessmentUuid = Vue.prototype.$assessmentUuid
            this.getDimensions()
        }
    }
</script>

<template>
  <v-app>
    

    <v-main>
      <div class="main-with-image-section">
        <v-expansion-panels>
          <v-expansion-panel   >
            <v-expansion-panel-header>
              Government
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </v-expansion-panel-content>
          </v-expansion-panel>

           <v-expansion-panel>
          <v-expansion-panel-header expand-icon="mdi-menu-down">
            Government
          </v-expansion-panel-header>
          <v-expansion-panel-content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-expansion-panel-content>
          
        </v-expansion-panel>

          
        </v-expansion-panels>
        <v-container>
          <validation-observer
            ref="shareAssessmentObserver"
            v-slot="{ invalidAssessmentObserver }"
          >
            <form @submit.prevent="shareAssessment">
              <validation-provider
                v-slot="{ errors }"
                name="Name"
                rules="required|max:50"
              >
                <v-text-field
                  v-model="expert.name"
                  :counter="50"
                  :error-messages="errors"
                  label="Name"
                  required
                ></v-text-field>
              </validation-provider>

              <validation-provider
                v-slot="{ errors }"
                name="Email"
                rules="required|email"
              >
                <v-text-field
                  v-model="expert.email"
                  :error-messages="errors"
                  label="E-mail"
                  required
                ></v-text-field>
              </validation-provider>

              <v-btn
                class="mr-4"
                type="submit"
                :disabled="invalidAssessmentObserver"
              >
                share
              </v-btn>
            </form>
          </validation-observer>

          <v-btn
            v-bind:disabled="isResultPending"
            style="color:white; background-color: #fcb900;"
            @click="getResult()"
            >Get result</v-btn
          >

          <validation-observer
            ref="dimensionSurveyObserver"
            v-slot="{ invalid }"
          >
            <form @submit.prevent="startDimensionSurvey">
              <validation-provider
                v-slot="{ errors }"
                name="Dimensions"
                rules="required"
              >
                <v-select
                  v-model="dimensionId"
                  :items="dimensions"
                  :item-value="'id'"
                  :error-messages="errors"
                  label="Dimensions"
                  required
                >
                  <template slot="selection" slot-scope="data">
                    {{ data.item.name }} ( {{ data.item.scoreCount }} /
                    {{ data.item.metricCount }})
                  </template>
                  <template slot="item" slot-scope="data">
                    {{ data.item.name }} ( {{ data.item.scoreCount }} /
                    {{ data.item.metricCount }})
                  </template>
                </v-select>
              </validation-provider>

              <v-btn class="mr-4" type="submit" :disabled="invalid">
                submit
              </v-btn>
            </form>
          </validation-observer>
        </v-container> 

        <div class="ml-4">
          <img src="../assets/image 4.png" alt="" />
        </div>
      </div>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>
