import template from "./control-left.html";
import BrightnessController from "../controllers/brightness";
import "./control-left.scss";

export class ControlLeft {
    private brightess;
    private nSwitch;

    constructor(brightessController: BrightnessController, nSwitch: HTMLDivElement){ 
        this.brightess = brightessController
        this.nSwitch = nSwitch;
    };

    renderControlLeft() {       
        this.nSwitch.insertAdjacentHTML('afterbegin', template);
        this.onRemoveBrightness();
    }

    onRemoveBrightness() {
        const minusBtn: HTMLButtonElement = document.querySelector('.button--minus');
        minusBtn.addEventListener('click', () => this.brightess.decreaseBrightness())
    }
}