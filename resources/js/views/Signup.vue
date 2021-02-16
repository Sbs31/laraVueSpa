<template>
	<div id="login">
    <div class="form-signup">
      <h1>Регистрация</h1>
      <fieldset>
      <p class="login-msg"></p>
        <form>
          <input type="email" placeholder="Email" required v-model="username" />
          <input type="password" placeholder="Пароль" required v-model="password" />
          <input type="name" placeholder="Имя пользователя" required v-model="name" />
          <input @click.prevent="register" type="submit" value="Зарегистрироваться" />
        </form>
      </fieldset>
    </div>
</div>
</template>

<script>
export default {
	data() {
        return {
            username: '',
            password: '',
            name: '',
        };
    },
    methods: {
        register() {
            let data = {
                email: this.username,
                password: this.password,
                name: this.name
            }
              axios.post('/api/register', data)
                .then(({data}) => {
                    this.$router.push('/Admin');
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
</style>