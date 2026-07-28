Para a escolha da stack, estou enfrentando muitas novidades devido a ter conhecimento apenas de front-end, github, lógica de programação e processos de negócio. Esse projeto desafiador envolve conhecimentos de CI, back-end, docker, GraphQL entre outras coisas que descobrirei como estruturar na prática.

Para começar vamos comentar algumas informações importantes:
- o projeto não precisa se preocupar muito profundamente com otimização pois tem tamanho pequeno
	- Considerei utilizar Elasticsearch por ser uma tecnologia amplamente utilizada em sistemas de busca e presente em projetos públicos da organização. Entretanto, optei por não utilizá-lo, pois o desafio trabalha com um conjunto pequeno de sugestões e não exige funcionalidades complexas implementadas, tornando-se inviável para o projeto.

- não obtive ainda acesso ao repositório mencionado no enunciado do exercício, portanto irei trabalhar por meio de muita pesquisa

- ele será realizado em um período de tempo bem curto

## Decisões de documentação

- Foi requisitado a existência do arquivo tasks.md, onde haverá o passo a passo para implementação do projeto. Irei aproveitá-lo de base como uma lista de "to-do", mas o principal monitoramento do progresso será via kanban github projects.

- Irei utilizar de algumas [boas-práticas](https://www.w3schools.com/GIT/git_best_practices.asp?remote=github) que conheço sobre github:
	- commits atômicos
	- PRs por issue solucionada
	- nomes descritivos para commits. 
	- fluxo baseado em Pull Requests, microtarefas em branchs específicas e integrada à `main` por meio de um PR. A branch principal possui proteção contra pushes diretos, garantindo que todas as alterações passem pelo mesmo fluxo de revisão utilizado em equipes de desenvolvimento.

- O design do readme foi feito com base nos projetos que fiz anteriormente, com descrição do projeto feita por mim, tecnologias e outros documentados de forma inicial por agente de IA
## Arquitetura

- Utilizarei algumas linguagens, frameworks e outros aproveitando o que já tenho conhecimento: javascript, css, html para o front, juntamente com tailwind para agilizar e react para melhor experiência
- Utilizarei o github actions, pois tenho um pouco mais de familiaridade (apesar de muito pouca)
- O back-end será uma experiência completamente nova, então irei realizar mais pesquisas sobre como implementar GraphQL. Decidi pesquisar também sobre Apollo, uma biblioteca. Durante minhas pesquisas sobre GraphQL, houveram muitas menções sobre Hasura (que pode ser utilizado para implementar GraphQL com Bancos de dados) e Apollo, mas pesquisando melhor percebi que considerando que posso não utilizar Bancos de dados, se tornou melhor utilizar Apollo. Apollo conta com uma biblioteca front-end (Apollo Client) e para a API (Apollo Server).

## Usos de IA:

### - Algumas preocupações
- É necessário tomar cuidado com o vazamento de dados e não expor informações sensíveis, como bancos de dados, chaves e outros. Assim, vale reforçar que estou expondo ao chat o mínimo necessário
- Houveram casos de vazamento de conversas no claude essa semana, mas apenas para conversas compartilhadas
- Também é extremamente importante verificar, seja por meio de outras ferramentas, documentações, tutoriais, os passos seguidos. Muito do que estaremos desenvolvendo são novidades para mim, então utilizarei o agente para criar uma base, irei pesquisar o que está acontecendo no código via documentação e google para checar se está tudo certo.
_________________________________________________________

### - Usos no código
- Primeiramente, utilizei para pedir informações e criar uma função teste do backend. Importante reforçar que inicialmente o agente sugeriu o uso de uma versão recente do Apollo Server, mas isso complicaria muito o desenvolvimento em curto prazoo. Para projetos de maior tamanho e com outros objetivos, seria recomendado o uso da versão mais recente, mas como o objetivo do desafio era demonstrar organização, arquitetura e qualidade da implementação do autocomplete, optei por uma versão do Apollo Server cuja API é mais simples e bem documentada. Isso me permitiu concentrar o tempo na lógica da aplicação em vez de gastar boa parte do prazo configurando a infraestrutura.

## Usos de open-source:
- primeiramente o gitignore, feito com base no [gitignore do github](https://github.com/github/gitignore)
- README, baseado no [template](https://github.com/petsi-each/pet-sites-boilerplate) feito pela organização que participei e depois readaptado. Como é uma questão de documentação inicial e foi tomado cuidado, não havia riscos de segurança.
- 
