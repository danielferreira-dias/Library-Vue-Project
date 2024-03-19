<template>
    <div v-if="book" class="flex flex-wrap flex-col px-10">
        <div  class="flex flex-wrap mt-10 flex-row">
            <!-- Book Image -->
            <div class="flex w-full md:w-1/3 justify-center border-2">
                <img :src="book.img_url" :alt="book.alt" class="object-contain h-90 w-96 ">
            </div>

            <!-- Book Info -->
            <div class="w-full md:w-2/3 text-xl p-2 items-start text-left border-2 flex flex-col justify-between">
                <div class="flex flex-col">
                    <h1 class="text-5xl mb-5">{{ book.name }}</h1>
                    <p class="italic mb-5">{{ book.author }}</p>
                    <p class="mb-5">Reviews: {{ book.numberOfReviews }}</p>
                    <p class="mb-5">Rating: {{ book.rating }}</p>

                </div>

                <!-- Book Desc -->
                <div class="flex">
                    <div class="flex border-b-2">
                        <p class="text-2xl text-left p-5">{{ book.description }}</p>
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
        <div class="flex flex-col mt-10 mb-10 p-5 ">
            <h2 class="text-3xl">Reviews</h2>
        
            <!-- Loop through each comment -->
            <div v-for="(comment, index) in book.comments" :key="index" class="flex flex-row mt-10 bg-gray-100 rounded-md align-middle text-center items-center">
            
                <!-- Comment User Info -->
                <div class="w-1/4 p-10">
                    <img src="../../assets/user.png" alt="User Icon" class="rounded-full border border-gray-600 bg-gray-100">
                </div>
            
                <!-- Comment Info -->
                <div class="flex flex-col text-left ml-10 e ">
                    <p>{{ comment.user }}</p>
                    <p>{{ comment.comment }}</p>
                    <p>Rating: {{ comment.rating }}</p>
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
export default{
    props: ['id'],
    name: 'BookDetails',
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

</style>