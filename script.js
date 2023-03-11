const pokeOptions = document.querySelectorAll('.fighter-img');

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




