<template>
        <div v-for="(item, index) in filteredBooks" :key="index" class="card transition ease-in-out delay-0 hover:translate-y-1 hover:scale-110 duration-300 ">
            <div class="card-title">
                <h2 style="color: white;"> {{ item.name }}</h2>
            </div>
            <div class="card-body">
                <div class="card-body-image m-auto">
                    <img :src="item.img_url" :alt="item.alt">
                </div>
                <div class="card-body-description">
                    <p>{{ item.description }}</p>
                </div>
            </div>
            <div class="card-footer">
                <div class="flex items-center">
                    <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <p class="ms-2 text-sm font-bold text-gray-900 dark:text-white">{{ item.rating }}</p>
                    <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                    <a href="#" class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">{{ item.numberOfReviews }}</a>
                </div>
                <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" :fill="item.bookFavorited ? 'red' : 'none'" stroke="red" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                    <p class="ms-2 text-sm font-bold text-gray-900 dark:text-white">
                        {{ item.bookFavorited ? 'Remove from Favorite' : 'Add to Favorite' }}
                    </p>
                </div>
            </div>
        </div>
</template>

<script>
export default{
    name: 'Library',
    props:{
        topFive: {
            type: Boolean,
            required: true
        },
        topFavorite: {
            type: Boolean,
            required: true
        }
    },
    data(){
        return {
            books: [
                {
                    name: "Book of Wisdom",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    author: "Lorem Ipsum",
                    img_url: "src/assets/book_image_one.png",
                    alt: "Book Picture",
                    rating: 4.5,
                    numberOfReviews: 60,
                    bookFavorited: false,
                },
                {
                    name: "Book of Water",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    author: "Lorem Ipsum",
                    img_url: "src//assets/book_image_two.png",
                    alt: "Book Picture",
                    rating: 4.1,
                    numberOfReviews: 32,
                    bookFavorited: false,
                },
                {
                    name: "Book of Earth",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    author: "Lorem Ipsum",
                    img_url: "src//assets/book_image_one.png",
                    alt: "Book Picture",
                    rating: 5,
                    numberOfReviews: 14,
                    bookFavorited: false,
                },
                {
                    name: "Book of Fire",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    author: "Lorem Ipsum",
                    img_url: "src//assets/book_image_two.png",
                    alt: "Book Picture",
                    rating: 2,
                    numberOfReviews: 109,
                    bookFavorited: false,
                },
                {
                    name: "Book of Fire",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    author: "Lorem Ipsum",
                    img_url: "src//assets/book_image_two.png",
                    alt: "Book Picture",
                    rating: 4,
                    numberOfReviews: 204,
                    bookFavorited: false,
                },
                {
                    name: "Book of Fire",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    author: "Lorem Ipsum",
                    img_url: "src//assets/book_image_two.png",
                    alt: "Book Picture",
                    rating: 3.4,
                    numberOfReviews: 78,
                    bookFavorited: true,
                }
                
            ]
        }
    },
    computed: {
        filteredBooks() {
            if (this.topFive) {
              return this.books.sort((a, b) => b.rating - a.rating).slice(0, 5);
            } else if (this.topFavorite) {
              return this.books.filter(book => book.bookFavorited);
            } else {
              // Return all books
              return this.books;
            }
        }
    }
}
</script>

<style>

@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

.card {
    background-color: rgb(159, 159, 159);
    width: 510px;
    border-radius: 10px;
}

.card-title {
    padding: 10px;
}

.card-title > h2 {
    font-size: 1.9rem;
}

.card-body-image {
    width: 100%;
    height: 350px;
    padding: 10px 0;
    display: flex;
    justify-content: center;
}

.card-body-image img {
    height: 100%; /* Make the image fill the height of the container */
    object-fit: cover; /* Maintain aspect ratio and cover the container */
}

.card-body-description {
    padding: 10px 5px;
    text-align: left;
    justify-content: left;
    font-size: 1.0rem;
}

.card-body-description > p {
    color: white;
}

.card-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 5px;
}

</style>