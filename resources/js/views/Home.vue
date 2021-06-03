<template>
<div id="calculator">
   <div class="container">
      <form action="">
         <h1>Калькулятор доставки</h1>
          <ymap @distance="(distance) => this.distance = distance"></ymap>
          <input type="text" readonly  class="currency" v-model="distance"/>
         <label >Длина м <sup>3</sup></label>
         <input type="number" name="lenght" class="currency" v-model.number="lenght"/>
         <br />
         <label >Ширина м <sup>3</sup></label>
         <input type="number" name="widht" class="currency" v-model.number="widht"/>
         <br />
         <label>Высота м <sup>3</sup></label>
         <input type="number" name="height" class="currency" v-model.number="height"/>
         <br />
      </form>
      <div class="payment">{{ calcPayment }}</div>
   </div>

</div>
</template>

<script>
import ymap from "../components/map"
import state from "../store/state";
import {mapGetters} from "vuex"
export default{
     components: {
         ymap
     },
     data() {
        return{
        lenght: '',
        widht: '',
        height: '',
        distance: '',
        price: 0,
     }
     },
     computed: {
         ...mapGetters(["TKs"]),
        calcPayment: function(e){
           if (this.lenght >= 13.6 || this.widht >= 2.4 || this.height >= 2.4) {
              alert("Габариты превышают допустимые размеры: 13.6×2.4×2.4")
           }
           else{
              var volume = this.lenght * this.widht * this.height;
           };
           var distance = this.distance;

            if(this.TKs.length > 0) {
                var payment = volume * (distance/1000) * this.TKs[0]?.price;
                return currencyFormat(payment);
            }
            return 0
        },

     },
    async mounted() {
       await this.$store.dispatch("GET_TKS")


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
   max-width: 800px;
   margin: 50px auto 0;
   background: linear-gradient(to right bottom, rgba(43, 44, 78, .5), rgba(104, 22, 96, .5));
   padding: 64px;
   transition: all 0.3s ease-in;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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
