<script lang="ts" setup>
import '@/styling/todo.css'
import TodoItem from '@/components/TodoItemSmall.vue'
import Todo from '../classes/todo'
import TodoState from '../classes/TodoState'

const todos =  [{name: "bert", description: "gert", state: TodoState.Todo, subtodos: []}] as Todo[]
</script>
<template>
  <div class="todos">
    <table class="todo-table">
      <tr>
        <th>Naam</th>
        <th>Description</th>
        <th>status</th>
      </tr>
      <TodoItem v-bind:key="todo.id" v-bind:todo="todo" v-for="todo in todos">
      </TodoItem>
    </table>
  </div>
</template>
