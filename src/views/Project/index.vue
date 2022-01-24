<template>
  <div class="main-page">
      <Header/>
      <div class="content">
          <h1 class="title">WELCOME TO PROJECT PAGE</h1>
          <div class="project-list invert-project-list" v-for="item in getProjectList" :key="item.title">
                <div :class = 'invertProjectList(item.id_proj)'>
                    <div class="left-side"
                        data-aos="zoom-out-up"
                        data-aos-anchor-placement="center-bottom">
                        <img :src="item.projImg" alt="">
                    </div>
                    <div class="right-side"
                        data-aos="zoom-out-up"
                        data-aos-anchor-placement="center-bottom">
                        <p class="p-title">{{ item.title }}</p>
                        <p class="p-desc">{{ item.description }}</p>
                        <p class="p-tools">{{ item.tools }}</p>
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

// import { VueperSlides, VueperSlide } from 'vueperslides'
// import 'vueperslides/dist/vueperslides.css'
import {mapGetters} from 'vuex';

export default {
    components: {
        Header,
        Footer,
        // VueperSlides,
        // VueperSlide,
    },
    data() {
        return{
            showProjectList: [],
        }
    },
    methods: {
        invertProjectList(val){
            return val % 2 == 0 ? "dont-invert-this invert-this" : "dont-invert-this" ;
        },
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
        user-select: none;
        background-color: rgb(248, 248, 248);
        background-image: url('../../assets/images/Project/BackGround/Black-And-White-Laptop-Keyboards.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
    }

    // CONTENT START
    .content {
        min-height: 100vh;
        margin-top: 9vh;

        .title {
            ::before {
                content: '';
                position: absolute;
                top: -10px;
                left: -15px;
                width: 100%;
                height: 100%;
                background-color: rgb(216, 216, 216);
                z-index: -1;
            }

            text-align: center;
            margin: 0px auto 30px;
            color: #000;
            padding: 6px 15px;
            background: rgb(255, 230, 0);
            width: fit-content;
            box-shadow: 10px 5px 0px rgba(194, 194, 194, 0.562);
            position: relative;
        }
        .project-list {
            min-width: 60%;
            min-height: 80vh;
            display: flex;
            // border-bottom: 1px solid rgba(212, 212, 212, 0.438);

            .dont-invert-this{
                display: flex;
                margin: auto;
                justify-content: space-between;
                width: 70%;
                .left-side {
                    min-width: 50%;
                    img {
                        height: 450px;
                        width: 350px;
                        box-shadow: 10px 5px 0px rgba(194, 194, 194, 0.562);
                    }
                }
                .right-side {
                    min-width: 50%;
                    margin: auto;
                    display: flex;
                    flex-direction: column;
                    background-color: #fff;
                    border-radius: 25px;
                    box-shadow: 10px 5px 0px rgba(194, 194, 194, 0.562);

                    p {
                        text-align: center;
                        margin: 2vh auto;
                        padding: 6px 8px;

                        // text-align: center;
                        color: #000;
                        // padding: 6px 15px;
                        background: rgb(255, 230, 0);
                        width: 80%;
                        box-shadow: 10px 5px 0px rgba(194, 194, 194, 0.562);
                        // position: relative;
                    }
                    .p-title {
                        font-size: 28px;
                        padding: 6px 18px;
                        font-weight: bold;
                        width: fit-content;
                    }
                    .p-desc {
                        font-size: 20px;
                        background: none;
                        box-shadow: none;
                        margin: auto;
                    }
                    .p-tools {
                        font-size: 14px;
                        width: fit-content;
                        background: none;
                        box-shadow: none;
                    }
                }
            }
            .invert-this {
                flex-direction: row-reverse;
            }
        }
    }
</style>