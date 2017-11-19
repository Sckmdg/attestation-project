<template>
  <transition name="fade">
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
  </transition>
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
          required: true
        },
        name: {
          type: String,
          required: true
        },
        status: {
          type: Boolean,
          required: true
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

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-to {
    opacity: 0
  }
</style>
