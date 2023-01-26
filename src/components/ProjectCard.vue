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
      <h5 class="card-title">{{ project.name }}</h5>
      <p class="card-text">
        {{ project.summary }}
      </p>
    </div>
  </div>
</template>


<style lang="scss" scoped>
</style>