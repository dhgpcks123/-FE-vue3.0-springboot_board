<template>
  <button class=" bg-blue-300">
    hover
  </button>
  <button class=" bg-indigo-300 hover:bg-blue-600">
    중간 중단점 수정
  </button>
  <button class="bg-violet-300 hover:bg-violet-600 active:bg-purple-400">
    hover, active
  </button>
    <button class=" bg-sky-400 focus:bg-sky-700">
      focus
  </button>

  <ul role="list" class="p-6 divide-y divide-slate-200">
    <li class=" flex py-4 first:pt-0 first:pb-0 last:bg-blue-500">
      값1
    </li>
    <li class="flex py-4 first:pt-0 even:bg-violet-300">
      값2
    </li>
    <li class="flex py-4 first:pt-0 last:pb-0 last:bg-blue-500 ">
      값3
    </li>
  </ul>
  <form class="group hover:bg-indigo-400">
    <input
      type="checkbox" 
      class="checked: opacity-50 group-hover:text-pink-400">
      <span
        class="block text-sm font-medium text-slate-600 group-hover:text-pink-400"
      >
      Username
      </span>
      <input
        type="email"
        value="test"
        class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:border-sky-400 focus:ring-4 focus:ring-violet-400
              disabled:bg-slate-400 disabled:text-slate-500 disabled:border-slate-200
              disabled:shadow-none invalid:border-pink-500 invalid:text-pink-400
              group-hover:text-pink-400
              peer"
        required
      >
      <div class=" invisible peer-invalid:visible">텍스트가 올바르지 않아요</div>
      <!-- peer는 형제에만 사용할 수 있다. -->
      <div class=" hover:bg-regal-blue text-regal-blue">커스텀 색상</div>
      <div class=" hover:bg-bluesky text-bg-bluesky">커스텀 ex 색상</div>

  </form>

</template>

<script>
export default {

}
</script>

<style>

</style>