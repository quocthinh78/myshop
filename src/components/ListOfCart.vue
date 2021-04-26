<template>
    <div>
        <li class="header__cart-item">
            <img src="@/assets/img/notify1.jpeg" alt="" class="header__cart-img">
            <div class="header__cart-item-info">
                <div class="header__cart-item-head">
                    <h5 class="header__cart-item-name">Bộ kem đặ dgdfg dfc vị vùng mắt</h5>
                    <div class="header__cart-price-wrap" v-if="Price">
                        <span class="header__cart-item-price">2.000.000đ</span>
                        <span class="header__cart-item-multiply">X</span>
                        <span class="header__cart-item-qnt">1</span>
                    </div>
                </div>
                <div class="header__cart-item-body">
                    <div class="header__space-remove" v-if="Price">
                        <span class="header__cart-item-description">
                            Phân loại: Bạc
                        </span>
                        <span class="header__cart-item-remove">
                            Xoá
                        </span>
                    </div>
                    <span v-else class="header__notyfi-description">Mô tả sản phảm chính hãng</span>
                </div>
            </div>
        </li> 
    </div>
</template>

<script>
export default {
    props : ["Description" , "Price"]
}
</script>

<style scoped>
    
</style>