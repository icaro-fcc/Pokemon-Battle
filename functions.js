//Knight or Sorcerer
//LittleMonster or BigMonster

const defaultPokemonStatus = {
    life: 100,
    maxLife: 100,
    attack: 10,
    defense: 4
}

const pokemonsList = [
    {
        ...defaultPokemonStatus,
        name: 'Pikachu',
        type: 'eletric',
        moves: [
            {name: 'thunderbolt', type: 'eletric', strengthness: ['water', 'flying'], weakness: ['ground', 'grass']},
            {name: 'quick attack', type: 'normal', strengthness: [''], weakness: ['flying']}
        ]
    },
    
    {
        ...defaultPokemonStatus,
        name: 'Bulbasaur',
        type: 'grass',
        moves: [
            {name: 'razor leaf', type: 'grass', strengthness: ['ground', 'water', 'rock'], weakness: ['poison', 'fire', 'bug', 'flying']},
            {name: 'cut', type: 'normal', strengthness: [''], weakness: ['flying']}
        ]
    },
    
    {
        ...defaultPokemonStatus,
        name: 'Charmander',
        type: 'fire',
        moves: [
            {name: 'flamethrower', type: 'fire', strengthness: ['bug', 'poison', 'grass', 'steel'], weakness: ['ground', 'water', 'rock']},
            {name: 'slash', type: 'normal', strengthness: [''], weakness: ['flying']}
        ]
    },

    {
        ...defaultPokemonStatus,
        name: 'Squirtle',
        type: 'water',
        moves: [
            {name: 'surf', type: 'water', strengthness: ['ground', 'fire', 'rock'], weakness: ['grass', 'eletric']},
            {name: 'body slam', type: 'normal', strengthness: [''], weakness: ['flying']}
        ]
    },

    {
        ...defaultPokemonStatus,
        name: 'Ekans',
        type: 'poison',
        moves: [
            {name: 'earthquake', type: 'ground', strengthness: ['eletric', 'fire', 'poison', 'rock', 'steel'], weakness: ['grass', 'water', 'ice']},
            {name: 'acid', type: 'poison', strengthness: ['fairy', 'grass'], weakness: ['ground', 'psychic']}
        ]
    },
    
    {
        ...defaultPokemonStatus,
        name: 'Horsea',
        type: 'water',
        moves: [
            {name: 'hydro pump', type: 'water', strengthness: ['ground', 'fire', 'rock'], weakness: ['grass', 'eletric']},
            {name: 'ice beam', type: 'ice', strengthness: ['dragon', 'flying', 'grass', 'ground'], weakness: ['fighting', 'fire', 'rock', 'steel']}
        ]
    },
    
    {
        ...defaultPokemonStatus,
        name: 'Bellsprout',
        type: 'grass',
        moves: [
            {name: 'razor leaf', type: 'grass', strengthness: ['ground', 'water', 'rock'], weakness: ['poison', 'fire', 'bug', 'flying']},
            {name: 'mega drain', type: 'grass', strengthness: ['ground', 'water', 'rock'], weakness: ['poison', 'fire', 'bug', 'flying']}
        ]
    },

    {
        ...defaultPokemonStatus,
        name: 'Sandslash',
        type: 'ground',
        moves: [
            {name: 'dig', type: 'ground', strengthness: ['eletric', 'fire', 'poison', 'rock', 'steel'], weakness: ['grass', 'water', 'ice']},
            {name: 'sand attack', type: 'normal', strengthness: [], weakness: ['flying']}
        ]
    }
];

const charactersSetter = (player1Index) => {

    let player1;
    let player2;
        
        do {
            let player2Index = Math.floor((Math.random() * 4));

            player1 = pokemonsList[player1Index];
            player2 = pokemonsList[player2Index];     
            
        } while (player1 === player2);   //So a Pokemon won't battle against itself
                
        
        return [player1, player2];
}

