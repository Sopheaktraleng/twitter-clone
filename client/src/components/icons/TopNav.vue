<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "TopNav"
})
</script>

<template>
  <div class="p-3 text-center font-bold text-grey-darker hover:text-black"><slot></slot></div>
</template>

<style scoped>

</style>