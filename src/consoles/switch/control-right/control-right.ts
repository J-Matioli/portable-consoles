import template from "./control-right.html";
import "./control-right.scss";

export class ControlRight {
    constructor(){ };

    renderControlRight() {    
        const controlFrame = document.querySelector(".n-switch");
        controlFrame.innerHTML += template;
    }
}