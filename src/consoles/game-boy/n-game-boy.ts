import template from "./n-game-boy.html";
import { ControlDisplay } from "./display/display.ts";
import { ControlBottom } from "./control-bottom/control-bottom.ts";

import "./n-game-boy.scss";

export default class NGameBoy {

    constructor() {};

    private ControlBottom:ControlBottom = new ControlBottom();
    private controlDisplay:ControlDisplay = new ControlDisplay();

    private controlFrame = document.querySelector(".container");

    startConsole() {

        this.controlFrame.insertAdjacentHTML('afterbegin', template)

        this.controlDisplay.renderControlDisplay();
        this.ControlBottom.renderControlBottom();

        setTimeout(() => {  
            this.removeLoading();
            // this.createGame();
        }, 5500)
    }
    
    removeLoading() {
        this.controlDisplay.removeLoading();
    }

    createGame() {
        this.controlDisplay.createGame()
    }

    closeConsole() {
        const templateHtml = document.querySelector(".n-game-boy");
        this.controlFrame.removeChild(templateHtml);
    }

    restartConsole() {
        this.closeConsole();
        this.startConsole();
    }
}