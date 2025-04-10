<template>
    <button type="button" class=" border-1 text-sm w-3/4 h-10  py-2 m-1 rounded-full font-bold"
            :class="{}"><slot></slot></button>
  </template>
  
  <script>
  export default {
    name: "ButtonDefault",
  }
  </script>
  
  <style scoped>
  
  </style>