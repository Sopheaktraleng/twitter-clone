import axios from "axios";
import { defineStore } from "pinia";

export const useTweetStore = defineStore('tweets', {
    state: ()=> ({
        tweets: []
    }),
    actions: {
        async addTweet(text){
            const response = await axios.post('http://localhost:4000/api/v1/tweet',{
                text: text
            })
            this.tweets.push(response.data)
        }
    }
})