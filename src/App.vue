<template>
<NavBar />
<router-view />
</template>

<script>
import NavBar from './direcitve/NavBar/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,

  }
}
</script>

<style>

</style>