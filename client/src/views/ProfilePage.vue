<template>
    <div>
        <div class="w-full flex border-b backdrop-blur-lg bg-white bg-opacity-70 sticky top-0 z-10 py-2 px-5"></div>
        <div class="px-3">
            <twit-button-action-vue>
                <back-icon-vue></back-icon-vue>
            </twit-button-action-vue>
        </div>
        <div>
        <div class="text-lg font-bold ">{{ auth_user.name }}</div>
        <div class="text-sm">{{ getMyPosts.length }} posts</div>
        </div>
    </div>
</template>
<script>
import TwitButtonActionVue from "@/components/icons/TwitButtonAction.vue";
import BackIconVue from '@/components/icons/BackIcon.vue';
export default{
    name: "ProfilePage",
    components: {TwitButtonActionVue, BackIconVue}
}
</script>