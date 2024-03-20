<template>
    <div class="w-full h-full fixed top-0 left-0 flex justify-center items-center bg-opacity text-2xl " @click.self="closePopup()">
        <div class="p-8 bg-white w-3/4 rounded">
          <slot/>
          <button @click="closePopup()" class=" text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 mt-5 py-2.5 text-center dark:bg-blue-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Post Review</button>
        </div>
    </div>
</template>

<script>

export default {
    props: ['closePopup']
}
</script>

<style>
.bg-opacity {
  background-color: rgba(0, 0, 0, 0.5); /* Change the opacity value as needed */
}
</style>