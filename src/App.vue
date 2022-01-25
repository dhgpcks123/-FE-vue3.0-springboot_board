<template>
  <Navbar />
  <div class="flex flex-col items-center">
    <router-view/>
  </div>
  <Navdot />
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Navdot from '@/components/Navdot.vue'

export default {
  components: {
    Navbar, Navdot
  },
  setup () {

  }

}
</script>

<style>

</style>