<template>
  <ol
    :id="id + '_indicators'"
    aria-hidden="false"
    aria-label="Select a slide to display"
    aria-owns="carousel-1___BV_inner_"
    class="carousel-indicators"
    _mstaria-label="496561"
  >
    <li
      v-for="(step, index) in this.length"
      :key="index"
      role="button"
      :id="id + '_indicator_' + index"
      :class="{ active: currentIndex == index }"
      tabindex="0"
    />
  </ol>
</template>

<script src="./carousel-indicator.ts" lang="ts"></script>