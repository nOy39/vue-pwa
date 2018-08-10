<template>
<toolbar>
  <router-view></router-view>
</toolbar>
</template>

<script>
import Toolbar from './components/parts/Toolbar'
export default {
  name: 'app',
  components: {Toolbar}
}
</script>

<style>
</style>
