<script setup>
import {ref} from 'vue'
      let form=ref(false)
      let email=ref(null)
      let loading=ref(false)
   

    
     function onSubmit(){
        if (!form.value){
          loading.value = true
        }
        setTimeout(() => (loading.value = false), 2000)
      }
     function required (v) {
        return !!v || 'Field is required'
      }
    
</script>

<template>
    <v-sheet class="bg-cyan-lighten-4 pa-12" rounded="lg">
    <v-card class="mx-auto px-6 py-8" max-width="1044">
      <v-form
        v-model="form"
        @submit.prevent="onSubmit"
      >
        <v-text-field
          v-model="email"
          density="compact"
          :readonly="loading"
          :rules="[required]"
          color="primary"
          variant="underlined"
          clearable
          label="Email"
          placeholder="Enter your email"
        ></v-text-field>

        <br>

        <v-btn
          :disabled="!form"
          :loading="loading"
          block
          color="success"
          size="large"
          type="submit"
          variant="elevated"
        >
          Send message
        </v-btn>
      </v-form>
    </v-card>
  </v-sheet>
</template>

<style>

</style>
