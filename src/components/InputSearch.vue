<template>
    <div class="header__search">
        <div class="header__search-input-wrap">
            <input type="text" class="header__search-input" placeholder="Nhập sản phẩm cần tìm">
            <!-- search history -->
            <div class="header__search-history">
                <h3 class="header__search-history-heading">
                    Lịch sử tìm kiếm
                </h3>
                <ul class="header__search-history-list">
                    <ListSearch></ListSearch>
                </ul>
            </div>
        </div>
        <Filters>
            <template v-slot:title>
            <span>Trong Shop</span>
            </template>
            <template v-slot:first_filter>
            <span>Trong shop</span>
            </template>
            <template v-slot:ntn_of_2>
                <span>Ngoài shop</span>
            </template>
        </Filters>
        <button class="header__search-btn">
            <i class="header__search-btn-icon fas fa-search"></i>
        </button>
    </div>
</template>
<script>
import ListSearch from "../components/ListSearchs"
import Filters from "../components/Filter"
export default {
    components:{
          Filters,
    ListSearch
    }
}
</script>
<style scoped>
    
</style>