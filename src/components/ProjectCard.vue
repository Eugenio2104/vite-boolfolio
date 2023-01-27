<script>
export default {
  name: "ProjectCard",
  data() {
    return {};
  },
  props: {
    project: Object,
  },
};
</script>
<template>
  <div class="card" style="width: 18rem">
    <div class="card-body">
      <h3>
        <router-link
          :to="{ name: 'projectDetail', params: { slug: project.slug } }"
          >{{ project.name }}</router-link
        >
      </h3>

      <p class="card-text">
        {{ project.summary }}
      </p>
    </div>
  </div>
</template>


<style lang="scss" scoped>
</style>