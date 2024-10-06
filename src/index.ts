import "./index.d";

import NSwitch from "./consoles/switch/n-switch.ts";
import NGameBoy from "./consoles/game-boy/n-game-boy.ts";

import "./styles.scss";

    const nSwitch = new NSwitch();
    const nGameBoy = new NGameBoy();

    nSwitch.startConsole();
    nGameBoy.startConsole();

// window.addEventListener('resize', _ => {
//     nSwitch.restartConsole();
//     nGameBoy.restartConsole();
// }, true);
