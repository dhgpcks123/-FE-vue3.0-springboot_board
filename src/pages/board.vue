<template>
  <router-link class=
    "flex m-5"
    :to="{name:'add'}"
  >
    <button class=
      "rounded-lg bg-violet-300 w-20 h-10"
      type="submit"
    >
      글 작성하기
    </button>
  </router-link>
  <BoardList
    :boards="boards"
  />
</template>

<script>
import { ref } from 'vue'
import BoardList from '../components/BoardList.vue'
import axios from '@/axios'

export default {
  components: {
    BoardList,
  },
  setup() {
    const boards = ref([])

    const init = () => {
      getData()
    }
    const getData = async () => {
      try{
        const res = await axios.get('data')
        boards.value = res.data
      }catch(err){
        console.log(err)
      }
    }
    init()
    return {
      getData, boards
    }
  },
}
</script>

<style>

</style>