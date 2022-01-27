<template>
    <div class="carousel-control">
        <div role="button" @click="previous" aria-controls="carousel-1___BV_inner_"
            class="carousel-control-prev" >
            <span aria-hidden="true" class="carousel-control-prev-icon">
                <i class="simplify-arrow-back"></i>
            </span>
            <span class="sr-only" hidden>Previous slide</span>
        </div>
        <div role="button" @click="next" aria-controls="carousel-1___BV_inner_"
            class="carousel-control-next" >
            <span aria-hidden="true" class="carousel-control-next-icon">
                <i class="simplify-arrow-forward"></i>
            </span>
            <span class="sr-only" hidden>Next slide</span>
        </div>
    </div>
</template>


<script src="./carousel-control.ts" lang="ts"></script>