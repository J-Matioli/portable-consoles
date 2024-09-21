import template from "./control-bottom.html";
import "./control-bottom.scss";

export class ControlBottom {
    constructor(){ };

    renderControlBottom() {
        const controlFrame = document.querySelector(".n-game-boy");
        controlFrame.innerHTML += template
    }
}