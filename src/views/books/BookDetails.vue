<template>
    <div v-if="book" class="flex flex-wrap flex-col px-10">
        <div  class="flex flex-wrap mt-10 flex-row">
            <!-- Book Image -->
            <div class="flex w-full md:w-1/3 justify-center border-2">
                <img :src="book.img_url" :alt="book.alt" class="object-contain h-90 w-96 ">
            </div>

            <!-- Book Info -->
            <div class="w-full md:w-2/3 text-xl p-2 items-start text-left border-2 flex flex-col">
                <div class="flex flex-col">
                    <h1 class="text-5xl mb-5">{{ book.name }}</h1>
                    <p class="italic mb-5">{{ book.author }}</p>
                    <p class="mb-5">Reviews: {{ book.numberOfReviews }}</p>
                    <div class="flex flex-row items-center text-center">
                        <p class=" mr-2 h-full">Rating: </p>
                        <div v-for="star in 5" :key="star">
                            <svg v-if="star <= book.rating" class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg v-else class="w-4 h-4 text-gray-300 me-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                        </div>
                    </div>
                </div>

               

                <!-- Book Desc -->
                <div class="flex flex-1 items-center ">
                    <div class="flex flex-col">
                        <p class="text-2xl text-left p-5 border-b-2">{{ book.description }}</p>
                        
                        <!-- Book Type -->
                        <GenreList :id="book.id" ></GenreList>

                        <!-- Book PDF Options -->
                        <div></div>

                        <!-- Book Extra Information -->
                        <div class="flex mt-5">
                            <p>Extra Information such as size</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
        <!-- Extra Info -->

        <div class="flex w-full justify-between text-2xl mt-5">
            <p >Publicado por: Daniel Dias</p>
            <div class="flex items-center ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" :fill="book.bookFavorited ? 'red' : 'none'" stroke="red" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                <p class="ms-2 text-2xl ">
                    {{ book.bookFavorited ? 'Remove from Favorite' : 'Add to Favorite' }}
                </p>
            </div>
        </div>

        <!-- Book Comments -->
        <div class="flex flex-col mt-10 m-10 ">
            <h2 class="text-3xl">Reviews</h2>
        
            <!-- Loop through each comment -->
            <div v-for="(comment, index) in book.comments" :key="index" class="space-y-4 md:flex md:flex-wrap md:justify-center mt-10 p-5 bg-gray-100 rounded-md md:items-center text-center">

                <!-- Comment User Info -->
                <div class="rounded-full overflow-hidden h-60 w-60 border-r-10 mx-auto md:mx-0">
                    <img src="/user.png" alt="User Icon" class="h-full w-full object-cover">
                </div>

                <!-- Comment Info -->
                <div class="flex-1 flex flex-col text-left ml-10 justify-between text-2xl max-h-96 md:max-h-60 overflow-y-auto">
                    <p class="italic">{{ comment.user }}</p>
                    <p class="my-5">{{ comment.comment }}</p>
                    
                    <div class="flex items-center">
                        <p class="mr-2">Rating: </p>

                        <div v-for="star in 5" :key="star">
                            <svg v-if="star <= comment.rating" class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg v-else class="w-4 h-4 text-gray-300 me-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                        </div>

                        <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">{{ comment.rating }}</p>
                        <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">out of</p>
                        <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">5</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
    

    <!-- Loading Book -->
    <div v-else>
        <p>Book Loading</p>
    </div>
</template>

<script>
import GenreList from '../../components/GenreList.vue';

export default{
    props: ['id'],
    name: 'BookDetails',
    components: { GenreList },
    data(){
        return{
            book: null
        }
    },  
    mounted() {
    fetch('http://localhost:3000/books/' + this.id)
        .then(res => res.json())
        .then(data => {
            this.book = data;
        })
        .catch(err => console.log(err.message));
    }
}
</script>

<style>

/* Add styles for stars */
.text-yellow-400 {
  color: #ffd700;
}

</style>