<template>
  <button class=
    "rounded-lg bg-violet-300 m-3"
    v-bind="$attrs"
    :type="type"
    :class="classes"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      default: 'button',
      validator: (value) => {
        const allowed = ['button', 'submit', 'reset']
        return allowed.includes(value)
      }
    },
    sm: Boolean,
    md: {
      type: Boolean,
      default: true,
    },
    lg: Boolean,
    },
  setup(props){
    const classes = []

    if(props.sm) classes.push('w-20 h-10')
    else if(props.md) classes.push('w-24 h-16')
    else classes.push('w-32 h-20')
    return {
      classes
    }
  }
}
</script>

<style>

</style>