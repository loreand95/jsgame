/** PLAYER **/

import * as Sound from "./sound.js";

let jumpButtonElement = document.getElementById('jump');
jumpButtonElement.addEventListener('click',jump);

export const element = document.getElementById("player");
element.style.top = '47%';

let isJump = false;

//Jump Action
function jump() {
    if (!isJump) {

        isJump = true;

        Sound.playJump();

        //Move up
        const id = setInterval(frame, 36);

        function frame() {
            if (element.style.top === '40%') {
                clearInterval(id);
                drop();
            } else {
                let top = Number(element.style.top.substring(0, 2)) - 1;
                element.style.top = top + '%';
            }
        }

        //Move down
        function drop() {
            let id = setInterval(frame, 36);

            function frame() {
                if (element.style.top === '47%') {
                    clearInterval(id);
                    isJump = false;
                } else {
                    let top = Number(element.style.top.substring(0, 2)) + 1;
                    element.style.top = top + '%';
                }
            }
        }
    }
}

export function init() {
    document.addEventListener('keydown', jump);
    show(true);
}

export function stop() {
    document.removeEventListener('keydown', jump);
    show(false);
}

function show(isVisible){
    jumpButtonElement.parentElement.style.visibility = isVisible ? "visible" : "hidden"; //Display sound button;
}
