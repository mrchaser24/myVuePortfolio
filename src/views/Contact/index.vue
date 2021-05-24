<template>
    <div class="main-page">
        <Header/>
        <section class="contact">
            <div class="contact-content">
                <div class="title">
                    <h1>Contact Me</h1>
                </div>
                <div class="container">
                    <div class="left-side box">left</div>
                    <div class="right-side box">right</div>
                </div>
            </div>
        </section>
        <Footer/>
    </div>
</template>

<script>
    import Header from '../../components/Header.vue';
    import Footer from '../../components/Footer.vue';

    export default {
        components: {
            Header,
            Footer,
        }
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

    // contact start 
    .contact {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        .contact-content {
            .title {
                user-select: none;
                // ::before {
                //     content: '';
                //     position: absolute;
                //     top: -10px;
                //     left: -15px;
                //     width: 100%;
                //     height: 100%;
                //     background-color: rgb(216, 216, 216);
                //     z-index: -1;
                // }
                text-align: center;
                margin: 0px auto 30px;
                color: #fff;
                padding: 6px 15px;
                background: linear-gradient(75deg, rgb(104, 104, 104) 10%, rgb(39, 39, 39) 100%, rgb(104, 104, 104) 10%);
                width: fit-content;
                box-shadow: 10px 5px 0px rgba(194, 194, 194, 0.562);
                position: relative;
            }
            .container {
                display: flex;
                justify-content: center;
            }
        }
    }
</style>