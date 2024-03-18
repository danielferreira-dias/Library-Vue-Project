<template>
    <h1>Main Info</h1>    
</template>

<script>
export default{
    name: 'BookDetails',
    data(){
        return {
            bookID: this.$route.params.id
        }
    }
}
</script>

<style>
</style>