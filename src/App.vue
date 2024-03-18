<template>
  <Navbar>
  </Navbar>
  <div class="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
    Book for Passion
  </div>
  <div class="text-3xl text-left text-white p-5 ml-1">
    Top 5 most well Reviewed
  </div>
  <div class=" w-full flex flex-row gap-10 flex-wrap p-5 justify-start mx-auto">
    <LibraryList :topFive="true" />
  </div>
  <div class="text-3xl text-left text-white p-5 ml-1">
    Your Library
  </div>
  <div class="flex w-full m-auto ">
    <div class=" w-full flex flex-row gap-10 flex-wrap p-5 justify-start mx-auto">
      <LibraryList :topFive="false" />
    </div>

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
