<template>
    <div class="p-2 h-screen top-0 w-min lg:w-64">
        <div class="flex flex-col fixed px-3">
            <router-link class="w-8 mx-auto lg:mx-0" to="/" >
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 24 24">
                    <path d="M 2.3671875 3 L 9.4628906 13.140625 L 2.7402344 21 L 5.3808594 21 L 10.644531 14.830078 L 14.960938 21 L 21.871094 21 L 14.449219 10.375 L 20.740234 3 L 18.140625 3 L 13.271484 8.6875 L 9.2988281 3 L 2.3671875 3 z M 6.2070312 5 L 8.2558594 5 L 18.033203 19 L 16.001953 19 L 6.2070312 5 z"></path>
                </svg>
            </router-link>
          <div class="mt-5">
            <router-link to="/home" class=" no-underline text-black">
            <menu-item :title="'Home'" class="">
              <home-icon class="w-6 mx-auto lg:mx-0"/>
            </menu-item>
          </router-link>
            <menu-item :title="'Explore'">
              <explore-icon class="w-6 mx-auto lg:mx-0"/>
            </menu-item>
            <menu-item :title="'Notifications'">
              <notification-icon class="w-6 mx-auto lg:mx-0"/>
            </menu-item>
            <menu-item :title="'Messages'">
              <message-icon class="w-6 mx-auto lg:mx-0"/>
            </menu-item>
            <menu-item :title="'Lists'">
              <list-icon class="w-6 mx-auto lg:mx-0"/>
            </menu-item>
            <menu-item :title="'Bookmarks'">
              <bookmark-icon class="w-6 mx-auto lg:mx-0"/>
            </menu-item>
            <menu-item :title="'Communities'">
              <communtities-icon class="w-6 mx-auto lg:mx-0"/>
            </menu-item>
            <menu-item :title="'Premium'">
              <premium-icon class="w-6 mx-auto lg:mx-0"/>
            </menu-item>
            <router-link to="/profile" class=" no-underline text-black">
              <menu-item :title="'Profile'">
              <profile-icon class="w-6 mx-auto lg:mx-0" />
            </menu-item></router-link>
            

            <menu-item :title="'More'">
              <more-icon class="w-6 mx-auto lg:mx-0"/>
            </menu-item>
          
            <menu-item class=" w-48 h-12 text-xl rounded-full bg-blue justify-center font-sans font-bold text-white">Post
            </menu-item>
            </div>
        
        <!-- User Menu -->
        <div 

              class=" mt-5 w-14 mx-auto mb-5 rounded-full  p-2  font-sans pr-32 pb-32">
              <div class="flex flex-row">
                <img
                  class="w-10 h-10 rounded-full"
                  src="https://pbs.twimg.com/profile_images/1308769664240160770/AfgzWVE7_normal.jpg"
                  alt="Joe Biden"
                />
                <div class=" flex-col ml-2">
                  <h1 class="text-gray-800 dark:text-white font-bold text-sm">
                    Logout
                  </h1>
                  <p class="text-gray-400 text-sm"></p>
                </div>
              </div>
            </div>
            <!-- /User Menu -->
        </div>
      </div>
  
</template>
<script>
import BookmarkIcon from "./icons/BookmarkIcon.vue";
import CommuntitiesIcon from './icons/CommuntitiesIcon.vue';
import ExploreIcon from './icons/ExploreIcon.vue';
import HomeIcon from "./icons/HomeIcon.vue";
import ListIcon from './icons/ListIcon.vue';
import MenuItem from './icons/MenuItem.vue';
import MessageIcon from "./icons/MessageIcon.vue";
import MoreIcon from "./icons/MoreIcon.vue";
import NotificationIcon from "./icons/NotificationIcon.vue";
import PremiumIcon from "./icons/PremiumIcon.vue";
import ProfileIcon from './icons/ProfileIcon.vue';

export default{
    name: "Left_nav",
    // methods:{
    //   ...mapActions(useAuthStore, ['logout']),
    //   logUserOut(){
    //     this.logout();
    //     this.$router.push('/');
    //   }
    // },
    // computed:{
    //   ...mapState(useAuthStore, ['loggedUser'])
    // },
    components:{ HomeIcon, ListIcon, MessageIcon, PremiumIcon, NotificationIcon, MoreIcon, CommuntitiesIcon, BookmarkIcon,ExploreIcon, ProfileIcon, MenuItem}
};
</script>