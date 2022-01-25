<template>
  <label class=
    "flex flex-col my-4"
    :for="forId"
  >
    <span>
      {{label}}
    </span> 
    <textarea class=
      "rounded-lg p-3 bg-white border-2"
      :id="forId"
      @input="onInput"
      :value="value"
    >
    </textarea>
  </label>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    forId: {
      type: String,
      required: true,
    }
  },
  setup(props, {emit}){
    const onInput = (e) => {
      emit('update:value',e.target.value)
    }
    return{
      onInput,
    }
  }
}
</script>

<style>

</style>