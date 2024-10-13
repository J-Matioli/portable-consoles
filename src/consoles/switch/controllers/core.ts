export default class CoreController {
    
    private display: HTMLDivElement;
    private load: HTMLDivElement;
    private isReseting: boolean = false;
    private isStarting: boolean = false;

    constructor(display: HTMLDivElement) {
        this.display = display
        this.load = this.display.querySelector(".switch-control-display__loader")
    }

    startConsole() {
        this.isStarting = true;
        this.addLoading();

        setTimeout(() => {  
            this.removeLoading();
            this.createGame();
            this.isStarting = false;
        }, 5500)
    }

    resetConsole() {
        if(this.isReseting || this.isStarting) return;
        
        this.isReseting = true;
        this.addLoading();
        this.removeGame()
        setTimeout(() => {  
            this.removeLoading();
            this.createGame();
            this.isReseting = false;
        }, 5500)
    }

    removeLoading() {            
        this.load.style.display = 'none';
    }

    addLoading() {
        this.load.style.display = 'flex';
    }

    createGame() {
        const iframe = document.createElement('iframe');
        
        iframe.setAttribute('src', 'https://nintendo.com');    
        iframe.style["width"] = "100%";
        iframe.style["height"] = "100%";
        iframe.style["border"] = "none";

        this.display.appendChild(iframe);
    }

    removeGame() {
        const iframe = this.display.querySelector('iframe');       
        iframe && this.display.removeChild(iframe);
    }

}