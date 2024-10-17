// import { defineStore } from "pinia";
// import axios from "axios";

// export const useAuthStore = defineStore('auth', {
//     state: () => ({
//         token: '',
//         loggedUser: {}
//     }),
//     actions: {
//         async login(email, password){
//             try {
//                 const { data } = await axios.post('http://localhost:4000/api/v1/auth/login', {
//                     email: email,
//                     password: password
//                 })
//                 this.token = data.token
//                 const response = await axios.get('http://localhost:4000/api/v1/auth/me',{
//                     headers: {
//                         Authorization: `Bearer ${data.token}`
//                     }
//                 })
//                 this.loggedUser = response.data.user
//             } catch (e){
//                 console.log(e)
//             }
//         },
//         logout() {
//             this.token = ''
//             this.loggedUser = {}
//         }
//     },
//     getters: {
//         isAuthenticated(){
//             return this.token !== ''
//         },
//         getToken(){
//             return this.token
//         }
//     }
// })