<template>
  <div :id="id" role="group" class="form-group">
    <label v-if="label" :id="id" :for="labelFor">{{label}}</label>
    <slot />
  </div>
</template>

<script src="./group.ts" lang="ts"></script>