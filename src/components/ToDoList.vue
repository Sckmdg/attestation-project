<template>
  <ul v-highlight>
    <TodoItem
      v-for="(item, index) in items"
      :item="item"
      :key="index"
    />
  </ul>
</template>

<script>
  import TodoItem from './TodoItem'

  export default {
    name: 'ToDoList',
    components: {
      TodoItem
    },
    props: {
      items: {
        type: Array,
        required: true
      }
    },
    directives: {
      highlight: {
        bind (el) {
          el.style.fontWeight = 'bold'
        }
      }
    }
  }
</script>

<style scoped>
  ul {
    margin: 0 auto;
    width: 450px;
    padding: 0;
  }
  li {
    width: 100%;
    height: 25px;
    line-height: 25px;
    border: 1px solid;
    border-bottom: 0;
    text-align: left;
    padding-left: 15px;
  }

  li:last-child {
    border-bottom: 1px solid;
  }
</style>
