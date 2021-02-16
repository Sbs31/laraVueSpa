<template>
<div>
    <header>
        <div><router-link to="/"><h1>StepbyStep</h1></router-link></div>
    <nav>
        <router-link to="/TKView">Транспортные компании</router-link>
        <router-link to="/Contact">Cвяжитесь с нами</router-link>
        <router-link  to="/About">О нас</router-link>
    </nav>
      <div class="lk">
        <ul>
            <div v-if="authenticated && user">
            <p>Hello, {{ user.name }}</p>
            <p @click="logout">Logout</p>
            </div>
            <div v-else>
              <li><a>Личный кабинет</a>
                <ul>
                  <li><router-link to="/Signup">Регистрация</router-link></li>
                  <li><router-link to="/login">Войти</router-link></li>
                </ul>
              </li>
            </div>
        </ul>
      </div>
    </header>
    <admin v-if="authenticated && user"></admin>
    <router-view></router-view>
    <footer>
    </footer>
 </div>
</template>

<script>
export default {
    data() {
        return {
            authenticated: auth.check(),
            user: auth.user
        };
    },

    mounted() {
        Event.$on('userLoggedIn', () => {
            this.authenticated = true;
            this.user = auth.user;
        });
    },
    methods:{
      logout(token,user) {
         axios.get('/api/logout')
        .then(({data}) => {
        auth.logout(data.token, data.user);
        
        this.authenticated = false;
        this.user = '';

        this.$router.go('/login');
                })  
        .catch(error => {
          alert("Не робит");
        });       
       }
     }
    }
</script>

<style>
@import url(http://fonts.googleapis.com/css?family=Lato:400,700italic);
* { 
    padding: 0;
    margin: 0; 
}

body { 
    background: #1abc9c;
    font-family: 'Lato', sans-serif; 
    letter-spacing: 1px;
}

header {
  display: table;
  padding: 2em 5%;
  background: #2c3e50;
  color: #fff;
  width: 100%;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

header nav,
header div {
  display: table-cell;
  height: 100%;
  vertical-align: middle;
  height: 3em;
}

@media screen and (max-width: 720px){
    header {
        height: auto;
    }
    
    header > div,
    header > div h1,
    header nav {
        height: auto;
        width: auto;
        display: block;
        text-align: center;
    }
}

header > div h1 {
    font-size: 3em;
    font-style: italic;
}

header nav a {
    padding: 0 0.6em;
    white-space: nowrap;
}

header a {
  text-decoration: none;
  color: #fff;
}
header a:hover{
 border-bottom: 1px dashed ; 
 cursor: pointer;
}

.lk ul {
  list-style: none;
  position: relative;
}    


.lk a:hover {
  text-decoration: none;
  float:none;
  display:list-item;
  background-color: gray;
}

.lk ul ul {
  display: none;
  position: absolute;
}

.lk ul li:hover > ul {
  display:inherit;
}
footer{
  background: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 30px;
}
</style>
