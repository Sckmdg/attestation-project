<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ToDoList :items="items"/>
    <Editor />
  </div>
</template>

<script>
import ToDoList from './components/ToDoList'
import Editor from './components/Editor'

export default {
  name: 'app',
  components: {
    ToDoList,
    Editor
  },
  data () {
    return {
      items: [
        { name: 'Angular', status: true },
        { name: 'React', status: true },
        { name: 'Vue', status: true },
        { name: 'Node', status: false }
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
