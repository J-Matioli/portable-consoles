import "./index.d";
import { renderControlDisplay } from "./consoles/switch/control-display/control-display.js";
import { renderControlLeft } from "./consoles/switch/control-left/control-left.js";
import { renderControlRight } from "./consoles/switch/control-right/control-right.js";
import { renderControlBottom } from "./consoles/game-boy/control-bottom/control-bottom.js";
import "./styles.scss";

renderControlDisplay();
renderControlLeft();
renderControlRight();
renderControlBottom();

setTimeout(() => {
    const displayGame: HTMLElement = document.querySelector(".control-display");
    const iframe = document.createElement('iframe');

    createGame(iframe);
    
    displayGame.style["padding"] = "0 15px";

    displayGame.removeChild(document.querySelector(".load-text"));
    displayGame.removeChild(document.querySelector(".load-bar"));
    displayGame.appendChild(iframe);
    
}, 5500)

function createGame(iframe) {

    iframe.setAttribute('src', 'https://nintendo.com');    
    iframe.style["width"] = "100%";
    iframe.style["height"] = "100%";
    iframe.style["border"] = "none";
}