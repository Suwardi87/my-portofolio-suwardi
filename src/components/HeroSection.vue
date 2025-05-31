<template>
    <section class="relative w-full" id="hero">
        <div class="absolute top-0 inset-x-0 h-64 flex items-start">
            <div class="h-24 w-2/3 bg-gradient-to-br from-[#570cac] opacity-40"></div>
            <div class="h-24 w-3/5 bg-gradient-to-r from-[#670ccf] opacity-40 blur-2xl"></div>
        </div>
        <div class="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
            <div class="grid lg:grid-cols-2 gap-10 xl:gap-14 relative pt-24 lg:max-w-none max-w-2xl md:max-w-2xl mx-auto" id="about">
                <div class="lg:py-6">
                    <div class="text-center lg:text-left">
                        <h1
                            class="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl min-h-[56px]"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >{{ typingText }}</h1>
                    </div>
                    <p
                        class="text-gray-300 pt-8 text-center lg:text-left mx-auto max-w-xl"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        Informatics Engineering graduate with a strong specialization in backend development using Laravel. Demonstrates proven experience in designing and developing web applications, leading technical projects, and actively engaging in organizational activities as both a speaker and lead coordinator. Committed to delivering high-quality solutions through a structured, efficient, and collaborative approach within development teams.
                    </p>
                    <div
                        class="flex items-center gap-3 pt-9 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <button class="px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center border-2 border-transparent hover:border-primary transition-all">
                            <span class="absolute inset-0 rounded-3xl origin-center transition-all ease-in-out bg-primary group-hover:bg-transparent"></span>
                            <span class="relative flex items-center justify-center text-white"> Hire Me </span>
                        </button>
                        <button
                            @click="showResume = true"
                            class="border border-primary px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center overflow-hidden transition-all duration-300  text-primary hover:bg-primary hover:text-white hover:shadow-lg hover:scale-105"
                        >
                            <span class="flex items-center gap-2 relative z-10 transition-colors duration-300 group-hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
                                </svg>
                                <select v-model="selectedLanguage" class="bg-transparent text-primary group-hover:text-white transition-colors duration-300 outline-none">
                                    <option value="id">Bahasa Indonesia</option>
                                    <option value="en">English</option>
                                </select>
                                <p class="text-primary group-hover:text-white transition-colors duration-300">
                                    {{ selectedLanguage === 'id' ? 'Lihat Resume' : 'View Resume' }}
                                </p>
                            </span>
                            <span class="absolute inset-0 bg-primary opacity-0 group-hover:opacity-80 transition-opacity duration-300 rounded-full"></span>
                        </button>
                    </div>
                    <!-- Resume Pop Up Modal -->
                    <div
                        v-if="showResume"
                        class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 overflow-y-auto"
                    >
                        <div
                            class="bg-white rounded-lg shadow-xl w-full max-w-xs sm:max-w-lg md:max-w-2xl p-4 sm:p-6 relative mx-2 my-8"
                        >
                            <button
                                class="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl"
                                @click="showResume = false"
                            >&times;</button>
                            <h3 class="text-xl font-bold mb-4 text-gray-800">
                                {{ selectedLanguage === 'id' ? 'Resume Bahasa Indonesia' : 'Resume English' }}
                            </h3>
                            <iframe
                                :src="selectedLanguage === 'id' ? '/suwardi resume indo.pdf' : '/suwardi resume english.pdf'"
                                class="w-full h-[60vh] sm:h-[70vh] border rounded"
                            ></iframe>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col items-center justify-center gap-4">
                    <img
                        :src="foto2"
                        alt="Hero Image"
                        class="w-64 h-64 lg:w-96 lg:h-96 object-cover rounded-full shadow-xl border-4 border-primary transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-white/10 backdrop-blur-sm"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    />
                    <a
                        href="https://github.com/Suwardi87"
                        target="_blank"
                        rel="noopener"
                        class="mt-2 flex items-center gap-2 text-primary hover:text-white hover:bg-primary px-4 py-2 rounded-full transition-colors duration-300 border border-primary"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/>
                        </svg>
                        <span>GitHub</span>
                    </a>
                </div>
            </div>
            <div class="flex justify-center items-center mt-10">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-10 w-10 text-primary animate-bounce cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    @click="scrollDown"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import foto2 from '../assets/foto.jpg'

const typingText = ref('')
const showResume = ref(false)
const selectedLanguage = ref('id')

function typeEffect(text, i = 0) {
    if (i === 0) typingText.value = ''
    if (i < text.length) {
        typingText.value += text.charAt(i)
        setTimeout(() => typeEffect(text, i + 1), 80)
    }
}

function scrollDown() {
    // Scroll ke section berikutnya setelah hero (misal: services)
    const nextSection = document.getElementById('services')
    if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' })
    }
}

onMounted(() => {
    AOS.init({
        duration: 1000,
        once: false,
        easing: 'ease-in-out',
        offset: 100,
    })
    typeEffect("Hi, I'm Suwardi")
})
</script>
