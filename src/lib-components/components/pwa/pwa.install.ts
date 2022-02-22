import Vue from "vue";

export default class PwaInstaller extends Vue {
    public deferredPrompt: any = null;

    public beforeMount() {
        window.addEventListener("beforeinstallprompt", e => {
            e.preventDefault();
            this.deferredPrompt = e;
        });

        window.addEventListener("appinstalled", () => {
            this.deferredPrompt = null;
        });
    }

    public async dismiss() {
        this.deferredPrompt = null;
    }

    public async install() {
        this.deferredPrompt.prompt();
    }
}
