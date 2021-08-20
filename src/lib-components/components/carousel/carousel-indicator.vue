<template>
  <ol
    :id="id + '_indicators'"
    aria-hidden="false"
    aria-label="Select a slide to display"
    class="carousel-indicators"
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