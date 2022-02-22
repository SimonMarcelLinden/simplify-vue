<template>
	<div class="pwa-modal" v-if="deferredPrompt">
        <div class="pwa-modal--overlay"></div>
        <div class="pwa-modal--card">
            <div class="close">&#10006;</div>
            <slot name="title">
                <h3>Install this Application</h3>
            </slot>
            <slot name="text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quos est ipsam blanditiis numquam delectus commodi eaque facere, itaque ab.</p>
            </slot >
            <s-form>
                <s-button type="button" @onClick="install">Install!</s-button>
                <s-button type="button" @onClick="dismiss">No, thanks</s-button>
            </s-form>
        </div>
    </div>
</template>

<script src="./pwa.install.ts"></script>
