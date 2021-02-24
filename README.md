
<div align="center">
    <img alt="twitter_profile" src="twitterchallprofile.png" />
<div/>


<h3 align="center">Lista do Challenger</h2></h3>
<p align="center">Um bot que tweeta quem saiu e quem entrou no top 200 (challenger) no league of legends.</p>
<p align="center">Bot ativo na conta <a href="https://twitter.com/listadochall">@listadochall</a></p>
<div align="center">
    <a href="https://twitter.com/listadochall" target="_blank">
        <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/listadochall?label=Siga%20no%20Twitter&style=social">
    </a>
</div>


## Como funciona?

Faz um scrapping no site leagueofgraphs.com e salva o nick de todos os challengers em newList.json e em seguida compara com todos os nicks salvos em oldList.json. Os nicks que não estão presentes em oldList.json são salvos em newChallPlayes.json e os players que estão presentes em oldList.json mas não em newList.json são salvos em oldChallPlayers.json. Após toda essa comparação o arquivo oldList.json é atualizado com a nova lista de challengers.
