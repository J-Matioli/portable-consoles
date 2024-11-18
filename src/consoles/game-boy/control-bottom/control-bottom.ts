import CoreController from "../controllers/core";
import ThemeController from "../controllers/theme";
import template from "./control-bottom.html";
import "./control-bottom.scss";

export class ControlBottom {

    private theme = new ThemeController();  
    private nGameBoy: HTMLDivElement; 
    private core: CoreController;    

    constructor(nGameBoy: HTMLDivElement, coreController: CoreController){
        this.nGameBoy = nGameBoy
        this.core = coreController
     };

    renderControlBottom() {
        this.nGameBoy.insertAdjacentHTML('beforeend', template);
        this.onChangeTheme();
        this.onResetConsole();
    }

    onChangeTheme() {
        const actionButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.control-botton__buttons button');
             
        for (const button of actionButtons) {            
            button.addEventListener('click', () => this.theme.changeTheme(button))
        }
    }

    onResetConsole() {
        const resetBtn: HTMLButtonElement = this.nGameBoy.querySelector('.button--start');
        resetBtn.addEventListener('click', () => this.core.resetConsole())
    }
}