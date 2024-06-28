<template>
    <div class="hello">
        <h1>Login</h1>
        <br>
        <div class="form"  >
        <label for="username">username</label><br>
        <input type="text" v-model="username" required id="username" name="username" placeholder="Your username.."><br>
        <label for="password">password</label><br>
        <input type="password" v-model="password" required id="password" name="password" placeholder="Your password.."><br>
        <input @click="loginUser()" type="submit" value="Login" class="button">
        
        </div>
    </div>

</template>

<script>
import axios from 'axios';
export default {
    name: 'loginPage',

    data() {
        return{
            username:"",
            password:""
        }
    },

    methods: {
        requirementCheckLoginButton()   {
            if (this.username=='' || this.password =='' ){
                console.warn('no')
            }
            else{
                // if() {
                //     this.$router.push({ name: 'tablesPage' });
                //     }
                }
        },
        async loginUser() {
        try {
            // let response = await axios.post('http://localhost:5000/api/login',  {
            //         username: this.username,
            //         password: this.password})
            
            // this.username="";
            // this.password="";
            // return response;

            let response = await axios.get('http://localhost:5000/api/login',  { withCredentials: true } )
            
            
            return response;
            
        } catch (error) {
            return 
            // console.error('An error occurred:', error);
        }
        }
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

.button{
display:flex ;
margin-left: auto;
margin-right: auto;
font-size: 2rem;
font-family: inherit;
margin-top: 15px;
padding: 20px 40px 20px 40px;
border-radius: 40px;
border-style:none;
background-image: radial-gradient(#ffaec9,#ff7f27);
}

.button:hover{
    background-image: radial-gradient( #ffaec9,#ffaec9, #ff7f27 );
cursor: pointer;
}
</style>
