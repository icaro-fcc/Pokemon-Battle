const defaultPokemonStatus = {
    life: 100,
    maxLife: 100,
    attack: 10,
    defense: 4
}

const pokemonsList = [
    {
        ...defaultPokemonStatus,
        name: 'PIKACHU',
        type: 'eletric',
        moves: [
            {name: 'THUNDERBOLT', type: 'eletric', strengthness: ['water', 'flying'], weakness: ['ground', 'grass'], color: 'yellow'},
            {name: 'QUICK ATTACK', type: 'normal', strengthness: [''], weakness: ['flying'], color: 'darkgray'}
        ]
    },
    
    {
        ...defaultPokemonStatus,
        name: 'BULBASAUR',
        type: 'grass',
        moves: [
            {name: 'RAZOR LEAF', type: 'grass', strengthness: ['ground', 'water', 'rock'], weakness: ['poison', 'fire', 'bug', 'flying'], color: 'green'},
            {name: 'CUT', type: 'normal', strengthness: [''], weakness: ['flying'], color: 'darkgray'}
        ]
    },
    
    {
        ...defaultPokemonStatus,
        name: 'CHARMANDER',
        type: 'fire',
        moves: [
            {name: 'FLAMETHROWER', type: 'fire', strengthness: ['bug', 'poison', 'grass', 'steel'], weakness: ['ground', 'water', 'rock'], color: 'red'},
            {name: 'SLASH', type: 'normal', strengthness: [''], weakness: ['flying'], color: 'darkgray'}
        ]
    },

    {
        ...defaultPokemonStatus,
        name: 'SQUIRTLE',
        type: 'water',
        moves: [
            {name: 'SURF', type: 'water', strengthness: ['ground', 'fire', 'rock'], weakness: ['grass', 'eletric'], color: 'dodgerblue'},
            {name: 'BODY SLAM', type: 'normal', strengthness: [''], weakness: ['flying'], color: 'darkgray'}
        ]
    },

    {
        ...defaultPokemonStatus,
        name: 'EKANS',
        type: 'poison',
        moves: [
            {name: 'EARTHQUAKE', type: 'ground', strengthness: ['eletric', 'fire', 'poison', 'rock', 'steel'], weakness: ['grass', 'water', 'ice'], color: 'chocolate'},
            {name: 'ACID', type: 'poison', strengthness: ['fairy', 'grass'], weakness: ['ground', 'psychic'], color: 'purple'}
        ]
    },
    
    {
        ...defaultPokemonStatus,
        name: 'HORSEA',
        type: 'water',
        moves: [
            {name: 'HYDRO PUMP', type: 'water', strengthness: ['ground', 'fire', 'rock'], weakness: ['grass', 'eletric'], color: 'dodgerblue'},
            {name: 'ICE BEAM', type: 'ice', strengthness: ['dragon', 'flying', 'grass', 'ground'], weakness: ['fighting', 'fire', 'rock', 'steel'], color: 'darkturquoise'}
        ]
    },
    
    {
        ...defaultPokemonStatus,
        name: 'BELLSPROUT',
        type: 'grass',
        moves: [
            {name: 'RAZOR LEAF', type: 'grass', strengthness: ['ground', 'water', 'rock'], weakness: ['poison', 'fire', 'bug', 'flying'], color: 'green'},
            {name: 'MEGA DRAIN', type: 'grass', strengthness: ['ground', 'water', 'rock'], weakness: ['poison', 'fire', 'bug', 'flying'], color: 'green'}
        ]
    },

    {
        ...defaultPokemonStatus,
        name: 'SANDSLASH',
        type: 'ground',
        moves: [
            {name: 'DIG', type: 'ground', strengthness: ['eletric', 'fire', 'poison', 'rock', 'steel'], weakness: ['grass', 'water', 'ice'], color: 'chocolate'},
            {name: 'SAND ATTACK', type: 'normal', strengthness: [], weakness: ['flying'], color: 'darkgray'}
        ]
    },

    {
        ...defaultPokemonStatus,
        name: 'PONYTA',
        type: 'fire',
        moves: [
            {name: 'FIRE BLAST', type: 'fire', strengthness: ['bug', 'poison', 'grass', 'steel'], weakness: ['ground', 'water', 'rock'], color: 'red'},
            {name: 'STOMP', type: 'normal', strengthness: [], weakness: ['flying'], color: 'darkgray'}
        ]
    },

    {
        ...defaultPokemonStatus,
        name: 'GEODUDE',
        type: 'rock',
        moves: [
            {name: 'ROCK THROW', type: 'rock', strengthness: ['bug', 'fire', 'flying', 'ice'], weakness: ['flying', 'grass', 'steel', 'water'], color: 'dimgray'},
            {name: 'EARTHQUAKE', type: 'ground', strengthness: ['eletric', 'fire', 'poison', 'rock', 'steel'], weakness: ['grass', 'water', 'ice'], color: 'chocolate'}
        ]
    },

    {
        ...defaultPokemonStatus,
        name: 'MAGNETON',
        type: 'eletric',
        moves: [
            {name: 'THUNDER SHOCK', type: 'eletric', strengthness: ['water', 'flying'], weakness: ['ground', 'grass'], color: 'yellow'},
            {name: 'SPARK', type: 'eletric', strengthness: ['water', 'flying'], weakness: ['ground', 'grass'], color: 'eletric'}
        ]
    },

    {
        ...defaultPokemonStatus,
        name: 'MUK',
        type: 'poison',
        moves: [
            {name: 'ACID SPRAY', type: 'poison', strengthness: ['fairy', 'grass'], weakness: ['ground', 'psychic'], color: 'purple'},
            {name: 'SHADOW PUNCH', type: 'ghost', strengthness: ['ghost', 'psychic'], weakness: ['dark', 'ghost'], color: 'darkslateblue'}
        ]
    }
];