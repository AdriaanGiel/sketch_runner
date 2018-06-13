/// <reference path="../core/gameObject.ts"/>
/// <reference path="../game.ts"/>

class Cloud extends GameObject{

    private clouds:string[] = [
      'big-cloud-1',
      'big-cloud-2',
      'big-cloud-3',
      'small-cloud'
    ];

    private speedX:number = 3;
    private speedMultiplier:number = 1;
    private loops:number = 0;
    private scene:PlayScene;

    constructor(x:number,y:number, scene:PlayScene)
    {
        super(x,y);
        let cloudName = this.clouds[Math.floor(Math.random() * this.clouds.length)];

        // set current scene
        this.scene = scene;

        // change dimensions if cloudName is the smallest cloud
        if(cloudName == 'small-cloud'){
            this.style.width = "50px";
            this.style.height = "50px";
        }


        // add class to cloud to center drop item
        this.classList.add('flex');
        this.classList.add('flex-center');

        // use a random cloud image
        this.style.backgroundImage = "url('./img/" + cloudName + ".png')";
    }

    private raiseCloudSpeed(amount:number)
    {
        if(this.speedX < 8)
        {
            this.speedX += Game.random(0,amount);
        }
    }

    public update()
    {
        this.x += this.speedX;
        this.move();

        if(this.x > window.innerWidth / 2 + 150){
            this.x = -1000;
            this.rain();
            this.raiseCloudSpeed(1 * this.speedMultiplier);
            this.loops++;
        }

        this.raiseSpeedMultiplier();
    }


    private raiseSpeedMultiplier()
    {
        if(this.loops === 2){

            this.speedMultiplier++;

            this.loops = 0;
        }
    }


    public rain():void
    {
        let rainDrop = new Drop(0, 0,this);

        this.scene.addDropToWorld(rainDrop);
    }

}

customElements.define('cloud-object', Cloud);