import { defineStore } from "pinia";

export const useTweetStore = defineStore('tweets', {
    state: ()=> ({
        tweets: [],
    }),
    actions: {
        addTweet(text){
            this.tweets.push(text)
        },
    },
})