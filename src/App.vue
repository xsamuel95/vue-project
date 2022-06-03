<script setup>
App.vue>style>@import 'bootstrap/dist/css/bootstrap.min.css'; 
import compteur from './components/compteur.vue';
import tableau from './components/tableau.vue';
import Connexion from './components/Connexion.vue';
import Inscription from './components/Inscription.vue';

</script>

<template>
    <Compteur></Compteur>
    <DemoJWT></DemoJWT>
    <LoopTabVue></LoopTabVue>
</template>

<style>
  @import 'bootstrap/dist/css/bootstrap.min.css';
  nav a{
    color: white !important;
  }
</style>