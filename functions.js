//Knight or Sorcerer
//LittleMonster or BigMonster

const player1PokemonsList = [
    {
        name: 'Pikachu',
        life: 120,
        maxLife: 120,
        attack: 16,
        defense: 6,
        type: 'eletric'
    },
    
    {
        name: 'Bulbasaur',
        life: 120,
        maxLife: 120,
        attack: 16,
        defense: 6,
        type: 'grass'
    },
    
    {
        name: 'Charmander',
        life: 120,
        maxLife: 120,
        attack: 16,
        defense: 6,
        type: 'fire'
    },

    {
        name: 'Squirtle',
        life: 120,
        maxLife: 120,
        attack: 16,
        defense: 6,
        type: 'water'
    }
];

// const defaultCharacter = {
//     name: '',
//     life: 1,
//     maxLife: 1,
//     attack: 0,
//     defense: 0
// }

// const createPikachu = () => {
//     return {
//     
//         name: 'Pikachu',
//         life: 100,
//         maxLife: 100,
//         attack: 10,
//         defense: 8
//     }
// }

// const createBulbasaur = () => {
//     return {
//     
//         name: 'Bulbasaur',
//         life: 100,
//         maxLife: 100,
//         attack: 14,
//         defense: 3
//     }
// }

// const createCharmander = () => {
//     return {
//     
//         name: 'Charmander',
//         life: 40,
//         maxLife: 40,
//         attack: 4,
//         defense: 4
//     }
// }

// const createSquirtle = () => {
//     return {
//     
//         name: 'Squirtle',
//         life: 120,
//         maxLife: 120,
//         attack: 16,
//         defense: 6
//     }
// }

// const createEkans = () => {
//     return {
//     
//         name: 'Ekans',
//         life: 120,
//         maxLife: 120,
//         attack: 16,
//         defense: 6
//     }
// }

// const createHorsea = () => {
//     return {
//     
//         name: 'Horsea',
//         life: 120,
//         maxLife: 120,
//         attack: 16,
//         defense: 6
//     }
// }

// const createBellsprout = () => {
//     return {
//     
//         name: 'Bellsprout',
//         life: 120,
//         maxLife: 120,
//         attack: 16,
//         defense: 6
//     }
// }

// const createSandslash = () => {
//     return {
//     
//         name: 'Sandslash',
//         life: 120,
//         maxLife: 120,
//         attack: 16,
//         defense: 6
//     }
// }

const player2PokemonsList = [
    {
        name: 'Ekans',
        life: 120,
        maxLife: 120,
        attack: 16,
        defense: 6,
        type: 'poison'
    },
    
    {
        name: 'Horsea',
        life: 120,
        maxLife: 120,
        attack: 16,
        defense: 6,
        type: 'water'
    },
    
    {
        name: 'Bellsprout',
        life: 120,
        maxLife: 120,
        attack: 16,
        defense: 6,
        type: 'grass'
    },

    {
        name: 'Sandslash',
        life: 120,
        maxLife: 120,
        attack: 16,
        defense: 6,
        type: 'ground'
    }
];

const charactersSetter = (player1, player2) => {

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

        this.fighter1Element.querySelector('.attackButton').addEventListener('click', ()=> this.doAttack(this.fighter1, this.fighter2));
        this.fighter2Element.querySelector('.attackButton').addEventListener('click', ()=> this.doAttack(this.fighter2, this.fighter1));
    
        this.update();

        document.querySelector('.fightArea').style.display = 'flex';
        document.querySelector('.fightlog').style.display = 'block';
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