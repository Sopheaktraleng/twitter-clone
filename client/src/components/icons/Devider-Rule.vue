<template>
    <div class="relative flex items-center justify-center w-3/4 my-3">
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div class="w-full border-t border-gray-300"></div>
      </div>
      <div class="relative z-10 bg-white px-4 text-sm text-gray-500">
        <slot>or</slot>
      </div>
    </div>
</template>

<script>
export default {
  name: "DividerRule",
};
</script>
