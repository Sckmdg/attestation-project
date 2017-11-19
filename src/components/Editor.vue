<template>
  <div class="editor-container">
    <div>
      <label>Name:</label>
      <input type="text">
    </div>

    <div>
      <label>Status:</label>
      <select>
        <option>True</option>
        <option>False</option>
      </select>
    </div>

    <button>Add</button>
  </div>
</template>

<script>
  export default {
    name: 'Editor',
    data () {
      return {

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
