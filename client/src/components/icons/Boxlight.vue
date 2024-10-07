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
<div class="bg-grey-light rounded-lg p-4 w-2/3">
  <div v-if="title" class="font-bold text-lg p-4 pb-3">{{title}}</div>
  <div class="text-sm">
    <slot></slot>
  </div>
</div>
</template>

<style scoped>

</style>