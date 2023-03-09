const pokeOptions = document.querySelectorAll('.pokeOption');

pokeOptions.forEach((item)=> {
    item.addEventListener('click', (element)=> {
        player1Type = element.target.getAttribute('data-type');

        player2Type = getPlayer2();

        console.log(element.target.getAttribute('data-type'));
        //Start
        charactersSetter();
    });
});


const getPlayer2 = ()=> {
    let index = Math.round((Math.random() * 3));
    console.log('Index do Player 2: ', index);
    for (let i in player2PokemonsList) {
        return player2PokemonsList[i].type;
    }
}


// stage.start(player1,
//     monster,
//     document.querySelector('#character'),
//     document.querySelector('#monster')
// );