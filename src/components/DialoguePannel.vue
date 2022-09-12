<script>
export default {
    methods: {
    Dasboard() {
        this.$router.push('/assessment')
        }
    },
    data: () => ({
      dialog: false,
    }),
  }
</script>

<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn style="
          background-color:#fcb900 "
          dark
          v-bind="attrs"
          v-on="on"
        >
          DO THE TEST
        </v-btn>
      </template>

      <v-card>
        <v-card-text>
          <v-container>
            <v-row>
             
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  required
                ></v-text-field>
          <small class='center '>
            By clicking "Create account", I agree to Privacy Policy.
        </small>
              </v-col>             
           
            </v-row>
          </v-container>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="white"
            text
            @click="Dasboard()"
          >
            Create An Account
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>