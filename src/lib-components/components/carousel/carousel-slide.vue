<template>
    <div id="" class="carousel-item" role="listitem">
        <template v-if="imgSrc || caption || text">
            <img v-if="imgSrc"      :alt="imgAlt" :src="imgSrc"   :width="width"  :height="height" class="img-fluid w-100 d-block" />
            <img v-if="imgBlank"    :alt="imgAlt" :src="blankSrc" :width="width"  :height="height"  class="img-blank img-fluid w-100 d-block" />
            <slot name="img"/>
            <div v-if="caption || text || this.$slots.default" class="carousel-caption">
                <h3 v-if="caption">{{ caption }}</h3>
                <p v-if="text">{{ text }}</p>
                <slot />
            </div>
        </template>
        <template v-else>
            <slot />
        </template>
    </div>

</template>

<script src="./carousel-slide.ts" lang="ts"></script>
