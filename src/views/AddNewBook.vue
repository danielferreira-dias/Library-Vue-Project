<template>
    <div class="mt-10">
        <!-- <p> When you add a new Book it will be directly added into the Database. The database being used is Firebase store.</p>
        <h2>What is Firebase?</h2>
        <p>Google Firebase is a set of cloud-based development tools that helps mobile app developers build, deploy and scale their apps.</p> -->
    </div>
    <div class="flex justify-center flex-col w-1/2 bg-gray-500 border-2 m-auto rounded-md p-5">
        <div>
            <h1 class="mt-10 mb-10 text-5xl text-white "> Add your new Book to the Data </h1>
        </div>
        <div class="mb-6 w-full p-5">
            <label for="large-input" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Book Name</label>
            <input type="text" v-model="newBook.name" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        </div>
        <div class="mb-6 w-full p-5">
            <label for="large-input-author" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Book Author</label>
            <input type="text" v-model="newBook.author" id="large-input-author" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        </div>
        <div class="mb-6 w-full p-5">
            <label for="large-input-genre" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Book Genre</label>
            <input type="text" v-model="newBook.genre" id="large-input-genre" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        </div>
        <div class="mb-6 w-full p-5">
            <label for="large-input-description" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Book description</label>
            <textarea id="large-input-description" v-model="newBook.description" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" rows="5"></textarea>
        </div>
        <div class="mb-6 w-full p-5">
            <label for="large-input" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Book Image</label>
            <input type="file" accept="image/jpeg" @change=uploadImage>
        </div>
        <div class="mb-6 w-full p-5">
            <button @click="uploadBook" data-modal-target="default-modal" data-modal-toggle="default-modal" class="block text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                Add new Book
            </button>
        </div>
    </div>
</template>

<script>
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../data/firebaseConfig';

export default {
    name: 'addNewBook',
    data(){
        return {
            newBook: {
                name: null,
                author: null,
                description: null,
                image_url: null,
                alt: null,
                comments: {},
                genre: [],
                isFavorited: false,
                numberOfReviews: 0,
                rating: 0,
            }
        }
    },
    methods:{
        uploadImage(e){
            const image = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e =>{
                this.newBook.image_url = e.target.result;
            };
        },
        async uploadBook(){
            // Add a new book with a generated id
            const docRef = await addDoc(collection(db, "books"), {
              name: this.newBook.name,
              author: this.newBook.author,
              description: this.newBook.description,
              image_url: this.newBook.image_url,
              alt: this.newBook.alt,
              comments: this.newBook.comments,
              genre: this.newBook.genre,
              isFavorited: this.newBook.isFavorited,
              numberOfReviews: this.newBook.numberOfReviews,
              rating: this.newBook.rating,
            });
            console.log("Book written with ID: ", docRef.id);
        }
    }
}
</script>

<style>

</style>