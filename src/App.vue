<script>
import axios from "axios";
import ProjectCard from "./components/ProjectCard.vue";

export default {
  components: { ProjectCard },
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
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>ciao vue, chi non muore se rivede!</h1>
      </div>
      <div class="col">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </div>
</template>


<style lang="scss">
@use "./style/general";
</style>