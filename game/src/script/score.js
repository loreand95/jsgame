/** SCORE **/

import * as Api from "./api/jsonbin.js"

let liveScore = document.getElementById("liveScore");
let gameOver = document.getElementById("gameOver");
let elementBest = document.getElementById("best");
let element = document.getElementById("score");

let score = 0;
let best = 0;

export function show(isVisible){
    gameOver.style.visibility = isVisible ? "visible" : "hidden"; //Display score;
    element.innerText = "Score: " + score;
    checkRecord();
}

function getBestScore(response){
    best = response.score;
}

function checkRecord(){
    if(score > best){
        best = score;
        Api.httpPutAsync(best,updateScore);
    }
    elementBest.innerText = "Best: " + best;
}

function updateScore(response){
    best = response.score;
}

function error(){
    console.log("ERROR")
}

export function increase(value){
    score += value;
    liveScore.innerText = "Score: " + score;
}

export function reset() {
    score = 0;
    liveScore.innerText = "Score: " + score;
    Api.httpGetAsync(getBestScore, error);
}

