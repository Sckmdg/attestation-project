<template>
  <li>
    <span>{{ item.name }}</span>
    <span class="checkbox">
      <input
        type="checkbox"
        value="item.name"
        id="item.name"
        v-model="item.status"
        :checked="item.status"
      />
      <label for="item.name">Learned</label>
    </span>
  </li>
</template>

<script>
  export default {
    name: 'TodoItem',
    props: {
      item: {
        type: Object,
        required: true,
        name: {
          type: String,
          requred: true
        },
        status: {
          type: Boolean,
          requred: true
        }
      }
    },
    data () {
      return {

      }
    }
  }
</script>

<style scoped>
  span {
    max-width: 100px;
  }

  .checkbox {
    float: right;
    margin-right: 15px;
  }
</style>
