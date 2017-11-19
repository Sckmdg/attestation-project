<template>
  <div class="editor-container">
    <div>
      <label>Name:</label>
      <input
        type="text"
        v-model="name"
      />
    </div>

    <div>
      <label>Status:</label>
      <select v-model="status">
        <option value="true">True</option>
        <option value="false">False</option>
      </select>
    </div>

    <button v-on:click="validateForm(name, status)">
      Add
    </button>
  </div>
</template>

<script>
  export default {
    name: 'Editor',
    data () {
      return {
        name: '',
        status: false
      }
    },
    methods: {
      validateForm: function (name, status) {
        if (name.length > 0) {
          this.$parent.addTodo(name, status)
          this.name = ''
          this.status = false
        } else alert('Invalid name')
      }
    }
  }
</script>

<style scoped>
  .editor-container {
    width: 260px;
    border: 1px solid;
    margin: 0 auto;
    margin-top: 25px;
    padding: 15px;
  }

  .editor-container div {
    width: 100%;
    float: left;
    margin-bottom: 15px;
  }

  div label, div input, div select {
    float: left;
  }

  div input, div select {
    margin-left: 15px;
  }
</style>
