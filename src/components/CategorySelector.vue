<template>
  <h1 class="category">
    Default categories
  </h1>
  <router-link to="/" class="category-link">
    <div class="category-name">
      Inbox
    </div>
  </router-link>
  <h1 class="category">
    User categories
  </h1>
  <div class="categories" :key="category.id" v-for="category in categories">
    <router-link class="category-link" :to="{name:'todos',params:{id:category.id}}">
      <div class="category-name">
        {{category.name}}
      </div>
    </router-link>
  </div>
</template>

<script lang="ts" setup>
  import {ref} from "vue";
  import '@/styling/categories.css'
  import Category from "@/classes/category";

  const categories = ref([{id: 1, name: "Isah"}] as Category[])
  console.log(categories)
</script>

<style scoped>

</style>
