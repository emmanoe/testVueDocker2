<template>
  <div class="container">
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/sprint" class="nav-link">Sprints</router-link>
        </li>

        <li class="nav-item">
          <router-link to="/create-issue" class="nav-link">Create Issue</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/issues" class="nav-link">Issues</router-link>
        </li>
        
        <li class="nav-item">
          <router-link to="/create-task" class="nav-link">Create Task</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/tasks" class="nav-link">Tasks</router-link>
        </li>

      </ul>
    </nav><br />
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
//import HomeComponent from './components/HomeComponent'

export default {
  name: 'App',
  
}
</script>

<style>
  .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
</style>
