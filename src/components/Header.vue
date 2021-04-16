<template>
    <div class="header-content">
        <div class="title">
            <h1>CHASE</h1>
        </div>
        <div class="nav-bar">
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Skills</li>
                    <li>Blogs</li>
                    <li>Projects</li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>

</script>

<style scoped lang="less">
    .header-content {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        min-width: 100%;
        z-index: 10;
        box-shadow: 1px 0px 18px -7px grey;
        background-color: rgba(39, 39, 39, 0.650);
        color: #fff;

        .title {
            margin: auto 0px;
            margin-left: 20px;
            cursor: pointer;
            font-size: 12px;
        }
        .nav-bar nav ul{
            display: flex;
            margin-right: 10px;
        }
    }
    .nav-bar nav ul li {
        margin: auto 10px;
        list-style: none;
        cursor: pointer;
        font-size: 18px;
        position: relative;
        z-index: 10;
        text-shadow: -2px 2px 2px rgb(22, 22, 22);
    }
    .nav-bar nav ul li:hover{
        color: white;
    }
    .nav-bar nav ul li::before {
        content: "";
        position: absolute;
        width: 0;
        height: 20px;
        top: 5px;
        left: 0;
        background: rgb(255, 230, 0);
        transition: ease .2s;
        z-index: -1;
    }
    .nav-bar nav ul li:hover::before {
        width: 80%;
    }
    .nav-bar nav ul li::after {
        content: "";
        position: absolute;
        width: 0;
        height: 20px;
        top: -1px;
        right: 0;
        background: black;
        transition: ease .2s;
        z-index: -1;
    }
    .nav-bar nav ul li:hover::after {
        width: 80%;
    }

    /* WHEN SCROLLING HEADER */
    .scrolled {

    }
</style>