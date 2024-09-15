import template from "./control-display.html";
import "./control-display.scss";

export function renderControlDisplay() {
    const controlFrame = document.querySelector(".control-frame");
    const templateFragment = document.createRange().createContextualFragment(template);
    controlFrame.appendChild(templateFragment)
}