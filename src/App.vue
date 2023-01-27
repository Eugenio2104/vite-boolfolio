<script>
import axios from "axios";
import ProjectCard from "./components/ProjectCard.vue";
import Header from "./components/partials/Header.vue";

export default {
  components: { ProjectCard, Header },
  name: "App",
  data() {
    return {
      baseURL: "http://127.0.0.1:8000/api",
      projectURI: "/project",
      projects: [],
    };
  },
  methods: {
    getApi() {
      axios.get(this.baseURL + this.projectURI).then((r) => {
        this.projects = r.data.projects;
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
  <Header class="mb-5" />
  <router-view> </router-view>
</template>


<style lang="scss">
@use "./style/general";
</style>