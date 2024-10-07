<template>
    <div class="h-screen flex flex-col justify-center">
        <div class="mx-auto w-96 h-96 shadow-xl border-2 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
                    <path d="M 2.3671875 3 L 9.4628906 13.140625 L 2.7402344 21 L 5.3808594 21 L 10.644531 14.830078 L 14.960938 21 L 21.871094 21 L 14.449219 10.375 L 20.740234 3 L 18.140625 3 L 13.271484 8.6875 L 9.2988281 3 L 2.3671875 3 z M 6.2070312 5 L 8.2558594 5 L 18.033203 19 L 16.001953 19 L 6.2070312 5 z"></path>
                </svg>
                <div class="font-bold text-3xl items-center">Sign in to X
        
    <form @submit.prevent="handleLogin" class="container justify-stretch w-96 space-y-2 mx-20">
                    <div class=" mt-5">
                        <div class="text-lg">Username:
                            <input type="text" id="username" v-model="username"/>
                        </div>
                    </div>
                    <div class=" mt-5">
                        <div class="text-lg">Password:
                        <input type="password" id="password" v-model="password"/>
                        </div>
                    </div>
                    <button-defualt class="w-1/2 mt-5 rounded-xl bg-blue text-white" type="submit">Login</button-defualt>
                </form>
            </div>
            </div>
    </div>
</template>
<script>
import { useUserStore } from "@/store/user";
import ButtonDefualt from "@/components/icons/ButtonDefualt.vue";
import {mapState, mapActions } from "pinia"
export default {
    name: "SignIn",
    components:{ButtonDefualt},
    data() {
        return {
            username: "",
            password: "",
        };
    },
    methods: {
        handleLogin() {
            const userStore = useUserStore();
            const user = userStore.getUserByUsername(this.username);
            if (user && user.password === this.password) {
                // Navigate to home page after successful login
                this.$router.push("/home");
            } else {
                // Handle invalid login
                console.error('Invalid username or password');
            }
            // Clear fields after login attempt
            this.username = "";
            this.password = "";
        },
        ...mapActions(useUserStore,["getcurrentUser"]),
    },
    computed: {
        ...mapState(useUserStore, ["getUser"]),
    }
};
</script>