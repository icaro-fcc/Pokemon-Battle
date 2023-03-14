const defaultPokemonStatus = {
    life: 100,
    maxLife: 100,
    attack: 10,
    defense: 5
}

const pokemonsList = [
    {
        ...defaultPokemonStatus,
        name: 'PIKACHU',
        type: 'eletric',
        moves: [
            {name: 'THUNDERBOLT', type: 'eletric', strengthness: ['water', 'flying'], weakness: ['ground', 'grass']},
            {name: 'QUICK ATTACK', type: 'normal', strengthness: [''], weakness: ['flying']}
        ]
    },
    
    {
        ...defaultPokemonStatus,
        name: 'BULBASAUR',
        type: 'grass',
        moves: [
            {name: 'RAZOR LEAF', type: 'grass', strengthness: ['ground', 'water', 'rock'], weakness: ['poison', 'fire', 'bug', 'flying']},
            {name: 'CUT', type: 'normal', strengthness: [''], weakness: ['flying']}
        ]
    },
    
    {
        ...defaultPokemonStatus,
        name: 'CHARMANDER',
        type: 'fire',
        moves: [
            {name: 'FLAMETHROWER', type: 'fire', strengthness: ['bug', 'poison', 'grass', 'steel'], weakness: ['ground', 'water', 'rock']},
            {name: 'SLASH', type: 'normal', strengthness: [''], weakness: ['flying']}
        ]
    },

    {
        ...defaultPokemonStatus,
        name: 'SQUIRTLE',
        type: 'water',
        moves: [
            {name: 'SURF', type: 'water', strengthness: ['ground', 'fire', 'rock'], weakness: ['grass', 'eletric']},
            {name: 'BODY SLAM', type: 'normal', strengthness: [''], weakness: ['flying']}
        ]
    },

    {
        ...defaultPokemonStatus,
        name: 'EKANS',
        type: 'poison',
        moves: [
            {name: 'EARTHQUAKE', type: 'ground', strengthness: ['eletric', 'fire', 'poison', 'rock', 'steel'], weakness: ['grass', 'water', 'ice']},
            {name: 'ACID', type: 'poison', strengthness: ['fairy', 'grass'], weakness: ['ground', 'psychic']}
        ]
    },
    
    {
        ...defaultPokemonStatus,
        name: 'HORSEA',
        type: 'water',
        moves: [
            {name: 'HYDRO PUMP', type: 'water', strengthness: ['ground', 'fire', 'rock'], weakness: ['grass', 'eletric']},
            {name: 'ICE BEAM', type: 'ice', strengthness: ['dragon', 'flying', 'grass', 'ground'], weakness: ['fighting', 'fire', 'rock', 'steel']}
        ]
    },
    
    {
        ...defaultPokemonStatus,
        name: 'BELLSPROUT',
        type: 'grass',
        moves: [
            {name: 'RAZOR LEAF', type: 'grass', strengthness: ['ground', 'water', 'rock'], weakness: ['poison', 'fire', 'bug', 'flying']},
            {name: 'MEGA DRAIN', type: 'grass', strengthness: ['ground', 'water', 'rock'], weakness: ['poison', 'fire', 'bug', 'flying']}
        ]
    },

    {
        ...defaultPokemonStatus,
        name: 'SANDSLASH',
        type: 'ground',
        moves: [
            {name: 'DIG', type: 'ground', strengthness: ['eletric', 'fire', 'poison', 'rock', 'steel'], weakness: ['grass', 'water', 'ice']},
            {name: 'SAND ATTACK', type: 'normal', strengthness: [], weakness: ['flying']}
        ]
    },

    {
        ...defaultPokemonStatus,
        name: 'PONYTA',
        type: 'fire',
        moves: [
            {name: 'FIRE BLAST', type: 'fire', strengthness: ['bug', 'poison', 'grass', 'steel'], weakness: ['ground', 'water', 'rock']},
            {name: 'STOMP', type: 'normal', strengthness: [], weakness: ['flying']}
        ]
    },

    {
        ...defaultPokemonStatus,
        name: 'GEODUDE',
        type: 'rock',
        moves: [
            {name: 'ROCK THROW', type: 'rock', strengthness: ['bug', 'fire', 'flying', 'ice'], weakness: ['flying', 'grass', 'steel', 'water']},
            {name: 'EARTHQUAKE', type: 'ground', strengthness: ['eletric', 'fire', 'poison', 'rock', 'steel'], weakness: ['grass', 'water', 'ice']}
        ]
    },

    {
        ...defaultPokemonStatus,
        name: 'MAGNETON',
        type: 'eletric',
        moves: [
            {name: 'THUNDER SHOCK', type: 'eletric', strengthness: ['water', 'flying'], weakness: ['ground', 'grass']},
            {name: 'SPARK', type: 'eletric', strengthness: ['water', 'flying'], weakness: ['ground', 'grass']}
        ]
    },

    {
        ...defaultPokemonStatus,
        name: 'MUK',
        type: 'poison',
        moves: [
            {name: 'ACID SPRAY', type: 'poison', strengthness: ['fairy', 'grass'], weakness: ['ground', 'psychic']},
            {name: 'SHADOW PUNCH', type: 'ghost', strengthness: ['ghost', 'psychic'], weakness: ['dark', 'ghost']}
        ]
    }
];