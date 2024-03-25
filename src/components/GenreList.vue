<template>
    <div class="flex flex-row mt-2">
        <div v-for="(genre, index) in genreList" :key="index">
            <span :class="[getGenreClass(genre)]" class="m-1 flex flex-wrap justify-between items-center text-xs sm:text-sm  rounded px-4 py-2 font-bold leading-loose cursor-pointer dark:text-gray-300">
                {{ genre }}
            </span>
        </div>
    </div> 
    <div></div>
</template>

<script>
import { db } from '../data/firebaseConfig';
import { doc, collection, getDoc } from 'firebase/firestore';

export default {
    props: {
      id: {
        type: String,
        required: true
      }
    },
    name: "GenreList",
    data(){
        return{
            genreList: [],
        }
    },  
    mounted() {
        this.fetchSpecificBook();
    },
    methods: {
        async fetchSpecificBook() {
          try {
            const bookRef = doc(db, 'books', this.id);
            const bookSnapshot = await getDoc(bookRef);

            // Check if the document exists
            if (bookSnapshot.exists()) {
  
              // Access the data of the book using .data() method
              const bookData = bookSnapshot.data();
              
               // Check if the 'genres' property exists and is an array
              if (bookData && Array.isArray(bookData.genre)) {
                // Assign the genres array to genreList
                this.genreList = bookData.genre;
              } else {
                console.log('Genres array not found or not in the expected format');
              }
            } else {
              console.log('Book document does not exist!');
            }
          } catch (error) {
            console.error("Error fetching specific book:", error);
          }
        },
        getGenreClass(genre) {
        // Define CSS classes based on genre
            switch (genre) {
              case "Sci-fi":
                return "bg-blue-500 text-white"; // Blue background for Sci-fi
              case "Horror":
                return "bg-red-700 text-white"; // Red background for Horror
              case "Romance":
                return "bg-pink-500 text-white"; // Pink background for Romance
              case "Action":
                return "bg-gray-700 text-white"; // Gray background for Action
              default:
                return ""; // Default color or no additional class
            }
      },
    },
}
</script>

<style>
</style>