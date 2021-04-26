<template>
    <div>
        <li class="header__search-history-item">
            <a href="">Kem dưỡng das</a>
        </li>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.header__search-history-item {
    height: 38px;
    padding: 0 12px;
}

.header__search-history-item:last-child {
    border-radius: 0 0 3px 3px;
}

.header__search-history-item a {
    text-decoration: none;
    font-size: 1.4rem;
    color: var(--text-color);
    line-height: 38px;
    display: block;
}

.header__search-history-item:hover {
    background-color: #fafafa;
}


</style>