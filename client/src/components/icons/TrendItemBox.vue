<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "TrendItemBox"
})
</script>

<template>
  <div class="hover:bg-light px-4 py-2 cursor-pointer ease-in duration-100 text-sm">
    <slot></slot>
  </div>
</template>

<style scoped>

</style>