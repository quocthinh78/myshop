<template>
    <div class="grid__row">
        <div v-for="(product, i ) in products" class="grid__column-2-4" :key="i">
            <!-- product item -->
            <a class="home-poduct-item">
                <img class="home-product-item__img" :src="require('@/assets/img/'+ product.image)">
                <!-- <div class="home-product-item__img" :style="`background-image : url(${require('@/assets/img/'+ product.image)})`"></div> -->
                <h4 class="home-product-item__name">{{product.name}}</h4>
                <div class="home-product-item__price">
                    <span class="home-product-item__price-old">{{product.price}}đ</span>
                    <span class="home-product-item__price-current">{{Math.round(product.price) * product.rate / 100}}đ</span>
                </div>
                <div class="home-product-item__action">
                    <span class="home-product-item__like home-product-item__like--liked">
                        <i class="home-product-item__like-icon-empty far fa-heart"></i>
                        <i class="home-product-item__like-icon-fill far fa-heart"></i>
                    </span>
                    <div class="home-product-item__rating">
                        <i class="home-product-item__start--gold fas fa-star"></i>
                        <i class="home-product-item__start--gold fas fa-star"></i>
                        <i class="home-product-item__start--gold fas fa-star"></i>
                        <i class="home-product-item__start--gold fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <span class="home-product-item__sold">
                        {{product.brand}} da ban
                    </span>
                </div>
                <div class="home-product-item__origin">
                    <span class="home-product-item__brand">Whoo</span>
                    <span class="home-product-item__origin-name">Nhật Bản</span>

                </div>
                <div class="home-product-item__favourite">
                    <i class="fas fa-check"></i> <span>Yêu thích</span>
                </div>
                <div class="home-product-item__sale-off">
                    <span class="home-product-item__sale-off-percent">{{product.brand}}%</span>
                    <span class="home-product-item__sale-off-label">GIẢM</span>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props :["products"]
}
</script>

<style scoped>
    
.home-poduct-item {
    margin-top: 10px;
    display: block;
    cursor: pointer;
    background-color: var(--text-white);
    position: relative;
    border-radius: 2px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
    transition: transform linear 0.2s;
    will-change: transform;
}

.home-poduct-item:hover {
    transform: translateY(-1px);
    box-shadow: 0 1px 20px 5px rgba(0, 0, 0, 0.05);
}

.home-product-item__img {
    /* padding-top: 100%; */
    width: 100%;
    height: 266px;
    background-repeat: no-repeat;
    background-size: contain;
    border-radius: 2px 2px 0 0;
}

.home-product-item__name {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.8rem;
    margin: 10px 10px 6px;
    height: 3.6rem;
    overflow: hidden;
    display: block;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

.home-product-item__price {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
}

.home-product-item__price-old {
    font-size: 1.4rem;
    color: #666;
    margin-left: 10px;
    text-decoration: line-through;
}

.home-product-item__price-current {
    font-size: 1.6rem;
    margin-left: 10px;
    color: var(--primary-color);
}

.home-product-item__action {
    display: flex;
    justify-content: space-between;
    margin: 8px 10px 0;
    align-items: baseline;
}

div.home-product-item__like {
    font-size: 1.2rem;
}

i.home-product-item__like-icon-fill {
    color: #F63D30;
    display: none;
}

.home-product-item__like--liked .home-product-item__like-icon-fill {
    display: block;
}

.home-product-item__like--liked .home-product-item__like-icon-empty {
    display: none;
}

.home-product-item__rating {
    font-size: 1rem;
    transform: scale(0.7);
    transform-origin: right;
    color: #cfcece;
    margin-left: auto;
    /* margin-top: 2px; */
}

i.home-product-item__start--gold {
    color: var(--start-color);
}

span.home-product-item__sold {
    font-size: 1.4rem;
    color: var(--text-color);
    font-weight: 400;
    margin-left: 6px;
}

.home-product-item__origin {
    display: flex;
    justify-content: space-between;
    margin: 3px 10px 0;
    color: #595959;
    font-size: 1.2rem;
    font-weight: 300;
    padding-bottom: 10px;
    padding-top: 2px;
}

.home-product-item__favourite {
    position: absolute;
    top: 10px;
    left: -4px;
    color: var(--text-white);
    color: var(--primary-color);
    background-color: currentColor;
    font-size: 1.2rem;
    font-weight: 900;
    line-height: 1.6rem;
    padding-right: 4px;
    border-radius: 0 3px 3px 0;
}

.home-product-item__favourite::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    border-top: 3px solid green;
    border-left: 3px solid transparent;
    filter: brightness(0.6);
}

.home-product-item__favourite i {
    font-size: 0.9rem;
    color: var(--text-white);
    margin: 0 2px 0 5px;
}

.home-product-item__favourite span {
    color: var(--text-white);
}

.home-product-item__sale-off {
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 36px;
    text-align: center;
    background-color: rgb(255, 217, 66, 0.9);
    border-radius: 0 2px 0 0;
}

.home-product-item__sale-off::after {
    content: "";
    position: absolute;
    border-width: 0 20px 6px;
    color: rgb(255, 217, 66, 0.9);
    border-color: transparent currentColor transparent currentColor;
    border-style: solid;
    left: 0;
    top: 36px;
}

.home-product-item__sale-off-percent {
    position: relative;
    margin-bottom: 3px;
    display: block;
    top: 5px;
    color: #EF4D2D;
    font-weight: 700;
    font-size: 1.3rem;
    line-height: 1.3rem;
}

.home-product-item__sale-off-label {
    font-size: 1.2rem;
    line-height: 1.2rem;
    color: var(--text-white);
    position: relative;
    top: 3px;
}

</style>