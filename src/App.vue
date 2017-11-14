<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ToDoList :items="items"/>
  </div>
</template>

<script>
import ToDoList from './components/ToDoList'

export default {
  name: 'app',
  components: {
    ToDoList
  },
  data () {
    return {
      items: [
        { name: 'Learn Angular' },
        { name: 'Learn React' },
        { name: 'Learn Vue' },
        { name: 'Learn Node' }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
