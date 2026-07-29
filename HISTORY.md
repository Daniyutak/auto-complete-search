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
- Utilizei posteriormente para gerar um json que se adequa-se ao projeto. Primeiro busquei procurar no kaggle, mas optei para criar um personalizado considerando que o objetivo não era ser muito grande e o tempo para buscar um json era muito grande. Pedi que ele gerasse um código para gerar ids aleatórios para esse json e ele funcionou perfeitamente. Dessa forma, o agente não sabe os ids em si, mas ainda assim me poupou o tempo de criar o código e a base.
- Também dei o contexto geral do código, descrevendo o que gostaria de fazer e ele sugeriu ideias de código que pude adaptar. Expliquei detalhadamente que é um projeto de pequeno porte, quais os objetivos e qual a formatação e ele criou algumas sugestões de códigos que poderiam ser úteis. Usei o código de formatação e a recomendação de um "config.js" que permite maior manutenabilidade caso queira realizar mudanças nas variáveis ambiente (.env). Acredito que o agente pensou em detalhes específicos que foram interessantes nesse caso, mas não eram totalmente necessários no cenário do desafio.
- O agente também sugeriu realizar mudanças no código apartir do arquivo medium e, pensando na manutenabilidade e segurança, foi realizada uma mudança arquitetural grande: separar os serviços da interface do GraphQL, impedindo que ficasse responsável pelo código caso haja necessidade de mudanças futuras (como trocar API poderia reutilizar o service).
- Se houvesse necessidade de trocar o json por outro tipo de estrutura de dados, poderia mudar diretamente no service. Quanto mais encapsulado, melhor ficaria a manutenabilidade e adaptabilidade.
- Quando solicitado para fazer a função de busca dos 20 resultados de sugestão, o agente criou uma query que primeiro passava por TODOS os resultados e só então fazia um slice para retornar, porém esse código era inviável, mesmo para um projeto pequeno. Assim, pedi para refatorar essa parte, descrevendo a lógica com mais detalhes de como poderia ser melhorado, aplicando senso crítico e lógica básica, mesmo sem ter total conhecimento da ferramenta. A complexidade ainda é O(n) mas isso é apenas no pior caso e diminui a quantidade de piores casos.
- Houve outros grandes usos de IA, mas nunca cegamente. Inclusive, para debugar é possível sugerir para a IA, mas muitas vezes apenas analisando novamente o código e o que foi feito era possível entender o que estava errado.

## Usos de open-source:
- primeiramente o gitignore, feito com base no [gitignore do github](https://github.com/github/gitignore)
- README, baseado no [template](https://github.com/petsi-each/pet-sites-boilerplate) feito pela organização que participei e depois readaptado. Como é uma questão de documentação inicial e foi tomado cuidado, não havia riscos de segurança.
- Também encontrei alguns códigos que me ajudaram para tomar uma base do código: [kuraydev-react-searchbar](https://github.com/kuraydev/react-native-header-search-bar); [medium: autocomplete with apollo and ant design](https://medium.com/@timothyde/setting-up-autocomplete-with-react-apollo-graphql-and-ant-design-5ce650623bb7);
  - em comparação ao arquivo do medium, além de reduzir a complexidade outras funções foram atualizadas então o código não foi exatamente reutilizado:
  	> Em vez de construir toda a lógica de busca de uma vez, estamos estabelecendo primeiro a comunicação entre as camadas: GraphQL recebe a requisição -> O resolver delega ao serviço -> O serviço acessa os dados. -> O serviço retorna os dados. -> Só depois adicionamos filtros e regras
	== menos quantidade de mudanças por etapa + facilita a depuração 	

## testes
para testar o front e o back, não tenho muita experiencia de automatizar então testei na mão apenas casos simples

**ex:**
- responsividade com o celular z fold pois sua largura é muito diferente de uma tela de computador

## O que eu gostaria de melhorar:
- usar melhor o CI que eu acabei desistindo de reajustar
- Reajustar front-end para uma interação mais próxima do usuário (como por exemplo ajustar bugs relacionados ao hover e ao bold)
- utilizar melhor o kanban que deixou de ser usado na correria
- utilizar um banco de dados melhor
- documentação melhor
- dockerizar um pouco antes
- deixar codigo do front end mais bonito (usar o tailwind e fazer um código limpo)
- atomizar ainda mais os commits do front

## O que eu gostei:
- implementar e me desafiar com aprendizados muito novos
- implementar funcionalidades imaginando o usuário que iria utilizá-las

## Onde eu falhei:
- muito tempo na documentação e planejamento, pois não sabia muito como começar o projeto
