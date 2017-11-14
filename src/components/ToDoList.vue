<template>
  <ul>
    <li v-for="item in items">
        {{ item.name }}
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'ToDoList',
    props: {
      items: {
        type: Array,
        default: 0,
        required: true
      }
    },
    data () {
      return {

      }
    }
  }
</script>

<style scoped>
  ul {
    margin: 0 auto;
    width: 200px;
    padding: 0;
  }
  li {
    width: 100%;
    height: 25px;
    line-height: 25px;
    border: 1px solid;
    border-bottom: 0;
  }

  li:last-child {
    border-bottom: 1px solid;
  }
</style>
