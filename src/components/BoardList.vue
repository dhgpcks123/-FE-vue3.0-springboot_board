<template>
  <div class=
    "max-w-md py-4 px-8 bg-white shadow-lg rounded-lg first:mt-20 mb-5
    cursor-pointer"
    v-for="board in boards"  
    v-bind:key="board.id"
    @click="goEditPage(board.id)"
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
import { useRouter } from 'vue-router'

export default {
  components: {
  },
  props: {
    boards: {
      type: Object,
      required: true,
    }
  },
  setup() {
    const router = useRouter()

    const goEditPage = (boardId) => {
      router.push({
        name: 'edit',
        params: {
          id: boardId
        }
      })
    }
    return {
      goEditPage,
    }
  }
}
</script>

<style>

</style>