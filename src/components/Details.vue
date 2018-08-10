<template>
  <div>
    <h1>{{event}}</h1>
  </div>
</template>

<script>
  export default {
    props: ['id'],
    data () {
      return {
        context: {},
        api: '/v1/events/'
      }
    },
    created () {
      this.$store.dispatch('fetchCurrentEvent', this.id)
    },
    computed: {
      event () {
        return this.$store.getters.getCurrentEvent
      }
    }
  }
</script>

<style scoped>

</style>
