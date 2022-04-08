<template>
    <div class="app">

        <router-view></router-view>
    
    </div>
</template>

<script>
export default {

}
</script>

<style>
    * {
        padding: 0;
        margin: 0;
        border: 0;
    }

    *,
    *:before,
    *:after {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    :focus,
    :active {
        outline: none;
    }

    a:focus,
    a:active {
        outline: none;
    }

    nav,
    footer,
    header,
    aside {
        display: block;
    }

    html,
    body {
        height: 100%;
        width: 100%;
        font-size: 100%;
        line-height: 1;
        font-size: 16px;
        font-family: sans-serif;
        -ms-text-size-adjust: 100%;
        -moz-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
    }

    input,
    button,
    textarea {
        font-family: inherit;
    }

    input::-ms-clear {
        display: none;
    }

    button {
        cursor: pointer;
    }

    button::-moz-focus-inner {
        padding: 0;
        border: 0;
    }

    a,
    a:visited {
        text-decoration: none;
    }

    a:hover {
        text-decoration: none;
    }

    ul li {
        list-style: none;
    }

    img {
        width: 100%;
        height: auto;
        vertical-align: top;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-size: inherit;
        font-weight: 400;
    }
    /*--------------------*/

    .app {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        background-image: url('@/images/Mo.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height: 100vh;
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 20px;
    }
</style>