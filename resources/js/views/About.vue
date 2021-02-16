<template>
<section class="about">
<div class="title">
<h2>О нас</h2>
<p></p>
<article class="imgs">
  <img src="../../imgs/comfort.jpg" width="220px" height="228px" > 
   <h3>Удобство</h3>
    <p>Вместо самостоятельного поиска цен на всех сервисах на нашем сайте в сравниваете стоимость на всех возможных сайтах </p>
</article>
<article class="imgs">
  <img  src="../../imgs/time.jpg" width="220px" height="228px" > 
   <h3>Скорость</h3>
    <p>Наш сайт значительно ускоряет работу пользователя по поиску подходящей цены.</p>
</article>
<article class="imgs">
  <img src="../../imgs/econom.jpg" width="220px" height="228px" >
   <h3>Экономия</h3>
    <p>Благодаря нашему сайту покупатель сможет сэкономить на доставке товаров.</p>
</article>
<div class="clear"></div>
</div>
</section>
</template>

<script>
export default {

}
</script>

<style scoped>
	.about{
  color:#fff;
  background-color: #1abc9c; 
  text-align:center; 
  padding: 5em 0em; 
 }
  .title{
  width: 90%; 
  margin: 0 auto; 
 }
.about h2{
    font-size:2em;
    padding-bottom: 0.5em; 
 }
.about p{
  font-size:1em;
  padding-bottom: 4em; 
 }
.imgs{
  width: 30%; 
  float: left; 
  background-color: #fff; 
  margin: 0 1.5% 0 1.5%; 
  border: 1px solid black;
  min-height: 508px; 
 }
.imgs  h3{ 
  color: #292828;
  font-size: 1.4em;
  margin-top: 15px;
 }
.imgs  p { 
  color: #444444;
  font-size: 1.02em;
  text-align: left;
  padding: 1em 1em 2em 1em;
  line-height: 1.9em;
 }
.clear{clear:both;} 
</style>