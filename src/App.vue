<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ToDoList :items="items"/>
    <Editor/>
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
        { id: 0, name: 'Angular', status: true },
        { id: 1, name: 'React', status: true },
        { id: 2, name: 'Vue', status: true },
        { id: 3, name: 'Node', status: false }
      ]
    }
  },
  methods: {
    addTodo: function (name, status) {
      const isStatus = (status === 'true')
      this.items.push({id: this.items.length, name: name, status: isStatus})
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
