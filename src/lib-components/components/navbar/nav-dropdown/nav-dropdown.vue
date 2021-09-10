<template>
	<li class="nav-item dropdown"
    	@mouseover="hover = true" @mouseleave="hover = false" >
    	<s-nav-link class="dropdown-toggle">
      		<span>{{ text }}</span>
		</s-nav-link>

    	<div  class="dropdown-menu" :class="{ 'show': hover, 'dropdown-menu-right': right }" >
			<ul>
				<slot></slot>
			</ul>
		</div>
  	</li>
</template>

<script src="./nav-dropdown.ts" lang="ts"></script>
