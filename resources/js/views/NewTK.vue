 <template>
  <form class="add">
    <div class="admin">
      <label for="title">Название транспортной компании</label>
      <input id="title" type="text" v-model="newTK.title"/>
      <label for="desc">Описание транспортной компании</label>
      <input id="desc" type="text" v-model="newTK.desc"/>
      <label for="price">Цена за километр(₽)</label>
      <input id="price" type="int" v-model="newTK.price"/>
      <label for="link">Ссылка транспортной компании</label>
      <input id="link" type="text" v-model="newTK.link"/>
      <button @click="addTK">Добавить</button>
    </div>
  </form>
</template>
<script>
    import { mapGetters } from "vuex";
    export default {
      name: "NewTK",
      methods: {
        addTK() {
          this.$store.dispatch("ADD_TK", this.newTK);
          alert("Добавлено");
          this.$router.push('/TKList');
        }
      },
      computed: {
        ...mapGetters(["newTK"])
      }
    };
</script>
<style scoped>
  * {
   box-sizing: border-box;
}
.add {
   position: relative;
   max-width: 400px;
   padding: 60px 50px;
   margin: 50px auto 0;
}
.add:before {
   content: "";
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background: linear-gradient(to right bottom, rgba(43, 44, 78, .5), rgba(104, 22, 96, .5));
}
.admin {
   position: relative;
}
.admin label {
   display: block;
   padding-left: 15px;
   font-family: 'Lato', sans-serif;
   color: rgba(255, 255, 255, .6);
   text-transform: uppercase;
   font-size: 14px;
}
.admin input {
   display: block;
   width: 100%;
   padding: 0 15px;
   margin: 10px 0 15px;
   line-height: 40px;
   border-radius: 20px;
   color: white;
   font-family: 'Lato', sans-serif;
   outline:none;
   background:rgba(255, 255, 255, .2);
}
.admin input:focus {
  color: black;
}
button{
   display: block;
   width: 100%;
   padding: 0 15px;
   margin: 10px 0 15px;
   border-width: 0;
   line-height: 40px;
   border-radius: 20px;
   color: white;
   background: rgba(255, 255, 255, .2);
   font-family: 'Lato', sans-serif;
   outline: none;
}
button:focus{
  background: gray;
}
</style>
