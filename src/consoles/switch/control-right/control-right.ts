import template from "./control-right.html";
import ThemeController from "../controllers/theme";
import CoreController from "../controllers/core";
import BrightnessController from "../controllers/brightness";
import "./control-right.scss";

export class ControlRight {
    
    private theme = new ThemeController();    
    private core: CoreController;    
    private brightess: BrightnessController;
    private nSwitch;
    constructor(brightessController: BrightnessController, nSwitch: HTMLDivElement, coreController: CoreController){ 
        this.brightess = brightessController
        this.core = coreController
        this.nSwitch = nSwitch;
    };

    renderControlRight() {           
        this.nSwitch.insertAdjacentHTML('afterbegin', template);
       
        this.onChangeTheme();
        this.onPlusBrightness();
        this.onResetConsole();
    }

    onPlusBrightness() {
        const plusBtn: HTMLButtonElement = this.nSwitch.querySelector('.button--plus');
        plusBtn.addEventListener('click', () => this.brightess.increaseBrightness())
    }

    onChangeTheme() {
        const actionButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.control-right__buttons button');
             
        for (const button of actionButtons) {
            button.addEventListener('click', () => this.theme.changeTheme(button))
        }
    }

    onResetConsole() {
        const resetBtn: HTMLButtonElement = this.nSwitch.querySelector('.control-right__home');
        resetBtn.addEventListener('click', () => this.core.resetConsole())
    }
}