<template>
<div id="calculator">
   <div class="container">
      <form action="">
         <h1>Калькулятор доставки</h1>
         <label for="from">Откуда</label>
         <select name="from" v-model="from">
            <option value='1'>Санкт-Петербург</option>
            <option value='2'>Москва</option>
            <option value='3'>Екатеринбург</option> 
            <option value='4'>Калининград</option>
         </select>
          <label for="when">Куда</label>
         <select name="when" v-model="when">
            <option value='1'>Санкт-Петербург</option>
            <option value='2'>Москва</option>
            <option value='3'>Екатеринбург</option> 
            <option value='4'>Калининград</option>
         </select>
         <label for="lenght">Длина м <sup>3</sup></label>
         <input type="number" name="lenght" class="currency" v-model.number="lenght"/>
         <br />
         <label for="widht">Ширина м <sup>3</sup></label>
         <input type="number" name="widht" class="currency" v-model.number="widht"/>
         <br />
         
         <label for="height">Высота м <sup>3</sup></label>
         <input type="number" name="height" class="currency" v-model.number="height"/>
         <br />
      </form>
      <div class="payment">{{ calcPayment }}</div>
   </div>
</div>
</template>

<script>
   export default{
   data() {
      return{
      lenght: '',
      widht: '',
      height: '',
      from: '',
      when: ''
   }
   },
   computed: {
      calcPayment: function(e){
         if (this.lenght >= 13.6 || this.widht >= 2.4 || this.height >= 2.4) {
            alert("Габариты превышают допустимые размеры: 13.6×2.4×2.4")
         }
         else{
            var volume = this.lenght * this.widht * this.height;
         };
         if (this.from == this.when) {
            var price = 0;
         }
         else if (this.from * this.when == 2) {
            var price = 2400;
         }
         else if (this.from * this.when == 3) {
            var price = 4425;
         }
         else if (this.from * this.when == 4) {
            var price = 3835;
         };
         /*var n = this.length;
         var i = Math.pow((1+r),n);*/
         var payment = volume * price;
         return currencyFormat(payment);
      },
   }  
};
function currencyFormat (num) {
    return num.toFixed(0) + "₽"
}
</script>

<style scoped>
* {
   box-sizing: border-box;
}

h1 {
   text-align: center;
   color: #fff;
   margin: 0 0 16px 0;  
}

p {
   text-align: center;
   margin-top: 0;
   margin-bottom: 24px;
}

.container {
   max-width: 400px;
   margin: 50px auto 0;
   background: linear-gradient(to right bottom, rgba(43, 44, 78, .5), rgba(104, 22, 96, .5));
   padding: 64px;
   transition: all 0.3s ease-in;
}

label {
   display: inline-block;
   width: 25%;
   min-width: 128px;
   margin-bottom: 8px;
   font-weight: bold;
   color:#fff;
}

input{
   display: block;
   width: 100%;
   padding: 0 15px;
   margin: 10px 0 15px;
   border-width: 0;
   line-height: 40px;
   border-radius: 20px;
   color: #000;
   background: rgba(255, 255, 255, .2);
   font-family: 'Lato', sans-serif;
   outline: none;
}

select{
   display: block;
   width: 100%;
   height: 40px;
   padding: 0 15px;
   margin: 10px 0 15px;
   border-width: 0;
   line-height: 40px;
   border-radius: 20px;
   color: #000;
   background: rgba(255, 255, 255, .2);
   font-family: 'Lato', sans-serif;
   outline: none;
}

input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}

.payment {
   color: #fff;
   font-size: 48px;
   text-align: center;
   font-weight: bold;
   transition: all 0.3s ease-in;
   
   @media (max-width: 512px){
      font-size: 40px;
      transition: all 0.3s ease-in;
   }
   
   @media (max-width: 400px){
      font-size: 32px;
      transition: all 0.3s ease-in;
   }
   
}

@media (max-height: 750px){
   body {
      height: 100%;
   }
}
</style>
