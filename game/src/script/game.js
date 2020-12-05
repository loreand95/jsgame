import * as Player from "./player.js";
import Hurdle from "./hurdle.js";
import * as Menu from "./menu.js";
import * as Score from "./score.js";
import * as Sound from "./sound.js";

let hurdles = [];
let isStarted = false;
let elementMain = document.getElementById("main");
let hurdlesGenerator;

export function play() {
    isStarted = true;
    Sound.show(true);
    //Reset sound
    Sound.stop();

    document.removeEventListener("keydown", play); // Remove initial keydown listner

    Player.init();
    Score.reset();
   generateHurdles();
    show(true);
    Menu.show(false); // hidden menu
}

export function end() {
    if (isStarted) {
        isStarted = false;
        show(false);
        Player.stop();
        Score.show(true);
        Menu.show(true)
        removeHurdles();
        start();
        Sound.playDefeat();
        Sound.show(false);
    }
}

export function show(value) {
    elementMain.style.display = value === true ? "flex" : "none"; //Display menu
}

export function generateHurdles() {
    hurdlesGenerator = setInterval(() => {
        let hurdle = new Hurdle();
        hurdle.create().move();
        hurdles.push(hurdle);
    }, 1500);
}

export function removeHurdles() {
    clearInterval(hurdlesGenerator);

    hurdles.forEach(hurlde => {
        hurlde.delete();
    })

    hurdles = [];
}

export function start() {
    let go = document.getElementById("go");

    go.addEventListener("mouseup", play);
    document.addEventListener('keydown', play);
}
