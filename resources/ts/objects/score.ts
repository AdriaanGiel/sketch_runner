class Score extends GameObject{

    constructor()
    {
        super(0,500);
    }

    public update(currentScore:number):void
    {
        this.innerHTML = "Score: " + String(currentScore);
    }
}

customElements.define('score-points', Score);