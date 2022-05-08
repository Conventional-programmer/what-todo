<template>
  <select class="colored-select" v-model="select" @change="TodoChanged">
    <option v-for="state in todoStates" :value="TodoState[state]" :key="state">
      {{state}}
    </option>
  </select>
</template>

<script lang="ts" setup>
import {defineProps, ref} from "vue";
  import TodoState from "@/classes/TodoState";
  const todoStates = Object.keys(TodoState).filter((element) => {
    return isNaN(Number(element));
  });
  const props = defineProps({
    selectedState: TodoState
  })
  const select = ref(props.selectedState);
  let TodoChanged = () => {
    console.log(TodoState[select.value])
  }
  TodoChanged();
</script>

<style scoped>
  .colored-select{
    background-color: var(--background);
    border-radius: 0px;
    box-shadow: none;
    border: none;
    outline: none;
    width: 100%;
  }
</style>
