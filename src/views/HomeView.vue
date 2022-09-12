<template>
<v-app>
  <v-content>
      <v-row class="hero">
        <v-container>
            <v-row style="height:90%; width:100%;" justify="center" align="center">
              <v-col class="justify-center align-center item-center text-center">
                <h1>Digital Maturity Scan</h1>
                <p>How far along are you in the <br />
                digitisation of your organisation?</p>
                <!-- <v-btn style="width: auto; background-color: #fcb900; color: white;" 
                class="mt-4"
                @click="startAssessment()">
                  DO THE TEST
                </v-btn> -->
                <DialoguePannel/>

              </v-col>
            </v-row>
            <v-row>
                <v-btn style="width: auto; background-color: #fff; color: #000; margin-left:5%;" href="https://www.agilearchitects.be/">Provided By <strong>Agile Architects</strong></v-btn>
            </v-row>
        </v-container>
      </v-row>

        <v-container>
            <v-row>
              <v-col md="8" class="mx-auto my-15 text-center ">
                <p class="my-15">
                  A successful digital transformation is only possible if you know where you stand and where you want to go. With our Digital Maturity Scan, we want to help companies assess where they are in their digitisation process!
                </p>
              </v-col >
            </v-row>
          </v-container>
          <!-- end of intro container -->

            <!-- section with two halves -->
            <v-row justify="center" align-center>
            
            <v-col md="6"  class="pl-15 mx-auto my-auto"  >
            <!-- howfar we've come section with icon -->
               <v-container>
                 <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path fill="#fcb900" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
                </svg>
                <h3 class="my-5">How far along are you in <br/>the digitisation of your <br/>organisation?</h3>
                <v-btn style="color:white; background-color: #fcb900;" @click="startAssessment()">DO THE TEST</v-btn>
               </v-container>
            </v-col>

            <!-- our goal section -->

            <v-col md="6" style="background-color: #F8F8F8; padding: 50px;" >
                <h4 class="">Our goal</h4>
                <p>
                  Our ambition is to provide modern companies with a <span  class="spanned-text">detailed report</span> on their current digital status and give them an insight in their working points.<br/><br/>
                  We’re convinced that tomorrow’s solutions need tomorrow’s architecture methodologies. By applying <span  class="spanned-text">Agile principles</span> to Architecture, processes and systems can be (re)designed to empower an Agile transformation, allowing companies to achieve their goal of continually delivering value in the shortest sustainable lead time.<br/><br/>

                  Those Agile methodologies are being adopted at an increasing rate, which makes it hard for companies not to feel overwhelmed when looking for a solution provider. Our mission, as an <span  class="spanned-text">Open Agile Architecture™ expert</span>, is to be recognized as a trusted advisor that removes vendor bias and brings objectivity to the proverbial table.
                </p>
                </v-col>
            </v-row>

            <!-- bottom container -->
          <v-container>


            <!-- bottom section -->
            <v-row>
              <v-col md="7" class="mx-auto my-15 text-center ">
                <p>
                  The Digital Maturity Scan is based on a survey which we use to assess the digital maturity of your organisation.<br/>

                  After completing the questions,
                  you will receive an individual report with a score compared to the average in your sector. 
                  In addition, you will find out what your strengths and working points are to make your digital transformation successful.
                </p>
              </v-col >
            </v-row>
        </v-container>

  </v-content>


</v-app>
</template>

<script>
import DialoguePannel from '@/components/DialoguePannel.vue';

  export default {
  name: 'HomeView',
  components: { DialoguePannel },
    methods: {
        startAssessment(){
        this.$router.push('/assessment')
        }
    }
  }

</script>
