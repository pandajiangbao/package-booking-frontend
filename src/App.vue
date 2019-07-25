<template>
    <div id="app">
        <h1 class="title">菜鸟驿站</h1>
        <div id="nav">
            <router-link to="/">老板</router-link>|
            <router-link to="/about">用户</router-link>
        </div>
        <router-view />
    </div>
</template>

<style lang="scss">
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
.title {
    color: #42b983;
    margin-top: 20px;
}
#nav {
    padding: 30px;
    a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
