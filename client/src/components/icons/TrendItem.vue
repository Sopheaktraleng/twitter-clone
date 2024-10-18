<script>
import {defineComponent} from 'vue' 
import TrendItemBox from './TrendItemBox.vue';
import TwitButtonAction from './TwitButtonAction.vue';
import DotIcon from './DotIcon.vue';

export default defineComponent({
  name: "TrendItem",
  components: {DotIcon, TwitButtonAction, TrendItemBox},
  props:{
    title:String,
    subtitle:String,
    post:String
  }
})
</script>

<template>
  <trend-item-box>
    <div class="float-right">
      <twit-button-action>
        <dot-icon class="w-5 h-6"/>
      </twit-button-action>
    </div>
    <div>
      <p>{{subtitle}}</p>
      <b>{{title}}</b>
      <p v-if="post">{{post}}</p>
    </div>
  </trend-item-box>
</template>

<style scoped>

</style>