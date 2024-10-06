export default class BrightnessController {

    private maxBright: number;
    private minBright: number;
    private bright: number;
    private display
    constructor(displayElement) {
        this.maxBright = 1;
        this.bright = 1;
        this.minBright = .1;
        this.display = displayElement;
        this.display.style.filter = `opacity(${this.bright})`;
    }

    decreaseBrightness() {
        if (this.bright > this.minBright) {
            this.bright = parseFloat(
                Math.max(this.bright - 0.1, this.minBright)
                    .toFixed(1)
                )
            this.updateBrightness();
        }
    }

    increaseBrightness() {
        if (this.bright < this.maxBright) {
            this.bright = parseFloat(
                Math.min(this.bright + 0.1, this.maxBright)
                    .toFixed(1)
                ) 
            this.updateBrightness();
        }
    }

    updateBrightness() {
        this.display.style.filter = `opacity(${this.bright})`;
    }

}