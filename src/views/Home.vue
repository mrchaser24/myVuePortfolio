<template>
    <div class="main-page">
        <Header />
        <!-- intro start -->
        <section class="intro" id="home">
            <div class="poly-back">
                <div class="poly-back2"></div>
                <div class="poly-back3"></div>
                <img src="../assets/images/Home/intro-logo2.jpg" class="person-me" alt="">
            </div>
            <div class="my-name"  data-aos="fade-left"
                    data-aos-offset="100"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-center">
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
        <!-- intro end -->

        <!-- quote start -->
        <section class="quote"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="10"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-anchor-placement="top"
        >
            <div class="quote-content">
                <h2>"If there's a problem,</h2>
                <h2>then there's always a solution"</h2>
            </div>
        </section>
        <!-- quote end -->

        <!-- about me 1st start -->
        <section class="about-me" id="aboutMe">
            <div class="spacings"></div>
            <div class="title">
                <h1>About Me</h1>
            </div>
            <div class="about-me-content">
                <div class="top-side" data-aos="zoom-in-up">
                    <p>Hi! I'm <span>Chase Arcos Hermosisima</span>, {{ageCount()}} years old.</p>
                    <p>I'm a <span>Software Engineer</span> from Quezon City, Philippines.</p>
                    <p>I enjoy building small businesses to a very interactive app.</p>
                    <p>I'm also a <span>Teakwondo assistant instructor</span> at Montalban.</p>
                    <p>I made a team of developer with my friends we focus on</p>
                    <p><span>Game Development</span>, and this one below is our logo.</p>
                </div>
                <div class="bottom-side"  data-aos="zoom-in-down">
                    <img src="../assets/images/Home/CodiTiers.png" alt="Coditiers Logo">
                </div>
            </div>
        </section>
        <!-- about me 1st end -->

        <!-- Skills start -->
        <section class="skills" id="mySkills">
            <div class="title">
                <h1>My Skills</h1>
            </div>
            <div class="skill-content">
                <vueper-slides
                    class="no-shadow"
                    :visible-slides="3"
                    slide-multiple
                    :gap="5"
                    autoplay
                    :slide-ratio="1 / 4"
                    :dragging-distance="1"
                    :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
                    :pause-on-hover="pauseOnHover"
                    :bullets="false"
                >
                    <!-- :arrows="false" -->
                    <vueper-slide 
                        class="card" 
                        v-for="i in getSkillList" 
                        :key="i.id" 
                        :image="i.imgSrc" 
                    />
                        <!-- :title="i.name.toString()" 
                        :content="i.desc" -->
                </vueper-slides>
            </div>
        </section>
        <!-- Skills end -->

        <!-- about me 2nd start -->
        <section class="about-me2">
            <div class="left-side" 
                data-aos="fade-up-right"
                data-aos-anchor-placement="top-center">
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
                <div class="bot-side">
                    <a class="fbook" href="https://www.facebook.com/ChiroKero/" target="_blank"><i class="fab fa-facebook-square"></i></a>
                    <a class="git" href="https://github.com/mrchaser24" target="_blank"><i class="fab fa-github-square"></i></a>
                    <a class="lin" href="https://www.linkedin.com/in/chase-arcus-hermosisima-2a13141ab/" target="_blank"><i class="fab fa-linkedin"></i></a>
                </div>
            </div>

            <div class="right-side"  
                data-aos="fade-up-left"
                data-aos-anchor-placement="top-center"
                >
                <div class="skewered">
                    <img src="../assets/images/Home/person-me-2.jpg" alt="my picture">
                </div>
            </div>
        </section>
        <!-- about me 2nd end-->

        <!-- Contact me start  -->
        <section class="contact">
            <div class="contact-content">
                <h3> Are you <span>interested?</span></h3>
                <!-- <h3>Hit the button below!</h3> -->
                <div class="line"></div>
                <div class="btn">
                    <a class="contact-btn" @click.prevent="$router.push({name:'Contact'})" >Contact Me</a>
                </div>
            </div>
        </section>
        <!-- Contact me end  -->

        <Footer />
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import {mapGetters} from 'vuex';

