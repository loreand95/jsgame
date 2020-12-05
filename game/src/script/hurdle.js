import * as Player from "./player.js";
import * as Game from "./game.js";
import * as Score from "./score.js";

export default function Hurdle(){

    this.passed = false;
    this.element = {};
    this.moveInterval = {};

    this.create = function () {
        this.element = document.createElement("span");
        this.element.classList.add("dot");
        this.element.classList.add("hurdle");
        document.getElementById("main").appendChild(this.element);

        return this;
    }

    this.move = function () {
        let _this = this;
        let speed = (Math.random() * 10) + 20;

        _this.moveInterval = setInterval(frame, Math.floor(speed));
        let pos = 90;

        function frame() {

            if (_this.element.style.left === '8%') {
                clearInterval(_this.moveInterval);
                _this.element.remove();
            }

            //Check player position
            if( pos <=16 && pos >= 14 ){
                let position = parseInt(Player.element.style.top.substring(0, 2));
               if(position >=44){
                   clearInterval(_this.moveInterval);
                   _this.delete();
                   Game.end();
               }
            }else if( pos <= 28 && !_this.passed){
                _this.passed = true;
                Score.increase(10);
            }

            if( pos < 8){
                _this.delete();
            }

            pos = pos - 1;
            _this.element.style.left = pos + '%';
        }
    }

    this.delete = function (){
        this.element.remove();
        clearInterval(this.moveInterval);
        delete this;
    }
}
