export default class Theme {

    private root = document.querySelector(':root');

    changeTheme(btn: HTMLButtonElement) {
        const theme = this.parseBtn(btn);
        
        this.clearTheme();
        this.setTheme(theme);
    }

    private clearTheme() {
        this.root.classList.value = "";
    }

    private setTheme(themeName: string) {
        this.root.classList.add(`${themeName}-theme`);
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