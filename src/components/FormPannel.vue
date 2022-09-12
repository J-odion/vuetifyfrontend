<script>
  import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

  setInteractionMode('eager')

  extend('digits', {
    ...digits,
    message: '{_field_} needs to be {length} digits. ({_value_})',
  })

  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  })

  extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
  })

  extend('regex', {
    ...regex,
    message: '{_field_} {_value_} does not match {regex}',
  })

  extend('email', {
    ...email,
    message: 'Email must be valid',
  })

  export default {
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      name: '',
      phoneNumber: '',
      email: '',
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: null,
    }),

    methods: {
      submit () {
        this.$refs.observer.validate()
      },
      clear () {
        this.name = ''
        this.phoneNumber = ''
        this.email = ''
        this.select = null
        this.checkbox = null
        this.$refs.observer.reset()
      },
    },
  }
</script>

<template>
  <validation-observer
    ref="observer"
  >
    <form @submit.prevent="submit">

      <!-- name -->
      <validation-provider
        v-slot="{ errors }"
        name="Name"
        rules="required"
      >
        <v-text-field
          v-model="name"
          :error-messages="errors"
          label="Name"
          required
        ></v-text-field>
      </validation-provider>

      <!-- Company -->
      <validation-provider
        v-slot="{ errors }"
        name="Company"
        rules="required"
      >
        <v-text-field
          v-model="name"
          :error-messages="errors"
          label="Company"
          required
        ></v-text-field>
      </validation-provider>

      <!-- Function -->
      <validation-provider
        v-slot="{ errors }"
        name="Function"
        rules="required"
      >
        <v-text-field
          v-model="name"
          :error-messages="errors"
          label="Function"
          required
        ></v-text-field>
      </validation-provider>

      <!-- email -->
      <validation-provider
        v-slot="{ errors }"
        name="email"
        rules="required|email"
      >
        <v-text-field
          v-model="email"
          :error-messages="errors"
          label="E-mail"
          required
        ></v-text-field>
      </validation-provider>


      <!-- phone -->
      <validation-provider
        v-slot="{ errors }"
        name="phoneNumber"
        :rules="{
          required: true
        }"
      >
        <v-text-field
          v-model="phoneNumber"
          :error-messages="errors"
          label="Telephone"
          required
        ></v-text-field>
      </validation-provider>
      
     

      <!-- <v-btn
        class="mr-4"
        type="submit"
        :disabled="invalid"
      >
        submit
      </v-btn> -->
      
    </form>
  </validation-observer>
</template>