import template from "./n-switch.html";

import { ControlDisplay } from "./control-display/control-display.ts";
import { ControlLeft } from "./control-left/control-left.ts";
import { ControlRight } from "./control-right/control-right.ts";

import "./n-switch.scss";

export default class NSwitch {

    constructor() {};

    private controlLeft: ControlLeft = new ControlLeft();
    private controlRight:ControlRight = new ControlRight();
    private controlDisplay:ControlDisplay = new ControlDisplay();

    private controlFrame = document.querySelector(".container");

    startConsole() {
        
        this.controlFrame.innerHTML += template;

        this.controlDisplay.renderControlDisplay();
        this.controlLeft.renderControlLeft();
        this.controlRight.renderControlRight();
        
        setTimeout(() => {  
            this.removeLoading();
            this.createGame(); 
        }, 5500)
    }

    removeLoading() {
        this.controlDisplay.removeLoading();
    }

    createGame() {
        this.controlDisplay.createGame()
    }

    closeConsole() {
        const templateHtml = document.querySelector(".n-switch");
        this.controlFrame.removeChild(templateHtml);
    }

    restartConsole() {
        this.closeConsole();
        this.startConsole();
    }
}