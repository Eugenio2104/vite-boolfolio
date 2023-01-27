<script>
export default {
  name: "Header",
};
</script>
<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">EB</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link :to="{ name: 'home' }">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'project' }">
              <a class="nav-link active" aria-current="page" href="#"
                >Project</a
              >
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'about' }">
              <a class="nav-link" href="#">chi siamo</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'contacts' }">
              <a class="nav-link" href="#">contatti</a>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>


<style lang="scss" scoped>
a {
  text-decoration: none;
  &.active {
    color: yellow;
  }
}
</style>