## **Sketch Runner**

Mijn eigen spel voor programmeren 4: Een simpel spel waar er verschillende objecten uit
de wolken vallen. De munten kan je vangen, maar als je door een ander object wordt geraakt 
dan ben je dood. Je score wordt in de hoek van de speelscherm bijgehouden. Je kan het altijd
opnieuw proberen. 

**Op het moment is het spel alleen speelbaar op Google Chrome.**
**Demo op:** https://adriaangiel.github.io/sketch_runner/

Ik gebruik in deze spel alle technieken die we in de les hebben behandeld.

**Encapsulation:**
Encapsulation gebruik ik om mijn classes te beschermen en alles alleen beschikbaar te hebben in de juiste class.
Voor encapsulation kan je verschillende modifiers gebruiken om de juiste doel te bereiken. 

* **Private** gebruik je als je wilt dat de properties en/of method alleen beschikbaar zijn binnen de functie.

        class object{
            // properties en methods hebben allemaal de private modifier ervoor staan
            private prop1:string;
            private prop2:string;
            
            private function1()
            {
            
            }
        }

* **Protected** gebruikt je bij inheritence. Hiermee maak je de properties en/of method van een parent class beschikbaar voor de class
die overerft van de parent. 

        class Object{
            // properties en methods hebben allemaal de protected modifier ervoor staan
            protected prop1:string;
            protected prop2:string;
            
            protected function1()
            {
            
            }
        }

* **Public** gebruik je als je wilt dat de properties en/of method beschikbaar is voor iedereen die een class heeft geïnstantieerd.
        
        class Object{
            // properties en methods hebben allemaal de public modifier ervoor staan
            public prop1:string;
            public prop2:string;
            
            public function1()
            {
            
            }
        }


* **Static** gebruik je als je een propertie en/of method beschikbaar wilt maken voor de hele applicatie zonder dat een class is geïnstantieerd

        class Object{
            // properties en methods hebben de static modifier ervoor staan
            static prop1:string;
            
            static function1()
            {
            
            }
        }
        
        class Object2{
            
            private doSomething()
            {
               // Kan worden gelezen zonder eerst een nieuwe object aan te maken. 
               console.log(Object.prop1)
            
               // Kan aangeroepen worden zonder eerst een nieuwe Object aan te maken. 
               Object.function1(); 
            }
            
        }

Om je applicatie zo veilig mogelijk te schrijven is de standaard eigenlijk dat alles private is. Als je een propertie wilt kunnen ophalen of 
kunnen veranderen, maak je getters en setters. Voor functies gebruik je public alleen als de functie buiten de class moet kunnen worden aangeroepen.
 

**Composition:**
Composition gebruik je als je een class wilt meegeven aan een ander class. Je stuurt dan een class mee als een parameter in een class zijn constructor.
Deze class parameter sla je dan op in een propertie van de class.

voorbeeld:
    
    class Water{
        // propertie wordt voorbereid om een Fish object te krijgen
        private fish:Fish;
    
        // In de constructor word een Fish object meegegeven
        constructor(fish:Fish)
        {
            // propertie wordt gevult met de Fish object
            this.fish = fish;
        }
    }
    
    // Fish object
    class Fish{
        private x:number;
        private y:number;
        
        constructor(x:number,y:number)
        {
            this.x = x;
            this.y = y;
        }
    }

**Inheritence:**

Inheritence gebruik ik zodat ik geen dubbele code hoef te schrijven. Ik maak een class waar de basis methods en properties in zitten. Als ik dan 
een nieuwe class ga aanmaken kan ik deze alles van de eerste class laten overerven.

voorbeeld:

    class Animal{
        // De standaard properties van een dier
        protected name:string;
        protected noise:string;
        
        // In de constructor wordt alles gevuld
        constructor(name:string,noise:string)
        {
            this.name = name;
            this.noise = noise;
        }
        
        // Standaard method om geluid te maken (nu alleen een console.log)
        public makeNoise()
        {
            console.log(this.noise);            
        }
    }

    // class Dog erft alles van animal over
    class Dog extends Animal{
        constructor()
        {
            // Hier zetten we de naam en geluid van een hond
            super('hond','Woef!');            
        }
    }
    
    // Hond kan gebruik maken van de makeNoise method zonder hem zelf aan hoeven te maken
    let hond = new Dog();
    hond.makeNoise()





Het spel is op 13-06-2018 nog niet af.