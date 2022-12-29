<template>
  <div>
<h1>App</h1>
<nav v-if="!userStore.loadingSession">
  <RouterLink to="/" v-if="userStore.userData">Home</RouterLink>   |
  <RouterLink to="/login" v-if="!userStore.userData">Login</RouterLink>   |
  <RouterLink to="/register" v-if="!userStore.userData">Register</RouterLink>   |
  <button @click="userStore.signoutUser">Log out</button>
</nav>
<div v-else>
  loading.....
</div>
<router-view></router-view>
  </div>
</template>


<script setup>
import {useUserStore} from './stores/user'

const userStore = useUserStore()

</script>

