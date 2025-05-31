<template>
    <div class="max-w-6xl mx-auto my-20 p-6 bg-[color:var(--color-bg)] rounded-2xl shadow-lg shadow-primary/30" id="skills">
        <h2 class="text-center text-3xl font-bold mb-8 text-gray-100 tracking-wide">My Skills</h2>
        <Swiper
            :slides-per-view="1"
            :breakpoints="{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 }
            }"
            :space-between="24"
            :loop="true"
            :speed="3000"
            :autoplay="{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false }"
            :free-mode="true"
            class="pb-4"
            :modules="[Autoplay, FreeMode]"
        >
            <SwiperSlide v-for="skill in skills" :key="skill.name">
                <div class="flex flex-col items-center min-w-[180px]">
                    <div class="flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-indigo-400 text-white shadow-lg border border-indigo-400 w-20 h-20 md:w-24 md:h-24">
                        <img 
                            :src="skill.icon" 
                            :alt="skill.name" 
                            class="w-12 h-12 md:w-16 md:h-16 object-contain"
                        />
                    </div>
                    <span class="mt-4 text-base font-semibold text-gray-100">{{ skill.name }}</span>
                    <div class="w-full mt-3">
                        <div class="h-3 bg-gray-700 rounded-full">
                            <div
                                class="h-3 bg-indigo-500 rounded-full transition-all duration-500"
                                :style="{ width: skill.progress + '%' }"
                            ></div>
                        </div>
                        <div class="text-xs text-gray-400 text-right mt-1">{{ skill.progress }}%</div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/autoplay'

import laravelIcon from '../assets/laravel.png'
import tailwind from '../assets/tailwind.png'

const skills = [
    {
        name: 'Laravel',
        icon: laravelIcon,
        progress: 90
    },
    {
        name: 'Bootstrap',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
        progress: 85
    },
    {
        name: 'Tailwind',
        icon: tailwind,
        progress: 80
    },
    {
        name: 'Ajax',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg',
        progress: 75
    },
    {
        name: 'Vue JS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
        progress: 88
    },
    {
        name: 'Flowbite',
        icon: 'https://flowbite.com/docs/images/logo.svg',
        progress: 70
    }
]
</script>

<style scoped>
/* Swiper styles already imported in script */
</style>
