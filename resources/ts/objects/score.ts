class Score extends GameObject{

    private _amount:number = 0;

    constructor(amount:number)
    {
        super(20,450);
        this.amount = amount;
    }

    public get amount():number
    {
        return this._amount;
    }

    public set amount(num:number)
    {
        this._amount = num;
    }

    public update():void
    {
        this.createScore();
    }

    public createScore(append:boolean = false, target:HTMLElement = document.body)
    {
        this.innerHTML = "";
        let sepaterateScore = String(this.amount);
        for(let num of sepaterateScore)
        {
            let scoreNumber = document.createElement('score-number');
            scoreNumber.style.backgroundImage = 'url("./img/'+ num +'.png")';

            this.appendChild(scoreNumber);
        }
        if(append){
            target.appendChild(this);
        }
    }
}

customElements.define('score-points', Score);