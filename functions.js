//Knight or Sorcerer
//LittleMonster or BigMonster

const defaultPokemonStatus = {
    life: 100,
    maxLife: 100,
    attack: 10,
    defense: 5
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
    currentTurn: 'player2',
    /*The declaration of these variables isn't necessary,
    but I'm keeping just to remember that they're the atributes being used in this obj*/



    start(fighter1, fighter2, fighter1Element, fighter2Element) {
        this.fighter1 = fighter1;
        this.fighter1Element = fighter1Element;

        this.fighter1Move1 = document.querySelector('.p1Moves .move1');
        this.fighter1Move2 = document.querySelector('.p1Moves .move2');

        this.fighter2 = fighter2;        
        this.fighter2Element = fighter2Element;        
        // this.fighter2Move1 = this.fighter2Element.querySelector('.move1');
        // this.fighter2Move2 = this.fighter2Element.querySelector('.move2');



        this.fighter1Element.querySelector('.fighter-img').style.backgroundImage = `url('./Images/back/${fighter1.name}.png')`;
        this.fighter1Move1.innerHTML = fighter1.moves[0].name;
        this.fighter1Move2.innerHTML = fighter1.moves[1].name;
        this.fighter1Move1.setAttribute('type', fighter1.moves[0].type);
        this.fighter1Move2.setAttribute('type', fighter1.moves[1].type);

        this.fighter2Element.querySelector('.fighter-img').style.backgroundImage = `url('./Images/front/${fighter2.name}.png')`;
        // this.fighter2Move1.innerHTML = fighter2.moves[0].name;
        // this.fighter2Move2.innerHTML = fighter2.moves[1].name;
        // this.fighter2Move1.setAttribute('type', fighter2.moves[0].type);
        // this.fighter2Move2.setAttribute('type', fighter2.moves[1].type);





        this.fighter1Move1.addEventListener('click', ()=> this.doAttack(this.fighter1, this.fighter2, fighter1.moves[0]));
        this.fighter1Move2.addEventListener('click', ()=> this.doAttack(this.fighter1, this.fighter2, fighter1.moves[1]));

        // this.fighter2Move1.addEventListener('click', ()=> this.doAttack(this.fighter2, this.fighter1, fighter2.moves[0]));
        // this.fighter2Move2.addEventListener('click', ()=> this.doAttack(this.fighter2, this.fighter1, fighter2.moves[1]));
    
        this.update();

        document.querySelector(".battleInfoArea .info").innerHTML = `Select ${this.fighter1.name}'s attack`;

        document.querySelector('.fightArea').style.display = 'flex';
        document.querySelector('.battleInfoArea').style.display = 'flex';
        document.querySelector('.choosingArea').style.display = 'none';
        document.querySelector('.p1Moves').style.display = 'flex';
    },

    playerToggle() {
        if (this.currentTurn === 'player1')
            this.currentTurn = 'player2';
        else
            this.currentTurn = 'player1';
    },

    update() {
        //Fighter1
        this.fighter1Element.querySelector('.name').innerHTML = `${this.fighter1.name} - ${Math.round(this.fighter1.life)} HP`;
        
        let fighter1PercentageLife = (this.fighter1.life / this.fighter1.maxLife) * 100;
        let fighter1HPBar = this.fighter1Element.querySelector('.bar');
        fighter1HPBar.style.width = `${fighter1PercentageLife}%`;
        this.checkHPBar(fighter1PercentageLife, fighter1HPBar);
        


        //Fighter2
        this.fighter2Element.querySelector('.name').innerHTML = `${this.fighter2.name} - ${Math.round(this.fighter2.life)} HP`;
        
        let fighter2PercentageLife = (this.fighter2.life / this.fighter2.maxLife) * 100;
        let fighter2HPBar = this.fighter2Element.querySelector('.bar');
        fighter2HPBar.style.width = `${fighter2PercentageLife}%`;
        this.checkHPBar(fighter2PercentageLife, fighter2HPBar);

        this.playerToggle();

        if (this.fighter1.life > 0 && this.fighter2.life > 0 && this.currentTurn === 'player2')
            this.doPlayer2Attack();
        else if (this.fighter1.life <= 0) {
            console.log('Someone is already dead! The battle is over.');
            this.showLog(`${this.fighter1.name} is fainted!`, `${this.fighter2.name} won the battle!!`);
            return;
        } else if (this.fighter2.life <= 0) {
            this.showLog(`${this.fighter2.name} is fainted!`, `${this.fighter1.name} won the battle!!`);
            document.querySelector('.')
            return;
            };
        
    },

    checkHPBar(percentage, bar) {
        if (percentage < 60 && percentage > 20)
            bar.style.backgroundColor = 'yellow';
        else if (percentage < 20)
                    bar.style.backgroundColor = 'red';
    },



    doAttack(attacking, attacked, move) {
        console.log(`${attacking.name} atacou ${attacked.name}`);
        console.log('Move chosen: ', move);
        console.log('Attacked type: ', attacked.type);

        document.querySelector('.p1Moves').style.display = 'none';

        if (attacking.life <= 0 || attacked.life <= 0) {
            console.log('Someone is already dead! The battle is over.');
            this.showLog('Someone is already dead! The battle is over.');
            return;
        };


            

        let attackFactor = (Math.random() * 1) + 1;
        console.log('Attack factor: ', attackFactor);
        let defenseFactor = (Math.random() * 1) + 1;
        //The final attack and defense power can be up to double of themselves

        let actualAttack = attacking.attack * attackFactor;
        let actualDefense = attacked.defense * defenseFactor;
        

        if (move.strengthness.includes(attacked.type)) {
            actualAttack = actualAttack * 2;
            console.log("It's super effective!!!");
        }   else if (move.weakness.includes(attacked.type)) {
            actualAttack = actualAttack * 0.8;
            console.log("It's not very effective...");
            };  

        let damage = Math.round((actualAttack - actualDefense));

        let accuracy = Math.round((Math.random() * 10) + 1);
        console.log('Accuracy: ', accuracy);

        if (accuracy < 3)
            damage = 0;

        console.log('Attack power: ', actualAttack);
        console.log('Defense power: ', actualDefense);
        console.log('Damage: ', damage);


        if (damage > 0) {
            attacked.life -= damage;

            attacked.life = attacked.life < 0 ? 0 : attacked.life;
            /*Checking if the attacked life resulted in a negative number,
            if so, it'll show HP as zero (0) instead of a negative number*/


            if (damage > 25)
                this.showLog(`${attacking.name} used ${move.name}`, `It's super effective!!`);
            else if (damage < 8)
                    this.showLog(`${attacking.name} used ${move.name}`, `It's not very effective...`);
                    else
                        this.showLog(`${attacking.name} used ${move.name}`);

            console.log(`${attacking.name} hit ${attacked.name} with the damage of ${damage}`);
        }   else {
            this.showLog(`${attacking.name} used ${move.name}`, `Oops, attack missed!`);
            console.log(`${attacked.name} conseguiu defender`);
        }

        this.update();
    },

    doPlayer2Attack() {
        let player2MoveIndex = Math.round((Math.random() * 1));
        let player2Move = this.fighter2.moves[player2MoveIndex];
        console.log('Player 2 move: ', this.fighter2.moves[player2MoveIndex]);
        setTimeout(() => {
            this.doAttack(this.fighter2, this.fighter1, player2Move);
            setTimeout(() => {
                this.showContinueButton();
            }, 2500);
        }, 3000);
        
    },

    showLog(msg, msg2) {       
        document.querySelector(".battleInfoArea .info").innerHTML = msg;
        document.querySelector(".battleInfoArea .subInfo").innerHTML = '';
        if (msg2) {
            setTimeout(() => {
                document.querySelector(".battleInfoArea .subInfo").innerHTML = msg2;
            }, 1500);
        }
        
    },

    showContinueButton() {
        let okButton = document.querySelector(".battleInfoArea .continueButton");

        if (this.fighter1.life > 0 && this.fighter2.life > 0) {
            okButton.style.display = 'block';

            okButton.addEventListener('click', ()=> {
                okButton.style.display = 'none';
                this.showLog(`Select ${this.fighter1.name}'s attack`);
                document.querySelector('.p1Moves').style.display = 'flex';
            });
        };
    }
};