<template>
  <router-link class=
    "flex m-5"
    :to="{name:'add'}"
  >
    <Button sm>
      글 작성하기
    </Button>
  </router-link>
  <BoardList
    :boards="boards"
  />
</template>

<script>
import { ref } from 'vue'
import axios from '@/axios'
import BoardList from '../components/BoardList.vue'
import Button from '@/components/Button.vue'

export default {
  components: {
    BoardList, Button
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