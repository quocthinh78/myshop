<template>
    <div>
        <div class="html-filter">
            <span class="home-filter__label">Sắp xếp theo</span>
            <Btn btnCart="home-filter__btn btn">Phổ biến</Btn>
            <Btn btnCart="home-filter__btn btn btn-primary">Mới nhất</Btn>
            <Btn btnCart="home-filter__btn btn">Bán chạy</Btn>
            <Filters SeltFilter="header__search--self" OptionFilter="header__search-option-medium header__search-position">
                <template v-slot:title>
                    <span>Giá</span>
                </template>
                <template v-slot:first_filter>
                   <span> Cao đến thấp</span>
                </template>
                <template v-slot:ntn_of_2>
                    <span>Thấp đến cao</span>
                </template>
            </Filters>
            <div class="home-filter__page">
                <span class="home-filter__page-num">
                    <span class="home-filter__page-current">1</span>/ 14
                </span>
                <div class="home-filter__page-control">
                    <a href="" class="home-filter__page-btn home-filter__page-btn--disable">
                        <i class="home__filter-icon fas fa-angle-left"></i>
                    </a>
                    <a href="" class="home-filter__page-btn">
                        <i class="home__filter-icon fas fa-angle-right"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Btn from "../components/Btn"
import Filters from "../components/Filter"

export default {
    components :{
        Btn,
        Filters
    }
}
</script>

<style scoped>
    
</style>