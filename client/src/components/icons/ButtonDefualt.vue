<template>
    <button type="button" class=" text-sm w-full border-2  py-2 m-1 transition duration-200 rounded-full font-bold"
            :class="{'bg-dark hover:bg-dark-o text-light':dark_mode,'hover:bg-gray-100':!dark_mode}"><slot></slot></button>
  </template>
  
  <script>
  export default {
    name: "ButtonDefault",
    props:{
      dark_mode:{type:Boolean,default:false},
    }
  }
  </script>
  
  <style scoped>
  
  </style>