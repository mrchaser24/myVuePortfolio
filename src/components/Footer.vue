<template>
    <div class="footer-content">
        <div class="logo">
            <h1>Chase</h1>
        </div>
        <div class="nav-bar">
            <div class="left-side links">
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                    <li>Item 5</li>
                </ul>
            </div>
            <div class="middle-side links">
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                    <li>Item 5</li>
                </ul>
            </div>
            <div class="right-side links">
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                    <li>Item 5</li>
                </ul>
            </div>
        </div>
        <div class="copyrights">
            <p>&#169; 2021 copyright all right reserved</p>
        </div>
    </div>
</template>

<script>

</script>

<style lang="less" scoped>
    .footer-content {
        user-select: none;
        padding: 20px;
        background: rgb(39, 39, 39);
        // position: absolute;
        // bottom: 0;
        // left: 0;
        min-width: 100%;
        .logo {
            text-align: center;
            width: fit-content;
            margin: auto;
            h1{
                font-size: 64px;
                margin: 10px 0 20px;
                color: #fff;
                text-shadow: -2px 2px 2px rgb(22, 22, 22);
                text-transform: uppercase;
                position: relative;
                z-index: 10;
            }
            h1::before {
                content: "";
                position: absolute;
                width: 110%;
                height: 100%;
                left: -8px;
                top: 0;
                background: rgb(255, 230, 0);
                box-shadow: 15px 10px 0px rgba(194, 194, 194, 0.562);
                transition: ease .2s;
                z-index: -1;
                transform: skewX(20deg);
            }
        }
        .nav-bar{
            display: flex;
            justify-content: space-evenly;
            color: #fff;
            .links ul{
                margin:0;
                padding:0;
                li{
                    list-style: none;
                    cursor: pointer;
                    margin: 5px 0;
                }
            }
        }
        .copyrights {
            margin-top: 10px;
            border-top: 1px solid rgba(255, 255, 255, 0.041);
            p{
                color: #fff;
                margin: 0;
                margin-top: 20px;
            }
        }
    }
</style>