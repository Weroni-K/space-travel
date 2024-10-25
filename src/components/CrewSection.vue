<template>
  <div :class="bodyClass" class="grid-container grid-container--crew flow">
    <h4 class="numbered-title uppercase text-white letter-spacing-2 ff-sans-cond animation-left1"><span>02</span>Meet your crew</h4>
    <article class="crew-info flow animation-left">
      <h3 class="uppercase text-white letter-spacing-2 ff-serif">{{ crewTitle }}</h3>
      <h2 class="uppercase text-white letter-spacing-2 ff-serif">{{ crewName }}</h2>
      <p class="text-light letter-spacing-2">{{ crewDescription }}</p>
    </article>
    <div class="dot-list flex animation-left">
      <button :aria-selected="currentCrew === 'commander'" @click="currentCrew = 'commander'" class=""><span class="sr-only">commander</span></button>
      <button :aria-selected="currentCrew === 'specialist'" @click="currentCrew = 'specialist'" class=""><span class="sr-only">specialist</span></button>
      <button :aria-selected="currentCrew === 'pilot'" @click="currentCrew = 'pilot'" class=""><span class="sr-only">pilot</span></button>
      <button :aria-selected="currentCrew === 'engineer'" @click="currentCrew = 'engineer'" class=""><span class="sr-only">engineer</span></button>
    </div>
    <picture class="animation-right">
      <img :src="crewImage" alt="Crew Image">
    </picture>
  </div>
</template>

<script setup>
import { shallowRef, computed } from 'vue'
import CommanderImage from '../assets/crew/image-douglas-hurley.webp';
import SpecialistImage from '../assets/crew/image-mark-shuttleworth.webp'; 
import PilotImage from '../assets/crew/image-victor-glover.webp'; 
import EngineerImage from '../assets/crew/image-anousheh-ansari.webp'; 

const currentCrew = shallowRef('commander')

const crewData = computed(() => {
  const crew = currentCrew.value;
  switch (crew) {
    case 'commander':
      return {
        title: 'commander',
        name: 'Douglas Hurley',
        description: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
        image: CommanderImage
      };
    case 'specialist':
      return {
        title: 'mission specialist',
        name: 'Mark Shuttleworth',
        description: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
        image: SpecialistImage
      };
    case 'pilot':
      return {
        title: 'pilot',
        name: 'Victor Glover',
        description: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
        image: PilotImage
      };
    case 'engineer':
      return {
        title: 'flight engineer',
        name: 'Anousheh Ansari',
        description: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
        image: EngineerImage
      };
    default:
      return {
        title: 'unknown',
        name: 'unknown',
        description: 'unknown',
        image: null
      };
  }
});

const crewTitle = computed(() => crewData.value.title);
const crewName = computed(() => crewData.value.name);
const crewDescription = computed(() => crewData.value.description);
const crewImage = computed(() => crewData.value.image);
</script>
