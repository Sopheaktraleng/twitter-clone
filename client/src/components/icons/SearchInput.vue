<script>
import {defineComponent} from 'vue'
import ExploreIcon from './ExploreIcon.vue';

export default defineComponent({
  name: "SearchInput",
  components: {ExploreIcon},
  props:{
    inputValue:String
  }
})
</script>

<template>
  <div class="flex flex-row items-start mx-0 w-2/3 p-4">
    <label for="simple-search" class="sr-only"></label>
    <div class="relative">
      <div class="absolute inset-y-0 start-0 pl-4 pointer-events-none">
        <explore-icon class="w-6 h-10"></explore-icon>
      </div>
      <input type="text" :value="inputValue" @input="$.emit('update:inputValue',$event.target.value)" class="bg-grey text-gray-900 border-light text-sm rounded-full block w-full pl-12 p-2" placeholder="Search" />
    </div>
  </div>
</template>

<style scoped>

</style>