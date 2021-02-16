<template> 
  <div id="items">
    <div class="product-item">
      <div class="product-list">
        <h3>{{TK.title}}</h3>
        <p>{{TK.desc}}</p>
        <a href="#" class="button">Подробнее</a>
        <button @click="removeTK(TK)">Удалить</button>
    </div>
  </div>
</div>
</template>
<script>
    export default {
      name: "TK",
      props: ["TK"],
      methods: {
        removeTK(TK) {
          this.$store.dispatch("DELETE_TK", TK);
          window.location.reload();
        }
      }
    };
    </script>
<style scoped>
  * {
   box-sizing: border-box;
}
.product-item {
   width: 200px;
   text-align: center;
   border-bottom: 2px solid #F5F5F5;
   background: white;
   margin: 50px;
   float: left;

}
.product-item:hover {
   border-bottom: 2px solid #fc5a5a;
}
.product-item img {
   display: block;
   width: 100%;
}
.product-list {
   background: #fafafa;
   padding: 15px 0;
   height: 120px;
}
.product-list h3 {
   font-size: 18px;
   font-weight: 400;
   color: #444444;
   margin: 0 0 10px 0;
}
.price {
   font-size: 16px;
   color: #fc5a5a;
   display: block;
   margin-bottom: 12px;
}
.button {
   text-decoration: none;
   display: inline-block;
   padding: 0 12px;
   background: #cccccc;
   color: white;
   font-size: 12px;
   line-height: 28px;
   transition: .3s ease-in;
}
.product-item:hover .button {
   background: #fc5a5a;
}

</style>