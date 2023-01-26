<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      baseURL: "http://localhost:8000/api",
      projectURI: "/project",
      projects: [],
    };
  },
  methods: {
    getApi() {
      axios.get(this.baseURL + this.projectURI).then((r) => {
        this.projects = r.data;
        console.log(this.projects);
      });
      //  .catch(error=>(errorMsg=error))
    },
  },
  mounted() {
    this.getApi();
  },
};
</script>
<template>
  <div class="container">
    <h1>ciao vue, chi non muore se rivede!</h1>
  </div>
</template>


<style lang="scss">
@use "./style/general";
</style>