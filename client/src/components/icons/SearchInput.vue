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
  <div class="w-lg pr-20">
    <label for="simple-search"></label>
    <div>
      <div class="absolute inset-y-0 start-0 pl-4">
        <explore-icon class="w-6 h-10"></explore-icon>
      </div>
      <input type="text" :value="inputValue" @input="$.emit('update:inputValue',$event.target.value)" class="border text-sm rounded-full w-full pl-12 p-3" placeholder="Search" />
    </div>
  </div>
</template>

<style scoped>

</style>