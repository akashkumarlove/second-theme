<template>
    <div class="flex flex-wrap gap-4">
        <div v-for="card in Cards" class=" sm:w-87 bg-[#FAFAFA] lg:max-w-106 rounded-3xl">
            <div class="flex justify-between p-6">

                <div>
                    <div class="text-[#232321] font-rubik font-semibold text-[24px] leading-[100%] tracking-[0]">{{ card.heading }}</div>
                    <div class="text-[#232321] mt-2 font-open text-[16px] font-normal leading-[100%] tracking-[0]">{{ card.review }}</div>
                    <div class="mt-2 flex">
                         <Icon icon="mdi:star" width="18" height="18" class="text-yellow-300"  />
                        <Icon icon="mdi:star-outline" width="18" height="18" class="text-yellow-300" />
                        <Icon icon="mdi:star-half-full" width="18" height="18" class="text-yellow-300" />
                        <Icon icon="mdi:star-half-full" width="18" height="18" class="text-yellow-300" />
                        <Icon icon="mdi:star-half-full" width="18" height="18" class="text-yellow-300" />
                    </div>
                </div>

                <div class="">
                    <img :src="card.logo" loading="lazy" alt="image" class="mx-auto h-auto object-cover" />
                </div>

                
            </div>

            <div class="w-full">
                <img :src="card.image" loading="lazy" alt="image" class="mx-auto object-cover rounded-br-3xl rounded-bl-3xl"/>
            </div>

        </div>
    </div>
</template>

<script setup>

import { Icon } from '@iconify/vue';

const Cards = [
    {
        id: 1,
        logo: '/landing-page/logo-1.png',
        heading: 'Good Quality  ',
        review: 'I highly recommend shopping from kicks',
        image: '/landing-page/card-image-1.png'
    },
    {
        id: 2,
        logo: '/landing-page/logo-2.png',
        heading: 'Good Quality ',
        review: 'I highly recommend shopping from kicks',
        image: '/landing-page/card-image-2.png'
    },
    {
        id: 3,
        logo: '/landing-page/logo-3.png',
        heading: 'Good Quality ',
        review: 'I highly recommend shopping from kicks',
        image: '/landing-page/card-image-3.png'
    }
]


</script>