import { defineStore } from "pinia";
export const useTweetStore = defineStore('Tweets',{
    state: ()=> ({
        tweets:[
            {
                byuser: 'sopheaktra',
                text: 'sajgsieigs',
                date: '2004'
            }
        ],
    }),
    getters: {
        getTweet: (state) => state.tweets,
        getMyPosts() {
            let user = useUserStore().auth_user
            let myPosts = []
            this.posts.forEach(function (v) {
                if(user.username===v.username){
                    v.user_image = user.profile_img
                    myPosts.push(v)
                }
            })
            return myPosts;
        },
    },
    actions: {
        addTwit( caption) {
            let user = useUserStore().auth_user
            const today = new Date();
            const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            const created_at = date + ' ' + time;
            this.posts.push({
                id: (this.posts.length + 1),
                username: user.username,
                name: user.name,
                caption,
                image: `https://source.unsplash.com/random/512x512?${caption}`,
                repost_number: 0,
                repost_id: 0,
                likes: 0,
                comment_number: 0,
                created_at
            },)
            return {data: {}, statusCode: 200}
        },
        addLike(twit, index) {

            let liked = false
            let cIndex = 0;
            this.liked.forEach(function (v, ind) {
                cIndex = ind
                if (v.post_id === twit.id && v.username === twit.username) {
                    liked = true
                }
            })
            if (liked) {
                this.posts[index].likes--;
                this.liked.splice(cIndex, 1)
            } else {
                this.posts[index].likes++;
                this.liked.push({post_id: twit.id, username: twit.username})
            }
            return {data: {liked}, statusCode: 200}
        },
        addComment(comment, post) {
            this.posts.forEach(function (v) {
                if (v.id === post.id) {
                    v.comment_number++;
                }
            })
            const today = new Date();
            const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            const created_at = date + ' ' + time;
            let user = useUserStore().auth_user
            this.comments.push({post_id:post.id, username: user.username,comment,created_at})
            return {data: {}, statusCode: 200}
        },
        getComments(post_id) {
            let post = this.getRePost(post_id)
            let cmt = [];
            console.log(this.comments)
            this.comments.forEach(function (v) {
                if(post.id===v.post_id){
                    let user = useUserStore().findUser(v.username)
                    v.user_image = user.profile_img
                    v.name = user.name
                    cmt.push(v)
                }
            })
            return cmt;
        },
    },
    persist: true,
})