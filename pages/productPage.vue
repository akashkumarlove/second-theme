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

        </section>

        <section class="bg-[#d8d5d5] pb-7 md:pb-12 lg:pb-22 lg:px-15 md:px-7 px-4 ">
            <!-- page content with large images -->
            <div class="lg:flex md:flex-row mt-8 space-x-5 space-y-5 bg-[#d8d5d5]">

                <!-- Images -->
                <div class="2xl:w-[50%]">
                    <div class="flex gap-4">
                        <div class="w-[439px] 2xl:w-full">
                            <img src="/product-page/Rectangle-1.png" loading="lazy" alt="image"
                                class="object-cover w-full" />
                        </div>

                        <div class="w-[439px] 2xl:w-full">
                            <img src="/product-page/Rectangle-2.png" loading="lazy" alt="image"
                                class="object-cover w-full" />
                        </div>
                    </div>

                    <div class="flex mt-4 gap-4">
                        <div class="w-[439px] 2xl:w-full">
                            <img src="/product-page/Rectangle-3.png" loading="lazy" alt="image"
                                class="object-cover w-full" />
                        </div>

                        <div class="w-[439px] 2xl:w-full">
                            <img src="/product-page/Rectangle-4.png" loading="lazy" alt="image"
                                class="object-cover w-full" />
                        </div>
                    </div>
                </div>

                <!-- Right Side Content -->
                <div class="2xl:w-[50%]">
                    <BaseButton label="New Release" />

                    <!-- Heading -->
                    <h2
                        class="text-[#232321] mt-3 font-rubik font-semibold text-[20px] sm:text-[32px] leading-[1.2] tracking-[0px]">
                        ADIDAS 4DFWD X PARLEY RUNNING SHOES</h2>

                    <div class="font-rubik font-semibold text-[24px] leading-[1] mt-3 tracking-[0px] text-[#4A69E2]">
                        $125.00</div>

                    <!-- Color -->
                    <div
                        class="text-[#232321] font-rubik mt-6 font-semibold text-[16px] leading-[1] tracking-[0px] uppercase">
                        COLOR</div>

                    <div class="flex gap-4 mt-5">
                        <div v-for="(color, index) in colors" :key="index" @click="colorSelected = index"
                            class="w-8 h-8 rounded-full cursor-pointer transition-all duration-200"
                            :class="colorSelected === index ? 'ring-3 ring-black p-0.5' : 'ring-0'"
                            :style="{ backgroundColor: color }"></div>
                    </div>


                    <!-- Size -->
                    <div
                        class="text-[#232321] font-rubik mt-6 font-semibold text-[16px] leading-[1] tracking-[0px] uppercase">
                        SIZE</div>
                    <div class="flex gap-4 flex-wrap justify-center items-center text-[#232321] mt-5">
                        <div v-for="(size, index) in sizes" :key="index" @click="sizeSelected = index"
                            class="w-12 h-12 rounded-lg cursor-pointer flex justify-center items-center transition-all duration-200"
                            :class="[
                                sizeSelected === index
                                    ? 'ring-2 text-white ring-black bg-[#232321] p-0.5'
                                    : 'ring-0 text-[#232321] bg-[#FFFFFF]'
                            ]">
                            {{ size }}
                        </div>
                    </div>

                    <!-- Buttons -->
                    <div class="mt-9">
                        <div class="flex gap-2">
                            <button
                                class="bg-[#232321] font-rubik font-medium text-[14px] leading-[1] tracking-[0.25px] py-4 text-white rounded-lg w-full uppercase">Add
                                to cart</button>
                            <button class="bg-[#232321] px-4 rounded lg">
                                <Icon icon="mdi:heart-outline" class="w-4 h-4 text-white" />
                            </button>
                        </div>

                        <button
                            class="bg-[#4A69E2] mt-2 font-rubik font-medium text-[14px] leading-[1] tracking-[0.25px] py-4 text-white rounded-lg w-full uppercase">Buy
                            it now</button>
                    </div>

                    <!-- about product -->
                    <div
                        class="text-[#232321] mt-7 font-rubik font-semibold text-[16px] leading-[1] tracking-[0px] uppercase">
                        About the product</div>
                    <p class="text-sm mt-2.5">Shadow Navy / Army Green</p>

                    <p class="text-sm  mt-6">
                        This product is excluded from all promotional discounts and offers.
                    </p>

                    <ul class="list-disc pl-7 space-y-1 mt-6 text-sm">
                        <li>
                            Pay over time in interest-free installments with Affirm, Klarna or Afterpay.
                        </li>
                        <li>
                            Join adiClub to get unlimited free standard shipping, returns, & exchanges.
                        </li>
                    </ul>



                </div>

            </div>

            <!-- Heading -->
            <div class="flex justify-between pr-16 mt-7 md:mt-15 lg:mt-35">
                <h2
                    class="font-rubik font-semibold text-[20px] md:text-[40px] leading-[95%] tracking-[0] uppercase text-[#232321]">
                    You may also like</h2>

                <div class="flex ">
                    <button class="cursor-pointer rounded-lg hover:bg-[#232321]  p-3 bg-[#E7E7E3] mr-3">
                        <Icon icon="mdi:chevron-left" class="w-5 h-5 text-[#232321]" />
                    </button>
                    <button class=" cursor-pointer p-3 hover:bg-[#232321] rounded-lg bg-[#E7E7E3]">
                        <Icon icon="mdi:chevron-right" class="w-5 h-5 text-[#232321]" />
                    </button>
                </div>

            </div>

            <!-- Cards -->
            <Cards class="mt-7" />
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
import BaseButton from '~/components/baseButton.vue';


const colors = ['#253043', '#707E6E']
const sizes = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47]

const colorSelected = ref(null)
const sizeSelected = ref(0)


const isMenuOpen = ref(false)

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value

}


</script>