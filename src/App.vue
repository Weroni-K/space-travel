<template>
  <body :class="bodyClass">
    <header class="primary-header flex">
      <div>
        <img src="./assets/shared/logo.svg" alt="space tourism logo" class="logo animation6-menu">
      </div>
      <button class="mobile-nav-toggle" v-if="isMobile" @click="toggleNav" :class="{active:navOpen}">
        <span class="top"></span>
        <span class="mid"></span>
        <span class="bottom"></span>
      </button>
      <nav v-show="navOpen || !isMobile" v-if="isMobile || !isMobile">
          <ul id="primary-navigation" class="mobile-nav-list primary-navigation text-underline flex animation6-menu">
              <li class="mobile-nav-item" :class="{ active: isRouteActive( '/') }"><a class="uppercase text-white letter-spacing-2 fs-400 ff-sans-cond" href="#/"><span>00</span>Home</a></li>
              <li class="mobile-nav-item" :class="{ active: isRouteActive('/destination') }"><a class="uppercase text-white letter-spacing-2 fs-400 ff-sans-cond" href="#/destination"><span>01</span>Destination</a></li>
              <li class="mobile-nav-item" :class="{ active: isRouteActive('/crew') }"><a class="uppercase text-white letter-spacing-2 fs-400 ff-sans-cond" href="#/crew"><span>02</span>Crew</a></li>
              <li class="mobile-nav-item" :class="{ active: isRouteActive('/technology') }"><a class="uppercase text-white letter-spacing-2 fs-400 ff-sans-cond" href="#/technology"><span>03</span>Technology</a></li>
          </ul>
        </nav>
    </header>
    <component :is="currentView" />
  </body>
</template>

<script setup>
import Home from './components/Home.vue';
import Crew from './components/Crew.vue';
import Technology from './components/Technology.vue';
import Destination from './components/Destination.vue';
import { ref, computed, reactive, onMounted, onBeforeUnmount } from 'vue'

const routes = {
  '/': Home,
  '/crew': Crew,
  '/technology': Technology,
  '/destination': Destination
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})

const isRouteActive = (route) => {
  return currentPath.value === '#' + route;
}

const bodyClass = computed(() => {
  let classList = [];
  if (isRouteActive('/')) {
    classList.push('home');
  } else if (isRouteActive('/destination')) {
    classList.push('destination');
  } else if (isRouteActive('/crew')) {
    classList.push('crew');
  } else if (isRouteActive('/technology')) {
    classList.push('technology');
  } else {
    classList.push('home');
  }
  return classList.join();
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

const isMobile = computed(() => {
  return windowSize.width <= 560;
});

const navOpen = ref(false);
const toggleNav = () => {
  navOpen.value = !navOpen.value;
};
</script>