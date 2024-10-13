import template from "./n-game-boy.html";
import { Display } from "./display/display.ts";
import { ControlBottom } from "./control-bottom/control-bottom.ts";

import "./n-game-boy.scss";
import CoreController from "./controllers/core";

export default class NGameBoy {

    private container;
    private nGameBoy: HTMLDivElement;
    private consoleDisplay:Display;
    private core: CoreController    
    private controlBottom:ControlBottom;


    constructor() {
        this.container = document.querySelector(".container");
        this.container.insertAdjacentHTML('afterbegin', template);

        this.nGameBoy = this.container.querySelector('.n-game-boy');
    };
       

    startConsole() {

        this.consoleDisplay = new Display(this.nGameBoy);

        const renderedDisplay: HTMLDivElement = this.consoleDisplay.renderDisplay();

        this.core = new CoreController(renderedDisplay)
        this.controlBottom = new ControlBottom(this.nGameBoy);
        this.controlBottom.renderControlBottom();

        this.core.startConsole();
    }
}