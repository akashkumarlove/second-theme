<template>
    <button class="px-7 scale-75 sm:scale-100 py-4 bg-[#4A69E2] text-white cursor-pointer hover:bg-[#232321] rounded-lg font-[Rubik] font-medium text-[16px] leading-[100%] tracking-[0.25px]">{{ label }}</button>
</template>

<script setup>
defineProps({
    label: String,
    require: true,
    bg:String
})
</script>