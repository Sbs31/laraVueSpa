<template>
    <form class="transparent">
    <div class="form-inner">
    <h3>Напишите нам</h3>
    <label for="username">Ваше имя</label>
    <input type="text" id="username">
    <label for="theme">Тема обращения</label>
    <input id="theme" type="text">
    <label for="password">Ваше сообщение...</label>
    <textarea class="textarea" form="text" ></textarea> 
    <input type="submit" value="Отправить">
  </div>
</form>
</template>

<script>
export default {

}
</script>

<style scoped>
* {
   box-sizing: border-box;
}
.transparent {
   position: relative;
   max-width: 400px;
   padding: 60px 50px;
   margin: 50px auto 0;
}
.transparent:before {
   content: "";
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background: linear-gradient(to right bottom, rgba(43, 44, 78, .5), rgba(104, 22, 96, .5));
}
.form-inner {
   position: relative;
}
.form-inner h3 {
   position: relative;
   margin-top: 0;
   color: white;
   font-family: 'Roboto', sans-serif;
   font-weight: 300;
   font-size: 26px;
   text-transform: uppercase;
}

.form-inner label {
   display: block;
   padding-left: 15px;
   font-family: 'Roboto', sans-serif;
   color: rgba(255, 255, 255, .6);
   text-transform: uppercase;
   font-size: 14px;
}
.form-inner input {
   display: block;
   width: 100%;
   padding: 0 15px;
   margin: 10px 0 15px;
   border-width: 0;
   line-height: 40px;
   border-radius: 20px;
   color: white;
   background: rgba(255, 255, 255, .2);
   font-family: 'Roboto', sans-serif;
}
.form-inner input:focus{
   outline-style: none;
   background-color: gray;

}
.form-inner input[type="submit"] {
   background: #1762EE;
}
.form-inner input[type="submit"]:focus {
   border:1px dashed;
}

.textarea{
   display: block;
   width: 100%;
   padding: 0 15px;
   margin: 10px 0 15px;
   border-width: 0;
   line-height: 40px;
   border-radius: 20px;
   color: white;
   background: rgba(255, 255, 255, .2);
   font-family: 'Roboto', sans-serif;
   resize: none; 
}
.textarea:focus {
   background-color: gray;
   outline-style: none;

}
</style>




