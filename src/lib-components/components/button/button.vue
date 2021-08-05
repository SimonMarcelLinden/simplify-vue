<template>
  <button :type="type" class="btn" :class="classes" v-on:click="onClick">
    <slot />
  </button>
</template>

<script src="./button.ts" lang="ts"></script>