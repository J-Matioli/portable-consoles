import template from "./control-right.html";
import ThemeController from "../controllers/theme";
import BrightnessController from "../controllers/brightness";
import "./control-right.scss";

export class ControlRight {
    
    private theme = new ThemeController();    
    private brightess;
    private nSwitch;
    constructor(brightessController: BrightnessController, nSwitch: HTMLDivElement){ 
        this.brightess = brightessController
        this.nSwitch = nSwitch;
    };

    renderControlRight() {           
        this.nSwitch.insertAdjacentHTML('afterbegin', template);
       
        this.onChangeTheme();
        this.onPlusBrightness();
    }

    onPlusBrightness() {
        const plusBtn: HTMLButtonElement = document.querySelector('.button--plus');
        plusBtn.addEventListener('click', () => this.brightess.increaseBrightness())
    }

    onChangeTheme() {
        const actionButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.control-right__buttons button');
             
        for (const button of actionButtons) {
            button.addEventListener('click', () => this.theme.changeTheme(button))
        }
    }
}