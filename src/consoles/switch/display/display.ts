import template from "./display.html";
import "./display.scss";

export class Display {

    private nSwitch: HTMLDivElement;
    
    constructor(nSwitch: HTMLDivElement){        
        this.nSwitch = nSwitch;
    };

    renderDisplay() {
        this.nSwitch.insertAdjacentHTML('afterbegin', template);

        return this.nSwitch.querySelector('.switch-control-display__screen');
    }

    removeLoading() {
        const screen = document.querySelector(".switch-control-display__screen");
        const load = screen.querySelector(".switch-control-display__load");
        screen.removeChild(load);
    }

    createGame() {
        const controlDisplay: HTMLElement = document.querySelector(".switch-control-display__screen");        
        const iframe = document.createElement('iframe');
        
        iframe.setAttribute('src', 'https://nintendo.com');    
        iframe.style["width"] = "100%";
        iframe.style["height"] = "100%";
        iframe.style["border"] = "none";

        controlDisplay.appendChild(iframe);
    }
}