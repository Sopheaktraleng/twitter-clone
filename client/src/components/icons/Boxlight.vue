<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "BoxLight",
  props:{
    title:String
  }
})
</script>

<template>
<div class="border border-solid rounded-lg border-grey-light w-lg p-4 mr-4">
  <div v-if="title" class="font-bold text-lg p-4 pb-3">{{title}}</div>
  <div class="text-sm">
    <slot></slot>
  </div>
</div>
</template>

<style scoped>

</style>