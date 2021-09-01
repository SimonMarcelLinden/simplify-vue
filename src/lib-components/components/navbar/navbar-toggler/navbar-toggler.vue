<template>
  <s-button type="button" @onClick="onClick" class="navbar-toggler" v-bind:aria-expanded="toggled" > 
    <span class="navbar-toggler-icon">
      <i v-if="icon" :class="!toggled ? 'simplify-' + icon : 'simplify-' + toggleIcon" />
    </span>
  </s-button>
</template>

<script src="./navbar-toggler.ts" lang="ts"></script>
