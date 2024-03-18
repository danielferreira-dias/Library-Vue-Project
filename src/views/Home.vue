<template>
    <div class="mb-4 text-4xl leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">
      Book for Passion
    </div>

    <div class="">
      <div class="text-3xl text-left text-black p-6 ml-1">
        Top 5 most well Reviewed
      </div>
      
      <div class="library-grid">
        <!-- Display Top 5 most well-reviewed books -->
        <LibraryList :topFive="true" :topFavorite="false"/>
      </div>
    </div>
    
    <div class="">
        <div class="text-3xl text-left text-black p-6 ml-1">
          Your Library
        </div>
        <div class="library-grid">
          <!-- Display Your Library -->
          <LibraryList :topFive="false" :topFavorite="false"/>
        </div>
    </div>

    <div class="">
        <div class="text-3xl text-left text-black p-6 ml-1">
          Your Favorites
        </div>
        <div class="library-grid mb-10">
          <!-- Display Your Library -->
          <LibraryList :topFive="false" :topFavorite="true"/>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import LibraryList from '../components/LibraryList.vue';

export default {
    name: 'Home',
    components: { Navbar, LibraryList }
}
</script>

<style>

.library-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 4fr);
  justify-content: center; /* Align grid horizontally in the center */
  align-items: center; /* Align grid vertically in the center */
  gap: 50px;
  place-items: center; /* Align both horizontally and vertically */
}

@media only screen and (max-width: 1800px) {
  .library-grid {
    grid-template-columns: repeat(3, 3fr);
  }
}

@media only screen and (max-width: 1650px) {
  .library-grid {
    grid-template-columns: repeat(2, 3fr);
  }
}

@media only screen and (max-width: 1100px) {
  .library-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}


</style>