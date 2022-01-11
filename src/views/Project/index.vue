<template>
  <div class="main-page">
      <Header/>
      <div class="content"  v-for="item in getProjectList" :key="item.title">
          <h1>WELCOME TO PROJECT PAGE</h1>
          <p>{{ item.title }}</p><br/>
          <p>{{ item.description }}</p>
      </div>
      <Footer/>
  </div>
</template>

<script>
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {mapGetters} from 'vuex';

export default {
    components: {
        Header,
        Footer
    },
    data() {
        return{
            showProjectList: []
        }
    },
    computed: {
        ...mapGetters(["getProjectList"])
    },
    mounted(){}
}
</script>

<style lang="less" scoped>
// TABLET SIZE SCREEN
    @tablet:    ~"only screen and (min-width: 360px) and (max-width: 959px)";

    * {
        box-sizing: border-box;
        margin: 0px;
        padding: 0px;
    }
    body {
        margin: 0px;
        padding: 0px;
    }
    .main-page {
        margin: 0px;
        padding: 0px;
        position: relative;
        overflow: hidden;
    }
    
    // CONTENT START
    .content {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>