<template>
  <div id="app">
    
    <img class="logo" alt="tailandi logo" src="./assets/logo.png">
    <!-- <router-link to="/loginPage">Login</router-link> -->
     <router-view/>
  </div>
</template>

<script>

// import login from './components/loginPage.vue'


export default {
  name: 'App',
  components: {
    // login,
  }
}
</script>

<style>


#app {
    height: 100vh;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-image: url('/src/assets/tailandiBackground.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size:cover;
    
}

#nav a {
    padding: 30px;
    font-weight:bold;
    color:#2c3e50
}
#nav a.router-link-exact-active{
    padding:30px;
    color:red;
}

img{
    width: 200px;
    margin: 25px 0 25px 0;
}

</style>
