## **Sketch Runner**

Mijn eigen spel voor programmeren 4: Een simpel spel waar er verschillende objecten uit
de wolken vallen. De munten kan je vangen, maar als je door een ander object wordt geraakt 
dan ben je dood. Je score wordt in de hoek van de speelscherm bijgehouden. Je kan het altijd
opnieuw proberen. 

**Op het moment is het spel alleen speelbaar op Google Chrome.**
**Demo op:** [Sketch Runner](https://adriaangiel.github.io/sketch_runner/)

#### Checklist
- [x] De code van het individuele project staat op GitHub.
- [x] De game is online speelbaar.
- [x] De game bevat minimaal één van de onderstaande extra uitdagingen.
- [x] De game heeft een startscherm en een eindscherm.
- [x] Er zijn geen bugs.
- [x] Het project maakt gebruik van deze OOP principes.
    - [x] Classes
    - [x] Encapsulation
    - [x] Composition
    - [x] Inheritance
- [x] De GitHub pagina bevat een ReadMe bestand. Dit bestand bevat:
- [x] Per bovengenoemd OOP principe een uitleg: waar is het toegepast, en waarom is het op die plek toegepast. De uitleg is inclusief code voorbeelden.
- [x] Een klassendiagram van de game.
- [x] Een link naar de peer review die in week 6 is gedaan

#### Extra opdrachten
- [] De game ziet er zeer verzorgd uit dankzij goed uitgewerkt UI design en artwork.
- [] De game bevat een hiscore lijst. Scores worden bewaard nadat de game is afgesloten.
- [] De game werkt met Canvas in plaats van DOM elementen
- [] De game bevat local of online multiplayer.
- [] De game werkt op mobiele schermen en ondersteunt touchscreen controls.
- [] De game maakt gebruik van device api's zoals de camera, microfoon, gyroscoop of GPS.
- [x] De game gebruikt een externe library uit de lijst in deze modulewijzer.

Ik gebruik binnen mijn game de library Howler om geluidjes te maken als je geraakt wordt door een object. 

Ik gebruik in deze spel alle technieken die we in de les hebben behandeld.
**Classes** 
In OOP programmeren wordt voor alles classes gebruikt. Met classes kan je variables(properties) en functies(methods) afschermen 
van andere delen van je code. Een class heeft zijn eigen logica, soms aangevuld door een parent class of interface. 

**Classes in mijn game:**
* Game
* Scene
* StartScene
* PlayScene
* EndScene
* GameObject
* Cloud
* Ground
* Player
* Score
* DropItem
* Coin
* Flame
* Spike

**Voorbeeld van een simpele class in mijn game:**

![Class](./docs/img/class.PNG)

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
 
**Voorbeeld in eigen code:** 

Properties

![ParentClass](./docs/img/encapsulation_properties.PNG)

Methods

![ChildClass](./docs/img/encapsulation_methods.PNG)


**Composition:**
Composition gebruik je als je bepaalde classes aan elkaar wilt koppelen. Zo is er in mijn game een Game class die meerdere Scene classes heeft. Elke Scene class heeft weer de Game
nodig. De Game class wordt dan opgeslagen in een propertie van de Scene class.
 
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
    
**Voorbeeld in eigen code**


Hier gebruik ik het specifiek zodat ik de functie changeGameScene van de Game kan gebruiken binnen de Scene classes

![Compo](./docs/img/composition.PNG)

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

**Voorbeeld in eigen code:** 

De GameObject Class wordt door heel veel andere classes overgeërfd. In de GameObject wordt de positie van de html element veranderd en is er een methode waarmee
een element bewogen kan worden.
![ParentClass](./docs/img/parentClass.PNG)

De Player class maakt bijvoorbeeld gebruik van de Gameobject
![ChildClass](./docs/img/childClass.PNG)


#### **Klassendiagram**
![Klassendiagram](./docs/img/klassdiagram-game.jpg)


#### Peer review
Link naar peer review:
[Dion Pisas](https://github.com/AdriaanGiel/sketch_runner/blob/master/Peer_Review_Dion_Pisas.md)
