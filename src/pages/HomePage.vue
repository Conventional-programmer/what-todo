<template>
  <div class="homepage">
    <CategorySelector></CategorySelector>
    <TodoItems></TodoItems>
  </div>
</template>

<script lang="ts" setup>
  import CategorySelector from "@/components/CategorySelector.vue"
  import TodoItems from "@/components/TodoItems.vue"
</script>

<style scoped>
  .homepage {
    display: grid;
    grid-template-areas: "categories todos";
  }
</style>