export default {
    components: {
        Header,
        Footer,
        VueperSlides,
        VueperSlide,
    },
    data() {
        return{
            count:0,
            age:0,
            publicPath: process.env.BASE_URL,
            pauseOnHover: true,
            titles:[
                "Software Engineer",
                "Game Developer",
                "Teakwondo Instructor",
            ],
        }
    },
    computed:{
        ...mapGetters(["getSkillList"])
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
        // min-height: 300vh;
        margin: 0px;
        padding: 0%;
        position: relative;
        overflow: hidden;
    }
    /* Intro Start */
    .intro {
        user-select: none;
        background-image: url('../assets/images/Home/old-black-room.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        min-height: 100vh;
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
                left: 75px;
                top: 13vh;
                height: 76vh;
                width: 89.80vh;
                clip-path: polygon(16.5% 0%, 91.5% 0%, 75% 100%, 0% 100%);
                background-color: rgba(194, 194, 194, 0.562);
            }
            .poly-back3 {
                content: '';
                position: absolute;
                left: 85px;
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
            width: 100%;
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
        @media @tablet {
            
            .my-name {
                position: absolute;
                top: 30vh;
                right: 0px;
                text-align: right;
                margin: 0;
                background-color: rgba(0, 0, 0, 0.5);
                border-radius: 10px 0px 0px 10px;
                width: fit-content;
                padding-right: 20px;
                padding-bottom: 50px;
                h1 {
                    font-size: 50px;
                    color: #fff;
                    text-shadow: 4px 3px 0px #000;
                    position: relative; 
                    z-index: 1;
                    text-align: right;
                    margin: 15px auto;
                    // width: fit-content;
                }
                h2 {
                    font-size: 25px;
                    color: #fff;
                    text-shadow: 4px 3px 0px #000;
                    position: relative; 
                    z-index: 1;
                    text-align: right;
                    // width: fit-content;
                    margin: 15px auto;
                }
                // h1::after{
                //         content: "";
                //         position: absolute;
                //         height: 100%;
                //         width: 105%;
                //         top: 0px;
                //         left: -8px;
                //         transform: skewX(15deg);
                //         background-color: rgb(255, 230, 0);
                //         box-shadow: 4px 3px 0px rgba(194, 194, 194, 0.562);
                //         z-index: -1;
                // }
                // h2::after{
                //         content: "";
                //         position: absolute;
                //         height: 100%;
                //         width: 110%;
                //         top: 0px;
                //         left: -8px;
                //         transform: skewX(15deg);
                //         background-color: rgb(255, 230, 0);
                //         box-shadow: 4px 3px 0px rgba(194, 194, 194, 0.562);
                //         z-index: -1;
                // }
                .btn{
                    margin: 0 auto;
                    .cv-btn {
                        // background-color: rgb(255, 230, 0);
                        color: #000;
                        border: none;
                        position: relative;
                        top: 20px;
                        z-index: 1;
                    }
                    .cv-btn::after {
                        content: "";
                        position: absolute;
                        height: 100%;
                        width: 110%;
                        top: 0px;
                        left: -8px;
                        transform: skewX(15deg);
                        background-color: rgb(255, 230, 0);
                        box-shadow: 4px 3px 0px rgba(194, 194, 194, 0.562);
                        z-index: -1;
                    }
                }
            }
        }
    }
    /* Intro End */
    .quote {
        user-select: none;
        min-height: 40vh;
        display: flex;
        justify-content: center;
        align-items: center;

        .quote-content{
            margin: 40px 0;
            padding: 20px 30px;
            background-color: rgb(255, 230, 0);
            box-shadow: 15px 10px 0px rgba(194, 194, 194, 0.562);
            transform: skew(15deg);
            h2 {
                transform: skew(-15deg);
                padding: 5px;
                color: black;
            }
        }
    }
    /* About Me 1st Start */
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
            color: #000;
            padding: 6px 15px;
            background: rgb(255, 230, 0);
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
    @media @tablet {
        .about-me {
            background-image: url('../assets/images/Home/desk-black800.png');
        }
    }
    // About Me 1st End 

    // My Skills start
    .skills {
        min-height: 50vh;
        padding-top: 40px;
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
            color: #000;
            padding: 6px 15px;
            background: rgb(255, 230, 0);
            width: fit-content;
            box-shadow: 10px 5px 0px rgba(194, 194, 194, 0.562);
            position: relative;
        }
        .skill-content {
            padding: 0px 0px 5vh;
            width: 80%;
            margin: auto;
            .card {
                border: 1px solid rgb(184, 184, 184);
                margin: 20px 0px;
                border-radius: 10px;
                background-size: contain;
                background-repeat: no-repeat;
            }
        }
    }
    // My Skills end

    // About me 2nd start 
    .about-me2 {
        background-image: url('../assets/images/Home/network-mainboard1980.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        user-select: none;
        min-height: 100vh;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: #000;
        border-bottom: 1px solid rgba(223, 223, 223, 0.438);
        .left-side {
            width: 50%;
            padding: 30px;
            margin-left: 100px;
            border-radius: 10px;
            background-color: rgb(255, 255, 255);
            box-shadow: 10px 10px 0px rgba(223, 223, 223, 0.438);
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
                .box-right {
                    margin-left: 10px;
                }
                .info {
                    display: flex;
                    border-bottom: 1px solid rgba(189, 189, 189, 0.432);
                    padding: 10px 0px 20px;
                    p {
                        // margin-left: 5px;
                        letter-spacing: .3px;
                        span{
                            font-weight: bold;
                        }
                    }
                }
            }
            .bot-side {
                text-align: left;
                margin-top: 30px;
                a {
                    position: relative;
                    
                    ::before {
                        content: "";
                        position: absolute;
                        top: 0px;
                        left: 0px;
                        width: 100%;
                        height: 100%;
                        background-color: rgb(28, 175, 224);
                    }
                    
                    color: #000;
                    margin: 0 5px;
                    font-size: 32px;
                    transition: .2s ease;
                }
                .fbook:hover {
                    color: #3b5998;
                    transition: .2s ease;
                }
                .git:hover {
                    color: #211f1f;
                    transition: .2s ease;
                }
                .lin:hover {
                    color: #0077b5;
                    transition: .2s ease;
                }
            }
        }
        .right-side {
            width: 50%;
            height: 100%;
            .skewered {
                margin: auto;
                height: 500px;
                img {
                    height: 100%;
                    width: 400px;
                    box-shadow:  15px 10px 0px rgba(194, 194, 194, 0.562);
                }
            }
        }
    }
    @media @tablet {
            
        .about-me2 {
            background-image: url('../assets/images/Home/network-mainboard800.png');
            justify-content: center;
            
            .left-side {
                width: 90%;
                margin: 0px;
            }
            .right-side {
                display:none;
            }
        }
        
    }
    /* About me 2nd End */

    // Contact me start
    .contact {
        min-height: 40vh;
        display: flex;
        align-items: center;
        justify-content: center;
        .contact-content {
            width: 100%;
            h3 {
                color: #000;
                margin: 10px 0;
                // letter-spacing: .3px;
                text-transform: uppercase;
                span {
                    color: #000;
                    padding: 4px 5px;
                    background-color: rgb(255, 230, 0);
                    box-shadow: 8px 5px 0px rgba(194, 194, 194, 0.562);
                }
            }
            // .line {
            //     width: 100%;
            //     border-bottom: 1px solid rgb(80, 80, 80);
            //     height: 5vh;
            // }
            .btn{
                margin-top: 20px;
                padding-top: 5vh;
                .contact-btn {
                    ::before {
                        content: "";
                        position: absolute;
                        left: 0px;
                        top: -10px;
                        height: 100%;
                        width: 100%;
                        background-color: grey;
                    }
                    cursor: pointer;
                    position: relative;
                    padding: 12px 2vw;
                    text-decoration: none;
                    font-weight: bold;
                    transition: ease .5s;
                    background-color: transparent;
                    border: 2px solid #000;
                    color: #000;
                    border-radius: 3px;
                }
                .contact-btn:hover {
                    background-color: rgb(255, 230, 0);
                    color: #000;
                    border: 2px solid rgb(255, 230, 0);
                    box-shadow: 10px 6px 0px rgb(172, 172, 172);
                }
                .contact-btn::after {
                    content: "";
                    position: absolute;
                    transition: ease .5s;
                    border-radius: 3px;
                    left: 0px;
                    top: 0px;
                    height: 100%;
                    width: 100%;
                    background-color: rgba(216, 216, 216, 0);
                    z-index: -1;
                }
                .contact-btn:hover::after {
                    left: -12px;
                    top: -8px;
                    background-color: rgb(216, 216, 216);
                }
            }
        }
    }
    // Contact me end
</style>