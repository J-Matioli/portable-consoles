import template from "./n-switch.html";

import BrightnessController from "./controllers/brightness.ts";
import CoreController from "./controllers/core.ts";
import { Display } from "./display/display";
import { ControlLeft } from "./control-left/control-left.ts";
import { ControlRight } from "./control-right/control-right.ts";

import "./n-switch.scss";

export default class NSwitch {

    private container;
    private core: CoreController
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

        const renderedDisplay: HTMLDivElement = this.consoleDisplay.renderDisplay();

        this.brightess = new BrightnessController(renderedDisplay);
        this.core = new CoreController(renderedDisplay)

        this.controlLeft = new ControlLeft(this.brightess, this.nswitch);
        this.controlRight = new ControlRight(this.brightess, this.nswitch, this.core);
        
        this.controlLeft.renderControlLeft();
        this.controlRight.renderControlRight();

        this.core.startConsole();
        
    }
}