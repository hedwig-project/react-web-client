# README

## Instalação

Dê clone no repositório e execute `yarn install` na pasta do
projeto para instalar as dependências.

## Arquitetura do projeto

.babelrc                --> Configuração do babel(alias, presets, plugins) <br />
.env                    --> Chaves de acesso da AWS <br />
.s3-website.json        --> Configurações de deploy da AWS <br />
server.js               --> Configuração do server (dependências, schemas, modulos de controladores, endpoints...) <br />
webpack.dev.config.js   --> Configuração do webpack para rodar em development <br />
webpack.prod.config.js  --> Configuração do webpack para rodar em production <br />
package.json            --> Configuração de dependências a serem instaladas pelo npm <br />
style/                  --> Arquivos css globais <br />
src/                    --> arquivos do frontend
  assets/                 --> Assets do projeto <br />
  components/             --> Componentes a seram reaproveitados no projeto (Contém o App e o Root) <br />
  config/                 --> Configurações do JOI <br />
  consts/                 --> Page types <br />
  helpers/                --> Arquivos com funções de utilidade geral <br />
  hocs/                   --> High Order Components
  routes/                 --> Arquivo de configuração com todas as rotas <br />
  modules/                --> Contém todos os módulos do projeto <br />
    'feature'/ <br />
      actions/              --> Todas as ações a serem chamadas na feature <br />
      actionTypes/          --> Definição das ações <br />
      components/           --> Componentes visuais da feature
      containers/           --> Componentes com lógica(integram as ações e os componentes) <br />
      pages/                --> Componentes que são carregados a partir das rotas <br />
      reducers/             --> Consomem/executam as ações <br />
      schemas/              --> Schemas para formulários <br />
    reducers.js           --> Definição de todos os reducers <br />
    store.js              --> Configurações da store do Redux e Firebase <br />
## Rodando o projeto

Executar o comando `yarn start` em uma janela de terminal. Acessar via localhost:3000.

## Deploy na AWS

Executar o comando `yarn run deploy` em uma janela de terminal.
