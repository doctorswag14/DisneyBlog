<template>
    <div class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="nav-item nav-link" to="/">Home</router-link> |
      <router-link class="nav-item nav-link" to="/news">News</router-link> |
      <router-link class="nav-item nav-link" to="/entertainment">Entertainment</router-link> |
      <router-link class="nav-item nav-link" to="/parks">Parks</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NavBar',
    components: {

    }
  }
  </script>
  
  <style>

  </style>
  