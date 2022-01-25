<template>
  <navbar class="w-full fixed bottom-0">
  <!-- Container -->
      <div class="w-full bg-white rounded-2xl shadow-xl">
        <!-- Navigation Bar -->
        <div class=
          "bg-sky-300 shadow-lg rounded-2xl"
        >
          <div class="flex justify-around">
            <router-link         
              v-for="menu in menuList"
              v-bind:key="menu.name"
              :to="{name:menu.path}"
              href="#" class="p-3 text-gray-400 hover:text-yellow-500">
              <span class="flex flex-col items-center">
                <span class="text-xs2 transition-all duration-200">
                  {{menu.name}}
                </span>
                <span class="h-2 w-2 rounded-full group-hover:bg-yellow-500
                  transition-all duration-150 delay-100"></span>
              </span>
            </router-link>
          </div>
        </div>
      </div>
  </navbar>
</template>

<script>
import { useMenu } from '@/composables/menu.js'

export default {
  setup(){
    const menuList = useMenu()

    return {
      menuList,
    }
  }
  
}
</script>

<style>

</style>