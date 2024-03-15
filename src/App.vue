<template>
  <Navbar>
  </Navbar>
  <div class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
    Book for Passion
  </div>
  <div class="libraryBody">
    <LibraryList>
    </LibraryList>
  </div>
</template>

<script>
import './assets/style.css'
import Navbar from './components/Navbar.vue';
import LibraryList from './components/LibraryList.vue';

export default {
    name: 'App',
    components: { Navbar, LibraryList }
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

.libraryBody{
  padding: 5%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

</style>
