<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  }
}
</script>

<template>
  <div>
    <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About Us</router-link>
      <router-link to="/projects">Projects</router-link>
    </nav>
    <router-view />
  </div>
    
    <HelloWorld />
  </div>
</template>