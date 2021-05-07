<template>
    <div class="main-page">
        <Header />
        <div class="intro" id="home">
            <div class="poly-back">
                <div class="poly-back2"></div>
                <div class="poly-back3"></div>
                <img src="../assets/images/Home/intro-logo2.jpg" class="person-me" alt="">
            </div>
            <div class="my-name">
                <h2>My name is</h2>
                <h1>Chase Arcos</h1>
                <h1>Hermosisima</h1>
                <h2> {{ titles[count] }} </h2>
                <div class="btn">
                    <div class="box1"></div>
                    <div class="box2"></div>
                    <a class="cv-btn" href="../assets/CV/CV.pdf" download="Chase CV">Download CV</a>
                </div>
            </div>
        </div>

        <div class="about-me" id="aboutMe">
            <div class="spacings"></div>
            <div class="title">
                <h1>About Me</h1>
            </div>
            <div class="about-me-content">
                <div class="left-side">
                    <p>Hi! I'm Chase Arcos Hermosisima, {{age}} years old.</p>
                    <p>I'm a Software Engineer from Quezon City, Philippines.</p>
                    <p>I enjoy building small businesses to a very interactive app.</p>
                    <p>I'm also a Teakwondo assistant instructor at Montalban.</p>
                </div>
                <div class="right-side">
                    <img src="../assets/images/Home/about-me/introduction-image.png" alt="a laptop with small people">
                </div>
            </div>
            <div class="quote">
                <h2>"If there's a problem,</h2>
                <h2>then there's always a solution"</h2>
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
    },
    data() {
        return{
            count:0,
            age:24,
            titles:[
                "Software Engineer",
                "Game Developer",
                "Teakwondo Instructor",
            ],
        }
    },
    methods:{
        titlesFunc: function() {
            this.count++;
            return this.count > 2 ? this.count = 0 : this.titles[this.count];
        }
    },
    mounted(){
        setInterval(()=>this.titlesFunc(), 3000);
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
        margin: 0;
        // background-color: rgb(192, 192, 192);

        .spacings{
            margin-bottom: 80px;
            padding:5px;
        }
        
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
                z-index: -1;
            }

            text-align: center;
            margin: 0px auto;
            color: #fff;
            padding: 6px 15px;
            background-color: #000;
            width: fit-content;
            box-shadow: 15px 10px 0px rgb(255, 230, 0);
            position: relative;
        }

        .quote{
            // margin-top: 40px;
            h2 {
                padding: 5px;
                color: black;
            }
        }

        .about-me-content{
            display: flex;
            min-height: 50vh;
            justify-content: space-between;
            align-items: center;
            .left-side {
                text-align: center;
                width: 100%;
                p {
                    text-align: center;
                    padding: 2px 5px;
                    margin: 0 auto;
                    margin-bottom: 10px;
                    color: #fff;
                    background-color: black;
                    width: fit-content;
                    box-shadow: 10px 5px 0px rgb(255, 230, 0);
                }
            }
            .right-side {
                width: 100%;
                p {
                    padding: 5px;
                }
            }
        }
    }
    /* About Me Part End */
</style>