<template>
  <Navbar />
  <div class="flex flex-col items-center">
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Board from './components/Board.vue'

export default {
  components: {
    Navbar, Board
  },
  setup () {

  }

}
</script>

<style>

</style>