import template from "./display.html";
import "./display.scss";

export class Display {
    
    private nGameBoy: HTMLDivElement;

    constructor(nGameBoy: HTMLDivElement){        
        this.nGameBoy = nGameBoy;
    };

    renderDisplay(): HTMLDivElement {
        this.nGameBoy.insertAdjacentHTML('afterbegin', template);
        return this.nGameBoy.querySelector('.game-boy-display__screen');
    }
}