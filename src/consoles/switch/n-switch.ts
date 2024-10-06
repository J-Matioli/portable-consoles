import template from "./n-switch.html";

import BrightnessController from "./controllers/brightness";
import { Display } from "./display/display";
import { ControlLeft } from "./control-left/control-left.ts";
import { ControlRight } from "./control-right/control-right.ts";

import "./n-switch.scss";

export default class NSwitch {

    private container;
    private nswitch: HTMLDivElement;
    private brightess: BrightnessController;
    private consoleDisplay:Display;
    private controlLeft: ControlLeft;
    private controlRight:ControlRight;

    constructor() {
        this.container = document.querySelector(".container");
        this.container.insertAdjacentHTML('afterbegin', template);

        this.nswitch = this.container.querySelector('.n-switch');
    }; 
    

    startConsole() {

        this.consoleDisplay = new Display(this.nswitch);
        this.brightess = new BrightnessController(this.consoleDisplay.renderDisplay());
        
        this.controlLeft = new ControlLeft(this.brightess, this.nswitch);
        this.controlRight = new ControlRight(this.brightess, this.nswitch);
        
        this.controlLeft.renderControlLeft();
        this.controlRight.renderControlRight();

        
        setTimeout(() => {  
            this.removeLoading();
            this.createGame(); 
        }, 5500)
    }

    removeLoading() {
        this.consoleDisplay.removeLoading();
    }

    createGame() {
        this.consoleDisplay.createGame()
    }

    closeConsole() {
        const templateHtml = document.querySelector(".n-switch");
        this.container.removeChild(templateHtml);
    }

    restartConsole() {
        this.closeConsole();
        this.startConsole();
    }
}