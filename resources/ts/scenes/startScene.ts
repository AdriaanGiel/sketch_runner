/// <reference path="../core/scene.ts"/>
class StartScene extends Scene {

    constructor(game: Game) {
        super(game);
        // Run start screen setup
        this.createStartScreen();
    }

    /**
     * Method to setup the startscreen
     */
    private createStartScreen():void {
        document.body.style.backgroundImage = "url('./img/start-background.jpg')";
        document.body.classList.add('flex');
        document.body.classList.add('flex-center');

        let container = document.createElement('div');
        container.classList.add('flex');
        container.classList.add('flex-column');
        container.style.height = "100%";
        container.style.minWidth = "600px";

        let start = document.createElement("start-button");
        start.addEventListener('click', () => this.switchScene("playScene"));

        let title = document.createElement('img');
        title.src = "./img/title.png";
        title.style.width = '100%';
        title.style.position = 'relative';

        container.appendChild(title);
        container.appendChild(start);

        document.body.appendChild(container);
    }


    update():void
    {

    }

}