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
        this._score = 0;
        this.activeScene = new this.scenes.playScene(this);
        this.gameLoop();
    }
    gameLoop() {
        this.activeScene.update();
        requestAnimationFrame(() => this.gameLoop());
    }
    get score() {
        return this._score;
    }
    set score(score) {
        this._score = score;
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
    checkIfElementHasGoneOutOfBounds(el) {
        let rect = el.getBoundingClientRect();
        return ((rect.top > window.innerHeight));
    }
    ;
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
class DropItem extends GameObject {
    constructor(scene, speedX, speedY, hitImage, cloud) {
        super(0, 0, false);
        this.sound = {
            src: '',
            loop: false
        };
        this.scene = scene;
        this.speedX = -1;
        this.speedY = speedY;
        this.hitImage = hitImage;
        this.cloud = cloud;
        document.body.appendChild(this);
        this.x = this.cloud.getBoundingClientRect().left;
        this.y = this.cloud.getBoundingClientRect().top;
        this.move();
    }
    hit() {
        this.stop();
        this.makeSound();
        this.changeImageAndRemoveItem();
    }
    makeSound() {
        let sound = new Howl({
            src: this.sound.src,
            loop: this.sound.loop,
            volume: 0.1
        });
        sound.play();
    }
    changeImageAndRemoveItem() {
        this.style.backgroundImage = "url('" + this.hitImage + "')";
        setTimeout(() => {
            this.scene.removeDropFromWorld(this);
            this.remove();
        }, 500);
    }
    stop() {
        this.speedY = 0;
    }
    move() {
        this.y += this.speedY;
        super.move();
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
        this.keepRaining = true;
        this.speedX = 3;
        this.dropItems = [
            'coin', 'flame', 'spike'
        ];
        this.items = {
            coin: Coin,
            spike: Spike,
            flame: Flame
        };
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
    update() {
        if (this.x > document.body.getBoundingClientRect().right) {
            this.x = Game.random(-100, -300);
            this.rain();
        }
        this.x += this.speedX;
        this.move();
    }
    rain() {
        if (this.offsetParent !== null) {
            let timer = setTimeout(() => {
                if (this.keepRaining) {
                    let rainDrop = new this.items[this.dropItems[Game.random(0, this.dropItems.length)]](this.scene, this);
                    this.scene.addDropToWorld(rainDrop);
                }
            }, Math.floor(Math.random() * 7000) + 1500);
            if (!this.keepRaining) {
                clearTimeout(timer);
            }
        }
    }
    stopRain() {
        this.keepRaining = false;
    }
}
customElements.define('cloud-object', Cloud);
class Coin extends DropItem {
    constructor(scene, cloud) {
        super(scene, -1, 1, './img/touch-coin.png', cloud);
        this.sound.src = './audio/coin.mp3';
    }
    hit() {
        super.hit();
        this.scene.addPointsToScore(10);
    }
}
customElements.define('coin-object', Coin);
class Flame extends DropItem {
    constructor(scene, cloud) {
        super(scene, -1, 1, './img/touch-coin.png', cloud);
        this.sound.src = './audio/flame.mp3';
    }
    hit() {
        super.hit();
        this.cloud.stopRain();
        this.scene.switchScene('endScene');
    }
}
customElements.define('flame-object', Flame);
class Ground extends GameObject {
    constructor(x, y) {
        super(x, y);
        this.move();
    }
}
customElements.define('ground-object', Ground);
class Player extends GameObject {
    constructor(ground, x, y) {
        super(x, y, false);
        this.ground = ground;
        this.ground.appendChild(this);
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
            "ArrowUp": () => this.climb("up"),
            "ArrowDown": () => this.climb("down"),
            "ArrowLeft": () => this.run("left"),
            "ArrowRight": () => this.run("right"),
            "KeyW": () => this.climb("up"),
            "KeyS": () => this.climb("down"),
            "KeyA": () => this.run("left"),
            "KeyD": () => this.run("right")
        };
    }
    run(direction) {
        this.className = "";
        let mirror = '';
        this.classList.add('run');
        if (direction == "right") {
            this.x += 10;
        }
        else {
            mirror = 'scaleX(-1)';
            this.x -= 10;
        }
        this.style.transform = "translate(" + this.x + "px, " + this.y + "px) " + mirror;
    }
    climb(direction) {
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
class Score extends GameObject {
    constructor() {
        super(0, 500);
    }
    update(currentScore) {
        this.innerHTML = "Score: " + String(currentScore);
    }
}
customElements.define('score-points', Score);
class Spike extends DropItem {
    constructor(scene, cloud) {
        super(scene, 2, 1, './img/touch-coin.png', cloud);
        this.sound.src = './audio/laser.mp3';
    }
    hit() {
        super.hit();
        this.scene.switchScene('endScene');
    }
}
customElements.define('spike-object', Spike);
class EndScene extends Scene {
    constructor(game) {
        super(game);
        this.createEndScreen();
    }
    createEndScreen() {
        document.body.style.backgroundImage = "url('./img/start-background.jpg')";
        let endScreen = document.createElement('end-screen');
        let endImg = document.createElement('end-img');
        let score = document.createElement('score-object');
        let div = document.createElement('div');
        let scoreNumber = document.createElement('span');
        scoreNumber.innerHTML = String(this.game.score);
        scoreNumber.style.fontSize = "55px";
        scoreNumber.style.marginTop = "2em";
        scoreNumber.style.color = "white";
        div.classList.add('flex');
        div.classList.add('flex-center');
        div.classList.add('flex-column');
        div.appendChild(score);
        div.appendChild(scoreNumber);
        document.body.appendChild(endImg);
        endScreen.appendChild(div);
        document.body.classList.add('endscreen');
        document.body.appendChild(endScreen);
    }
    update() {
    }
}
class PlayScene extends Scene {
    constructor(game) {
        super(game);
        this.dropItems = [];
        this.clouds = [];
        document.body.style.backgroundImage = "url('./img/background.jpg')";
        document.body.className = '';
        this.ground = new Ground(0, 400);
        this.scoreObject = new Score();
        this.player = new Player(this.ground, 0, 0);
        for (let i = 0; i < 12; i++) {
            let cloud = new Cloud(Math.floor(Math.random() * -window.outerWidth), Math.floor(Math.random() * 100), this);
            cloud.rain();
            this.clouds.push(cloud);
        }
    }
    update() {
        this.scoreObject.update(this.game.score);
        for (let cloud of this.clouds) {
            cloud.update();
        }
        for (let dropItem of this.dropItems) {
            dropItem.move();
            this.checkIfPlayerHasBeenHit(dropItem);
        }
    }
    addPointsToScore(amount) {
        this.game.score += amount;
    }
    checkIfPlayerHasBeenHit(dropItem) {
        if (this.checkCollision(dropItem.getBoundingClientRect(), this.player.getBoundingClientRect())) {
            dropItem.hit();
        }
    }
    addDropToWorld(dropItem) {
        this.dropItems.push(dropItem);
    }
    removeDropFromWorld(dropItem) {
        for (let i = 0; i < this.dropItems.length; i++) {
            if (Object.is(dropItem, this.dropItems[i])) {
                console.log('destroy');
            }
            else {
                console.log('not a match');
            }
        }
    }
}
//# sourceMappingURL=main.js.map