<template>
    <div>
        <li v-if="activeCat" class="categorty-item category-item--active">
            <a href="" class="category-item__link">Trang điểm mặt</a>
        </li>
        <li v-else class="categorty-item">
            <a href="" class="category-item__link">Trang điểm mặt</a>
        </li>
    </div>
</template>

<script>
export default {
    props:["activeCat"]
}
</script>

<style scoped>
.categorty-item {
    list-style: none;
    position: relative;
    line-height: 1.8rem;
}
.category-item__link {
    position: relative;
    font-size: 1.5rem;
    color: var(--text-color);
    text-decoration: none;
    font-weight: 400;
    padding: 8px 16px;
    display: block;
    transition: right linear 0.1s;
    right: 0;
}
.categorty-item:first-child::before {
    content: "";
    border: none;
}
.categorty-item::before {
    content: "";
    border-top: 1px solid #E1E1E1;
    position: absolute;
    top: 0;
    left: 8px;
    right: 16px;
}

.category-item--active .category-item__link {
    color: var(--primary-color);
}

.category-item--active .category-item__link::before {
    content: "";
    position: absolute;
    border: 4px solid;
    border-color: transparent transparent transparent var(--primary-color);
    top: 50%;
    transform: translateY(-50%);
    left: 7px;
}

.category-item__link:hover {
    right: -4px;
    color: var(--primary-color);
}
</style>