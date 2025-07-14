<template>
    <div class="wrapper bg-[#d8d5d5] h-screen pt-11">
        <section class="lg:px-15 md:px-7 px-4">
            <header class=" bg-[#fafafa] py-3 sm:py-4 flex items-center justify-between rounded-xl px-5">
                <!-- Links -->
                <nav class="">
                    <ul
                        class="sm:flex hidden md:gap-4 lg:gap-8 font-rubik font-semibold text-base leading-[100%] tracking-[0%]">
                        <li>New Drops <span>🔥</span></li>

                        <!-- Men Drop Down -->
                        <li class="relative group">
                            <button class="flex items-center justify-center">Men
                                <Icon icon="mdi:chevron-down" class="w-4 h-4" />
                            </button>

                            <div
                                class="absolute left-0 mt-2 hidden group-hover:flex flex-col  bg-white shadow-md gap-2 rounded-md p-4">
                                <NuxtLink to="/men/shirts" class="hover:text-blue-500 text-sm">Shirts</NuxtLink>
                                <NuxtLink to="/men/pants" class="hover:text-blue-500 text-sm">Pants</NuxtLink>
                                <NuxtLink to="/men/shoes" class="hover:text-blue-500 text-sm">Shoes</NuxtLink>
                            </div>

                        </li>

                        <!-- Women Drop Down -->
                        <li class="relative group">
                            <button class="flex items-center justify-center "> Women
                                <Icon icon="mdi:chevron-down" class="w-4 h-4" />
                            </button>

                            <div
                                class="absolute left-0 mt-2 hidden group-hover:flex flex-col  bg-white shadow-md gap-2 rounded-md p-4">
                                <NuxtLink to="/men/shirts" class="hover:text-blue-500 text-sm">Top</NuxtLink>
                                <NuxtLink to="/men/pants" class="hover:text-blue-500 text-sm">Dresses</NuxtLink>
                                <NuxtLink to="/men/shoes" class="hover:text-blue-500 text-sm">Heels</NuxtLink>
                            </div>

                        </li>
                    </ul>

                    <!-- Mobile menu button -->
                    <button @click="toggleMenu" class=" sm:hidden  text-white rounded hover:bg-indigo-700 transition">
                        <!-- {{ isMenuOpen ? 'Close ' : 'Open Menu' }} -->
                        <Icon :icon="isMenuOpen ? 'mdi:close' : 'mdi:menu'" class="text-3xl text-gray-800" />
                    </button>

                    <!-- Mobile -->
                    <div v-if="isMenuOpen" class="space-y-5">
                        <!-- Men And Women -->

                        <button class="flex mt-5 items-center justify-center">Men

                        </button>

                        <button class="flex items-center justify-center "> Women

                        </button>

                        <button class="flex items-center justify-center "> Kids

                        </button>




                    </div>




                </nav>

                <!-- Logo -->
                <div
                    class="font-rubik font-extrabold text-[30px] sm:text-[48px] tracking-tight uppercase text-[#1E1E1C]">
                    KICK</div>

                <!-- Icons -->
                <div class="flex md:gap-10 lg:gap-15">
                    <Icon icon="mdi:search" class="w-10 h-10 text-gray-500" />
                    <Icon icon="mdi:account-circle" class="w-10 h-10 text-gray-700" />
                    <button>0</button>

                </div>
            </header>

            <!-- Banner -->
            <div class="sm:mt-19 mt-7 relative">
                <div class="2xl:w-full 2xl-h-screen ">
                    <img src="/listing-page/banner.png" loading="lazy" alt="image"
                        class="h-auto mx-auto object-cover 2xl:w-full" />
                </div>

                <div class="absolute bottom-3 2xl:scale-119 md:bottom-4 lg:bottom-33 left-3 md:left-10 lg:left-10 w-100">
                    <p
                        class="font-semibold text-[14px] sm:text-[24px] leading-[100%] tracking-[0] font-['Open_Sans'] text-[#E7E7E3]">
                        Limited time only</p>
                    <h2
                        class="text-[#FFFFFF] mt-2 sm:mt-4 font-['Rubik'] font-semibold text-[25px] sm:text-[74px] leading-[100%] tracking-[0]">
                        Get 30% off</h2>
                    <p
                        class="text-[#E7E7E3] w-60 sm:w-full  mt-2 sm:mt-4 font-['Open_Sans'] font-normal text-[12px] sm:text-[20px] leading-[100%] tracking-[0]">
                        Sneakers made with your comfort in mind so you can put all of your focus into your next session.
                    </p>
                </div>
            </div>

        </section>


        <section class="lg:px-15 md:px-7 px-4 bg-[#d8d5d5]">
            <!-- Mobile Filter  -->
            <div class="flex justify-between sm:hidden mt-7 ">
                <div class="">
                    <button @click="toggleFilter"
                        class="text-[#232321] items-center flex gap-5 font-['Rubik'] font-semibold text-[16px] leading-[100%] tracking-[0] uppercase bg-[#F4F2F2] rounded-xl py-3 px-7">Filter
                        <Icon :icon="isFilterOpen ? 'mdi:close' : 'mdi:menu'" class="text-3xl text-gray-800" />
                    </button>

                    <!-- Filter -->
                    <div v-if="isFilterOpen" class=" md:w-[28%] bg-[#d8d5d5]">
                        <h2
                            class="text-[#232321] mt-7 font-['Rubik'] font-semibold text-[24px] leading-[100%] tracking-[0]">
                            Filters</h2>
                        <h3
                            class="text-[#232321] mt-7 font-['Rubik'] font-semibold text-[16px] leading-[100%] tracking-[0] uppercase">
                            Refine by</h3>

                        <!-- Size -->
                        <h3
                            class="text-[#232321] font-['Rubik'] font-semibold text-[16px] leading-[100%] tracking-[0] uppercase mt-6">
                            Size</h3>

                        <div class="flex gap-4 flex-wrap justify-center  text-[#232321] mt-5">
                            <div v-for="size in uniqueSize" @click="selectedSize = size"
                                class="w-12 h-12 rounded-lg cursor-pointer flex justify-center items-center transition-all duration-200 bg-white">
                                {{ size }}
                            </div>
                            <button @click="showAllSize"
                                class=" w-12 h-12 rounded-lg cursor-pointer flex justify-center items-center transition-all duration-200 bg-white">
                                All</button>
                        </div>

                        <!-- Color -->
                        <h3
                            class="text-[#232321] font-['Rubik'] font-semibold text-[16px] leading-[100%] tracking-[0] uppercase mt-6">
                            COLOR</h3>

                        <div class="flex gap-4 flex-wrap justify-center  text-[#232321] mt-5">
                            <button v-for="color in uniqueColor" :style="{ backgroundColor: color }"
                                @click="selectedColor = color"
                                class="w-12 h-12 rounded-lg cursor-pointer flex justify-center items-center transition-all duration-200 bg-white">
                            </button>
                            <button @click="showAllColor"
                                class=" w-12 h-12 rounded-lg cursor-pointer flex justify-center items-center transition-all duration-200 bg-white">
                                All</button>
                        </div>

                        <!-- Catorioues -->
                        <h3
                            class="text-[#232321] font-['Rubik'] font-semibold text-[16px] leading-[100%] tracking-[0] uppercase mt-6">
                            Catogrious</h3>

                        <div class="  text-[#232321] mt-4">
                            <div v-for="categrious in uniqueCategrious" class="flex gap-4 space-y-3">
                                <button @click="SelectedCategrious = categrious"
                                    class="w-5 h-5 cursor-pointer rounded-sm border border-black bg-transparent hover:bg-black hover:text-white transition-all duration-200"></button>
                                <p>{{ categrious }}</p>
                            </div>

                            <div class="flex gap-4">
                                <button @click="showAllCategrious"
                                    class=" w-5 h-5 cursor-pointer rounded-sm border border-black bg-transparent hover:bg-black hover:text-white transition-all duration-200">
                                </button>
                                <p>All</p>
                            </div>
                        </div>

                        <!-- Gender -->
                        <h3
                            class="text-[#232321] font-['Rubik'] font-semibold text-[16px] leading-[100%] tracking-[0] uppercase mt-6">
                            Gender</h3>

                        <div class="  text-[#232321] mt-4">
                            <div v-for="gender in uniqueGender" class="flex gap-4 space-y-3">
                                <button @click="SelectedGender = gender"
                                    class="w-5 h-5 cursor-pointer rounded-sm border border-black bg-transparent hover:bg-black hover:text-white transition-all duration-200"></button>
                                <p>{{ gender }}</p>
                            </div>

                            <div class="flex gap-4">
                                <button @click="showAllGender"
                                    class=" w-5 h-5 cursor-pointer rounded-sm border border-black bg-transparent hover:bg-black hover:text-white transition-all duration-200">
                                </button>
                                <p>All</p>
                            </div>
                        </div>

                        <!-- Price -->
                        <h3
                            class="text-[#232321] font-['Rubik'] font-semibold text-[16px] leading-[100%] tracking-[0] uppercase mt-6">
                            Price</h3>


                    </div>
                </div>

                <div v-if="!isFilterOpen">
                    <ul class="relative group">
                        <button
                            class="text-[#232321] items-center flex gap-5 font-['Rubik'] font-semibold text-[16px] leading-[100%] tracking-[0] uppercase bg-[#F4F2F2] rounded-xl py-4 px-4">TRENDING
                            <Icon icon="mdi:chevron-down" class="w-6 h-6" />
                        </button>

                        <div
                            class="absolute left-0 mt-2 hidden group-hover:flex flex-col  bg-white shadow-md gap-2 rounded-md p-4">
                            <NuxtLink to="/men/shirts" class="hover:text-blue-500 text-sm">Shirts</NuxtLink>
                            <NuxtLink to="/men/pants" class="hover:text-blue-500 text-sm">Pants</NuxtLink>
                            <NuxtLink to="/men/shoes" class="hover:text-blue-500 text-sm">Shoes</NuxtLink>
                        </div>

                    </ul>
                </div>
            </div>

            <!-- Heading -->
            <div class="flex justify-between pt-9 bg-[#d8d5d5]">
                <div>
                    <h2 class="text-[#232321] font-['Rubik'] font-semibold text-[36px] leading-[100%] tracking-[0]">Life
                        Style Shoes</h2>
                    <span>122 items</span>

                </div>

                <ul class="relative z-10 hidden sm:block group">
                    <button
                        class="text-[#232321] items-center flex gap-8 font-['Rubik'] font-semibold text-[16px] leading-[100%] tracking-[0] uppercase bg-[#F4F2F2] rounded-3xl py-4 px-5">TRENDING
                        <Icon icon="mdi:chevron-down" class="w-6 h-6" />
                    </button>

                    <div
                        class="absolute left-0 mt-2 hidden group-hover:flex flex-col  bg-white shadow-md gap-2 rounded-md p-4">
                        <NuxtLink to="/men/shirts" class="hover:text-blue-500 text-sm">Shirts</NuxtLink>
                        <NuxtLink to="/men/pants" class="hover:text-blue-500 text-sm">Pants</NuxtLink>
                        <NuxtLink to="/men/shoes" class="hover:text-blue-500 text-sm">Shoes</NuxtLink>
                    </div>

                </ul>
            </div>
        </section>

        <!-- Filter -->
        <section class="bg-[#d8d5d5] lg:px-15 md:px-7 pt-8 px-4">
            <!-- Filters, Cards -->
            <div class="flex justify-center bg-[#d8d5d5] gap-4">
                <!-- Filters -->
                <div class="hidden md:block md:w-[24%]">
                    <h2
                        class="text-[#232321] mt-7 font-['Rubik'] font-semibold text-[24px] leading-[100%] tracking-[0]">
                        Filters</h2>
                    <h3
                        class="text-[#232321] mt-7 font-['Rubik'] font-semibold text-[16px] leading-[100%] tracking-[0] uppercase">
                        Refine by</h3>

                    <!-- Size -->
                    <h3
                        class="text-[#232321] font-['Rubik'] font-semibold text-[16px] leading-[100%] tracking-[0] uppercase mt-6">
                        Size</h3>

                    <div class="flex gap-4 flex-wrap justify-center  text-[#232321] mt-5">
                        <div v-for="size in uniqueSize" @click="selectedSize = size"
                            class="w-12 h-12 rounded-lg cursor-pointer flex justify-center items-center transition-all duration-200 bg-white">
                            {{ size }}
                        </div>
                        <button @click="showAllSize"
                            class=" w-12 h-12 rounded-lg cursor-pointer flex justify-center items-center transition-all duration-200 bg-white">
                            All</button>
                    </div>

                    <!-- Color -->
                    <h3
                        class="text-[#232321] font-['Rubik'] font-semibold text-[16px] leading-[100%] tracking-[0] uppercase mt-6">
                        COLOR</h3>

                    <div class="flex gap-4 flex-wrap justify-center  text-[#232321] mt-5">
                        <button v-for="color in uniqueColor" :style="{ backgroundColor: color }"
                            @click="selectedColor = color"
                            class="w-12 h-12 rounded-lg cursor-pointer flex justify-center items-center transition-all duration-200 bg-white">
                        </button>
                        <button @click="showAllColor"
                            class=" w-12 h-12 rounded-lg cursor-pointer flex justify-center items-center transition-all duration-200 bg-white">
                            All</button>
                    </div>

                    <!-- Catorioues -->
                    <h3
                        class="text-[#232321] font-['Rubik'] font-semibold text-[16px] leading-[100%] tracking-[0] uppercase mt-6">
                        Catogrious</h3>

                    <div class="  text-[#232321]  mt-4">
                        <div v-for="categrious in uniqueCategrious" class="flex gap-4 space-y-3">
                            <button @click="SelectedCategrious = categrious"
                                class="w-5 h-5 cursor-pointer rounded-sm border border-black bg-transparent hover:bg-black hover:text-white transition-all duration-200"></button>
                            <p>{{ categrious }}</p>
                        </div>

                        <div class="flex gap-4">
                            <button @click="showAllCategrious"
                                class=" w-5 h-5 cursor-pointer rounded-sm border border-black bg-transparent hover:bg-black hover:text-white transition-all duration-200">
                            </button>
                            <p>All</p>
                        </div>
                    </div>

                    <!-- Gender -->
                    <h3
                        class="text-[#232321] font-['Rubik'] font-semibold text-[16px] leading-[100%] tracking-[0] uppercase mt-6">
                        Gender</h3>

                    <div class="  text-[#232321] mt-4">
                        <div v-for="gender in uniqueGender" class="flex gap-4 space-y-3">
                            <button @click="SelectedGender = gender"
                                class="w-5 h-5 cursor-pointer rounded-sm border border-black bg-transparent hover:bg-black hover:text-white transition-all duration-200"></button>
                            <p>{{ gender }}</p>
                        </div>

                        <div class="flex gap-4">
                            <button @click="showAllGender"
                                class=" w-5 h-5 cursor-pointer rounded-sm border border-black bg-transparent hover:bg-black hover:text-white transition-all duration-200">
                            </button>
                            <p>All</p>
                        </div>
                    </div>

                    <!-- Price -->
                    <h3
                        class="text-[#232321] font-['Rubik'] font-semibold text-[16px] leading-[100%] tracking-[0] uppercase mt-6">
                        Price</h3>


                </div>

                <!-- Cards -->
                <div class="w-[76%]">

                    <div class="flex flex-wrap gap-3 space-y-7">
                        <div v-for="card in filterProducts" class="flex flex-wrap flex-col justify-between ">
                            <div
                                class="sm:w-63 w-79 lg:w-79 relative bg-white rounded-3xl h-87 flex flex-col justify-center items-center">
                                <NuxtLink :to="`/cart-${card.id}`"><img :src="card.image" loading="lazy" alt="image" class="h-83 w-75 rounded-2xl" /></NuxtLink>
                                <span
                                    class="absolute bg-[#4A69E2] text-white font-rubik font-semibold text-[12px] rounded-br-2xl py-3 px-5 top-3 left-2 rounded-tl-2xl leading-none tracking-[0]">New</span>
                            </div>

                            <h2
                                class="text-[#232321] mt-4 max-w-79 font-[Rubik] font-semibold text-[22px] leading-[100%] tracking-[0]">
                                {{
                                    card.name }}</h2>

                            <button
                                class="py-4 mt-4 max-w-79 rounded-lg mr-4 bg-[#232321] text-white cursor-pointer hover:text-yellow-400">VEW
                                PRODUCT - ${{ card.price }}</button>
                        </div>
                    </div>

                    <!-- Previous Next Buttons -->
                    <div class="flex items-center gap-2 py-9 w-full justify-center text-sm text-black">
                        <!-- Previous Button -->
                        <button
                            class="px-4 py-2 border border-black rounded-md flex items-center gap-1 hover:bg-gray-100">
                            <span>‹</span> PREV
                        </button>


                        <!-- Page Numbers -->
                        <button class="w-9 h-9 border px-4 border-black rounded-md hover:bg-gray-100">1</button>
                        <button class="w-9 h-9 px-4 bg-black text-white rounded-md">2</button>
                        <button
                            class="w-9 h-9 border border-black rounded-md hidden sm:block hover:bg-gray-100">3</button>
                        <button
                            class="w-9 h-9 border border-black rounded-md hidden sm:block hover:bg-gray-100">4</button>
                        <div class="w-9 h-9 flex px-4 items-center justify-center">...</div>
                        <button class="w-9 h-9 border px-4 border-black rounded-md hover:bg-gray-100">10</button>

                        <!-- Next Button -->
                        <button
                            class="px-4 py-2 border  border-black rounded-md flex items-center gap-1 hover:bg-gray-100">
                            NEXT <span>›</span>
                        </button>
                    </div>

                </div>



            </div>
        </section>

        <!-- Footer -->
        <footer class="lg:pt-30  md:pt-15 pt-7 md:px-7 px-4 lg:px-15 bg-[#d8d5d5]">
            <!-- Heading , logo -->
            <div class="flex bg-[#4A69E2] space-y-5 pb-10 flex-wrap md:p-8 p-4 lg:p-17 rounded-tl-3xl rounded-tr-3xl justify-between">
                <div class="">
                    <div
                        class="font-rubik font-semibold text-[30px] lg:text-[48px] leading-[100%] tracking-[0] uppercase text-white">
                        Join our KicksPlus </div>
                    <div
                        class="font-rubik mt-2 font-semibold text-[30px] lg:text-[48px] leading-[100%] tracking-[0] uppercase text-white">
                        Club & get 15% off </div>

                    <p
                        class="text-[#E7E7E3] mt-6 font-open font-semibold text-[16px] lg:text-[20px] leading-[100%] tracking-[0]">
                        Sign
                        up for free! Join the community.</p>

                    <div class="flex lg:flex-row md:flex-col items-center mt-6 gap-4">
                        <input type="text" placeholder="Email Address"
                            class=" w-full border border-white text-white placeholder-white bg-transparent rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white" />
                        <BaseButton label="SUMBIT" class="bg-black" />
                    </div>
                </div>

                <!-- Logo -->
                <div class="w-[50%]">
                    <img src="/logo.png"/>
                </div>
            </div>

            <!-- Lists -->
            <div class="bg-[#232321] -mt-5 rounded-3xl">
                <div class="p-10 flex flex-wrap justify-between">

                    <!-- About Us -->
                    <div class="w-110">
                        <h2 class="font-rubik font-semibold text-[36px] leading-[100%] tracking-[0] text-[#FFA52F]">
                            About us
                        </h2>
                        <div
                            class="font-open mt-2 font-semibold text-[20px] leading-[100%] tracking-[0] text-[#E7E7E3]">
                            We
                            are the biggest hyperstore in the universe. We got you all cover with our exclusive
                            collections
                            and latest drops.</div>
                    </div>

                    <!-- Categories -->
                    <div class="mt-7 sm:mt-0">
                        <h2
                            class="font-rubik mb-3 font-semibold text-[36px] leading-[100%] tracking-[0] text-[#FFA52F]">
                            Categories</h2>
                        <ul
                            class="font-open flex flex-col gap-3 font-semibold text-[20px] leading-[100%] tracking-[0] text-[#E7E7E3]">
                            <li>Runners</li>
                            <li>Sneakers</li>
                            <li>Basketball</li>
                            <li>Outdoor</li>
                            <li>Golf</li>
                            <li>Hiking</li>
                        </ul>
                    </div>

                    <!-- Company -->
                    <div class="mt-7 sm:mt-0">
                        <h2
                            class="font-rubik mb-3 font-semibold text-[36px] leading-[100%] tracking-[0] text-[#FFA52F]">
                            Company</h2>
                        <ul
                            class="font-open flex flex-col gap-3 font-semibold text-[20px] leading-[100%] tracking-[0] text-[#E7E7E3]">
                            <li>About</li>
                            <li>Contact</li>
                            <li>Blogs</li>
                        </ul>
                    </div>

                    <!-- Follow Us -->
                    <div class="mt-7 sm:mt-0">
                        <h2 class="font-rubik mb-3 font-semibold text-[36px] leading-[100%] tracking-[0] text-[#FFA52F]">
                            Follow Us</h2>
                        <div class="flex gap-6 text-[28px] text-[#E7E7E3] mt-2">
                            <Icon icon="mdi:facebook" class="hover:text-blue-600 cursor-pointer" />
                            <Icon icon="mdi:twitter" class="hover:text-sky-500 cursor-pointer" />
                            <Icon icon="mdi:instagram" class="hover:text-pink-500 cursor-pointer" />
                            <Icon icon="mdi:whatsapp" class="hover:text-green-500 cursor-pointer" />
                        </div>
                    </div>


                </div>

                <!-- Big Logo -->
                 <div class="flex justify-center items-center">
                    <img src="/logo.png"/>
                </div>
            </div>

            <div
                class=" mt-8 font-open font-semibold text-[16px] leading-[100%] tracking-[0] text-center underline decoration-solid decoration-[0.5px] underline-offset-[0px]">
                © All rights reserved | Made with ❤️ by Visiata Systems International</div>






        </footer>

    </div>
</template>


<script setup>
import { Icon } from '@iconify/vue'


const { filterProducts, selectedColor, selectedSize, allProducts, SelectedCategrious, SelectedGender } = useFilter()
console.log("all ", filterProducts)
console.log("alldata ", allProducts)

const uniqueColor = computed(() => {
    return [...new Set(allProducts.value.flatMap(p => p.colors))]
})

const uniqueSize = computed(() => {
    return [...new Set(allProducts.value.flatMap(p => p.size))]
})

const uniqueCategrious = computed(() => {
    return [...new Set(allProducts.value.flatMap(p => p.categrious))]
})

const uniqueGender = computed(() => {
    return [...new Set(allProducts.value.flatMap(p => p.gender))]
})

const showAllColor = () => {
    selectedColor.value = null
}

const showAllSize = () => {
    selectedSize.value = null
}

const showAllCategrious = () => {
    SelectedCategrious.value = null
}

const showAllGender = () => {
    SelectedGender.value = null
}

const isMenuOpen = ref(false)
const isFilterOpen = ref(false)

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value

}

function toggleFilter() {
    isFilterOpen.value = !isFilterOpen.value
}


</script>