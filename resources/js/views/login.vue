<template>
<div id="login">
    <div class="form-signup">
      <h1>Авторизация</h1>
      <fieldset>
      <p class="login-msg"></p>
        <form>
          <input type="email" placeholder="Логин" v-model="username" required />
          <input type="password" placeholder="Пароль..." v-model="password" required />
          <input @click.prevent="login" type="submit" value="Войти" />
        </form>
      </fieldset>
    </div>
</div>
</template>

<script>
import vue from 'vue';
export default {
    data() {
        return {
            username: '',
            password: '',
        };
    },

    methods: {
        login() {
            let data = {
                username: this.username,
                password: this.password
            }
              axios.post('/api/login', data)
                .then(({data}) => {
                    auth.login(data.token, data.user);

                    this.$router.push('/');
                })  
                .catch(({response}) => {                    
                    alert(response.data.message);
                });
           }
      }
}
</script>

<style scoped>
  
#login { 
  border-radius: 5px; 
  margin: 75px auto; 
  width: 300px;
}
#login h1 { 
  position: relative; 
  margin: 0; 
  padding: 15px;
  border: 1px solid rgba(0,0,0,.3); 
  border-radius: 5px 5px 0 0; 
  color: #fff; 
  text-shadow: 0 1px 1px rgba(0,0,0,.2); 
  background-color: #3f7eb6; 
  box-shadow: inset 0 1px rgba(255,255,255,.3);
  text-align: center;
}

#login p {
   margin: 0;
  }

#login fieldset {
  display: block; margin: 0; 
  padding: 20px; 
  background: #fff; 
  border: 1px solid rgba(0,0,0,.3); 
  border-top: 0; 
  border-radius: 0 0 5px 5px; 
  box-shadow: 0 1px 2px #aaa;
}
#login input { 
  width: 238px; 
  margin: 0; 
  padding: 12px 10px; 
  border: 1px solid #ccc; 
  outline: none; 
}
#login input:focus {
    background: #fafafa;
    box-shadow: inset 0 1px 7px #ddd;
}
#login input[type="email"] {
  border-radius: 3px 3px 0 0; 
}
#login input[type="password"] { 
  border-width: 0 1px; 
  border-radius: 0; 
}
#login .form-login input[type="password"] { 
  border-width: 0 1px 1px 1px;  
  border-radius: 0 0 3px 3px; 
}
#login input[type="text"] { 
  border-radius: 0 0 3px 3px; 
}
#login input[type="submit"] { 
  width: 260px; 
  padding: 12px 20px; 
  margin: 15px 0; 
  border: 1px solid #C1711B; 
  border-radius: 3px; 
  color: #111; 
  text-shadow: 1px 1px 1px rgba(255,255,255,.5); 
  cursor: pointer;
    background-color: #FFB83A; 
    box-shadow: inset 0 1px 1px rgba(255,255,0,.6); 
  background-image: linear-gradient(rgba(255,207,92,.7), rgba(223,156,38,.8));
}
#login input[type="submit"]:hover { 
  background-color: #F5FF00; 
}
#login input[type="submit"]:active { 
  padding: 13px 20px 11px; 
  text-shadow: -1px -1px 1px rgba(255,255,255,.6); 
  box-shadow: inset 0 1px 4px rgba(0,0,0,.2); 
}
.textarea{
  width: 238px; 
  margin: 0; 
  padding: 12px 10px; 
  border: 1px solid #ccc; 
  outline: none; 
  resize: none; 
}
.textarea:focus {
    background: #fafafa;
    box-shadow: inset 0 1px 7px #ddd;
}

</style>