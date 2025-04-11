<template>
  <div class="bg-grey-lightest rounded-lg min-w-full p-10">
    <div>
      <button
        @click="$emit('close')"
        class="absolute top-3 right-4 text-2xl border-0 bg-grey-lightest"
      >
        &times;
      </button>
      <div class="flex flex-col justify-center items-center">
        <router-link to="/" class="items-center justify-center">
          <svg
            class="p-3"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <path
              d="M 2.3671875 3 L 9.4628906 13.140625 L 2.7402344 21 L 5.3808594 21 L 10.644531 14.830078 L 14.960938 21 L 21.871094 21 L 14.449219 10.375 L 20.740234 3 L 18.140625 3 L 13.271484 8.6875 L 9.2988281 3 L 2.3671875 3 z M 6.2070312 5 L 8.2558594 5 L 18.033203 19 L 16.001953 19 L 6.2070312 5 z"
            ></path>
          </svg>
        </router-link>
        <div class="w-full flex flex-col justify-center items-center">
          <h1 class="font-bold text-black">Create your account</h1>
          <form
            @submit.prevent="handleLogin"
            class="flex flex-col justify-center items-center"
          >
            <input
              type="text"
              id="username"
              v-model="username"
              placeholder="Username..."
              class="w-64 h-8 my-2 bg-white"
            />
            <input
              type="text"
              id="username"
              v-model="username"
              placeholder="Email..."
              class="w-64 h-8 my-2 bg-white"
            />
            <input
              type="password"
              id="password"
              v-model="password"
              class="w-64 h-8 bg-white"
              placeholder="Password..."
            />

            <button-defualt
              class="rounded-xl bg-blue text-white p-3 border mt-4"
              type="submit"
              >Register</button-defualt
            >
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useUserStore } from '@/store/user'
import ButtonDefualt from '@/components/icons/ButtonDefualt.vue'
import { mapState, mapActions } from 'pinia'
export default {
  name: 'SignIn',
  components: { ButtonDefualt },
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    handleLogin() {
      const userStore = useUserStore()
      const user = userStore.getUserByUsername(this.username)
      if (user && user.password === this.password) {
        // Navigate to home page after successful login
        this.$router.push('/home')
      } else {
        // Handle invalid login
        console.error('Invalid username or password')
      }
      // Clear fields after login attempt
      this.username = ''
      this.password = ''
    },
    ...mapActions(useUserStore, ['getcurrentUser']),
  },
  computed: {
    ...mapState(useUserStore, ['getUser']),
  },
}
</script>
