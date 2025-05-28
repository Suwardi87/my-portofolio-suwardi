<template>
  <div class="bg-[#111827] min-h-screen">
    <Navbar />
    <HeroSection />
    <ServiceSection />
    <SkillSection />
    <ContactSection />
    <FooterSection />
    
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
const Navbar = defineAsyncComponent(() => import('@/components/Navbar.vue'));
const HeroSection = defineAsyncComponent(() => import('@/components/HeroSection.vue'));
const ServiceSection = defineAsyncComponent(() => import('@/components/ServiceSection.vue'));
const SkillSection = defineAsyncComponent(() => import('@/components/SkillSection.vue'));
const ContactSection = defineAsyncComponent(() => import('@/components/ContactSection.vue'));
const FooterSection = defineAsyncComponent(() => import('@/components/FooterSection.vue'));

</script>