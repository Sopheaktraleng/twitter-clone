<template>
    <div class="bg-white dark:bg-dim-900">
        <div class="w-full px-2">
            <div class="flex justify-center">
                <Left_nav/>
                <Middle_nav/>
                <Right_nav/>
            </div>
        </div>
    </div>
</template>
<script>
import Left_nav from '@/components/Left_nav.vue';
import Middle_nav from '@/components/Middle_nav.vue';
import Right_nav from '@/components/Right_nav.vue';
export default {
    components: {
        Left_nav,
        Middle_nav,
        Right_nav,
    },
}
</script>

