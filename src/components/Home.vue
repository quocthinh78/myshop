<template>
    <div class="grid__row app__content">
        <div class="grid__column-2">
            <nav class="category">
                <h3 class="category__heading">
                    <i class="category__heading-icon fas fa-list"></i> Danh mục
                </h3>
                <ul class="category-list">
                    <ListCat :activeCat="true"></ListCat>
                    <ListCat></ListCat>
                    <ListCat ></ListCat>
                    <ListCat ></ListCat>
                </ul>
            </nav>
        </div>
        <div class="grid__column-10 margin-select-bottom">
            <FilterNav></FilterNav>
            <div class="home-product">
                <div class="grid__row">
                    <transition name="fadeProduct">
                        <router-view></router-view>
                    </transition>
                </div>
            </div>
            <Pagination></Pagination>
        </div>
    </div>
</template>
<script>

import ListCat from "../components/ListOfCat"
import Pagination from "../components/Pagination"
import FilterNav from "../components/FilterNav"

export default {
    data(){
        return {
           
        }
    },
    components :{
        ListCat,
        Pagination,
        FilterNav
    },
}
</script>

<style scoped>
    
</style>