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
    static random(min, max) {
        return Math.floor(Math.random() * max) + min;
    }
}
window.addEventListener('load', () => { new Game(); });
class GameObject extends HTMLElement {
    constructor(x, y, append = true) {
        super();
        this.x = 0;
        this.y = 0;
        this.x = x;
        this.y = y;
        if (append) {
            document.body.appendChild(this);
        }
    }
    move() {
        this.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    }
}
class Cloud extends GameObject {
    constructor(x, y, scene) {
        super(x, y);
        this.clouds = [
            'big-cloud-1',
            'big-cloud-2',
            'big-cloud-3',
            'small-cloud'
        ];
        this.speedX = 3;
        this.speedMultiplier = 1;
        this.loops = 0;
        let cloudName = this.clouds[Math.floor(Math.random() * this.clouds.length)];
        this.scene = scene;
        if (cloudName == 'small-cloud') {
            this.style.width = "50px";
            this.style.height = "50px";
        }
        this.classList.add('flex');
        this.classList.add('flex-center');
        this.style.backgroundImage = "url('./img/" + cloudName + ".png')";
    }
    raiseCloudSpeed(amount) {
        if (this.speedX < 8) {
            this.speedX += Game.random(0, amount);
        }
    }
    update() {
        this.x += this.speedX;
        this.move();
        if (this.x > window.innerWidth / 2 + 150) {
            this.x = -1000;
            this.rain();
            this.raiseCloudSpeed(1 * this.speedMultiplier);
            this.loops++;
        }
        this.raiseSpeedMultiplier();
    }
    raiseSpeedMultiplier() {
        if (this.loops === 2) {
            this.speedMultiplier++;
            this.loops = 0;
        }
    }
    rain() {
        let rainDrop = new Drop(0, 0, this);
        this.scene.addDropToWorld(rainDrop);
    }
}
customElements.define('cloud-object', Cloud);
class Coin extends GameObject {
    constructor(x, y) {
        super(x, y);
    }
}
customElements.define('coin-object', Coin);
class Drop extends GameObject {
    constructor(x, y, cloud) {
        super(x, y, false);
        this.speedX = 0;
        this.speedY = 0;
        this.speedX = -1;
        this.speedY = 1;
        this.cloud = cloud;
        this.cloud.appendChild(this);
    }
    hit() {
        this.style.backgroundImage = "url('./img/touch-coin.png')";
        this.speedY = 0;
        this.style.left = "20px";
        this.style.top = "20px";
        this.speedX = -3;
        setTimeout(() => {
            this.remove();
        }, 500);
    }
    move() {
        this.y += this.speedY;
        this.x += this.speedX;
        super.move();
    }
}
customElements.define('drop-object', Drop);
class Ground extends GameObject {
    constructor(x, y) {
        super(x, y);
        this.move();
    }
}
customElements.define('ground-object', Ground);
class Player extends GameObject {
    constructor(ground, x, y) {
        super(x, y);
        this.ground = ground;
        this.move();
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
    constructor(x, y) {
        super(x, y);
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
        document.body.style.backgroundImage = "url('./img/background.jpg')";
        this.ground = new Ground(0, 400);
        this.player = new Player(this.ground, this.ground.getBoundingClientRect().left - 200, this.ground.getBoundingClientRect().top - 300);
        for (let i = 0; i < 20; i++) {
            let cloud = new Cloud(Math.floor(Math.random() * -window.outerWidth), Math.floor(Math.random() * -300) + -100, this);
            cloud.rain();
            this.clouds.push(cloud);
        }
    }
    update() {
        this.player.update();
        for (let cloud of this.clouds) {
            cloud.update();
        }
        for (let drop of this.drops) {
            drop.move();
            this.checkIfPlayerHasBeenHit(drop);
        }
    }
    checkIfPlayerHasBeenHit(drop) {
        if (this.checkCollision(drop.getBoundingClientRect(), this.player.getBoundingClientRect())) {
            drop.hit();
        }
    }
    addDropToWorld(drop) {
        this.drops.push(drop);
    }
}
//# sourceMappingURL=main.js.map