<template>
  <s-button type="button" @onClick="onClick" class="navbar-toggler"> 
    <span class="navbar-toggler-icon">
      <i v-if="icon" :class="'simplify-' + icon" />
    </span>
  </s-button>
</template>

<script src="./navbar-toggler.ts" lang="ts"></script>
