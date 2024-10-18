<script>
import {defineComponent} from 'vue'
import ButtonDefualt from './ButtonDefualt.vue';
import TrendItemBox from './TrendItemBox.vue';

export default defineComponent({
  name: "FollowProfile",
  components: {TrendItemBox, ButtonDefualt},
  props: {
    user_profile: {
      type: Object, default: () => ({
        name: 'Sopheaktra',
        username: '@sopheaktraleng',
        profile_img: 'https://source.unsplash.com/random/64x64?cute-boy'
      })
    }
  }
})
</script>
<template>
  <trend-item-box>
    <div class="flex items-center w-full">
      <div class="w-30 h-10 rounded-full border overflow-hidden">
        <img :src="user_profile.profile_img" alt="">
      </div>
      <div class="w-full flex-initial px-2">
        <b>{{user_profile.name}}</b>
        <p>{{user_profile.username}}</p>
      </div>
      <div class="">
        <button-defualt :dark_mode="true" class="px-2 bg-black text-white">Follow</button-defualt>
      </div>
    </div>
  </trend-item-box>
</template>

<style scoped>

</style>