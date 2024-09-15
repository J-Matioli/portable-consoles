import template from "./control-right.html";
import "./control-right.scss";

export function renderControlRight() {    
    const controlFrame = document.querySelector(".control-frame");
    const templateFragment = document.createRange().createContextualFragment(template);
    controlFrame.appendChild(templateFragment)
}