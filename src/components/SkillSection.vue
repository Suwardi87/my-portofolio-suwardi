<template>
    <div class="max-w-6xl mx-auto my-20 p-6 bg-[color:var(--color-bg)] rounded-2xl shadow-lg shadow-primary/30">
        <h2 class="text-center text-3xl font-bold mb-8 text-gray-200 tracking-wide">My Skills</h2>
        <Swiper
            :slides-per-view="4"
            :space-between="20"
            :loop="true"
            :speed="3000"
            :autoplay="{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false }"
            :free-mode="true"
            class="pb-2"
            :modules="[Autoplay, FreeMode]"
        >
            <SwiperSlide v-for="skill in skills" :key="skill.name">
                <div class="flex flex-col items-center min-w-[200px]">
                    <div class="w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-indigo-300 text-white text-3xl shadow border border-indigo-400 shadow-white/40">
                        <img 
                            :src="skill.icon" 
                            :alt="skill.name" 
                            class="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
                        />
                    </div>
                    <span class="mt-4 text-base font-semibold text-gray-700">{{ skill.name }}</span>
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
        icon: laravelIcon
    },
    {
        name: 'Bootstrap',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'
    },
    {
        name: 'Tailwind',
        icon: tailwind
    },
    {
        name: 'Ajax',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg'
    },
    {
        name: 'Vue JS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'
    },
    {
        name: 'Flowbite',
        icon: 'https://flowbite.com/docs/images/logo.svg'
    }
]
</script>

<style scoped>
/* Swiper styles already imported in script */
</style>
