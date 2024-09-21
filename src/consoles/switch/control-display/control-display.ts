import template from "./control-display.html";
import "./control-display.scss";

export class ControlDisplay {

    constructor(){ };

    renderControlDisplay() {
        const controlFrame = document.querySelector(".n-switch");
        controlFrame.innerHTML += template
    }

    removeLoading() {
        const controlDisplay = document.querySelector(".switch-control-display");        
        controlDisplay.replaceChildren('');     
    }

    createGame() {
        const controlDisplay: HTMLElement = document.querySelector(".switch-control-display");        
        const iframe = document.createElement('iframe');
        
        controlDisplay.style["padding"] = "0 15px";

        iframe.setAttribute('src', 'https://nintendo.com');    
        iframe.style["width"] = "100%";
        iframe.style["height"] = "100%";
        iframe.style["border"] = "none";

        controlDisplay.appendChild(iframe);
    }
}