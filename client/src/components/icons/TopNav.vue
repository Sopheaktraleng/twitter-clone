<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "TopNav"
})
</script>

<template>
  <div class="p-3 text-center hover:bg-gray-100 cursor-pointer"><slot></slot></div>
</template>

<style scoped>

</style>