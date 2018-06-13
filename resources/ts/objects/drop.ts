/// <reference path="../core/gameObject.ts"/>

class Drop extends GameObject{
    private speedX : number = 0;
    private speedY : number = 0;
    private cloud : Cloud;

    constructor(x:number,y:number,cloud:Cloud)
    {
        // Call parent constructor
        super(x,y,false);

        // Set x and y speed
        this.speedX = -1;
        this.speedY = 1;

        // Fill with cloud object
        this.cloud = cloud;

        // Append coin to cloud
        this.cloud.appendChild(this);
    }

    /**
     * Method to change coin image and stopping the coin image from moving. At the end of the animation, remove coin;
     */
    public hit():void
    {
        // Change background image
        this.style.backgroundImage = "url('./img/touch-coin.png')";

        // Stop coin animation
        this.speedY = 0;
        this.style.left = "20px";
        this.style.top = "20px";
        this.speedX = -3;

        // Wait half a second before removing coin
        setTimeout(()=>{
            this.remove();
        }, 500);

    }

    /**
     * Method to move coin
     */
    public move():void
    {
        // Move coin based on x and y speed variables
        this.y += this.speedY;
        this.x += this.speedX;

        super.move()
    }
}

// set custom element
customElements.define('drop-object', Drop);