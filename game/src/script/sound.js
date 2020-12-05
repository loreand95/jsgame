import jumpSrc from '../asset/audio/jump.wav';
import defeatSrc from '../asset/audio/defeat.mp3';

const defeat = new Audio(defeatSrc);
const jump = new Audio(jumpSrc);

let volumeElement = document.getElementById('volume');
let isActive = true;

volumeElement.addEventListener('click', activate);

export function show(isVisible){
    volumeElement.parentElement.style.visibility = isVisible ? "visible" : "hidden"; //Display sound button;


}

function activate(){
    isActive = !isActive;

    if(isActive){
        volumeElement.innerHTML="volume_up";
    }else {
        volumeElement.innerHTML="volume_off";
    }
}

export function playJump(){
    if(isActive){
        jump.play();
    }
}

export function playDefeat(){
    if(isActive){
        defeat.currentTime = 0;
        defeat.play();
    }
}

export function stop(){
    defeat.pause();
    jump.pause();
}
