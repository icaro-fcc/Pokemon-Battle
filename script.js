for (let i = 0; i < pokemonsList.length; i++) {
    let pokeItem = document.createElement('div');
    pokeItem.classList.add('pokeOption');
    pokeItem.setAttribute('data-list-number', `${i}`);
    pokeItem.style.backgroundImage = `url('./Images/${pokemonsList[i].name}.png')`
    document.querySelector('.choosingArea').appendChild(pokeItem);
    console.log('aaa');
}


const pokeOptions = document.querySelectorAll('.pokeOption');

pokeOptions.forEach((item)=> {
    item.addEventListener('click', (element)=> {
        player1Choice = element.target.getAttribute('data-list-number');        
        
        let players = charactersSetter(player1Choice);

        //Start
        stage.start(players[0],
            players[1],
            document.querySelector('#character'),
            document.querySelector('#monster')
        );
    });
});


document.querySelector('.restart').addEventListener('click', ()=> {
    document.location.reload();
});

