<template>
    <div class="wrapper bg-[#d8d5d5] w-screen h-screen pt-11">

        <section class="lg:px-15 md:px-7 px-4">
            <header :style="{backgroundColor: theme.selected.header}" class=" py-3 sm:py-4 flex items-center justify-between rounded-xl px-5">
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

        <!-- Another section -->
        <section class="bg-[#d8d5d5] pb-7 md:pb-12 lg:pb-22 lg:px-15 md:px-7 px-4">
            <!-- Heading -->
            <h1
                class=" mt-6 font-rubik font-bold text-[50px] md:text-[105px] lg:text-[150px] leading-[100%] tracking-[0] uppercase">
                DO IT <span class="text-[#4A69E2]">RIGHT</span>
            </h1>

            <!-- Large Image -->
           <div class="mt-8 sm:mt-15 w-[100%]">
                <div class="relative md:h-auto w-full 2xl:w-full 2xl:h-screen">
                    <img src="/landing-page/rectangle-image.png" alt="image" loading="lazy"
                        class=" rounded-2xl mx-auto 2xl:h-screen w-full 2xl:w-full object-cover" />


                    <span
                        class="font-[Rubik] absolute -left-14 2xl:-left-52 2xl:top-90 sm:-left-24 top-17 sm:top-43 py-2 2xl:py-10 2xl:px-15 sm:py-5.5 rounded-lg px-2 sm:px-6 -rotate-90 font-semibold 2xl:text-[40px] text-[12px] sm:text-xl leading-[100%] tracking-[0] text-[#E7E7E3] bg-[#232321]">Nike
                        product of the year </span>

                    <!-- text Box-->
                    <div class="absolute left-12 2xl:left-35 2xl:bottom-40 bottom-4 sm:left-25 sm:bottom-10 lg:left-35 lg:bottom-20">
                        <span
                            class=" font-[Rubik] font-semibold 2xl:text-[110px] text-[16px] sm:text-[26px] md:text-[35px] lg:text-[74px] leading-[100%] tracking-[0] text-[#fafafa]">NIKE
                            AIR MAX</span>
                        <p
                            class=" w-50 mt-2 font-[Open_Sans] 2xl:w-200 2xl:text-[55px] sm:w-120 font-semibold sm:text-[15px] text-[12px] md:text-[21px] lg:text-[28px] leading-[100%] tracking-[0] text-[#E7E7E3]">
                            Nike introducing the new air max for everyone's comfort</p>
                        <BaseButton label="SHOP NOW" class="mt-3 sm:mt-6 2xl:w-70 2xl:h-20 2xl:text-[30px]" />
                    </div>

                    <!-- Inner images -->
                    <div class="absolute bottom-3 right-3 sm:bottom-15 2xl:bottom-150 2xl:right-30 sm:right-10">
                        <div class="md:w-30 w-18 lg:w-40 2xl:scale-200">
                            <img src="/landing-page/Rectangle-1.png" alt="image" loading="lazy"
                                class=" h-auto mx-auto object-cover" />
                        </div>

                        <div class="sm:mt-6 mt-4 2xl:mt-60 md:w-30 w-18 lg:w-40 2xl:scale-200">
                            <img src="/landing-page/Rectangle-2.png" alt="image" loading="lazy"
                                class=" h-auto mx-auto object-cover" />
                        </div>

                    </div>

                </div>


            </div>

            <!-- 2nd Heading -->
            <div class="flex mt-7 sm:mt-17 items-start justify-between">
                <div>
                    <h2
                        class="text-[#232321] font-[Rubik] font-semibold md:text-[40px] lg:text-[74px] leading-[95%] tracking-[0] uppercase">
                        Don’t miss out</h2>
                    <div
                        class="text-[#232321] font-[Rubik] font-semibold md:text-[40px]  lg:text-[74px] leading-[95%] tracking-[0] uppercase">
                        new drops</div>
                </div>
                <BaseButton label="SHOP NEW DROPS" />
            </div>

            <!-- Cards -->
            <div class="flex justify-center">
                <Cards class="mt-7" />
            </div>
        </section>


        <!--Section-2  -->

        <section class="bg-[#232321] pl-4 md:pl-10 lg:pl-16">
            <!-- Heading and Buttons-->
            <div class="flex justify-between items-center pr-4 md:pr-10 lg:pr-16 md:pt-14 pt-7 lg:pt-14">
                <h2
                    class="font-rubik font-semibold md:text-[40px] text-[27px] lg:text-[74px] leading-[95%] tracking-[0] uppercase text-white">
                    Categories</h2>

                <div class="">
                    <button class="cursor-pointer rounded-lg hover:bg-[#232321]  p-3 bg-[#E7E7E3] mr-3">
                        <Icon icon="mdi:chevron-left" class="w-5 h-5 text-[#232321]" />
                    </button>
                    <button class=" cursor-pointer p-3 hover:bg-[#232321] rounded-lg bg-[#E7E7E3]">
                        <Icon icon="mdi:chevron-right" class="w-5 h-5 text-[#232321]" />
                    </button>
                </div>

            </div>

            <!-- Images -->
            <div class="md:mt-15 mt-7 flex ">
                <div class="bg-[#ECEEF0] w-[50%] 2xl:w-full rounded-bl-4xl rounded-tl-4xl relative">
                    <img src="/landing-page/catagorie-2.png" loading="lazy" alt="image"
                        class="h-auto mx-auto object-cover 2xl:w-full 2xl:h-screen" />

                    <div class="absolute bottom-2 sm:bottom-7 left-2 sm:left-10">
                        <div
                            class="text-[#232321] font-rubik font-semibold  text-[20px] sm:text-[36px] leading-[100%] tracking-[0] uppercase">
                            Lifestyle</div>
                        <div
                            class="text-[#232321] font-rubik font-semibold text-[20px] sm:text-[36px] leading-[100%] tracking-[0] uppercase">
                            Shoes</div>
                    </div>

                    <button class="bg-[#1e1e1e] p-3 rounded-md absolute bottom-2 sm:bottom-7 right-2 sm:right-10">
                        <Icon icon="tabler:arrow-up-right" class="sm:w-5 w-3 sm:h-5 h-3 text-white" />
                    </button>
                </div>

                <div class="bg-[#F6F6F6] w-[50%] 2xl:w-full relative">
                    <img src="/landing-page/catagorie-1.png" loading="lazy" alt="image"
                        class=" h-auto mx-auto object-cover 2xl:w-full 2xl:h-screen" />

                    <div class="absolute bottom-2 sm:bottom-7 left-2 sm:left-10">
                        <div
                            class="text-[#232321] font-rubik font-semibold text-[20px] sm:text-[36px] leading-[100%] tracking-[0] uppercase">
                            Lifestyle</div>
                        <div
                            class="text-[#232321] font-rubik font-semibold text-[20px] sm:text-[36px] leading-[100%] tracking-[0] uppercase">
                            Shoes</div>
                    </div>

                    <button class="bg-[#1e1e1e] p-3 rounded-md absolute bottom-2 sm:bottom-7 right-2 sm:right-10">
                        <Icon icon="tabler:arrow-up-right" class="sm:w-5 w-3 sm:h-5 h-3 text-white" />
                    </button>
                </div>


            </div>
        </section>



        <!-- Section-3 -->
        <section class="md:px-7 px-4 lg:px-15 pt-7 md:pt-20 lg:pt-30 bg-[#d8d5d5]">

            <!-- Heading and Buttons-->
            <div class="flex justify-between items-center">
                <h2
                    class="font-rubik font-semibold md:text-[40px] lg:text-[74px] leading-[95%] tracking-[0] uppercase text-[#232321]">
                    REVIEWS</h2>

                <div class="">
                    <BaseButton label="SEE ALL" />
                </div>

            </div>

            <ReviewCard class="mt-5 sm:mt-10" />
        </section>



        <!-- Footer -->
        <footer  class="lg:pt-30  md:pt-15 pt-7 md:px-7 px-4 lg:px-15 bg-[#d8d5d5]">
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
                 <div class="flex justify-center items-center w-[100%]">
                    <img src="/logo.png" class="w-full"/>
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
import { useLoading } from '#imports'

await themeLoader()

const theme = useThemeStore()
const isLoading = useLoading()

watch(() => theme.selected, (Val) => {
    console.log('theme updated' , Val)
}, {deep:true})


const isMenuOpen = ref(false)

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value

}

</script>