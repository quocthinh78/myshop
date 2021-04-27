<template>
    <nav class="category">
        <h3 class="category__heading">
            <i class="category__heading-icon fas fa-list"></i> Danh mục
        </h3>
        <ul class="category-list">
            <router-link tag="li" active-class="category-item--active" :to="{ path: '/'}" class="category-item__link"  exact >Trang điểm mặt</router-link>
        
            <router-link tag="li" active-class="category-item--active" :to="{ path: '/loai-san-pham/sach-tieu-thuyet' }" class="category-item__link">Sách tiểu thuyết</router-link>
        
            <router-link tag="li" active-class="category-item--active" :to="{ path: '/loai-san-pham/sach-kinh-te' }" class="category-item__link">Sách kinh tế</router-link>
        
            <router-link tag="li" active-class="category-item--active" :to="{ path: '/loai-san-pham/sach-nuoi-day-con' }" class="category-item__link">Sách chăm bé</router-link>
        </ul>
    </nav>
</template>

<script>
// import ListCat from "../components/ListOfCat"
export default {
    components: {
        // ListCat,
    }
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

.category-item--active.category-item__link {
    color: var(--primary-color);
}

.category-item--active.category-item__link::before {
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