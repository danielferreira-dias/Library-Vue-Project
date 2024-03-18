<template>
  <div>
    <Navbar></Navbar>
    <!-- Place router-view below the existing content -->
    <router-view/>
  </div>
</template>

<script>
import './assets/style.css'
import Navbar from './components/Navbar.vue';
import Home from './views/Home.vue';
import LibraryList from './components/LibraryList.vue';
import BookDetails from './views/books/BookDetails.vue';

export default {
    name: 'App',
    components: { Navbar, LibraryList, Home , BookDetails}
}
</script>

<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}



</style>
