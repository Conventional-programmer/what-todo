<script lang="ts" setup>
import TodoItem from  '@/components/TodoItem.vue'
import Todo from '../classes/todo'
import TodoState from '../classes/TodoState'

const todos =  [{name: "bert", description: "gert", state: TodoState.Todo, subtodos: []}] as Todo[]
</script>
<template>
  <div class="todos">
    <table>
      <tr>
        <th>Naam</th>
        <th>Description</th>
        <th>Gedaan</th>
      </tr>
      <TodoItem v-bind:key="todo.id" v-bind:todo="todo" v-for="todo in todos">
      </TodoItem>
    </table>
  </div>
</template>
<style scoped>
  .todos{
    grid-area: todos;
  }
</style>
