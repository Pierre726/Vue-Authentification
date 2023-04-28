<script setup>
  import {ref} from 'vue'
  import axios from 'axios'
  import {useRouter} from 'vue-router'

  let name=ref('')
  let email=ref('')
  let password=ref('')
  let router= useRouter() 

  function onSubmit(){
    console.log(name.value, email.value, password.value)
    axios
    .post('http://localhost:8000/api/register', {
      "name": name.value,
      "email": email.value,
      "password": password.value
    })
    .then(
      (response)=>{
        console.log(response);
        if(response.status === 200 || response.status === 201){
          router.push({path: '/'});
        }
      }
    )
    .catch(error=> console.log(error));
  }
</script>


<template>
  <div class="bigdiv">
    <v-card
    class=" mx-auto"
    max-width="344"
    title="Create account"
    >
    <v-container>
      <v-text-field
        v-model="name"
        color="primary"
        label="Name"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="email"
        color="primary"
        label="Email"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="password"
        :type="visible ? 'text' : 'password'"
        color="primary"
        label="Password"
        placeholder="Enter your password"
        variant="underlined"
      ></v-text-field>

      <v-checkbox
        v-model="terms"
        color="secondary"
        label="I agree to site terms and conditions"
      ></v-checkbox>
    </v-container>

    <v-divider></v-divider>

        <v-btn 
        block
        class="mb-8"
        color="success"
        size="large"
        variant=""
        @click="onSubmit">
        Submit
        </v-btn>
      
    
    </v-card>
  </div>
  
</template>

<style scoped>
  .bigdiv{
    margin: 0 auto;
    width: 200%;
    padding: 50%;
  }
</style>
