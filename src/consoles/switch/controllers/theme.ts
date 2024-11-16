export default class ThemeController {

    private root = document.querySelector(':root');

    changeTheme(btn: HTMLButtonElement) {
        const theme = this.parseBtn(btn);
        
        this.clearTheme();
        this.setTheme(theme);
    }

    private clearTheme() {
        this.root.classList.remove(...this.getTheme())
    }

    private getTheme(): string[] {
        return this.root.classList.value
            .split(' ')
            .filter(className => className.includes('switch'));
    }

    private setTheme(themeName: string) {
        this.root.classList.add(`switch-${themeName}-theme`);
    }

    private parseBtn({className}: HTMLButtonElement): string {
        const btnType = className.charAt(className.length - 1);
        return btnTheme[btnType]
    }
}

export enum btnTheme {
    x = 'white',
    y = 'fortnite',
    a = 'splatoon',
    b = 'default'
}