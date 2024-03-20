<template>
  <div class="flex flex-row mt-2">
        <div v-for="(genre, index) in book.genre" :key="index">
            <span :class="[getGenreClass(genre)]" class="m-1 flex flex-wrap justify-between items-center text-xs sm:text-sm  rounded px-4 py-2 font-bold leading-loose cursor-pointer dark:text-gray-300">
                {{ genre }}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: ["id"],
    name: "GenreList",
    data(){
        return{
            book: {}
        }
    },  
    methods: {
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
        }
    },
    mounted() {
        fetch(`http://localhost:3000/books/${this.id}`)
        .then(res => res.json())
        .then(data => {
            this.book = data;
        })
        .catch(err => console.log(err.message));
    }
}
</script>

<style>
</style>