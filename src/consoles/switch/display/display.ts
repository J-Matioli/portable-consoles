import template from "./display.html";
import "./display.scss";

export class Display {

    private nSwitch: HTMLDivElement;
    
    constructor(nSwitch: HTMLDivElement){        
        this.nSwitch = nSwitch;
    };

    renderDisplay(): HTMLDivElement {
        this.nSwitch.insertAdjacentHTML('afterbegin', template);
        return this.nSwitch.querySelector('.switch-control-display__screen');
    }
}