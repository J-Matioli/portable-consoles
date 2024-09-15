import template from "./control-bottom.html";
import "./control-bottom.scss";

export function renderControlBottom() {
    const controlFrame = document.querySelector(".control-frame");
    const templateFragment = document.createRange().createContextualFragment(template);
    controlFrame.appendChild(templateFragment)
}