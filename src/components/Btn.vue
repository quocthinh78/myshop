<template>
  <button :class="btnCart">
    <slot></slot>
    <i v-if="cartIcon" :class="iconSize" class="fas fa-shopping-cart  header__cart-icon"></i>
  </button>
</template>

<script>
export default {
    props :["cartIcon" , "btnCart", "iconSize"],

}
</script>
<style  scoped>

.header__cart-viewcart {
    float: right;
    margin: 4px 12px 12px 0;
}

.header__cart-icon {
    font-size: 2.4rem;
    color: var(--text-white);
    margin-top: 6px;
    /* position: relative; */
}
 .btn {
    min-width: 142px;
    height: 34px;
    text-decoration: none;
    border: none;
    font-size: 1.5rem;
    padding: 0 12px;
    outline: none;
    cursor: pointer;
    color: var(--text-color);
    background-color: var(--text-white);
    display: inline-flex;
    justify-content: center;
    align-items: center;
}

.btn.btn-normal:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

.btn.btn-primary {
    color: var(--text-white);
    background-color: var(--primary-color);
}

.icon--size-s{
    font-size: 1.6rem;
    margin : -2px 0 0 3px;
}
.btn--size-s {
    height: 32px;
    font-size: 1.6rem;
    padding: 0 26px;
}
.home-filter__btn {
    margin-right: 12px;
    min-width: 120px;
    min-width: 90px;
}
</style>