<template>
    <div class="carousel-control">
        <a href="#" role="button" @click="previous" aria-controls="carousel-1___BV_inner_"
            class="carousel-control-prev" >
            <span aria-hidden="true" class="carousel-control-prev-icon">
                <i class="simplify-arrow-back"></i>
            </span>
            <span class="sr-only">Previous slide</span>
        </a>
        <a href="#" role="button" @click="next" aria-controls="carousel-1___BV_inner_"
            class="carousel-control-next" >
            <span aria-hidden="true" class="carousel-control-next-icon">
                <i class="simplify-arrow-forward"></i>
            </span>
            <span class="sr-only">Next slide</span>
        </a>
    </div>
</template>


<script src="./carousel-control.ts" lang="ts"></script>