<template>
  <div>
<!--     <new-tk></new-tk> -->
  </div>
</template>
     <script>
    import newTK from "../views/NewTK.vue";
    import TKList from "../views/TKList.vue";
    import { mapGetters } from "vuex";

    export default {
      components: {
       newTK,
       TKList
      },
      name: "TKApp",
      mounted() {
        window.Echo.channel("newTK").listen(".tk-created", e => {
          this.$store.commit("ADD_TODO", e.tk);
          this.newTK.title = "";
          this.newTK.desc = "";
          this.newTK.link = "";
        });
        window.Echo.channel("TKRemoved").listen(".tk-removed", e => {
            this.$store.commit("DELETE_TODO", this.toRemove);
        });
      },
      computed: {
        ...mapGetters(["newTK", "toRemove"])
      }
    };
    </script>
<style>

</style>