import ThemeController from "../controllers/theme";
import template from "./control-bottom.html";
import "./control-bottom.scss";

export class ControlBottom {

    private theme = new ThemeController();  
    private nGameBoy: HTMLDivElement
    constructor(nGameBoy: HTMLDivElement){
        this.nGameBoy = nGameBoy
     };

    renderControlBottom() {
        this.nGameBoy.insertAdjacentHTML('beforeend', template);
        this.onChangeTheme();
    }

    onChangeTheme() {
        const actionButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.control-botton__buttons button');
             
        for (const button of actionButtons) {            
            button.addEventListener('click', () => this.theme.changeTheme(button))
        }
    }
}