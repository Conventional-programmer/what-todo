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
    <td>{{props.todo.name}}</td>
    <td>{{props.todo.description}}</td>
    <td><state-dropdown v-bind:selectedState="props.todo.state"></state-dropdown></td>
  </tr>
</template>
