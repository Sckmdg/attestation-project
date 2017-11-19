<template>
  <li>
    <div>{{ item.name }}</div>
    <div>
      <input
        type="checkbox"
        value="item.name"
        id="item.name"
        v-model="item.status"
        :checked="item.status"
      />
      <label for="item.name">Learned</label>
    </div>
    <div>
    <button @click="deleteItem(item.id)">
        Delete
      </button>
    </div>
  </li>
</template>

<script>
  export default {
    name: 'TodoItem',
    props: {
      item: {
        type: Object,
        required: true,
        id: {
          type: Number,
          requred: true
        },
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
    methods: {
      deleteItem (id) {
        this.$parent.$parent.deleteItem(id)
      }
    }
  }
</script>

<style scoped>
  div {
    float: left;
    width: 33%;
    height: 25px;
    text-align: center;
  }
</style>
