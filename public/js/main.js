"use strict";
class Scene {
    constructor(game) {
        this.game = game;
    }
    resetScreen() {
        document.body.innerHTML = "";
    }
    switchScene(scene) {
        this.game.changeGameScene(scene);
    }
    checkCollision(a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    }
}
class StartScene extends Scene {
    constructor(game) {
        super(game);
        this.createStartScreen();
    }
    createStartScreen() {
        document.body.style.display = "flex";
        document.body.style.justifyContent = "center";
        document.body.style.alignItems = "center";
        document.body.style.backgroundImage = "url('./img/start-background.jpg')";
        let container = document.createElement('div');
        container.style.display = "flex";
        container.style.flexDirection = "column";
        container.style.height = "800px";
        container.style.minWidth = "600px";
        let start = document.createElement("img");
        start.src = "./img/start-button.png";
        start.style.width = "600px";
        start.classList.add('start-button');
        start.addEventListener('click', () => this.switchScene("playScene"));
        let title = document.createElement('img');
        title.src = "./img/title.png";
        title.style.position = "relative";
        title.classList.add('start-button');
        container.appendChild(start);
        container.appendChild(title);
        document.body.appendChild(container);
    }
    update() {
    }
}
class Game {
    constructor() {
        this.scenes = {
            startScene: StartScene,
            playScene: PlayScene,
            endScene: EndScene
        };
        this.activeScene = new this.scenes.startScene(this);
        this.gameLoop();
    }
    gameLoop() {
        this.activeScene.update();
        requestAnimationFrame(() => this.gameLoop());
    }
    getAvailableScenes() {
        return this.scenes;
    }
    changeGameScene(scene) {
        this.activeScene.resetScreen();
        this.activeScene = new this.scenes[scene](this);
    }
}
window.addEventListener('load', () => { new Game(); });
class GameObject extends HTMLElement {
    constructor(game, x, y) {
        super();
        this.game = game;
        this.x = x;
        this.y = y;
        this.move();
        document.body.appendChild(this);
        this.position = this.getBoundingClientRect();
    }
    getElementPosition() {
        return this.position;
    }
    move() {
        this.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    }
}
class Bug extends GameObject {
    constructor(game, x, y) {
        super(game, x, y);
    }
}
customElements.define('bug-object', Bug);
class Cat extends GameObject {
    constructor(game, x, y) {
        super(game, x, y);
    }
}
customElements.define('cat-object', Cat);
class Cloud extends GameObject {
    constructor(game, x, y, scene) {
        super(game, x, y);
        this.clouds = [
            'big-cloud-1',
            'big-cloud-2',
            'big-cloud-3',
            'small-cloud'
        ];
        let cloudName = this.clouds[Math.floor(Math.random() * this.clouds.length)];
        this.scene = scene;
        this.style.left = String(Math.floor(Math.random() * window.innerWidth)) + "px";
        this.style.top = String(Math.floor(Math.random() * (window.innerHeight / 3))) + "px";
        if (cloudName == 'small-cloud') {
            this.style.width = "50px";
            this.style.height = "50px";
        }
        this.style.backgroundImage = "url('./img/" + cloudName + ".png')";
    }
    rain() {
        let position = this.getBoundingClientRect();
        let rainDrop = new Drop(this.game, position.left, position.bottom);
        this.scene.addDropToWorld(rainDrop);
    }
}
customElements.define('cloud-object', Cloud);
class Coin extends GameObject {
    constructor(game, x, y) {
        super(game, x, y);
    }
}
customElements.define('coin-object', Coin);
class Drop extends GameObject {
    constructor(game, x, y) {
        super(game, x, y);
        this.xSpeed = -1;
        this.ySpeed = 1;
    }
    move() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        super.move();
    }
}
customElements.define('drop-object', Drop);
class Ground extends GameObject {
    constructor(game, x, y) {
        super(game, x, y);
    }
}
customElements.define('ground-object', Ground);
class Pipe extends GameObject {
    constructor(game, x, y) {
        super(game, x, y);
    }
}
customElements.define('pipe-object', Pipe);
class Platform extends GameObject {
    constructor(game, x, y) {
        super(game, x, y);
    }
}
customElements.define('platform-object', Platform);
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
class Spike extends GameObject {
    constructor(game, x, y) {
        super(game, x, y);
    }
}
customElements.define('spike-object', Spike);
class EndScene extends Scene {
    constructor(game) {
        super(game);
    }
    update() {
    }
}
class PlayScene extends Scene {
    constructor(game) {
        super(game);
        this.drops = [];
        this.clouds = [];
        this.gotHit = false;
        document.body.style.backgroundImage = "url('./img/background.jpg')";
        this.ground = new Ground(this.game, 0, 400);
        new Pipe(this.game, 250, this.ground.getElementPosition().top - 300);
        this.player = new Player(this.game, this.ground, this.ground.getElementPosition().left - 200, this.ground.getElementPosition().top - 300);
        for (let i = 0; i < 5; i++) {
            this.clouds.push(new Cloud(this.game, 0, 0, this));
        }
    }
    update() {
        this.player.update();
        console.log('test');
        this.makeItRain();
        this.checkIfPlayerHasBeenHit();
    }
    makeItRain() {
        console.log('makeitrain');
        while (!this.gotHit) {
            setTimeout(() => {
                this.clouds[Math.floor(Math.random() * this.clouds.length)].rain();
            }, 500);
        }
    }
    checkIfPlayerHasBeenHit() {
        for (let drop of this.drops) {
            if (this.checkCollision(drop.getBoundingClientRect(), this.player.getBoundingClientRect())) {
                console.log('hit');
            }
        }
    }
    addDropToWorld(drop) {
        this.drops.push(drop);
    }
}
//# sourceMappingURL=main.js.map