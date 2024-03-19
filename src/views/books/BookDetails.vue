<template>
    <div v-if="book" class="flex flex-wrap flex-col p-5">
        <div  class="flex flex-wrap mt-10">
            <!-- Book Image -->
            <div class="w-full md:w-1/3 h-full">
                <img :src="book.img_url" :alt="book.alt" class="w-full">
            </div>

            <!-- Book Info -->
            <div class="w-full md:w-2/3 text-xl p-2 items-start text-left">
              <h1 class="text-5xl mb-2">{{ book.name }}</h1>
              <p class="italic mb-2">{{ book.author }}</p>
              <p class="mb-2">Reviews: {{ book.numberOfReviews }}</p>
              <p class="mb-2">Rating: {{ book.rating }}</p>
            </div>
        </div>
        <!-- Book Desc -->
        <div class="flex border-b-2">
            <p class="text-2xl text-left p-5">{{ book.description }}</p>
        </div>

        <!-- Book Comments -->
        <div class="flex flex-col mt-10 p-5">
            <h2 class="text-3xl">Reviews</h2>
        
            <!-- Loop through each comment -->
            <div v-for="(comment, index) in book.comments" :key="index" class="flex flex-row mt-10">
            
                <!-- Comment User Info -->
                <div class="w-1/4">
                    <img src="../../assets/user.png" alt="User Icon" class="rounded-full border border-gray-600 bg-gray-100">
                </div>
            
                <!-- Comment Info -->
                <div class="flex flex-col text-left ml-10">
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
            console.log(this.book.img_url); // Access img_url from the book object
        })
        .catch(err => console.log(err.message));
}
}
</script>

<style>

</style>