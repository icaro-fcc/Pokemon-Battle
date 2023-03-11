//Knight or Sorcerer
//LittleMonster or BigMonster

const player1PokemonsList = [
    {
        name: 'Pikachu',
        life: 100,
        maxLife: 100,
        attack: 20,
        defense: 6,
        type: 'eletric',
        strongAgainst: ['water'],
        weakAgainst: ['ground', 'grass']
    },
    
    {
        name: 'Bulbasaur',
        life: 100,
        maxLife: 100,
        attack: 16,
        defense: 6,
        type: 'grass',
        strongAgainst: ['ground', 'water'],
        weakAgainst: ['poison', 'fire']
    },
    
    {
        name: 'Charmander',
        life: 100,
        maxLife: 100,
        attack: 18,
        defense: 5,
        type: 'fire',
        strongAgainst: ['poison', 'grass'],
        weakAgainst: ['ground', 'water']
    },

    {
        name: 'Squirtle',
        life: 100,
        maxLife: 100,
        attack: 17,
        defense: 7,
        type: 'water',
        strongAgainst: ['ground'],
        weakAgainst: ['grass', 'water']
    }
];



// Enemy Pokémons bellow

const player2PokemonsList = [
    {
        name: 'Ekans',
        life: 100,
        maxLife: 100,
        attack: 16,
        defense: 4,
        type: 'poison'
    },
    
    {
        name: 'Horsea',
        life: 100,
        maxLife: 100,
        attack: 17,
        defense: 3,
        type: 'water'
    },
    
    {
        name: 'Bellsprout',
        life: 100,
        maxLife: 100,
        attack: 15,
        defense: 3,
        type: 'grass'
    },

    {
        name: 'Mewtwo',
        life: 500,
        maxLife: 500,
        attack: 28,
        defense: 10,
        type: 'normal'
    }
];

const charactersSetter = (player1Index) => {
        
        let player2Index = Math.floor((Math.random() * 4));

        let player1 = player1PokemonsList[player1Index];
        let player2 = player2PokemonsList[player2Index];

        if (player1.strongAgainst.includes(player2.type)) {
            console.log('Player 1 attack first: ', player1.attack);
            player1.attack *= 2;
            console.log('Player1 attack has been increased by 2');
            console.log('Player 1 attack after: ', player1.attack);

            
        }
            
        else if (player1.weakAgainst.includes(player2.type)) {
                console.log('Player 2 attack first: ', player2.attack);
                player2.attack *= 2;
                console.log('Player2 attack has been increased by 2');
                console.log('Player 2 attack after: ', player2.attack);
                
            }
                
        
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
        this.fighter2 = fighter2;
        this.fighter1Element = fighter1Element;
        this.fighter2Element = fighter2Element;

        this.fighter1Element.querySelector('.fighter-img').style.backgroundImage = `url('./Images/${fighter1.name}.png')`;
        this.fighter2Element.querySelector('.fighter-img').style.backgroundImage = `url('./Images/${fighter2.name}.png')`;

        this.fighter1Element.querySelector('.attackButton').addEventListener('click', ()=> this.doAttack(this.fighter1, this.fighter2));
        this.fighter2Element.querySelector('.attackButton').addEventListener('click', ()=> this.doAttack(this.fighter2, this.fighter1));
    
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

    doAttack(attacking, attacked) {
        // console.log(`${attacking.name} atacou ${attacked.name}`);

        if (attacking.life <= 0 || attacked.life <= 0) {
            console.log('Someone is already dead! The battle is over.');
            this.showLog('Someone is already dead! The battle is over.');
            return;
        }

        let attackFactor = (Math.random() * 2).toFixed(2);
        console.log('Attack factor: ', attackFactor);
        let defenseFactor = (Math.random() * 2).toFixed(2);
        //The final attack and defense power can be up to double of themselves

        const actualAttack = attacking.attack * attackFactor;
        const actualDefense = attacked.defense * defenseFactor;
        const damage = (actualAttack - actualDefense).toFixed(1);

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