<template>
  <ol
    :id="(id) ? id + '_indicator' : 'indicator'"
    aria-hidden="false"
    aria-label="Select a slide to display"
    class="carousel-indicators"
  >
    <li
      v-for="(step, index) in this.length"
      :key="index"
      role="button"
      :id="(id) ? id + '_indicator_' + index : 'indicator_' + index"
      :class="{ active: currentIndex == index }"
      @click="setSlide(index)"
      :tabindex="10+index"
    />
  </ol>
</template>

<script src="./carousel-indicator.ts" lang="ts"></script>
