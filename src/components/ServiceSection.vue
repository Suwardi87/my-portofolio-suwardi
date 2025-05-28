<template>
    <section class="text-white mt-20" id="services">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12 cursor-pointer" data-aos="fade-up">
                <h2 class="text-3xl font-bold mb-4">My Services</h2>
                <p class="text-gray-300">Berbagai layanan untuk mendukung kebutuhan Anda.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in">
                    <h3 class="text-xl font-semibold mb-2">Web Development</h3>
                    <p class="text-gray-400">Aplikasi web dinamis & responsif dengan Laravel, PHP, Tailwind CSS.</p>
                </div>
                <div class="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in">
                    <h3 class="text-xl font-semibold mb-2">Frontend Development</h3>
                    <p class="text-gray-400">UI modern & interaktif dengan Vue.js dan Tailwind CSS.</p>
                </div>
                <div class="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in">
                    <h3 class="text-xl font-semibold mb-2">Backend & Database</h3>
                    <p class="text-gray-400">Manajemen backend & database MySQL, API, dan keamanan data.</p>
                </div>
                <div class="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in">
                    <h3 class="text-xl font-semibold mb-2">API & Payment Gateway</h3>
                    <p class="text-gray-400">Integrasi RESTful API & payment gateway Midtrans.</p>
                </div>
                <div class="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in">
                    <h3 class="text-xl font-semibold mb-2">Version Control</h3>
                    <p class="text-gray-400">Manajemen versi dengan Git & GitHub, dokumentasi teknis.</p>
                </div>
                <div class="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in">
                    <h3 class="text-xl font-semibold mb-2">SEO Optimization</h3>
                    <p class="text-gray-400">Optimasi SEO untuk meningkatkan visibilitas website.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

function handleScroll() {
    AOS.refresh();
}

onMounted(() => {
    AOS.init({
        duration: 1000,
        once: false,
        easing: 'ease-in-out',
        offset: 100,
    })
    window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>
