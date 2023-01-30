<script>
import axios from "axios";

export default {
  name: "ProjectDetails",
  data() {
    return {
      baseURL: "http://127.0.0.1:8000/api",
      projectURI: "/project/",

      project: {},
    };
  },
  methods: {
    getApi2() {
      console.log(this.baseURL + this.projectURI + this.$route.params.slug);
      axios
        .get(this.baseURL + this.projectURI + this.$route.params.slug)
        .then((r) => {
          this.project = r.data;
          // console.log(this.projects);
        });
      //  .catch(error=>(errorMsg=error))
    },
  },
  created() {
    this.getApi2();
  },
};
</script>
<template>
  <div class="card" style="width: 18rem">
    <img :src="project.cover_image" class="card-img-top" :alt="project.name" />
    <div class="card-body">
      <h5 class="card-title">
        <h1>{{ project.name }}</h1>
      </h5>
      <p class="card-text">{{ project.summary }}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>


<style>
</style>