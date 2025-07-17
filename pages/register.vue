<template>
    <div class="wrapper bg-[#d8d5d5] h-screen pt-11">
         <section class="lg:px-15 md:px-7 px-4">
           <header :style="{backgroundColor: theme.selected.header}" class=" bg-[#fafafa] py-3 sm:py-4 flex items-center justify-between rounded-xl px-5">
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

        <!-- Form -->
        <section class="lg:px-15 py-5  lg:py-9 md:px-7 px-5 bg-[#d8d5d5]">
            <div class=" sm:flex flex-row gap-5 lg:gap-8 items-start">

                <!-- Left: Login Form -->
                <div class=" space-y-3 w-full sm:w-[50%] md:px-7 px-3 lg:px-10">
                    <h2 class="font-[Rubik] font-semibold text-[36px] leading-[100%] tracking-[0%] text-[#232321]">
                        Register
                    </h2>
                    <NuxtLink to="#"
                        class="font-[Open_Sans] font-semibold text-[20px] leading-[100%] tracking-[0%] text-[#000000] ">
                        Sign up with
                    </NuxtLink>

                    <div class="flex gap-4 mt-6">

                        <!-- Google -->
                        <NuxtLink to="/auth/google"
                            class="flex-1 border rounded-lg flex items-center justify-center cursor-pointer">
                            <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" class="9-5 w-9"
                                alt="Google login" />
                        </NuxtLink>

                        <!-- Apple -->
                        <NuxtLink to="/auth/apple"
                            class="flex-1 border rounded-lg flex items-center justify-center cursor-pointer">
                            <img src="https://cdn-icons-png.flaticon.com/512/731/731985.png" class="9-5 w-9"
                                alt="Apple login" />
                        </NuxtLink>

                        <!-- Facebook (external link) -->
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                            class="flex-1 border rounded-lg py-3 flex items-center justify-center cursor-pointer">
                            <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" class="9-5 w-9"
                                alt="Facebook login" />
                        </a>

                    </div>

                    <span
                        class="text-[#232321] font-[Open_Sans] font-semibold text-[20px] leading-[100%] tracking-[0%]">OR</span>

                    <div class="space-y-6 mt-5 font-[inter]">
                        <span
                            class="text-[#232321] font-[Rubik]  font-semibold text-[24px] leading-[100%] tracking-[0%]">Your
                            Name</span>
                        <input type="email" placeholder="First Name" class="w-full border rounded px-4 py-3 mt-4" />
                        <input type="password" placeholder="Last Name" class="w-full border rounded px-4 py-3" />

                    </div>

                    <div class=" space-y-6">

                        <!-- Gender -->
                        <div>
                            <h2 class="font-[Rubik] font-semibold text-[24px] leading-[100%] tracking-[0%] mt-6 mb-5">
                                Gender</h2>
                            <div class="flex gap-6 font-[Open_Sans] text-[16px]">
                                <label class="flex items-center gap-2">
                                    <input type="radio" name="gender" value="male" class="accent-[#232321] w-5 h-5 bg-transparent" />
                                    <span>Male</span>
                                </label>
                                <label class="flex items-center gap-2">
                                    <input type="radio" name="gender" value="female" class="accent-[#232321] bg-transparent w-5 h-5" />
                                    <span>Female</span>
                                </label>
                                <label class="flex items-center gap-2">
                                    <input type="radio" name="gender" value="other" class="accent-[#232321] bg-transparent w-5 h-5" />
                                    <span>Other</span>
                                </label>
                            </div>
                        </div>

                        <!-- Login Details -->
                        <div class="space-y-6">
                            <h2 class="font-[Rubik] font-semibold text-[24px] mb-5 leading-[100%] tracking-[0%]">Login
                                Details</h2>
                            <input type="email" placeholder="Email" class="w-full border rounded px-4 py-3 " />
                            <div class="font-[inter] text-[16px]">
                                <input type="password" placeholder="Password"
                                    class="w-full border rounded px-4 py-3 " />
                                <p class="text-sm text-gray-600 mt-1">
                                    Minimum 8 characters with at least one uppercase, one lowercase, one special
                                    character and a number
                                </p>
                            </div>
                        </div>

                        <!-- Agreement Checkbox -->
                        <label class="flex items-start font-[Open_Sans] text-[16px] gap-3 text-sm text-[#232321]">
                            <input type="checkbox" class="accent-[#232321] w-9 h-9 mt-1" />
                            <span>
                                By clicking 'Log In' you agree to our website
                                <NuxtLink to="#" class="underline font-semibold"> KicksClub Terms & Conditions
                                </NuxtLink>,
                                <NuxtLink to="#" class="underline font-semibold"> Kicks Privacy Notice </NuxtLink> and
                                <NuxtLink to="#" class="underline font-semibold"> Terms & Conditions</NuxtLink>.
                            </span>
                        </label>

                        <!-- Keep me logged in -->
                        <label class="flex items-start font-[Open_Sans] text-[16px] gap-3 text-sm text-[#232321]">
                            <input type="checkbox" class="accent-[#232321] w-5 h-5 mt-1" />
                            <span>
                                Keep me logged in - applies to all log in options below.
                                <NuxtLink to="#" class="underline">More info</NuxtLink>
                            </span>
                        </label>

                        <!-- Submit Button -->
                        <button
                            class="w-full bg-[#232321] font-[Rubik] text-[14px] text-white px-4 py-4 rounded-lg font-semibold flex items-center justify-between">
                            REGISTER
                            <Icon icon="heroicons:arrow-right" class="w-5 h-5 text-white" />
                        </button>

                    </div>

                </div>

                <!-- Right: Reward Info -->
                <div class=" w-full mt-7 sm:mt-0 sm:w-[60%] h-auto  bg-white rounded-2xl p-7 space-y-6 shadow-lg">
                    <h2 class="font-[Rubik] text-[36px] font-bold text-[#232321]">Join Kicks Club Get Rewarded Today.
                    </h2>
                    <p class="text-[#232321] text-[16px] font-[Open_Sans]">
                        As kicks club member you get rewarded with what you love for doing what you love.
                        Sign up today and receive immediate access to these Level 1 benefits:
                    </p>
                    <ul class="list-disc pl-5 text-[16px] font-[Open_Sans] text-[#232321] text-sm space-y-1">
                        <li>Free shipping</li>
                        <li>A 15% off voucher for your next purchase</li>
                        <li>Access to Members Only products and sales</li>
                        <li>Access to adidas Running and Training apps</li>
                        <li>Special offers and promotions</li>
                    </ul>
                    <p class="text-[#232321]">
                        Join now to start earning points, reach new levels and unlock more rewards and benefits from
                        adiClub.
                    </p>
                    <button
                        class="w-full bg-[#232321] font-[Rubik] text-[14px] text-white py-4 px-4 rounded-lg font-semibold flex items-center justify-between gap-2">
                        JOIN THE CLUB
                        <Icon icon="heroicons:arrow-right" class="w-5 h-5 text-white" />
                    </button>
                </div>
            </div>
        </section>

       <!-- Footer -->
        <footer class="lg:pt-30  md:pt-15 pt-7 md:px-7 px-4 lg:px-15 bg-[#d8d5d5]">
            <!-- Heading , logo -->
            <div :style="{backgroundColor: theme.selected.footer}" class="sm:flex bg-[#4A69E2] space-y-5 gap-10 pb-10 md:p-8 p-4 lg:p-17 rounded-tl-3xl rounded-tr-3xl justify-between">
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
                <div class="sm:w-[50%] flex">
                    <img src="/logo.png" class="object-contain"/>
                </div>
            </div>

            <!-- Lists -->
            <div class="bg-[#232321] -mt-5 rounded-3xl">
                <div class="p-10 space-y-5 flex flex-wrap justify-between">

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
                    <div class="">
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
                    <div class="">
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
                    <div class="">
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
import { useThemeStore } from '#imports'
import { themeLoader } from '#imports'

const theme = useThemeStore()

await themeLoader()

watch(() => theme.selected , (val) => {
    console.log("Theme Changes" , val)
}, {deep: true})



const isMenuOpen = ref(false)

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
}
</script>