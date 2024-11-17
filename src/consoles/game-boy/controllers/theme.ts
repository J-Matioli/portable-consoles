export default class ThemeGameboyController {

    private root = document.querySelector(':root');
    private currentThemeIndex = 1;
    private themes: string[] = [
        'magenta',
        'purple',
        'lime',
        'yellow',
        'cyan',
    ]

    changeTheme(btn: HTMLButtonElement) {
        const nextTheme = this.parseBtn(btn);

        this.clearTheme();       

        !!nextTheme ? this.nextTheme() : this.previousTheme();
    }

    private clearTheme() {
        this.root.classList.remove(...this.getTheme())
    }

    private getTheme(): string[] {
        return this.root.classList.value
            .split(' ')
            .filter(className => className.includes('gameboy'));
    }

    nextTheme() {
        if(this.currentThemeIndex < this.themes.length - 1) {
            this.currentThemeIndex += 1;
            this.setTheme(this.currentThemeIndex);
        }else {
            this.currentThemeIndex = 0;
            this.setTheme(this.currentThemeIndex);
        }
    }

    previousTheme() {  
        if(this.currentThemeIndex > 0) {                        
            this.currentThemeIndex -= 1;
            this.setTheme(this.currentThemeIndex);
        }else {
            this.currentThemeIndex = this.themes.length - 1;
            this.setTheme(this.currentThemeIndex);
        }
    }


    private setTheme(themeIndex: number) {        
        this.root.classList.add(`gameboy-${this.themes[this.currentThemeIndex]}-theme`);
    }

    private parseBtn({className}: HTMLButtonElement): number {
        const btnType = className.charAt(className.length - 1);
        return btnTheme[btnType]
    }
}

export enum btnTheme {
    a = 0,
    b = 1
}