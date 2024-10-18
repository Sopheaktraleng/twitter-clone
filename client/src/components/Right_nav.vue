<template>
  <!-- Right -->
  <div class="w-1/3 pt-1 font-sans ">
    <div class="top-0 py-2">
          <search-input/>
        </div>
        <boxlight class="mt-2">
          <span class="text-lg font-bold font-sans">Subscribe to Premium</span>
          <div class="px-4 mt-3">
            <div>
              Subscribe to unlock new features and if eligible, receive a share of ads revenue.
            </div>
            <div class="py-2 ">
              <button-defualt class="bg-blue md:w-32">Subscribe</button-defualt>
            </div>
          </div>
        </boxlight>
        <boxlight class="mt-4 border-black">
          <span class="text-lg font-bold">Trends for you</span>
            <trend-item :title="'#Phnom Penh'" :subtitle="'Trending in Cambodia'"></trend-item>
            <trend-item :title="'WhatsApp Link'" :subtitle="'Trending in Cambodia'" :post="'100k posts'"></trend-item>
            <trend-item :title="'Russia'" :subtitle="'Trending in Cambodia'" :post="'135k posts'"></trend-item>
            <trend-item :title="'Angkor Wat'" :subtitle="'Trending in Cambodia'" :post="'1M posts'"></trend-item>
            <trend-item :title="'Ukraine'" :subtitle="'Politics.Trending'"></trend-item>
            <trend-item :title="'Trump'" :subtitle="'Politics.Trending'"></trend-item>
            <trend-item :title="'China'" :subtitle="'Politics.Trending'"></trend-item>
            <trend-item :title="'MPL KH'" :subtitle="'Trending in Cambodia'" :post="'599k posts'"></trend-item>
            <trend-item-box>See more</trend-item-box>
        </boxlight>
        <boxlight class="mt-4" :title="'Who to follow'">
          <follow-profile></follow-profile>
          <trend-item-box class="text-primary rounded-b-2xl py-5">Show more</trend-item-box>
        </boxlight>
        <!-- <box-light :title="'Who to follow'">

<follow-profile v-for="(item,index) in users.slice(4)" :user_profile="item" :key="index"/>

<trend-item-box class="text-primary rounded-b-2xl py-5">Show more</trend-item-box>
</box-light> -->
</div>
</template>
<script>
import Boxlight from './icons/Boxlight.vue';
import SearchInput from './icons/SearchInput.vue';
import ButtonDefualt from './icons/ButtonDefualt.vue';
import TrendItem from './icons/TrendItem.vue';
import TrendItemBox from './icons/TrendItemBox.vue';
import FollowProfile from './icons/FollowProfile.vue';
export default{
  name: "Right_nav",
  components:{SearchInput, Boxlight, ButtonDefualt, TrendItem, TrendItemBox, FollowProfile},
}
</script>