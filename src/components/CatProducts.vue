<template>
<transition name="leave">
    <ListOfProducts :products="getCat()"></ListOfProducts>
</transition>
</template>

<script>
import {mapGetters} from "vuex";
import ListOfProducts from "../components/ListOfProduct"
export default {
    components :{
        ListOfProducts
    },
    computed :{
        ...mapGetters(["getTieuThuyet","getKinhTe","getSachNuoiDayCon"]),
    },
    methods : {
        getCat(){
            let cat = this.$route.params.cat;
             if(cat == "sach-tieu-thuyet"){
                return this.getTieuThuyet;
            }else if(cat == "sach-nuoi-day-con"){
                return this.getSachNuoiDayCon;
            }else if(cat == "sach-kinh-te"){
                return this.getKinhTe;
            }
        }
    }
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