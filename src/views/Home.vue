<template>
    <div class="main-page">
        <Header />
        <section class="intro" id="home">
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
        </section>

        <section class="quote">
            <div class="quote-content">
                <h2>"If there's a problem,</h2>
                <h2>then there's always a solution"</h2>
            </div>
        </section>

        <section class="about-me" id="aboutMe">
            <div class="spacings"></div>
            <div class="title">
                <h1>About Me</h1>
            </div>
            <div class="about-me-content">
                <div class="left-side">
                    <p>Hi! I'm <span>Chase Arcos Hermosisima</span>, {{age}} years old.</p>
                    <p>I'm a <span>Software Engineer</span> from Quezon City, Philippines.</p>
                    <p>I enjoy building small businesses to a very interactive app.</p>
                    <p>I'm also a <span>Teakwondo assistant instructor</span> at Montalban.</p>
                </div>
                <!-- <div class="right-side">
                    <img src="../assets/images/Home/intro-img.png" alt="a laptop with small people">
                </div> -->
            </div>
        </section>
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
    .quote {
        min-height: 40vh;
        display: flex;
        justify-content: center;
        align-items: center;
        .quote-content{
            margin: 40px 0;
            h2 {
                padding: 5px;
                color: black;
            }
        }
    }
    /* About Me Part Start */
    .about-me {
        background-image: url('../assets/images/Home/old-black-room.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        min-height: 100vh;
        margin: 0;

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
            margin: 0px auto 30px;
            color: #fff;
            padding: 6px 15px;
            background-color: rgb(39, 39, 39);
            width: fit-content;
            // box-shadow: 15px 10px 0px #000;
            position: relative;
        }

        .about-me-content{
            user-select: none;
            min-height: 50vh;
            .left-side {
                width: 100%;
                p {
                    margin: auto;
                    text-align: center;
                    padding: 2px 5px;
                    margin-bottom: 10px;
                    color: #000;
                    font-size: 1em;
                    background-color:  rgb(255, 230, 0);
                    width: fit-content;
                    box-shadow: 10px 5px 0px rgba(194, 194, 194, 0.562);
                    letter-spacing: 0.5px;

                    span {
                        font-weight: bold;
                    }
                }
            }
            // .right-side {
            //     img {
            //         filter: grayscale(100%);
            //         width: 100%;
            //     }
            // }
        }
    }
    /* About Me Part End */
</style>