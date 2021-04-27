<template>
    <ListOfProduct :products="getAllProduct"></ListOfProduct>
</template>

<script>
import {mapGetters} from "vuex"
import ListOfProduct from "../components/ListOfProduct"
export default {
    components :{
        ListOfProduct
    },
    computed :{
        ...mapGetters(["getAllProduct"])
    }
}
</script>

<style scoped>
    
</style>