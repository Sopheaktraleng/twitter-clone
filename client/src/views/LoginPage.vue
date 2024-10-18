<template>
    <div class="flex flex-row items-center justify-center h-screen font-sans">
        <div class="absolute top-0 left-0 z-20 bg-b text-white p-4 ">
            <router-view></router-view>
        </div>
            <div class="w-1/2 m-auto">
                <svg class="px-32" xmlns="http://www.w3.org/2000/svg"  width="400" height="400" viewBox="0 0 24 24">
                    <path d="M 2.3671875 3 L 9.4628906 13.140625 L 2.7402344 21 L 5.3808594 21 L 10.644531 14.830078 L 14.960938 21 L 21.871094 21 L 14.449219 10.375 L 20.740234 3 L 18.140625 3 L 13.271484 8.6875 L 9.2988281 3 L 2.3671875 3 z M 6.2070312 5 L 8.2558594 5 L 18.033203 19 L 16.001953 19 L 6.2070312 5 z"></path>
                </svg>
            </div>
        <div class="w-1/2 md:w-1/2 m-auto">
            <div class="font-bold text-5xl">Happening Now</div>
            <div class="font-bold text-3xl mt-10">Join today.</div>
            <div class=" mt-10 w-full md:w-2/3 lg:w-2/3 xl:w-2/3  space-y-2">
                <button-defualt class="flex justify-center gap-2">
                    <google-icon class="px-2"></google-icon>
                     Sign up with Google
                </button-defualt>
                <button-defualt class="flex justify-center gap-2">
                    <apple-icon class="px-2"></apple-icon>
                     Sign up with Apple
                </button-defualt>
               <devider-rule>or</devider-rule>
                <button-defualt class="bg-blue hover:bg-blue text-light">Create Account</button-defualt>
                <div class="text-xs pt-3">
          By signing up, you agree to the <span class="text-blue">Terms of Service</span> and <span class="text-blue">Privacy Policy</span>, including <span class="text-blue">Cookie Use</span>.
        </div>
        <div>
          <div class="mt-10 text-lg font-bold">
            Already have an account?
          </div>
          <router-link :to="'/login'" >
          <button-defualt class="mt-5 text-blue" @click="showModal">Sign in</button-defualt>
        </router-link>
        </div>
            </div>    
            </div>
    </div>
</template>

<script>
import GoogleIcon from "@/components/icons/GoogleIcon.vue";
import AppleIcon from '@/components/icons/AppleIcon.vue';
import DeviderRule from '@/components/icons/Devider-Rule.vue';
import ButtonDefualt from '@/components/icons/ButtonDefualt.vue';
export default {
    name: "LoginPage",
    components:{GoogleIcon, AppleIcon, DeviderRule, ButtonDefualt},
};
</script>
