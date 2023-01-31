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
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.css"
        integrity="sha512-FA9cIbtlP61W0PRtX36P6CGRy0vZs0C2Uw26Q1cMmj3xwhftftymr0sj8/YeezDnRwL9wtWw8ZwtCiTDXlXGjQ=="
        crossorigin="anonymous"
      />
      <title>Document</title>
    </head>
    <body></body>
  </html>

  <body>
    <Header class="mb-5" />
    <router-view> </router-view>
  </body>
</template>


<style lang="scss">
@use "./style/general";
</style>