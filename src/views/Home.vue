<template>
    <div class="main-page">
        <Header />
        <div class="intro">
            <div class="poly-back">
                <div class="poly-back2"></div>
                <div class="poly-back3"></div>
                <img src="../assets/images/Home/intro-logo2.jpg" class="person-me" alt="">
            </div>
            <div class="my-name">
                <h2>My name is</h2>
                <h1>Chase Arcos</h1>
                <h1>Hermosisima</h1>
                <h2>Software Engineer</h2>
                <div class="btn">
                    <div class="box1"></div>
                    <div class="box2"></div>
                    <a class="cv-btn" href="../assets/CV/CV.pdf" download="Chase CV">Download CV</a>
                </div>
            </div>
        </div>

        <div class="about-me">
            <div class="title">
                <h1>About Me</h1>
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
        min-height: 300vh;
        margin: 0px;
        padding: 0%;
        position: relative;
    }
    /* Intro Part Start */
    .intro {
        background-image: url('../assets/images/Home/old-black-room.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        min-height: 100vh;
        user-select: none;
        .poly-back {
            position: relative;
            .person-me {
                clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
                position: absolute;
                left: 100px;
                height: 100vh;
                top: 0;
            }
            .poly-back2 {
                content: '';
                position: absolute;
                left: 11vh;
                top: 13vh;
                height: 76vh;
                width: 89.80vh;
                clip-path: polygon(16.5% 0%, 91.5% 0%, 75% 100%, 0% 100%);
                background-color: rgba(194, 194, 194, 0.562);
            }
            .poly-back3 {
                content: '';
                position: absolute;
                left: 13vh;
                top: 18vh;
                height: 76vh;
                width: 89.80vh;
                clip-path: polygon(16.5% 0%, 91.5% 0%, 75% 100%, 0% 100%);
                background-color: rgba(194, 194, 194);
            }
        }
        .my-name {
            position: absolute;
            top: 25vh;
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
            .btn{
                margin-top: 20px;
                position: relative;
                .cv-btn {
                    padding: 12px 2vw;
                    text-decoration: none;
                    font-weight: bold;
                    transition: ease .5s;
                    background-color: transparent;
                    border: 2px solid #fff;
                    
                    color: #fff;
                    position: absolute;
                    right: 0;
                    top: 0;
                    border-radius: 2px;
                }
                .cv-btn:hover {
                    background-color: rgb(255, 230, 0);
                    color: #000;
                    border: 2px solid rgb(255, 230, 0);
                }

                .box1 {
                    height: 42px;
                    width: 153px;
                    background-color: transparent;
                    position: absolute;
                    top: 0px;
                    right: 0px;
                    border-radius: 2px;
                    transition: ease .5s;
                }

                .box2 {
                    height: 42px;
                    width: 153px;
                    background-color: transparent;
                    position: absolute;
                    top: 0px;
                    right: 0px;
                    border-radius: 3px;
                    transition: ease .5s;
                }
            }
            .btn:hover{
                .box1{
                    top: -8px;
                    right: 18px;
                    background-color: rgb(216, 216, 216);
                }
                .box2{
                    top: 12px;
                    right: -10px;
                    background-color: rgba(194, 194, 194, 0.562);
                }
            } 
        }
    }
    /* Intro Part End */

    
    /* About Me Part Start */
    .about-me {
        min-height: 100vh;

        .title {
            user-select: none;
            ::before {
                content: '';
                position: absolute;
                top: -10px;
                left: -15px;
                width: 100%;
                height: 100%;
                background-color: rgb(216, 216, 216);
                border-radius: 3px;
                z-index: -1;
            }

            text-align: left;
            margin: 80px 40px;
            color: #000;
            padding: 6px 15px;
            background-color: rgb(255, 230, 0);
            width: fit-content;
            border-radius: 3px;
            box-shadow: 15px 10px 0px rgb(194, 194, 194);
            position: relative;
        }
    }
    /* About Me Part End */
</style>