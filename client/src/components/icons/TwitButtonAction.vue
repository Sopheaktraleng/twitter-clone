<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "TwitBottomAction",
  props:{
    value:{type:String,default:''},
    color:{type:String,default: 'primary'},
  },
})
</script>

<template>
  <div class="flex text-gray-500 justify-center items-center cursor-pointer group">
    <div class="p-1 rounded-full ease-in-out duration-500 " :class="{'group-hover:bg-danger-100':color==='danger','group-hover:bg-primary-100':color==='primary','group-hover:bg-success-100':color==='success'}"><slot></slot></div>
    <div  class="text-sm" :class="{'group-hover:text-danger':color==='danger','group-hover:text-primary':color==='primary','group-hover:text-success':color==='success'}">{{value}}</div>
  </div>
</template>

<style scoped>

</style>