<script setup>
import axios from 'axios'
import {ref, onMounted} from 'vue'
import {useRouter} from 'vue-router'

let isLoading=ref(true)
let infoUser=ref({})
let router=useRouter()

const config= {
  headers:{
  Authorization:'Bearer ' + localStorage.getItem('token')
  }
}

const url='http://localhost:8000/api/me'
onMounted(()=>{
 axios 
 .get(url, config) 
 .then((response)=>{
  console.log(response)
  if(response.status === 200){
    isLoading.value= false;
    infoUser.value=response.data;
  }
 })
 .catch(error=> {
  console.log(error)
  router.push({path:'/'})
 });
})

</script>

<template>
  <p v-if="isLoading">
    Loading...
  </p>

  
<div v-else> 
  <v-card>
    <v-layout>
      <v-navigation-drawer
        image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        permanent
        theme="dark"
      >
        <h1>Bienvenue</h1>
        <v-list nav>
          <v-list-item
            lines="two"
            prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
            :title="infoUser.name"
            subtitle="Logged in"
          ></v-list-item>
          <v-list-item title="Inbox" value="inbox"></v-list-item>
          <v-list-item title="Supervisors" value="supervisors"></v-list-item>
          <v-list-item title="Clock-in" value="clockin"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <!-- <v-main style="height: 250px"></v-main> -->
    </v-layout>
  </v-card>
</div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}
</style>
