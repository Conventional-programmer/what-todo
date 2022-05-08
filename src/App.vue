<template>
  <div class="page">
    <nav>
      <CategorySelector></CategorySelector>
    </nav>
    <router-view/>
  </div>
</template>
<script lang="ts" setup>
  import '@/styling/color.css'
  import CategorySelector from "@/components/CategorySelector.vue"
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.page
{
  display: grid;
  grid-template-areas: "nav todos todos";
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
