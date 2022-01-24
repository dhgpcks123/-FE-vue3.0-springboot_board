<template>
  <form class=
    "py-5 px-20 shadow-lg rounded-lg flex flex-col items-center"
    @submit.prevent="onSave"
  >
    <label class=
      "flex flex-col my-4"
      for="title"
    >
      <span>
        타이틀
      </span> 
      <input class=
        "rounded-lg p-3 bg-white border-2"
        placeholder="타이틀 입력하세요"
        id="title"
        v-model="form.title"
      >
    </label>
    <label class=
      "flex flex-col my-4"
      for="creator"
    >
      <span>
        작성자
      </span> 
      <input class=
        "rounded-lg p-3 bg-white border-2"
        placeholder="작성자를 입력하세요"
        id="creator"
        v-model="form.creator"
      >
    </label>
    <label class=
      "flex flex-col my-4"
      for="content"
    >
      <span>
        내용
      </span> 
      <textarea class=
        "rounded-lg p-3 bg-white border-2"
        id="content"
        v-model="form.content"
      >
      </textarea>
    </label>
    <button class=
      "rounded-lg bg-violet-300 w-20 h-10"
      type="submit"
    >
      작성하기
    </button>
  </form>
</template>

<script>
import {ref} from 'vue'
import axios from '@/axios.js'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const form = ref({
      title : '',
      creator: '',
      content: '',
    })
    
    const onSave = async () => {
      try{
        const data = {
          title: form.value.title,
          creator: form.value.creator,
          content: form.value.content,
        }
        const res = await axios.post(`data`, data)
        router.push({
          name: 'board'
        })
      }catch(err){
        console.log(err)
      }
    }
    
    return{
      form, onSave,
    }
  }
}
</script>

<style>

</style>