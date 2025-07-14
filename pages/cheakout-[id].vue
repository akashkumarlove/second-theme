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

        <!-- Form  -->
        <section class="lg:px-15 md:px-7 px-4 bg-[#d8d5d5]">
            <div class=" sm:flex flex-row  min-h-screen mt-12 justify-center item-center w-full sm:justify-between gap-30">
            <!-- Left Side -->
            <div class="md:col-span-2 space-y-7 w-[100%] sm:w-[60%]">
                <div>
                    <a href="#" class="underline text-[20px] font-medium">Login and Checkout faster</a>
                </div>

                <!-- Contact Details -->
                <div class="">
                    <h2 class="text-[32px] font-bold mb-1">Contact Details</h2>
                    <p class="text-[16px] mb-3">We will use these details to keep you informed about your delivery.</p>
                    <input type="email" placeholder="Email" class="sm:w-1/2 w-full border p-3 rounded-md mt-4" />
                </div>

                <!-- Shipping Address -->
                <div class="">
                    <h2 class="text-[32px] font-bold mb-4">Shipping Address</h2>
                    <div class="flex gap-4 mt-8">
                        <input type="text" placeholder="First Name*" class="border p-3 rounded-md w-1/2" />
                        <input type="text" placeholder="Last Name*" class="border p-3 rounded-md w-1/2" />
                    </div>
                    <input type="text" placeholder="Find Delivery Address*" class="border p-3 rounded-md w-full mt-4" />
                    <p class="text-xs mt-1 text-gray-600">Start typing your street address or zip code for
                        suggestion</p>
                    <input type="text" placeholder="Phone Number*" class="border p-3 rounded-md w-1/2 mt-4" />
                    <p class="text-xs mt-1 text-gray-600">E.g. (123) 456-7890</p>
                </div>

                <!-- Delivery Options -->
                <div class="mt-8">
                    <h2 class="text-[32px] font-bold mb-4">Delivery Options</h2>
                    <div class=" bg-white p-4 mt-6 rounded-2xl mb-4">
                        <div class="flex justify-between font-semibold">
                            <span class="text-[24px]">Standard Delivery</span>
                            <span class="text-blue-600 text-[20px]">$6.00</span>
                        </div>
                        <p class="text-[16px] text-gray-600 mt-1">Enter your address to see when you'll get your order
                        </p>
                    </div>

                    <div class="border p-4 mt-5 rounded-2xl">
                        <div class="flex justify-between font-semibold">
                            <span class="text-[24px]">Collect in store</span>
                            <span class="text-[20px]">Free</span>
                        </div>
                        <p class="text-[16px] text-gray-600 mt-1">Pay now, collect in store</p>
                    </div>
                </div>

                <!-- Checkboxes -->
                <div class="space-y-4 text-[16px] font-semibold ">
                    <label class="flex items-center gap-2">
                        <input type="checkbox" checked class="w-4 h-4 accent-black" />
                        <span>My billing and delivery information are the same</span>
                    </label>
                    <label class="flex items-center gap-2">
                        <input type="checkbox" checked class="w-4 h-4 accent-black" />
                        <span>I'm 13+ year old</span>
                    </label>
                    <label class="flex items-start gap-2">
                        <input type="checkbox" class="w-4 h-4 accent-black" />
                        <span>
                            <strong>Also want product updates with our newsletter?</strong><br />
                            Yes, I'd like to receive emails about exclusive sales and more.
                        </span>
                    </label>
                </div>

                <!-- Button -->
                <button
                    class="bg-black cursor-pointer text-white py-3 px-6 w-full sm:w-1/2 rounded-md font-semibold mt-4 hover:bg-gray-900">REVIEW
                    AND PAY</button>
            </div>

            <!-- Right Side -->
            <div class="w-full mt-5 sm:mt-0 sm:w-[40%]">
              

                <!-- Order Details -->
                <div class="bg-white rounded-2xl p-2 lg:p-4 w-full max-w-md ">
                    <h3 class="text-[24px] font-bold mb-4">Order Details</h3>
                    <div class="flex justify-between gap-3">
                        <div v-if="product" class="w-35 bg-[#f0f0f0] rounded-2xl flex items-center">
                            <img :src="product.image" alt="Product Image"
                                class=" h-auto mx-auto object-cover" />
                        </div>

                        <div class="text-sm">
                            <p class="font-bold text-[20px] text-black">DROPSET TRAINER SHOES</p>
                            <p class="text-gray-600 text-[16px]">Men’s Road Running Shoes<br />Enamel Blue/ University White</p>
                            <div class="flex text-[16px] gap-6 text-gray-600 mt-3">
                                <span>Size 10</span>
                                <span>Quantity 1</span>
                            </div>
                            <p class="text-blue-600 text-[20px] font-semibold mt-3">$130.00</p>
                        </div>
                    </div>
                </div>
                

                  <!-- Order Summary -->
                <div class="max-w-md p-5 rounded-3xl space-y-8 text-[#232321] font-rubik bg-white mt-11">
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
                    <div
                        class="flex justify-between font-[Rubik] font-semibold text-[24px] leading-[100%] tracking-[0px]">
                        <span>Total</span>
                        <span>$136.99</span>
                    </div>

                    
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


const {allProducts} = useFilter()
const route = useRoute()

const id = parseInt(route.params.id)
const product = allProducts.value.find(p => p.id === id)

const isMenuOpen = ref(false)


function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
}
</script>