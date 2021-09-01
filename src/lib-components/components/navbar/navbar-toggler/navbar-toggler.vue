<template>
  <s-button type="button" @onClick="onClick" class="navbar-toggler" :aria-expanded="toggled ? 'true' : 'false'"> 
    <span class="navbar-toggler-icon">
      <i v-if="icon" :class="!toggled ? 'simplify-' + icon : 'simplify-' + toggleIcon" />
    </span>
  </s-button>
</template>

<script src="./navbar-toggler.ts" lang="ts"></script>
