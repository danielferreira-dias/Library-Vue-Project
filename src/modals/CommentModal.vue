<template>
    <div class="w-full h-full fixed top-0 left-0 flex justify-center items-center bg-opacity">
      <div class="p-8 bg-white">
        <slot/>
        <button @click="closePopup()">Close Modal</button>
      </div>
    </div>
  </template>

<script>
export default {
    props:['closePopup']
}
</script>

<style>
.bg-opacity {
  background-color: rgba(0, 0, 0, 0.5); /* Change the opacity value as needed */
}
</style>