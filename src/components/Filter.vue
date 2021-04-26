<template>
    <div class="header__search-select" :class="SeltFilter">
        <span class="header__search-select-label">
            <slot name=title></slot>
            <i class="fas header__search-select-icon fa-angle-down"></i>
        </span>
        <ul class="header__search-option" :class="OptionFilter">
            <li class="header__search-option-item header__search-option--active">
                <slot name="first_filter"></slot>
                <i class="fas fa-check"></i>
            </li>
            <li class="header__search-option-item">
                <slot name="ntn_of_2"></slot>
                <i class="fas fa-check"></i>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:["OptionFilter", "SeltFilter" ]
}
</script>

<style >
.header__search--self{
    width: 130px;
    height: 34px;
    background:var(--text-white);
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.header__search-select {
    border-left: 1px solid var(--border-color);
    padding-left: 12px;
    position: relative;
    cursor: pointer;
    
}

.header__search-select:hover .header__search-option {
    display: block;
}

.header__search-select-label {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.4rem;
    color: #4A4A4A;
    width: 100%;
}

.header__search-select-icon {
    font-size: 1.4rem;
    color: #4A4A4A;
    position: relative;
    top: 1px;
    margin: 0 16px 0 8px;
}

.header__search-btn {
    background-color: var(--primary-color);
    border: none;
    height: 34px;
    margin-right: 3px;
    border-radius: 3px;
    width: 60px;
    outline: none;
}

.header__search-btn:hover {
    background-color: rgb(238, 111, 6);
    cursor: pointer;
}

.header__search-btn-icon {
    font-size: 1.4rem;
    color: var(--text-white);
}

.header__search-option {
    position: absolute;
    right: 0;
    top: 175%;
    width: 130px;
    margin-top: 0;
    box-shadow: 0 1px 1px #ccc;
    padding-left: 0;
    border-radius: 3px;
    display: none;
    animation: fadeIn ease-in 0.2s;
    z-index: 1;
}

.header__search-option::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 30px;
    top: -20px;
    left: 0;
}

.header__search-option-item {
    background-color: #fff;
    padding: 8px 8px;
    list-style: none;
}

.header__search-option-item:first-child {
    border-radius: 3px 3px 0 0;
}

.header__search-option-item:last-child {
    border-radius: 0 0 3px 3px;
}

.header__search-option-item:hover {
    background-color: #f5f5f5;
    cursor: pointer;
}

.header__search-option-item span {
    font-size: 1.4rem;
    color: var(--text-color);
    margin-left: 12px;
}

.header__search-option-item i {
    font-size: 1.2rem;
    color: var(--text-color);
    margin: 0 6px 0 12px;
    display: none;
    color: var(--primary-color);
}

.header__search-option--active i {
    display: inline-block;
}

.header__search-input-wrap {
    flex: 1;
    height: 100%;
    position: relative;
}

.header__search-option.header__search-option-medium {
    width :145px;
}
.header__search-option.header__search-position{
    left:0;
    top : calc(100% + 4px);
}

</style>