<template>
	<div class="widget">
  	<h3 class="widget-title">Админ панель</h3>
  		<ul class="widget-list">
    		<li><router-link to="/NewTK">Создать транспортную компанию</router-link> </li>
    		<li><router-link to="/TKList">Существующие транспортные компании</router-link></li>
		</ul>
	</div>
</template>
<style scoped>
* {box-sizing: border-box; margin: 0;}

.widget {
  padding: 20px 30px;
  height: max-height;
  width: 17%;
  background: #1abc9c;
  font-family: 'Lato', sans-serif;
  float: left;
  position: sticky;
}

h3.widget-title {
  color: black;
}

.widget-title {
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 16px;
  padding-left: 15px;
  margin-bottom: 15px;
  border-left: 2px solid #fff;
  position: inherit;
}

.widget-list {
  padding: 10px;
  list-style: none;
}

.widget-list a:before {
  margin-right: 14px;
}

.widget-list a {
  text-decoration: none;
  outline: none;
  display: block;
  padding: 6px 0; 
  letter-spacing: .2em;
  font-weight: 300;
  color: black;
}

.widget-list a:hover {
	color: white;
}
</style>