const stage = {
    fighter1: null,
    fighter2: null,
    fighter1Element: null,
    fighter2Element: null,
    /*The declaration of these variables isn't necessary,
    but I'm keeping just to remember that they're the atributes being used in this obj*/



    start(fighter1, fighter2, fighter1Element, fighter2Element) {
        this.fighter1 = fighter1;
        this.fighter1Element = fighter1Element;
        this.fighter1Move1 = this.fighter1Element.querySelector('.move1');
        this.fighter1Move2 = this.fighter1Element.querySelector('.move2');

        this.fighter2 = fighter2;        
        this.fighter2Element = fighter2Element;        
        this.fighter2Move1 = this.fighter2Element.querySelector('.move1');
        this.fighter2Move2 = this.fighter2Element.querySelector('.move2');




        this.fighter1Element.querySelector('.fighter-img').style.backgroundImage = `url('./Images/${fighter1.name}.png')`;
        this.fighter1Move1.innerHTML = fighter1.moves[0].name;
        this.fighter1Move2.innerHTML = fighter1.moves[1].name;
        this.fighter1Move1.setAttribute('type', fighter1.moves[0].type);
        this.fighter1Move2.setAttribute('type', fighter1.moves[1].type);

        this.fighter2Element.querySelector('.fighter-img').style.backgroundImage = `url('./Images/${fighter2.name}.png')`;
        this.fighter2Move1.innerHTML = fighter2.moves[0].name;
        this.fighter2Move2.innerHTML = fighter2.moves[1].name;
        this.fighter2Move1.setAttribute('type', fighter2.moves[0].type);
        this.fighter2Move2.setAttribute('type', fighter2.moves[1].type);


        //Change it here, for the different types of moves...
        // this.fighter1Element.querySelector('.attackButton').addEventListener('click', ()=> this.doAttack(this.fighter1, this.fighter2));
        // this.fighter2Element.querySelector('.attackButton').addEventListener('click', ()=> this.doAttack(this.fighter2, this.fighter1));

        this.fighter1Move1.addEventListener('click', ()=> this.doAttack(this.fighter1, this.fighter2, fighter1.moves[0]));
        this.fighter1Move2.addEventListener('click', ()=> this.doAttack(this.fighter1, this.fighter2, fighter1.moves[1]));

        this.fighter2Move1.addEventListener('click', ()=> this.doAttack(this.fighter2, this.fighter1, fighter2.moves[0]));
        this.fighter2Move2.addEventListener('click', ()=> this.doAttack(this.fighter2, this.fighter1, fighter2.moves[1]));
    
        this.update();

        document.querySelector('.fightArea').style.display = 'flex';
        document.querySelector('.fightlog').style.display = 'block';
        document.querySelector('.choosingArea').style.display = 'none';
    },

    update() {
        //Fighter1
        this.fighter1Element.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`;
        
        let fighter1PercentageLife = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1Element.querySelector('.bar').style.width = `${fighter1PercentageLife}%`;
        


        //Fighter2
        this.fighter2Element.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`;
        
        let fighter2PercentageLife = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2Element.querySelector('.bar').style.width = `${fighter2PercentageLife}%`;
    },

    doAttack(attacking, attacked, move) {
        console.log(`${attacking.name} atacou ${attacked.name}`);
        console.log('Move chosen: ', move);
        console.log('Attacked type: ', attacked.type);

        if (attacking.life <= 0 || attacked.life <= 0) {
            console.log('Someone is already dead! The battle is over.');
            this.showLog('Someone is already dead! The battle is over.');
            return;
        }

        // if (attacking.moves)   check if the attacking.moveChosenStrong includes the attaacked type -> attacking.Attack = attaching.attack * 1.5 (super effective)
        //else if the attacking.moveChosenWeakness includes the attaacked type -> attacking.Attack = attaching.attack * 0.3 (not very effective)

            

        let attackFactor = (Math.random() * 1) + 1;
        console.log('Attack factor: ', attackFactor);
        let defenseFactor = (Math.random() * 1) + 1;
        //The final attack and defense power can be up to double of themselves

        let actualAttack = attacking.attack * attackFactor;
        let actualDefense = attacked.defense * defenseFactor;
        

        if (move.strengthness.includes(attacked.type)) {
            actualAttack = actualAttack * 1.5;
            console.log("It's super effective!!!");
        }
            
        else if (move.weakness.includes(attacked.type)) {
            actualAttack = actualAttack * 0.5;
            console.log("It's not very effective...");
        }
                

        let damage = Math.round((actualAttack - actualDefense));
        console.log('Attack power: ', actualAttack);
        console.log('Defense power: ', actualDefense);
        console.log('Damage: ', damage);


        if (damage > 0) {
            attacked.life -= damage;

            attacked.life = attacked.life < 0 ? 0 : attacked.life;
            /*Checking if the attacked life resulted in a negative number,
            if so, it'll show HP as zero (0) instead of a negative number*/

            this.showLog(`${attacking.name} hit ${attacked.name} with the damage of ${damage}`);

            console.log(`${attacking.name} hit ${attacked.name} with the damage of ${damage}`);
        }   else {
            this.showLog(`${attacked.name} conseguiu defender`);
            console.log(`${attacked.name} conseguiu defender`);
        }

        this.update();
    },

    showLog(msg) {
        const log = document.createElement("li");
        const textLog = document.createTextNode(msg);        
        const logArea = document.querySelector(".fightlog");
        if (logArea.lastChild.innerText == 'Someone is already dead! The battle is over.')
            return;
        else {
            log.appendChild(textLog);
            logArea.appendChild(log);
            logArea.scrollTo(0, document.body.scrollHeight);
        }
        
    }
};