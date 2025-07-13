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

        <section class="lg:px-15 bg-[#d8d5d5] w-full md:px-7 px-4">
             <!-- Small Cart  -->
            <div class="pt-8 px-0 sm:px-4">

                <!-- Heading -->
                <h2 class="text-[#232321] font-rubik font-semibold text-[32px] leading-[100%] tracking-[0%]">Saving to
                    celebrate </h2>
                <p class="text-[#232321] mt-3 font-open-sans font-semibold text-[14px] leading-[100%] tracking-[0%]">
                    Enjoy up
                    to 60% off thousands of styles during the End of Year sale - while suppiles last. No code needed.
                </p>

                <div class="flex gap-4 mt-3">
                    <a href="/#" class="text-sm font-semibold text-[#232321] hover:underline">
                        Join Us
                    </a>
                    <a href="/#" class="text-sm font-semibold text-[#232321] hover:underline">
                        Sign In
                    </a>
                </div>

                <!-- Card , Summary -->
                <div class="flex flex-col items-center md:flex-col lg:flex-row gap-6">
                    <!-- Cart -->
                    <div class="mt-6 w-[100%] sm:w-auto bg-[#FAFAFA] p-2 sm:p-6 rounded-xl">
                        <h2 class="text-[#232321] font-rubik font-semibold text-[18px] sm:text-[32px] leading-[100%] tracking-[0%]">
                            Your
                            Bag</h2>
                        <p
                            class="text-[#232321] mt-3 font-open-sans font-normal text-[12px] sm:text-[16px] leading-[100%] tracking-[0%]">
                            Items in your bag not reserved- check out now to make them yours.</p>

                        <div class="flex md:mt-12 mt-4 lg:mt-15 md:gap-15 lg:gap-19">
                            <!-- Image -->
                            <div v-if="product" class="w-55 md:w-50">
                                <img :src="product.image" loading="lazy" alt="image"
                                    class="h-auto mx-auto object-cover" />
                            </div>

                            <!-- Text -->
                            <div class="text-[#232321] ml-2.5 sm:ml-0 space-y-0 sm:space-y-2">
                                <h3 class="font-rubik font-semibold text-[16px] sm:text-[24px] leading-[100%] tracking-[0%]">DROPSET
                                    TRAINER SHOES</h3>
                                <p class="font-open-sans mt-2 sm:mt-3 font-semibold text-[14px] sm:text-[20px] leading-[100%] tracking-[0%]">
                                    Men’s
                                    Road
                                    Running Shoes </p>
                                <p class="font-open-sans mt-2 sm:mt-3  font-semibold text-[14px] sm:text-[20px] leading-[100%] tracking-[0%]">
                                    Enamel
                                    Blue/ University White</p>

                                <div class="flex mt-2 sm:mt-5  justify-between">
                                    <p
                                        class="font-open-sans font-semibold text-[14px] sm:text-[20px] leading-[100%] tracking-[0%] flex gap-5">
                                        Size 10
                                        <Icon icon="mdi:chevron-down" class="w-6 h-6 hidden sm:block" />
                                    </p>
                                    <p
                                        class="font-open-sans font-semibold text-[14px] sm:text-[20px] leading-[100%] tracking-[0%] flex gap-5">
                                        Quantity 1
                                        <Icon icon="mdi:chevron-down" class="w-6 h-6 hidden sm:block" />
                                    </p>
                                </div>

                                <div 
                                class="text-[#4A69E2] mt-2 block sm:hidden font-rubik font-semibold text-[20px] leading-[100%] tracking-[0%]">
                                $130.00</div>

                                <div class="flex mt-3 sm:mt-13 gap-7">
                                    <Icon icon="mdi:heart-outline" class="text-black text-[16px] w-6 h-6 sm:w-9 sm:h-9" />
                                    <Icon icon="material-symbols:delete-outline"
                                        class="text-black text-[16px] w-6 h-6 sm:w-9 sm:h-9" />
                                </div>

                            </div>

                            <div 
                                class="text-[#4A69E2] hidden sm:block font-rubik font-semibold text-[24px] leading-[100%] tracking-[0%]">
                                $130.00</div>



                        </div>
                    </div>

                    <!-- Order Summary -->
                    <div class="max-w-sm p-11 bg-[#FAFAFA] lg:bg-[#d8d5d5] rounded-md space-y-8 text-[#232321] font-rubik w-full">
                        <!-- Heading -->
                        <h2 class="font-rubik font-semibold text-[32px] leading-[100%] tracking-[0%]">Order Summary</h2>

                        <!-- Price Info Rows -->
                        <div class="space-y-6 font-rubik font-semibold text-[20px] leading-[100%] tracking-[0%]">
                            <div class="flex justify-between">
                                <span class="font-semibold">1 ITEM</span>
                                <span>$130.00</span>
                            </div>
                            <div class="flex justify-between">
                                <span>Delivery</span>
                                <span>$6.99</span>
                            </div>
                            <div class="flex justify-between">
                                <span>Sales Tax</span>
                                <span>-</span>
                            </div>
                        </div>

                        <!-- Total -->
                        <div class="flex justify-between font-[Rubik] font-semibold text-[24px] leading-[100%] tracking-[0px]">
                            <span>Total</span>
                            <span>$136.99</span>
                        </div>

                        <!-- Checkout Button -->
                        <NuxtLink :to="`cheakout-${product.id}`"><button class="w-full cursor-pointer bg-[#121212] text-white font-semibold text-sm py-3 rounded-md">
                            CHECKOUT
                        </button></NuxtLink>

                        <!-- Promo Code Link -->
                        <div>
                            <a href="#" class="font-[Open_Sans] font-semibold text-[20px] leading-[100%] tracking-[0px] underline decoration-solid decoration-[0px] underline-offset-[0px]">Use a promo code</a>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <section class="lg:px-15 pt-1 md:px-7 px-4 bg-[#d8d5d5]">
               <!-- Heading -->
            <div class="flex justify-between items-center mt-5">
                <h2 class="font-rubik font-semibold text-[20px] sm:text-[40px] leading-[95%] tracking-[0] uppercase text-[#232321]">
                    You may also like</h2>

                <div class="">
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
            <div class="flex bg-[#4A69E2] flex-wrap md:p-8 p-4 lg:p-17 rounded-tl-3xl rounded-tr-3xl justify-between">
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
                <div
                    class="font-rubik font-semibold mx-auto text-[70px] md:text-[100px] lg:text-[160px] leading-[100%] tracking-[0] uppercase text-white">
                    KICKS</div>
            </div>

            <!-- Lists -->
            <div class="bg-[#232321] rounded-3xl">
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
                            class="font-rubik mb-2 font-semibold text-[36px] leading-[100%] tracking-[0] text-[#FFA52F]">
                            Categories</h2>
                        <ul
                            class="font-open flex flex-col gap-2 font-semibold text-[20px] leading-[100%] tracking-[0] text-[#E7E7E3]">
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
                            class="font-rubik mb-2 font-semibold text-[36px] leading-[100%] tracking-[0] text-[#FFA52F]">
                            Company</h2>
                        <ul
                            class="font-open flex flex-col gap-2 font-semibold text-[20px] leading-[100%] tracking-[0] text-[#E7E7E3]">
                            <li>About</li>
                            <li>Contact</li>
                            <li>Blogs</li>
                        </ul>
                    </div>

                    <!-- Follow Us -->
                    <div class="mt-7 sm:mt-0">
                        <h2 class="font-rubik font-semibold text-[36px] leading-[100%] tracking-[0] text-[#FFA52F]">
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
                <div
                    class="font-rubik font-semibold text-[110px] md:text-[250px] lg:text-[460px] text-bold text-center leading-[100%] tracking-[0] uppercase text-white">
                    KICKS</div>
            </div>

            <div
                class=" mt-8 font-open font-semibold text-[16px] leading-[100%] tracking-[0] text-center underline decoration-solid decoration-[0.5px] underline-offset-[0px]">
                © All rights reserved | Made with ❤️ by Visiata Systems International</div>






        </footer>
    </div>
</template>



<script setup>
import { Icon } from '@iconify/vue'
import { parse } from 'vue/compiler-sfc'

const {allProducts} = useFilter()

const route = useRoute()
const id = parseInt(route.params.id)

const product = allProducts.value.find(p => p.id === id)
console.log('Route params:', route.params)


const isMenuOpen = ref(false)


function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value

}
</script>