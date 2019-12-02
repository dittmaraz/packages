<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>
body {
 font-family: 'Sulphur Point', sans-serif;

}
a {
  color: steelblue;
  
}
a:hover {
  text-decoration: none;
  color: dimgray;
}
</style>
