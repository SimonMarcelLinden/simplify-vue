<template>
  <li class="nav-item nav-dropdown"
    @mouseover="hover = true" @mouseleave="hover = false" >
    <s-nav-link class="dropdown-toggle">
      <span>{{ text }}</span>
    </s-nav-link>

    <ul class="dropdown-menu" :class="{ 'show': hover, 'dropdown-menu-right': right }" >
      <slot></slot>
    </ul>
  </li>
</template>

<script src="./nav-dropdown.ts" lang="ts"></script>
