<template>
  <div class="page">
    <div class="sidebar">
      <nav>
        <CategorySelector></CategorySelector>
      </nav>
    </div>
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
  display: flex;
  flex-flow: row nowrap;
  height: 100vh;
  width: 100%;
  grid-template-areas: "nav todos todos";
}

nav{
  text-align: left;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.sidebar{
  width: 300px;
  border-inline: 1px solid;
  height: 100%;
  background-color: #2c3e50;
}
</style>
