/// <reference path="../core/gameObject.ts"/>
/// <reference path="../game.ts"/>

class Cloud extends GameObject{

    private clouds:string[] = [
      'big-cloud-1',
      'big-cloud-2',
      'big-cloud-3',
      'small-cloud'
    ];
    private keepRaining:boolean = true;
    private speedX:number = 3;
    private scene:PlayScene;
    private dropItems:string[] = [
      'coin','flame','spike'
    ];
    private items:DropItem[] = {
        coin: Coin,
        spike: Spike,
        flame: Flame
    };


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

    public update():void
    {
        if(this.x > document.body.getBoundingClientRect().right){
            this.x = Game.random(-100,-300);
            this.rain();
        }
        this.x += this.speedX;
        this.move();
    }


    public rain():void
    {
        if(this.offsetParent !== null)
        {
            let timer = setTimeout(() => {
                if(this.keepRaining){
                    let rainDrop = new this.items[this.dropItems[Game.random(0,this.dropItems.length)]](this.scene,this);
                    this.scene.addDropToWorld(rainDrop);
                }

            }, Math.floor(Math.random() * 7000) + 1500);

            if(!this.keepRaining){
                clearTimeout(timer);
            }
        }
    }

}

customElements.define('cloud-object', Cloud);