
function chamarApi() {
    const url = "https://free-to-play-games-database.p.rapidapi.com/api/games";

    const options = {
        method: "GET",
        headers: {
            "x-rapidapi-key": "4b486ef7e2mshfc7f90decb9ae84p1d5bb4jsnec0c2e8004fd",
            "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        }
    };

    fetch(url, options)
        .then(response => response.json())
        .then(dados => {
            const container = document.querySelector('#jogos-container');

            dados.map(jogo => {
                const card = document.createElement('div');
                card.classList.add("card");

                const img = document.createElement('img');
                img.src = jogo.thumbnail;

                const titulo = document.createElement('h3');
                titulo.textContent = jogo.title;

                const button = document.createElement('button');
                button.textContent = 'Mais detalhes';

                button.onclick = (e) => {
                    e.stopPropagation();
                    abrirModal(jogo);
                };

                card.onclick = () => abrirModal(jogo);

                card.appendChild(img);
                card.appendChild(titulo);
                card.appendChild(button);

                container.appendChild(card);
            });
        })
        .catch(error => console.error(error));

}
function chamarOutraApi(){
    const url = 'https://gamerpower.p.rapidapi.com/api/filter?platform=epic-games-store.steam.android&type=game.loot';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '4b486ef7e2mshfc7f90decb9ae84p1d5bb4jsnec0c2e8004fd',
		'x-rapidapi-host': 'gamerpower.p.rapidapi.com'
	}
};
 fetch(url, options)
        .then(response => response.json())
        .then(dados => {
            const container = document.querySelector('#jogos-container');

            dados.map(jogo => {
                const card = document.createElement('div');
                card.classList.add("card");

                const img = document.createElement('img');
                img.src = jogo.thumbnail;

                const titulo = document.createElement('h3');
                titulo.textContent = jogo.title;

                const button = document.createElement('button');
                button.textContent = 'Mais detalhes';

                button.onclick = (e) => {
                    e.stopPropagation();
                    abrirModal(jogo);
                };

                card.onclick = () => abrirModal(jogo);

                card.appendChild(img);
                card.appendChild(titulo);
                card.appendChild(button);

                container.appendChild(card);
            });
        })
        .catch(error => console.error(error));

        
}

function abrirModal(jogo) {
    document.getElementById('modal').style.display = 'flex';
    document.getElementById('modalImg').src = jogo.thumbnail;
    document.getElementById('modalTitle').innerText = jogo.title;
    document.getElementById('modalDesc').innerText = jogo.short_description;
    document.getElementById('modalDesc2').innerText = jogo.description;
    document.getElementById('modalBuy').href = jogo.game_url;
}

document.getElementById("close").addEventListener("click", () => {
    document.getElementById('modal').style.display = 'none';
});

window.onclick = (e) => {
    if (e.target === document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
};
chamarApi()
chamarOutraApi()