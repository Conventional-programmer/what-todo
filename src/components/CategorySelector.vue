<template>
  <div class="categories" :key="category.id" v-for="category in categories">
    <p>
      {{category.name}}
    </p>
  </div>
</template>

<script lang="ts" setup>
  import {ref} from "vue";
  import Category from "@/classes/category";

  const categories = ref([{id: 1, name: "inbox"}] as Category[])
  console.log(categories)
</script>

<style scoped>
  .categories{
    grid-area: categories;
  }
</style>
