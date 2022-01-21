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
    <div
      class="hover:bg-regal-blue
      text-regal-blue after:content-['*']
      after:ml-1.5 after:text-pink-400 block text-sm"
    >
    커스텀 색상
    </div>
    <input
      type="email"
      placeholder="your@naver.com"
      class="mt-1 px-3 py-2
      block w-full rounded-md
      bg-yellow-50 border shadow-sm border-slate-400 
      placeholder-pink-400 placeholder:italic placeholder 
      focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
      "
    >
  <span
    class="before:block before:absolute before:-inset-1 before:-skew-y-3
    before:bg-pink-500 relative inline-block">
    <span class="relative text-white">사랑해</span>
  </span>
    <input type="file" class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "/>
  <ul 
    role="list"
    class="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500"
  >
    <li>5 cups chopped Porcini mushrooms</li>
    <li>1/2 cup of olive oil</li>
    <li>3lb of celery</li>
  </ul>
  </form>
  <div class="
    selection:bg-fuchsia-300 selection:text-fuchsia-900
  ">
    <p class="
      first-letter:text-7xl first-letter:mr-3 first-letter:float-left
    ">
      So I started to walk into the water. I won't lie to you boys, I was
      terrified. But I pressed on, and as I made my way past the breakers
      a strange calm came over me. I don't know if it was divine intervention
      or the kinship of all living things but I tell you Jerry at that moment,
      I <em>was</em> a marine biologist.
    </p>
  </div>

</template>

<script>
export default {

}
</script>

<style>

</style>