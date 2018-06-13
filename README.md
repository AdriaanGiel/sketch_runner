## **Sketch Runner**

Mijn eigen spel voor programmeren 4: Een simpel spel waar er verschillende objecten uit
de wolken vallen. De munten kan je vangen, maar als je door een ander object wordt geraakt 
dan ben je dood. Je score wordt in de hoek van de speelscherm bijgehouden. Je kan het altijd
opnieuw proberen. 

**Demo op:** https://adriaangiel.github.io/sketch_runner/

Ik gebruik in deze spel alle technieken die we in de les hebben behandeld.

**Encapsulation:**
Encapsulation gebruik ik om mijn classes te beschermen en alles alleen beschikbaar te hebben in de juiste class.
Voor encapsulation kan je verschillende modifiers gebruiken om de juiste doel te bereiken. 

* **Private** gebruik je als je wilt dat de properties en/of method alleen beschikbaar zijn binnen de functie.

        class object{
            private prop1:string;
            private prop2:string;
            
            private function1()
            {
            
            }
        }

* **protected** gebruikt je bij inheritence. Hiermee maak je de properties en/of method van een parent class beschikbaar voor de class
die overerft van de parent. 

        class Object{
            protected prop1:string;
            protected prop2:string;
            
            protected function1()
            {
            
            }
        }

* **public** gebruik je als je wilt dat de properties en/of method beschikbaar is voor iedereen die een class heeft geïnstantieerd.
        
        class Object{
            public prop1:string;
            public prop2:string;
            
            public function1()
            {
            
            }
        }


* **static** gebruik je als je een propertie en/of method beschikbaar wilt maken voor de hele applicatie zonder dat een class is geïnstantieerd

        class Object{
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
        private fish:Fish;
    
        constructor(fish:Fish)
        {
            this.fish = fish;
        }
    }
    
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

/*TODO*/

Het spel is op 13-06-2018 nog niet af.