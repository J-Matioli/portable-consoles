import template from "./control-bottom.html";
import "./control-bottom.scss";

export class ControlBottom {
    private nGameBoy: HTMLDivElement
    constructor(nGameBoy: HTMLDivElement){
        this.nGameBoy = nGameBoy
     };

    renderControlBottom() {
        this.nGameBoy.insertAdjacentHTML('beforeend', template);
    }
}