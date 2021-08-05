<template>
  <form class="form" @submit="onSubmit" @reset="onReset">
    <slot />
  </form>
</template>

<script src="./form.ts" lang="ts"></script>
