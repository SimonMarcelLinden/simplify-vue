<template>
  <input
    :id="id"
    :type="type"
    :name="name"
    :value="value"
    v-model="inputVal"
    :placeholder="placeholder"
    :required="required"
    :aria-required="required"
    :class="['form-control', sizeClass]"
  />
</template>

<script src="./input.ts" lang="ts"></script>