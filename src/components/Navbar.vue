<template>
  <nav class="blue darken-3">
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo">Tasks</router-link>
      <ul id="nav-mobile" class="right">
        <li>
          <router-link to="/" tag="li" exact active-class="active">
            <a href="#">Create</a></router-link
          >
        </li>
        <li>
          <router-link to="/list" tag="li" active-class="active">
            <a href="#">List</a></router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss" scoped>
nav {
  padding: 0 2rem;
}
</style>
