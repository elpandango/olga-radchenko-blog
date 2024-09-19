import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.min.css";
import {onMounted} from "vue";

export function usePrismInitialization() {
    onMounted(async () => {
        window.Prism = window.Prism || {};
        window.Prism.manual = true;
    });
}

export function usePrismHighlighting() {
    setTimeout(() => {
        Prism.highlightAll();
    }, 100);
}