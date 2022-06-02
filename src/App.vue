<script setup>
  import {ref} from 'vue'
  //Increment a counter every time the button is clicked
  //Modify the counter value by writing in the input field
  //Reset the counter by clicking the button
  const counter = ref(0);
  const increment = () => counter.value++;  
</script>

<template>
  <div>
    <h1>Hello World</h1>
    <p>compteur</p>
    <p>{{counter}}</p>
    <button @click="increment">Incrementer</button> <br>
    <input v-model="counter" type="number" />
    <button @click="counter = 0">Reset</button>
  </div> 
</template>

<style>
</style>
