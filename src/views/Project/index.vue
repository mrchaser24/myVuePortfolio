<template>
  <div class="main-page">
      <Header/>
      <div class="content">
          <h1>WELCOME TO PROJECT PAGE</h1>
          <div class="project-list invert-project-list" v-for="item in getProjectList" :key="item.title">
                <div v-if="item.id_proj % 2 == 0">
                    <div class="left-side">
                        <img src="" alt="">
                    </div>
                    <div class="right-side">
                        <p class="project-title">{{ item.title }}</p>
                        <p class="project-desc">{{ item.description }}</p>
                        <p class="project-tools">{{ item.tools }}</p>
                    </div>
                </div>
                <div v-else>
                    <div class="right-side">
                        <p class="project-title">{{ item.title }}</p>
                        <p class="project-desc">{{ item.description }}</p>
                        <p class="project-tools">{{ item.tools }}</p>
                    </div>
                    <div class="left-side">
                        <img src="" alt="">
                    </div>
                </div>
          </div>
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
            showProjectList: [],
            // listThis:0
        }
    },
    methods: {
        // invertProjectList(val){
        //     this.listThis = val
        //     return val % 2 == 0 ? 
        // },
    },
    computed: {
        ...mapGetters(["getProjectList"]),
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
        margin-top: 9vh;
        .project-list {
            div{
                .left-side {
                    min-width: 50%;
                    justify-content: center;
                    img {
                        border: 1px solid black;
                        height: 450px;
                        width: 350px;
                    }
                }
                .right-side {
                    min-width: 50%;
                    margin: auto;
                    display: block;
                    p {
                        text-align: center;
                        margin: auto;
                        padding: 12px 10px;
                    }
                }
                display: flex;
                justify-content: space-between;
                min-width: 100%;
                padding: 5vh 0;
            }
            min-width: 60%;
        }
        
    }

</style>