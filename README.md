## Simple AUTH

### Como rodar?

1 - Configure seu env para semelhante ao exemplo que está no `env.test`;

2 - Clone este repositório na sua máquina

3 - Na pasta raíz, `yarn i ou npm i` para instalação de pacotes.

4 - Para rodar, faça um `yarn dev`

### Configurações no PocketBase

Para recebimento de e-mails com recuperação de senha, é preciso configurar o SMTP em `Settings > Mail Settings`, especificando o host, port, username e password que o provider te dá. <b>Como se trata de uma aplicação que roda local, os e-mails naturalmente vão para a área de testes. Utilizei o Mailtrap para a realização da confirmação de senha.</b>

Para facilitar o processo de validação, aqui vão algumas configurações na parte de autorizações do PB.

Certifique-se que as collections em seu PB estão criadas e com as API rules especificadas a seguir:

USERS - podem ser listadas apenas pelo admin (marque apenas como admin-only no seu PB)

CATEGORIES

List/search - `@request.auth.type = 'tutor' || @request.auth.type = "coordinator"`

Os demais campos, nessa categoria, o @request.auth.type serão todos @request.auth.type = 'coordinator'

COURSES -
List/search - para todos, até para o estudante.

Os demais, apenas coordinator com @request.auth.type = 'coordinator'.

### Sobre a aplicação

- Dashboard com atualização em tempo real, utilizando React Query para extinguir de vez o uso do UseEffect() e Pocketbase como base de dados, consumindo em Next.js.
  <br>

- É um desafio e tanto utilizar um framework que não funciona muito bem no SSR. O criador do Pocketbase até faz observações sobre ter que chamar uma instância toda vez que se manipula a ferramenta com o Js SDK: o que sinceramente, é bem chato.

<br>

- Acredito que mesmo com esse pouco tempo que venho tendo, fiz uma boa nessa parte de cookies. É minha primeira vez mexendo com a ferramenta e já digo: vou usa-lá nos meus projetos sempre, toda vez que eu tiver essa preguiça de montar um back do zero haha.

<br>

#### Tecnologias:

<b>Next.js</b>: Para routing da aplicação, utilizando essa "nova" estrutura de projetos que considera pastas, rotas na aplicação.

<b>Typescript</b>: Nos tipos de usuário, dos dados da dashboard e até mesmo dos inputs

<b>React Hook Form</b>: Criando um form, que eu não sei muito bem se é performático, mas que engloba uma boa parte da aplicação. Afinal, trata-se de um dashboard, o componente se repete muito dentre suas chamadas de edição e criação.

<b>Pocketbase</b>: Um achado, nunca tinha mexido com esse antes e sinto que aprendi muito com ele, utilizando nesse projeto. Cookies, persistência dos dados, esse SDK ajuda demais.

<b>React Query</b>: Mais um que não tinha usado, implementado no projeto para cuidar das chamadas de API para o Pocketbase e suas criações/atualizações.

##### O que é possível no momento?

- Autenticação para a dashboard
- Requisitar troca de senha
- Receber o e-mail de confirmação e depois, alterar
- Criação de usuários
- Delação de usuários (com as permissões de coordinator e admin)

##### O que (ainda) não é possível?

- Logar como admin
- Criar usuários como admin (já que, no momento, não há possibilidade da autenticação pelo mesmo)
- Validação dos formulários de maneira controlada;
