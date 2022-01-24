<template>
  <Navbar />
  <div class="flex flex-col items-center">
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar,
  },
  setup () {

  }

}
</script>

<style>

</style>