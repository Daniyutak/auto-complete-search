Para a escolha da stack, estou enfrentando muitas novidades devido a ter conhecimento apenas de front-end, github, lógica de programação e processos de negócio. Esse projeto desafiador envolve conhecimentos de CI, back-end, docker, GraphQL entre outras coisas que descobrirei como estruturar na prática.

Para começar vamos comentar algumas informações importantes:
- o projeto não precisa se preocupar muito profundamente com otimização pois tem tamanho pequeno
	- Considerei utilizar Elasticsearch por ser uma tecnologia amplamente utilizada em sistemas de busca e presente em projetos públicos da organização. Entretanto, optei por não utilizá-lo, pois o desafio trabalha com um conjunto pequeno de sugestões e não exige funcionalidades complexas implementadas, tornando-se inviável para o projeto.

- não obtive ainda acesso ao repositório mencionado no enunciado do exercício, portanto irei trabalhar por meio de muita pesquisa

- ele será realizado em um período de tempo bem curto considerando não só o prazo como por conta de compromissos culturais que tenho, então iremos trabalhar com esse período. 

## Decisões de documentação

- Foi requisitado a existência do arquivo tasks.md, onde haverá o passo a passo para implementação do projeto. Irei aproveitá-lo de base como uma lista de "to-do", mas o principal monitoramento do progresso será via kanban github projects.

- Irei utilizar de algumas [boas-práticas](https://www.w3schools.com/GIT/git_best_practices.asp?remote=github) que conheço sobre github:
	- commits atômicos
	- PRs por issue solucionada
	- nomes descritivos para commits. 
	- proteger a main apenas com o necessário para realização de testes e monitoramento (pois não há mais ninguém além de mim para aprovar.)

## Arquitetura

- Utilizarei algumas linguagens, frameworks e outros aproveitando o que já tenho conhecimento: javascript, css, html para o front, juntamente com tailwind para agilizar e react para melhor experiência
- Utilizarei o github actions, pois tenho um pouco mais de familiaridade (apesar de muito pouca)
- O back-end será uma experiência completamente nova, então irei realizar mais pesquisas sobre como implementar GraphQL. Decidi pesquisar também sobre Apollo, uma biblioteca. Durante minhas pesquisas sobre GraphQL, houveram muitas menções sobre Hasura (que pode ser utilizado para implementar GraphQL com Bancos de dados) e Apollo, mas pesquisando melhor percebi que considerando que posso não utilizar Bancos de dados, se tornou melhor utilizar Apollo. Apollo conta com uma biblioteca front-end (Apollo Client) e para a API (Apollo Server).
