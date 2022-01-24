<template>
  <div class=
    "max-w-md py-4 px-8 bg-white shadow-lg rounded-lg first:mt-20 mb-5"
    v-for="board in boards"  
    v-bind:key="board.id"
  >
  <div>
    <h2 class=
    "text-gray-800 text-3xl font-semibold"
    >{{board.title}}</h2>
    <p class=
    "mt-2 text-gray-600"
    >{{board.content}}</p>
    </div>
    <div class="flex justify-end mt-4">
      <span class="text-xl font-medium text-indigo-500">{{board.creator}}</span>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: {
    boards: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style>

</style>