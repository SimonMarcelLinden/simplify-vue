<template>
    <div id="" class="carousel-item" role="listitem">
        <img v-if="imgSrc"      :alt="imgAlt" :src="imgSrc"   :width="width"  :height="height" class="img-fluid w-100 d-block" />
        <img v-if="imgBlank"    :alt="imgAlt" :src="blankSrc" :width="width"  :height="height"  class="img-blank img-fluid w-100 d-block" />
        <!-- <template> -->
            <slot name="img"/>
        <!-- </template> -->
        <div v-if="caption || text || this.$slots.default" class="carousel-caption">
            <h3 v-if="caption">{{ caption }}</h3>
            <p v-if="text">{{ text }}</p>
            <slot />
        </div>
    </div>

</template>

<script src="./carousel-slide.ts" lang="ts"></script>