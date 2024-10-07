// src/store/user.js

import { defineStore } from 'pinia';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    users: [
      { id: 1, username: 'sopheaktraleng', password: '123456' },
      // Add more users as needed
    ],
    currentUser:{}
  }),
  getters: {
    getUserByUsername: (state) => (username) => {
      return state.users.find(user => user.username === username);
    },
    getcurrentUser: (state)=>state.currentUser
  },
  actions: {
      setcurrentUser(user){
        this.currentUser=user
      }
  }
});
