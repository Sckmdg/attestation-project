<script>
  export default {
    methods: {
      sayHello () {
        console.log('hello from mixin!')
      }
    },
    mounted () {
      this.sayHello()
    }
  }
</script>
