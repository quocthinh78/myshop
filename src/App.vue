<template>
  <div id="app">
    <Header></Header>
    <div class="app__container">
      <div class="grid">
        <router-view></router-view>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'


export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style >
@import './assets/font/fontawesome-free-5.15.3-web/css/all.min.css';
@import './assets/css/main.css';
@import './assets/css/base.css';
.app__container {
    background-color: #f5f5f5;
}
.grid {
    width: 1200px;
    max-width: 100%;
    margin: 0 auto;
}
:root {
    --text-color: black;
    --text-white: white;
    --primary-color: rgb(238, 77, 45);
    --border-color: #dbdbdb;
    --start-color: #FEC33E;
}

* {
    box-sizing: inherit;
}

html {
    font-size: 62.5%;
    line-height: 1.6rem;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
}

.margin-select-bottom {
    margin-bottom: 55px;
}


/* responsive */

.grid__full-width {
    width: 100%;
    margin: 0 auto;
}

.grid__row {
    display: flex;
    flex-wrap: wrap;
    margin-left: -5px;
    margin-right: -5px;
}

.grid__column-2 {
    padding-left: 5px;
    padding-right: 5px;
    width: 16.6667%;
}

.grid__column-2-4 {
    padding-left: 5px;
    padding-right: 5px;
    width: 20%;
}

.grid__column-10 {
    padding-left: 5px;
    padding-right: 5px;
    width: 83.3333%;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

</style>
