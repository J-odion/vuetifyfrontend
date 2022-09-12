<template>
  <div>
   <v-app>
        <v-toolbar dark  color="primary">
            Company name    
        </v-toolbar>


        <v-row class="items-body flex">
            <v-col
            class="justify-center flex"
            
            >
            <v-container class="col-body gap-4 ">
                   <!-- <v-card
            class="mx-auto"
            max-width="300"
        >
            <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
            <v-card-title>   Strategic Dynamism</v-card-title>
            </v-img>

            <v-card-text class="tprimary">

            <div>Greyhound divisively hello coldly wonderfully marginally far upon excluding. </div>
            </v-card-text>

            <v-card-actions>
            <v-btn
                class="button"
                
                text
            >
                Generate Report
            </v-btn>

            <v-btn
                
            >
                Edit
            </v-btn>
            </v-card-actions>
                </v-card> -->

                <v-card
            :loading="loading"
            class="mx-auto my-3"
            max-width="300"
        >
            <template slot="progress">
            <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
            ></v-progress-linear>
            </template>

            <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            > <p class="inline-text">0/15</p> </v-img>

            <v-card-title>   Strategic Dynamism</v-card-title>

            <v-card-text>
            <div>Greyhound divisively hello coldly wonderfully marginally far upon excluding. </div>
            </v-card-text>

            <v-card-actions>
            <v-btn
                class="button"
                text
                @click="reserve"
            >
                Generate Report
            </v-btn>
            <v-btn

            >
                Edit
            </v-btn>
            </v-card-actions>
                </v-card>

                <v-card
            :loading="loading"
            class="mx-auto my-3"
            max-width="300"
        >
            <template slot="progress">
            <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
            ></v-progress-linear>
            </template>

            <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            > <p class="inline-text">0/15</p></v-img>

            <v-card-title>   Strategic Dynamism</v-card-title>

            <v-card-text>
            <div>Greyhound divisively hello coldly wonderfully marginally far upon excluding. </div>
            </v-card-text>

            <v-card-actions>
            <v-btn
                class="button"
                text
                @click="reserve"
            >
                Generate Report
            </v-btn>
            <v-btn

            >
                Edit
            </v-btn>
            </v-card-actions>
                </v-card>

                <v-card
            :loading="loading"
            class="mx-auto my-3"
            max-width="300"
        >
            <template slot="progress">
            <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
            ></v-progress-linear>
            </template>

            <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ><p class="inline-text">0/15</p></v-img>

            <v-card-title>   Strategic Dynamism</v-card-title>

            <v-card-text>
            <div>Greyhound divisively hello coldly wonderfully marginally far upon excluding. </div>
            </v-card-text>

            <v-card-actions>
            <v-btn
                class="button"
                text
                @click="reserve"
            >
                Generate Report
            </v-btn>
            <v-btn
                
            >
                Edit
            </v-btn>
            </v-card-actions>
                </v-card>

                <v-card
            :loading="loading"
            class="mx-auto my-3"
            max-width="300"
        >
            <template slot="progress">
            <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
            ></v-progress-linear>
            </template>

            <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            > <p class="inline-text">0/15</p></v-img>

            <v-card-title>   Strategic Dynamism</v-card-title>

            <v-card-text>
            <div>Greyhound divisively hello coldly wonderfully marginally far upon excluding. </div>
            </v-card-text>

            <v-card-actions>
            <v-btn
                class="button"
                text
                @click="reserve"
            >
                Generate Report
            </v-btn>
            <v-btn
                
            >
                Edit
            </v-btn>
            </v-card-actions>
                </v-card>

                <v-card
            :loading="loading"
            class="mx-auto my-3"
            max-width="300"
        >
            <template slot="progress">
            <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
            ></v-progress-linear>
            </template>

            <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            > <p class="inline-text">0/15</p></v-img>

            <v-card-title>   Strategic Dynamism</v-card-title>

            <v-card-text>
            <div>Greyhound divisively hello coldly wonderfully marginally far upon excluding. </div>
            </v-card-text>

            <v-card-actions>
            <v-btn
                class="button"
                text
                @click="reserve"
            >
                Generate Report
            </v-btn>
            <v-btn
                
            >
                Edit
            </v-btn>
            </v-card-actions>
                </v-card>

                <v-card
            :loading="loading"
            class="mx-auto my-3"
            max-width="300"
        >
            <template slot="progress">
            <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
            ></v-progress-linear>
            </template>

            <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            >
            <p class="inline-text">0/15</p></v-img>

            <v-card-title>   Strategic Dynamism</v-card-title>

            <v-card-text>
            <div>Greyhound divisively hello coldly wonderfully marginally far upon excluding. </div>
            </v-card-text>

            <v-card-actions>
            <v-btn
                class="button"
                text
                @click="reserve"
            >
                Generate Report
            </v-btn>
            <v-btn
                
            >
                Edit
            </v-btn>
            </v-card-actions>
                </v-card>
            </v-container>
            
         
            </v-col>
        </v-row>
   </v-app>
  </div>
</template>


<script src="../components/Dimension/Script.js"></script>
<style>
.items-body {
    padding: 30px;
    /* width: 70vw;
    display: flex; */
    justify-content: center;
    margin: auto;
}
.button{
    background-color: blue;
    color: white !important;
}
.col-body{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
    width: 70vw;
    margin: auto;
}
.inline-text{
    background-color: #51CA27;
    color: white;
    width: 50px;
    border-radius: 10px;
    text-align: center;
    display: flex;
    justify-content: center;
    left: 240px;
    margin-top: 8px;
    position: relative;
}
</style>