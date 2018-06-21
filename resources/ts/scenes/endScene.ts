/// <reference path="../core/scene.ts"/>
class EndScene extends Scene {
    constructor(game:Game)
    {
        super(game);
        this.createEndScreen();

    }

    private createEndScreen():void {
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

    update(): void
    {

    }
}