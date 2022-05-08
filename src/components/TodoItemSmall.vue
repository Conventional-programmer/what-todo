<script lang="ts" setup>
  import  StateDropdown from "@/components/StateDropdown.vue"
  import {defineProps,ref} from 'vue'
  import Todo from '../classes/todo'
  const props = defineProps({
    todo: Todo
  })
</script>
<template>
  <tr>
    <td class="todo-name">{{props.todo.name}}</td>
    <td class="todo-description">{{props.todo.description}}</td>
    <td class="todo-drop-down"><state-dropdown v-bind:selectedState="props.todo.state"></state-dropdown></td>
  </tr>
</template>

<style scoped>
  .todo-description{
    width: 60%;
  }
  .todo-drop-down{
    width: 20%;
  }
</style>
