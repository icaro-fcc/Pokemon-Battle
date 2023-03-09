const player1 = createKnight('Ícaro');

console.log(player1.name);
console.log(player1.life);

const monster = createBigMonster();

console.log(monster.name);
console.log(monster.life);


stage.start(player1,
    monster,
    document.querySelector('#character'),
    document.querySelector('#monster')
);