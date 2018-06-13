"use strict";
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
