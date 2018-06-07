/// <reference path="../core/gameObject.ts"/>
/// <reference path="../game.ts"/>
class Cloud extends GameObject{

    clouds:string[] = [
      'big-cloud-1',
      'big-cloud-2',
      'big-cloud-3',
      'small-cloud'
    ];

    constructor(game:Game,x:number,y:number)
    {
        super(game,x,y);
        let cloudName = this.clouds[Math.floor(Math.random() * this.clouds.length)];

        this.style.left = String(Math.floor(Math.random() * window.innerWidth)) + "px";
        this.style.top = String(Math.floor(Math.random() * (window.innerHeight / 3))) + "px";

        if(cloudName == 'small-cloud'){
            this.style.width = "50px";
            this.style.height = "50px";
        }

        this.style.backgroundImage = "url('./img/" + cloudName + ".png')";
    }

}

customElements.define('cloud-object', Cloud);