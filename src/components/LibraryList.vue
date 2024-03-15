<template>
        <div class="card">
            <div class="card-title">
                <h2 style="color: white;">Book of Wisdom</h2>
            </div>
            <div class="card-body">
                <div class="card-body-image">
                    <img src="../assets/book_image_one.png" alt="">
                </div>
                <div class="card-body-description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <div class="card-footer">
                <p> Rating </p>
                <p> Add to Favorites</p>
            </div>
        </div>
</template>

<script>
export default{
    name: 'Library',
    data(){
        return {
            books: [
                {
                    name: "Book of Wisdom",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    author: "Lorem Ipsum",
                    img_url: "../assets/book_image_one",
                    rating: 5,
                },
                {
                    name: "Book of Water",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    author: "Lorem Ipsum",
                    img_url: "../assets/book_image_two",
                    rating: 5,
                },
                {
                    name: "Book of Earth",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    author: "Lorem Ipsum",
                    img_url: "../assets/book_image_one",
                    rating: 5,
                },
                {
                    name: "Book of Fire",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    author: "Lorem Ipsum",
                    img_url: "../assets/book_image_two",
                    rating: 5,
                },
            ]
        }
    }
}
</script>

<style>

@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

.card {
    background-color: rgb(33, 33, 33);
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

.card-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 5px;
}

</style>