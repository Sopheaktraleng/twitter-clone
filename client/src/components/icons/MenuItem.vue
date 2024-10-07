<script>
import {defineComponent} from 'vue'

export default defineComponent({
  props: {
    title: String,
    subtitle: {type: String,
      default: ''
    },
    goTo:{
      type:String,
      default: '#'
    }
    },
  name: "MenuItem",
})
</script>

<template>
  <div class="flex flex-row items-center text-lg mt-3 hover:bg-grey rounded-full font-sans" :to="goTo">
    <slot></slot>
    <span class="hidden lg:block ml-4 ">
      {{ title }}
      <br v-if="subtitle">
      {{ subtitle }}
    </span>
  </div>
</template>

<style scoped>

</style>