<template>
    <div class="flex flex-wrap justify-center sm:justify-between items-center gap-4">
        <div v-for="card in Cards" class="flex flex-col justify-between mb-6">
            <div class="w-79 relative bg-white rounded-3xl h-87 flex flex-col justify-center items-center">
                <img :src="card.image" loading="lazy" alt="image" class="h-83 w-75 rounded-2xl" />
                <span
                    class="absolute bg-[#4A69E2] text-white font-rubik font-semibold text-[12px] rounded-br-2xl py-3 px-5 top-3 left-2 rounded-tl-2xl leading-none tracking-[0]">New</span>
            </div>

            <h2 class="text-[#232321] mt-4 font-[Rubik] max-w-79 font-semibold text-[22px] leading-[100%] tracking-[0]">{{
                card.name }}</h2>

            <button class="py-4 mt-4 rounded-lg mr-4 max-w-79 bg-[#232321] text-white cursor-pointer hover:text-yellow-400">VEW
                PRODUCT - ${{ card.price }}</button>
        </div>
    </div>
</template>

<script setup>


 
 const Cards = ref( [
  {
    id: 1,
    name: 'ULTRABOOST 1.0 MIAMI Green',
    price: 12.00,
    image: '/listing-page/image-1.png',
    colors: ['#FF6C6C'],
    size: 38,
    gender: 'Minimog',
    categrious: 'Casual shoes',
    
  },
  {
    id: 2,
    name: 'ADIDAS OZELIA SHOES Green',
    price: 50.00,
    image: '/listing-page/image-2.png',
    colors: ['#FF7629'],
    size: 39,
    gender: 'Minimog',
    categrious: 'Runner',
    
  },
  {
    id: 3,
    name: 'ADIDAS 4DFWD 2 RUNNING SHOES',
    price: 300.00,
    image: '/listing-page/image-3.png',
    colors: ['#FFF06C'],
    size: 40,
    gender: 'Retroli',
    categrious: 'Hiking',
    
  },
  {
    id: 4,
    name: 'ULTRABOOST 1.0 MIAMI Green',
    price: 100.00,
    image: '/listing-page/image-4.png',
    colors: ['#9BFF6C'],
    size: 41,
    gender: 'Retroli',
    categrious: 'Sneaker',
   

  },
  {
    id: 5,
    name: 'ADIDAS OZELIA SHOES Green',
    price: 200.00,
    image: '/listing-page/image-5.png',
    colors: ['#6CFF9E'],
    size: 42,
    gender: 'Brook',
    categrious: 'Basketball',
   
  },
  {
    id: 6,
    name: 'ADIDAS 4DFWD 2 RUNNING SHOES',
    price: 400.00,
    image: '/listing-page/image-6.png',
    colors: ['#6CFFDC'],
    size: 43,
    gender: 'Brook',
    categrious: 'Golf',
    
  },
  {
    id: 7,
    name: 'ULTRABOOST 1.0 MIAMI Green',
    price: 600.00,
    image: '/listing-page/image-7.png',
    colors: ['#6CB9FF'],
    size: 44,
    gender: 'Learts',
    categrious: 'Outdoor',
    
  },
  {
    id: 8,
    name: 'ADIDAS OZELIA SHOES Green',
    price: 800.00,
    image: '/listing-page/image-8.png',
    colors: ['#6C7BFF'],
    size: 46,
    gender: 'Vagabond',
    categrious: 'Outdoor',
    
  },
  {
    id: 9,
    name: 'ADIDAS 4DFWD 2 RUNNING SHOES',
    price: 3500.00,
    image: '/listing-page/image-9.png',
    colors: ['#6C7BFF'],
    size: 46,
    gender: 'Abby',
    categrious: 'Sports',
   
  }
])







</script>