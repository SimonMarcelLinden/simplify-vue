<template class="nav-search">
  <li class="nav-item">
    <template v-if="overlay">
      <span class="nav-link search-link" @click="open = !open" >
        <i class="simplify-search"></i>
      </span>
      <div class="search-wrapper" :class="{ open: open }">
        <span class="search-close" @click="open = !open">
          <i class="simplify-close"></i>
        </span>
        <s-form @reset="onReset" @submit="onSubmit">
          <s-form-input type="search" name="search" class="sm:mr-2" placeholder="Search" />

          <s-button type="submit" class="btn-search">
            <span class="navbar-search-icon">
              <i class="simplify-search"></i>
            </span>
          </s-button>
        </s-form>
      </div>
      <div class="overlay search-overlay" :class="{ open: open }" />
    </template>
    <template v-else>
      <s-form @reset="onReset" @submit="onSubmit" class="form-inline">        
		<s-form-input type="search" size="sm" name="search" class="sm:mr-2" placeholder="Search" />
		
		<s-button type="submit" variant="secondary" size="sm" class="my-2 sm:my-0">
          Search
        </s-button>
      </s-form>
    </template>
  </li>
</template>

<script src="./nav-search.ts" lang="ts"></script>
