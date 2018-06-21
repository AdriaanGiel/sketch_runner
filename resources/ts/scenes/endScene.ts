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
        let restart = document.createElement('restart-button');
        let score = document.createElement('score-object');
        let div = document.createElement('div');
        let scoreNumber = document.createElement('span');

        restart.addEventListener('click',() => {
            this.game.score.amount = 0;
            this.game.changeGameScene('playScene');
        });


        scoreNumber.style.position = 'relative';
        scoreNumber.style.width = '100%';
        scoreNumber.style.bottom = '100px';

        this.game.score.createScore(true,scoreNumber);
        div.classList.add('flex');
        div.classList.add('flex-center');
        div.classList.add('flex-column');
        div.style.height = "100%";
        div.style.width = "100%";

        div.appendChild(restart);
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