<template>
  <nav class=
    "bg-gradient-to-tr from-indigo-300 to-red-200 rounded-md shadow-md w-full
    flex flex-col p-4 sm:flex-row sm:justify-between"
  >
    <div class=
    "flex justify-between sm:flex-none"
    >
      <router-link class="p-1 text-lg"
        :to="{name:'home'}"
      >
        데모 게시판
      </router-link>
      <div class=
      "cursor-pointer sm:hidden p-1
      transition duration-300 ease-in-out hover:text-red-400"
        @click="toggleMenu"
      >
        햄버거
      </div>
    </div>
    <ul class=
    "flex flex-col sm:flex-row text-slate-500 p-1 sm:flex"
      :class="toggleStatus?null:'hidden'"
      role="list"
    >
      <router-link class=
      "flex justify-between p-1 hover:text-red-400 cursor-pointer"
      v-for="menu in menuList"
      v-bind:key="menu.name"
      :to="{name:menu.path}"
      ><span>{{menu.name}}</span><div class="sm:hidden">></div
      ></router-link>
    </ul>
  </nav>
</template>

<script>
import { ref } from 'vue'

export default {
  setup(){
    const menuList = [
      {'name': 'home', 'path': 'home'},
      {'name': '게시판', 'path': 'board'},
      {'name': '프로필', 'path': 'profile'},
    ]
    const toggleStatus = ref(false)
    const toggleMenu = () => {
      toggleStatus.value = !toggleStatus.value;
    }

    return {
      toggleStatus, toggleMenu, menuList
    }
  }
}
</script>

<style>

</style>