import template from "./control-left.html";
import "./control-left.scss";

export function renderControlLeft() {
    const controlFrame = document.querySelector(".control-frame");
    const templateFragment = document.createRange().createContextualFragment(template);
    controlFrame.appendChild(templateFragment)
}