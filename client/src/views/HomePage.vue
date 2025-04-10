<template>
    <div class="bg-white">
        <div class="w-full px-2">
            <div class="flex flex-row justify-center">
                <Left_nav class="ml-20"/>
                <Middle_nav class="mx-12">
                </Middle_nav>
                <Right_nav class="mr-20"/>
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

