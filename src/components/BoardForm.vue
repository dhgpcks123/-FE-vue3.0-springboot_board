<template>
  <form class=
    "py-5 px-20 shadow-lg rounded-lg flex flex-col items-center"
    @submit.prevent="onSave"
  >
    <Input
      v-model:value="form.title"
      label="제목"
      forId="title"
    />
    <Input
      v-model:value="form.creator"
      label="작성자"
      forId="creator"
    />
    <TextArea 
      v-model:value="form.content"
      label="내용"
      forId="content"
    />
    <div>
      <Button
        type="submit"
        md
      >{{editing? 'update':'create'}}
      </Button>
      <Button
        v-if="editing"
        type="button"
        md
        @click="onDelete"
      >삭제하기
      </Button>
    </div>
  </form>
</template>

<script>
import {ref} from 'vue'
import axios from '@/axios.js'
import { useRouter, useRoute } from 'vue-router'
import Input from '@/components/Input.vue'
import TextArea from '@/components/Textarea.vue'
import Button from '@/components/Button.vue'

export default {
  components: {
    Input, TextArea, Button
  },
  props:{
    editing: {
      type: Boolean,
      default: false,
    }
  },
  setup(props) {
    const router = useRouter()
    const route = useRoute()
    const form = ref({
      title : '',
      creator: '',
      content: '',
    })
    const boardId = route.params.id
    const oriForm = ref(null)

    const getBoard = async () => {
      try{
        const res = await axios.get(`data/${boardId}`)
        form.value = {...res.data}
        oriForm.value = {...res.data}
        console.log(form.value)
      }catch(err){
        console.log(err)
      }
    }
    const onSave = async () => {
      try{
        const data = {
          title: form.value.title,
          creator: form.value.creator,
          content: form.value.content,
        }
        if(props.editing){
          const res = await axios.put(`data/${boardId}`, data)        
        }else{
          const res = await axios.post(`data`, data)        
        }
        router.push({
          name: 'board'
        })
      }catch(err){
        console.log(err)
      }
    }
    const onDelete = async () => {
      if(!confirm('진짜 삭제할래요?'))return
      try{
        await axios.delete(`data/${boardId}`)
      }catch(err){
        console.log(err)
      }
      router.push({
        name: 'board'
      })
    }
    
    if(props.editing){
      getBoard()
    }

    return{
      form, onSave, onDelete,
    }
  }
}
</script>

<style>

</style>