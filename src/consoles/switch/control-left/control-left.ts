import template from "./control-left.html";
import "./control-left.scss";

export class ControlLeft {
    constructor(){ };

    renderControlLeft() {
        const controlFrame = document.querySelector(".n-switch");
        controlFrame.innerHTML += template;
    }
}