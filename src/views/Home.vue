<template>
    <div class="main-page">
        <Header />
        <div class="intro">
            <img src="../assets/images/Home/intro-logo2.jpg" class="person-me" alt="">
            <div class="arrow">
                <div class="arrow1"></div>
                <div class="arrow2"></div>
            </div>
            <div class="my-name">
                <h2>My name is</h2>
                <h1>Chase Arcos</h1>
                <h1>Hermosisima</h1>
                <h2>Software Engineer</h2>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
    components: {
        Header,
        Footer,
    }
}
</script>

<style scoped lang="less">
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
        min-height: 200vh;
        margin: 0px;
        padding: 0%;
        position: relative;
    }
    /* Intro Part Start */
    .main-page .intro {
        background-image: url('../assets/images/Home/old-black-room.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        min-height: 100vh;
        position: relative;
        .person-me{
            clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
            position: absolute;
            left: 100px;
            height: 100vh;
            top: 0;
        }
        .arrow {
            :hover{
                cursor: pointer;
            }
            position: relative;

            .arrow1, .arrow2 {
                position: absolute;
                background-color: gold;
                left: 450px;
                top: 20vh;
                height: 400px;
                width: 200px;
                clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
            }
            .arrow2 {
                left: 650px;
            }
        }
        .my-name {
            position: absolute;
            top: 20vh;
            right: 10vh; 
            text-align: right;
            color: #fff;

            h1 {
                font-size: 60px;
                // text-transform: uppercase;
                margin-top: 20px;
            }
            h2 {
                font-size: 30px;
                margin-top: 20px;
                // text-transform: uppercase;
            }
        }
    }
    /* Intro Part End */
</style>