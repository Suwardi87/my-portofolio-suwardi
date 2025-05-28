<template>
    <header class="flex justify-between items-center p-6 bg-opacity-50 relative z-20">
        <div class="text-white text-3xl font-bold">Suwardi</div>
        <!-- mobile toggle button (tampil di mobile, sembunyi di md ke atas) -->
        <div class="md:hidden">
            <button type="button"
                class="block text-secondary focus:outline-none"
                @click="isMenuOpen = !isMenuOpen">
                <span v-if="!isMenuOpen" class="text-5xl">
                    <!-- Icon menu -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </span>
                <span v-else class="text-5xl">
                    <!-- Icon close -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </span>
            </button>
        </div>
        <!-- navbar link -->
        <nav
            class="absolute top-0 left-0 w-full h-screen bg-secondary bg-opacity-90 flex items-center justify-center transition-all duration-300 md:static md:bg-transparent md:h-auto md:flex md:items-center md:justify-end"
            :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen, 'md:flex': true }">
            <ul class="flex flex-col items-center space-y-5 md:flex-row md:space-x-8 md:space-y-0">
                <li v-for="item in Menu" :key="item.name">
                    <a href="#"
                        class="block text-white transition hover:text-primary ease-linear text-2xl md:text-lg"
                        @click.prevent="scrollToSection(item.href)">{{ item.name }}</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
import { ref } from 'vue'

const Menu = [
    { name: 'Service', href: '#service' },
    { name: 'About Me', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
];

const isMenuOpen = ref(false)
const scrollToSection = (href) => {
    isMenuOpen.value = false;
    const section = document.querySelector(href);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
</script>