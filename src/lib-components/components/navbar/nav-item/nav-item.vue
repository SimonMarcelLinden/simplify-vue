<template>
  <li class="nav-item">
    <template v-if="href">
      <nav-link :href="href" :disabled="disabled">
        <slot></slot>
      </nav-link>
    </template>
    <template v-else>
      <span class="nav-link">
        <slot></slot>
      </span>
    </template>
  </li>
</template>

<script src="./nav-item.ts" lang="ts"></script>
