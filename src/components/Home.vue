<template>
    <div class="grid__row app__content">
        <div class="grid__column-2">
            <Category></Category>
        </div>
        <div class="grid__column-10 margin-select-bottom">
            <FilterNav></FilterNav>
            <div class="home-product">
                    <transition name="leave">
                        <router-view></router-view>
                    </transition>
            </div>
            <Pagination></Pagination>
        </div>
    </div>
</template>
<script>

import Pagination from "../components/Pagination"
import FilterNav from "../components/FilterNav"
import Category from "../components/Categories"


export default {
    data(){
        return {
           
        }
    },
    components :{
        Category,
        Pagination,
        FilterNav
    },
}
</script>

<style scoped>
    
  .leave-enter-active, .leave-leave-active {
    transition: all .9s;
  }
  .leave-enter, .leave-leave-to {
    opacity: 0;
    transform: translateX(-50%);
  }
</style>