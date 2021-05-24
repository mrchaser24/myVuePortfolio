<template>
    <div class="header-content">
        <div class="title">
            <h1 @click="$router.push({ name: 'Home' })">CHASE</h1>
        </div>
        <div class="nav-bar">
            <nav>
                <ul>
                    <li><a @click="$router.push({ name: 'Home' })">Home</a></li>
                    <li><a @click="$router.push({ name: 'Blog' })">Blogs</a></li>
                    <li><a @click="$router.push({ name: 'Project' })">Projects</a></li>
                    <li><a @click="$router.push({ name: 'Contact' })">Contact</a></li>
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
        background: linear-gradient(90deg, rgba(104, 104, 104, 0.5) 10%, rgb(39, 39, 39, 0.5) 100%);
        color: #fff;
        .title {
            margin: auto 0px;
            margin-left: 20px;
            cursor: pointer;
            font-size: 12px;
            user-select: none;
        }
        .nav-bar nav ul{
            display: flex;
            margin-right: 10px;
            justify-content: space-evenly;
            li {
                transform: skewX(0deg);
                
                margin: auto 10px;
                padding: 0px 2px;
                list-style: none;
                cursor: pointer;
                z-index: 10;
                position: relative;
                a{
                    font-size: 18px;
                    text-decoration: none;
                    color: #fff;
                }
            }
            li:hover{
                transform: skew(10deg);
                color: white;
                background: rgb(255, 230, 0);
                box-shadow: 4px 3px 0px rgba(194, 194, 194, 0.562);
                transition: ease .2s;
                a {
                    color: black;
                    font-style: italic;
                }
            }
        }
    }

    /* WHEN SCROLLING HEADER */
    .scrolled {
        
    }
</style>