<template>
  <div id="items">
    <TK v-for="TK in TKs" :TK="TK" :key="TK.id" />
  </div>
</template>

    <script>
    import { mapGetters } from "vuex";
    import TK from "../components/TK";
    export default {
      components: {
        TK
      },
      name: "TKList",
      mounted() {
        this.$store.dispatch("GET_TKS");
      },
      computed: {
        ...mapGetters(["TKs"]),
      }
    };
    </script>
