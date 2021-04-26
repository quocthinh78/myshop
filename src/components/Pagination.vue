<template>
    <div>
        <!-- pagination -->
        <div class="pagination home-product__pagination">
            <li class="pagination-item">
                <a href="" class="pagination-item__link pagination">
                    <i href="" class="pagination-item__icon fas fa-angle-left"></i>
                </a>
            </li>

            <li class="pagination-item pagination-item--active">
                <a href="" class="pagination-item__link">1</a>
            </li>
            <li class="pagination-item">
                <a href="" class="pagination-item__link">2</a>
            </li>
            <li class="pagination-item">
                <a href="" class="pagination-item__link">3</a>
            </li>
            <li class="pagination-item">
                <a href="" class="pagination-item__link">4</a>
            </li>
            <li class="pagination-item">
                <a href="" class="pagination-item__link">...</a>
            </li>
            <li class="pagination-item">
                <a href="" class="pagination-item__link">13</a>
            </li>
            <li class="pagination-item">
                <a href="" class="pagination-item__link">
                    <i href="" class="pagination-item__icon fas fa-angle-right"></i>
                </a>
            </li>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.pagination {
    display: flex;
    align-items: center;
    justify-content: center;
}

.pagination-item {
    list-style: none;
    display: flex;
    margin: 0 12px;
}

.pagination-item__link {
    --line-heght: 30px;
    text-decoration: none;
    font-size: 1.8rem;
    color: #939393;
    min-width: 40px;
    height: var(--line-heght);
    display: block;
    text-align: center;
    line-height: var(--line-heght);
}


.pagination-item--active {
    background-color: var(--primary-color);
}

.pagination-item--active .pagination-item__link {
    color: #fff;
}

.pagination-item--active:hover .pagination-item__link {
    background-color: #ed5c3f;
}

.home-product__pagination {
    margin: 48px 0 0px;
}
</style>