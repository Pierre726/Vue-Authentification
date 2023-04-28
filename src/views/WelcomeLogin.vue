<script setup>

import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import axios from 'axios'
import {useRouter} from 'vue-router'

 
let router = useRouter() 
let email=ref('')
let password=ref('')

function submit(){
  console.log(email.value, password.value)
  axios.post('http://localhost:8000/api/login', {
      "email": email.value,
      "password": password.value
    }) 
  .then((response)=>{
    console.log(response)
    if(response.status === 200 || response.status === 201){
      localStorage.setItem('token', response.data.token);
      router.push({path: '/protecte-page'});
    }
  })
  .catch(error=> console.log(error));
}

</script>

<template>

    <div class="bigdiv" >
    <v-img
      class="mx-auto mb-10"
      max-width="228"
      src=""
    ></v-img>

    <v-card
      class="mx-n16 pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >

      <div class="text-subtitle-1 text-medium-emphasis">Account</div>

      <v-text-field
        v-model="email"
        density="compact"
        placeholder="Email address"
        variant="outlined"
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Password

        <RouterLink to="/change-password"
          class="text-caption text-decoration-none text-blue"
          rel="noopener noreferrer"
        >
          Forgot login password?</RouterLink>
      </div>

      <v-text-field
        v-model="password"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <v-card
        class="mb-12"
        color="surface-variant"
        variant="tonal"
      >
        <v-card-text class="text-medium-emphasis text-caption">
          Warning: After 3 consecutive failed login attempts, you account will be temporarily locked for three hours. If you must login now, you can also click "Forgot login password?" below to reset the login password.
        </v-card-text>
      </v-card>
        <v-btn
        block
        class="mb-8"
        color="blue"
        size="large"
        variant="tonal"
       @click="submit">
        Log In
      </v-btn>
      

      <v-card-text class="text-center">
        <RouterLink to="/signup" 
        class="text-blue text-decoration-none"
        rel="noopener noreferrer"
        >
          Sign up now 
      </RouterLink>
      </v-card-text>
    </v-card>
  </div>
  
</template>


<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

.bigdiv{
  margin: 0 auto;
  width:400%;
  padding: 50%; 
}

</style>
