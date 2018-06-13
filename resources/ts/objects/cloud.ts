/// <reference path="../core/gameObject.ts"/>
/// <reference path="../game.ts"/>

class Cloud extends GameObject{

    private delays:string[] = [
        'delay-1',
        'delay-1',
        'delay-2',
        'delay-3',
        'delay-4',
        'delay-4',
        'delay-4',
        'delay-1',
        'delay-2',
        'delay-2',
        'delay-2',
        'delay-3',
        'delay-4',
        'delay-4',
        'delay-4',
        'delay-4',
        'delay-1',
        'delay-2',
        'delay-3',
        'delay-4',
    ];

    private clouds:string[] = [
      'big-cloud-1',
      'big-cloud-2',
      'big-cloud-3',
      'small-cloud'
    ];

    private scene:PlayScene;

    constructor(game:Game,x:number,y:number, scene:PlayScene)
    {
        super(game,x,y);
        let cloudName = this.clouds[Math.floor(Math.random() * this.clouds.length)];

        this.scene = scene;

        // this.style.left = String(Math.floor(Math.random() * window.innerWidth)) + "px";
        // this.style.top = String(Math.floor(Math.random() * (window.innerHeight / 3))) + "px";

        if(cloudName == 'small-cloud'){
            this.style.width = "50px";
            this.style.height = "50px";
        }

        this.style.backgroundImage = "url('./img/" + cloudName + ".png')";
        this.classList.add(this.delays[Math.floor(Math.random() * this.clouds.length)]);
    }

    public update()
    {
        // console.log('xvalue:', this.x);
        // console.log('window:', window.innerWidth);
        this.x += 3;
        this.move();

        if(this.x > window.innerWidth){

            // console.log('out');
        }

    }



    public rain():void
    {
        let position = this.getBoundingClientRect();

        let rainDrop = new Drop(this.game,position.left,position.top);

        this.scene.addDropToWorld(rainDrop);
    }

}

customElements.define('cloud-object', Cloud);