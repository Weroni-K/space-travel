<template>
    <div :class="bodyClass" class="grid-container grid-container--technology flow">
        <h4 class="numbered-title uppercase text-white letter-spacing-2 ff-sans-cond animation-left1"><span>03</span>Space launch</h4>
        <div class="circle-number-list flex animation-left">
            <button :aria-selected="currentTechnology === 'vehicle'" @click="currentTechnology = 'vehicle'" class="">1</button>
            <button :aria-selected="currentTechnology === 'spaceport'" @click="currentTechnology = 'spaceport'" class="">2</button>
            <button :aria-selected="currentTechnology === 'capsule'" @click="currentTechnology = 'capsule'" class="">3</button>
        </div>
        <article class="technology-info flow animation-left">
            <h2 class="uppercase text-white letter-spacing-2 ff-serif">{{ technologyTitle }}</h2>
            <p class="text-light letter-spacing-2 fs-300">{{ technologyDescription }}</p>
        </article>
        <picture class="animation-right">
            <img :src="technologyImage" alt="Technology Image">
        </picture>
    </div>
</template>
    
<script setup>
import { shallowRef, computed, reactive, onMounted, onBeforeUnmount } from 'vue'
import VehicleImagePortrait from '../assets/technology/image-launch-vehicle-portrait.jpg';
import SpaceportImagePortrait from '../assets/technology/image-spaceport-portrait.jpg';
import CapsuleImagePortrait from '../assets/technology/image-space-capsule-portrait.jpg';
import VehicleImageLandscape from '../assets/technology/image-launch-vehicle-landscape.jpg';
import SpaceportImageLandscape from '../assets/technology/image-spaceport-landscape.jpg';
import CapsuleImageLandscape from '../assets/technology/image-space-capsule-landscape.jpg';

const currentTechnology = shallowRef('vehicle')
const technologyData = computed(() => {
    const technology = currentTechnology.value;
    switch (technology) {
    case 'vehicle':
        return {
        title: 'launch vehicle',
        description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        imagePortrait: VehicleImagePortrait,
        imageLandscape: VehicleImageLandscape
        };
    case 'spaceport':
        return {
        title: 'spaceport',
        description: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
        imagePortrait: SpaceportImagePortrait,
        imageLandscape: SpaceportImageLandscape
        };
    case 'capsule':
        return {
        title: 'space capsule',
        description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
        imagePortrait: CapsuleImagePortrait,
        imageLandscape: CapsuleImageLandscape
        };
    default:
        return {
        title: 'unknown',
        description: 'unknown',
        imagePortrait: null,
        imageLandscape: null
        };
    }
});

const technologyTitle = computed(() => technologyData.value.title);
const technologyDescription = computed(() => technologyData.value.description);
const technologyImage = computed(() => {
      return isDesktop.value ? technologyData.value.imagePortrait : technologyData.value.imageLandscape;
    });

const windowSize = reactive({
  width: window.innerWidth,
  height: window.innerHeight
});

const updateWindowSize = () => {
  windowSize.width = window.innerWidth;
  windowSize.height = window.innerHeight;
};

onMounted(() => {
  window.addEventListener('resize', updateWindowSize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateWindowSize);
});

const isDesktop = computed(() => {
  return windowSize.width >= 1040;
});
</script>
