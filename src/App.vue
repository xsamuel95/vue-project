<script setup>
import compteur from './components/compteur.vue';
import tableau from './components/tableau.vue';
import Connexion from './components/Connexion.vue';
import Inscription from './components/Inscription.vue';
</script>

<template>

  <main class="container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary px-2">
      <span class="navbar-brand" v-if="user">Hey {{ user.name }}</span>
      <span class="navbar-brand" v-else>Welcome</span>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          </ul>

          <ul class="navbar-nav mr-auto">
        <li v-if="!user" class="nav-item">
          <RouterLink class="nav-link btn btn-success" :to="{name:'connexion'}">Connexion</RouterLink>
        </li>

        <li v-if="!user" class="nav-item m-2 mt-0 mb-0">
          <RouterLink class="nav-link btn btn-warning" :to="{name:'inscription'}">S'inscrire</RouterLink>
        </li>
    <RouterView />
    </main>
</template>

<style>
  @import 'bootstrap/dist/css/bootstrap.min.css';
  nav a{
    color: white !important;
  }
</style>