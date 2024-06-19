<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <br>
        <div class="form" >
        <label for="username">username</label><br>
        <input type="text" id="username" name="username" placeholder="Your username.."><br>
        <label for="password">password</label><br>
        <input type="password" id="password" name="password" placeholder="Your password.."><br>
        <label class="checkbox">
            <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe">Remember me
        </label>
        <div class="button" >
            <button type="submit">Login</button>
        </div>
        <div class="forgotPassword">
            <p >-or-</p>
            <a href="#">forgot password? Click here.</a>
        </div>
        </div>
    </div>

</template>

    <script>
    export default {
    name: 'login-page',
    props: {
        msg: String
    }
    }
    </script>

    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>

    .hello{
        height: auto;
    }

    h3 {
    margin: 40px 0 0;
    }
    ul {
    list-style-type: none;
    padding: 0;
    }
    li {
    display: inline-block;
    margin: 0 10px;
    }
    p{
    font-size: 2rem;
    }

    .hello{
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    margin-left: auto;
    margin-right: auto;

    padding: 15px 15px 15px 15px;
    background-color:  #edfff5cc;
    border-radius: 15px;
    }

    /* @media (min-width: 1000px) {
    .hello {
    width:fit-content;
    padding: 0 20px 0 20px;
    }
    } */

    .form{
    font-size: 2rem;
    font-family: inherit;
    
    

    padding: 10px 20px 10px 20px;
    text-align: left;
    }
    .form>label{
    font-weight:500;

    }

    .form>input{
    background-color: transparent;
    font-size: inherit;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid gray;
    width: 100%;

    }

    .form>input[type=text]{
    background-image: url('/src/assets/svg/user.svg');
    background-repeat: no-repeat;
    background-position: left;
    background-size: contain;
    padding-left: 80px
    }

    .form>input[type=password]{
    background-image: url('/src/assets/svg/lock.svg');
    background-repeat: no-repeat;
    background-position: left;
    background-size: contain;
    padding-left: 80px
    }

    .form>input:focus{
    outline: none;
    border: none;
    border-bottom: 2px solid #00a2e8;
    }

    .checkbox{
    user-select: none;
    font-size: 1.5rem;  }

    #rememberMe{
    width: 20px;
    height: 20px;
    margin: 0 10px 0 0;
    }

    .button{
    text-align: center;
    }

    .button> button{
    font-size: 2rem;
    font-family: inherit;
    margin: 15px 0 0 0;
    padding: 20px 40px 20px 40px;
    border-radius: 40px;
    border-style:none;
    background-image: linear-gradient(to right,#ffaec9, #ff7f27);
    }

    .button> button:hover{
        background-image: linear-gradient(to right, #ff7f27,#afaeff);
    cursor: pointer;
    }

    .forgotPassword{
    font-size: 2rem;
    text-align: center;
    }

    .forgotPassword>p{
    margin: 15px 0 0 0;
    }

    .forgotPassword>a{
    font-size: 1rem;
    color: #ff7f27;
    }


    </style>
