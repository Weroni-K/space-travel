<template>
  <div :class="bodyClass" class="grid-container grid-container--destination flow">
    <h4 class="numbered-title uppercase text-white letter-spacing-2 ff-sans-cond animation-left1"><span>01</span>Pick your destination</h4>
    <picture class="animation-left">
      <img :src="destinationImage" alt="Destination Image">
    </picture>
    <div class="tab-list text-underline flex animation-right">
      <button :aria-selected="currentDestination === 'Moon'" @click="currentDestination = 'Moon'" class="uppercase text-light letter-spacing-2 ff-sans-cond">Moon</button>
      <button :aria-selected="currentDestination === 'Mars'" @click="currentDestination = 'Mars'" class="uppercase text-light letter-spacing-2 ff-sans-cond">Mars</button>
      <button :aria-selected="currentDestination === 'Europa'" @click="currentDestination = 'Europa'" class="uppercase text-light letter-spacing-2 ff-sans-cond">Europa</button>
      <button :aria-selected="currentDestination === 'Titan'" @click="currentDestination = 'Titan'" class="uppercase text-light letter-spacing-2 ff-sans-cond">Titan</button>
    </div>
    <article class="destination-info flow animation-right">
      <h2 class="uppercase text-white letter-spacing-2 ff-serif">{{ destinationTitle }}</h2>
      <p class="text-light letter-spacing-2">{{ destinationDescription }}</p>
      <div class="destination-meta flex">
        <div>
          <h5 class="text-accent uppercase">Avg. distance</h5>
          <p class="ff-serif uppercase">{{ destinationDistance }}</p>
        </div>
        <div>
          <h5 class="text-accent uppercase">Est. travel time</h5>
          <p class="ff-serif uppercase">{{ destinationTime }}</p>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
import { shallowRef, computed } from 'vue'
import MoonImage from '../assets/destination/image-moon.webp';
import MarsImage from '../assets/destination/image-mars.webp';
import EuropaImage from '../assets/destination/image-europa.webp';
import TitanImage from '../assets/destination/image-titan.webp';

const currentDestination = shallowRef('Moon')

const destinationData = computed(() => {
  const destination = currentDestination.value;
  switch (destination) {
    case 'Moon':
      return {
        title: 'Moon',
        description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
        image: MoonImage,
        distance: '384,400 km',
        time: '3 days'
      };
    case 'Mars':
      return {
        title: 'Mars',
        description: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
        image: MarsImage,
        distance: '225 mil. km',
        time: '9 months'
      };
    case 'Europa':
      return {
        title: 'Europa',
        description: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
        image: EuropaImage,
        distance: '3 years',
        time: '628 mil. km'
      };
    case 'Titan':
      return {
        title: 'Titan',
        description: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
        image: TitanImage,
        distance: '1.6 bil. km',
        time: '7 years'
      };
    default:
      return {
        title: 'unknown',
        description: 'unknown',
        image: null,
        distance: 'unknown',
        time: 'unknown'
      };
  }
});

const destinationTitle = computed(() => destinationData.value.title);
const destinationDescription = computed(() => destinationData.value.description);
const destinationImage = computed(() => destinationData.value.image);
const destinationDistance = computed(() => destinationData.value.distance);
const destinationTime = computed(() => destinationData.value.time);
</script>
