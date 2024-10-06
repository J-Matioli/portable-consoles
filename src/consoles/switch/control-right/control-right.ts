import template from "./control-right.html";
import Theme from "../services/theme.ts";
import "./control-right.scss";

export class ControlRight {
    
    private theme = new Theme()

    constructor(){ };

    renderControlRight() {    
        const controlFrame = document.querySelector(".n-switch");
        controlFrame.innerHTML += template;
       
        const actionButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.control-right__buttons button');
             
        for (const button of actionButtons) {
            button.addEventListener('click', () => this.theme.changeTheme(button))
        }
    }
}