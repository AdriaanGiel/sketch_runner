"use strict";
class Player extends GameObject {
    constructor(game, ground, x, y) {
        super(game, x, y);
        this.ground = ground;
        this.setupKeyOptions();
        window.addEventListener('keydown', (e) => this.handleKeyPress(e));
    }
    handleKeyPress(event) {
        if (String(event.code) in this.keyOptions) {
            this.keyOptions[String(event.code)]();
        }
    }
    setupKeyOptions() {
        this.keyOptions = {
            "ArrowUp": () => this.jump("up"),
            "ArrowDown": () => this.jump("down"),
            "ArrowLeft": () => this.run("left"),
            "ArrowRight": () => this.run("right"),
            "KeyW": () => this.jump("up"),
            "KeyS": () => this.jump("down"),
            "KeyA": () => this.run("left"),
            "KeyD": () => this.run("right")
        };
    }
    update() {
    }
    run(direction) {
        this.className = "";
        this.classList.add('run');
        if (direction == "right") {
            this.x += 10;
        }
        else {
            this.style.transform = "scaleX(-1)";
            this.x -= 10;
        }
        this.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    }
    jump(direction) {
        this.className = "";
        this.classList.add('run');
        if (direction == "up") {
            this.y -= 10;
        }
        else {
            this.y += 10;
        }
        this.move();
    }
}
customElements.define('player-object', Player);
