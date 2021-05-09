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
                    <a class="cv-btn" :href="`${publicPath}cv/CV.pdf`" download="Chase_CV">Download CV</a>
                </div>
            </div>
        </section>

        <section class="quote">
            <div class="quote-content">
                <h2>"If there's a problem,</h2>
                <h2>then there's always a solution"</h2>
            </div>
        </section>

        <!-- about me part -->
        <section class="about-me" id="aboutMe">
            <div class="spacings"></div>
            <div class="title">
                <h1>About Me</h1>
            </div>
            <div class="about-me-content">
                <div class="top-side">
                    <p>Hi! I'm <span>Chase Arcos Hermosisima</span>, {{ageCount()}} years old.</p>
                    <p>I'm a <span>Software Engineer</span> from Quezon City, Philippines.</p>
                    <p>I enjoy building small businesses to a very interactive app.</p>
                    <p>I'm also a <span>Teakwondo assistant instructor</span> at Montalban.</p>
                    <p>I made a team of developer with my friends we focus on</p>
                    <p><span>Game Development</span>, and this one below is our logo.</p>
                </div>
                <div class="bottom-side">
                    <img src="../assets/images/Home/CodiTiers.png" alt="Coditiers Logo">
                </div>
            </div>
        </section>
        <section class="about-me2">
            <div class="left-side">
                <div class="top-side">
                    <h2>I'M CHASE ARCOS HERMOSISIMA</h2>
                    <h3>A <span>Web Developer</span> based in <span>Philippines</span></h3>
                </div>
                <div class="middle-side">
                    <div class="box-left">
                        <div class="info">
                            <p><span>Birthday:</span></p>
                            <p>May 18,1997</p>
                        </div>
                        <div class="info">
                            <p><span>Age:</span></p>
                            <p>{{ ageCount() }} years old</p>
                        </div>
                        <div class="info">
                            <p><span>Residence:</span></p>
                            <p>Philippines</p>
                        </div>
                        <div class="info">
                            <p><span>Address:</span></p>
                            <p>38 Bignay St. Proj.2, Quezon City</p>
                        </div>
                    </div>
                    <div class="box-right">
                        <div class="info">
                            <p><span>Email:</span></p>
                            <p>chilitomatohero@gmail.com</p>
                        </div>
                        <div class="info">
                            <p><span>Contect #:</span></p>
                            <p>(+63)915-899-1818</p>
                        </div>
                        <div class="info">
                            <p><span>Gender:</span></p>
                            <p>Male</p>
                        </div>
                        <div class="info">
                            <p><span>Freelance:</span></p>
                            <p>Available</p>
                        </div>
                    </div>
                </div>
                <div class="bot"></div>
            </div>

            <div class="right-side">
                <img src="" alt="my picture">
            </div>
        </section>
        <!-- about me part -->
        
        <section class="skills" id="mySkills">
            <div class="title">
                <h1>My Skills</h1>
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
            age:0,
            publicPath: process.env.BASE_URL,
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
        },
        ageCount(){
            let d = new Date();
            this.age = d.getFullYear() - 1997;
            return this.age;
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
        background-image: url('../assets/images/Home/desk-black1980.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        min-height: 100vh;
        margin: 0;

        .spacings{
            margin-bottom: 60px;
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
            background: linear-gradient(75deg, rgb(104, 104, 104) 10%, rgb(39, 39, 39) 100%, rgb(104, 104, 104) 10%);
            width: fit-content;
            box-shadow: 10px 5px 0px rgba(194, 194, 194, 0.562);
            position: relative;
        }

        .about-me-content{
            user-select: none;
            min-height: 50vh;
            .top-side {
                width: 100%;
                p {
                    margin: auto;
                    text-align: center;
                    padding: 2px 5px;
                    margin-bottom: 11px;
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
            .bottom-side {
                text-align: center;
                padding: 20px 0;
                img {
                    margin: 60px 0;
                    height: 400px;
                    width: 650px;
                }
            }
        }
    }

    /***not finish yet
    *more work
    *needed here
    *rest now
    */
    .about-me2 {
        user-select: none;
        min-height: 70vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #000;
        .left-side {
            width: 100%;
            padding: 0px 10px 0px 100px;
            .top-side {
                width: 100%;
                text-align: left;
                margin-bottom: 30px;
                h2 {
                    margin-bottom: 5px;
                }
                h3 {
                    span {
                        color: #000;
                        padding: 2px;
                        background-color: rgb(255, 230, 0);
                        box-shadow: 4px 3px 0px rgba(194, 194, 194, 0.562);
                    }
                }
            }
            .middle-side {
                width: 100%;
                display: flex;
                justify-content: space-between;
                .info {
                    display: flex;
                    border-bottom: 1px solid rgba(189, 189, 189, 0.432);
                    padding: 10px 0px 20px;
                    p {
                        margin-left: 5px;
                        span{
                            font-weight: bold;
                        }
                    }
                }
            }
        }
        .right-side {
            width: 100%;
        }
    }
    /* About Me Part End */

    // My Skills start
    .skills {
        min-height: 100vh;
    }
    // My Skills end
</style>