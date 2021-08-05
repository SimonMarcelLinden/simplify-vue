<template>
  <div :id="id" class="navbar-collapse collapse" :class="generateClass()">
      <slot/>
  </div>
</template>

<script src="./collapse.ts" lang="ts"></script>
