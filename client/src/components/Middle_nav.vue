<template>
  <!-- Middle -->
  <div class="border border-solid border-t-0 border-b-0 w-1/2 font-sans mt-0 pt-0 border-grey-light">
    <display>
      <slot name="main"></slot>
  </display>
        </div>
</template>
<script>
import Display from '../views/Display.vue'
export default{
  components: { Display, },
  name: "Middle_nav",
  }
</script>