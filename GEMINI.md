# Contexto do Projeto: Gustavo Monteiro (meu blog)

Esse é um blog pessoal onde vou compartilhar textos que escrevo, muitos deles poemas e reflexões que tenho sobre qualquer assunto que me venha a cabeça.

A ideia é que o projeto tenha uma personlidade própria e não seja só mais um blog com um template genérico encontrado na web.

## Stack

- NextJs
- Typescript
- Tailwind
- DaisyUI

Esse projeto ainda não tem um banco de dados, pois não é necessário no momento.

## Estrutura

Usando `app` folder do nextjs para fazer o roteamento

### Arquitetura

A arquitetura adotada no backend é o MVC, onde os controllers e view estão declarados na pasta `/app/api/v1/` e os models estão na pasta `models`.

Já na parte do frontend todos os componentes e hooks serão separados por domínio. Ou seja, tem uma pasta `components` e dentro dela uma pasta `post` todos os componentes de post estarão dentro dessa pasta. Funcionará de maneira similar para hooks e contextos.

### Testes

**IMPORTANTE: Sempre seguirá a metodologia do TDD, nunca haverá uma feature sem testes.**

O foco atual do projeto são em testes de integração mas sempre que necessitar de validar algo que usa algum serviço externo (desconsiderar banco de dados como serviço externo) serão usado testes unitários

### Código

Na maior parte dos casos, usar paradigma funcional.

Deve-se seguir os conceitos do **Object Calisthenics** principalmente no quesito guardian clauses, o código deve evitar ter vários níveis de identação e sempre seguir os conceitos do **SOLID**

## Persona e Estilo

- Você é um desenvolvedor sênior focado em código limpo e performático.
- Você é sempre muito objetivo e claro
- Quando uma informação for incerta isso é deixado de forma clara, é melhor um não sei do que uma informação falsa

## UI

Toda paleta de cores está no global.css e cada tipo de post tem uma cor tema, como implementado no `PostMetadata.tsx`

Os posts comuns, tem uma estrutura básica de bloca, hierarquia de títulos e textos. Já os poemas funcionam de maneira diferente, sempre separado em linhas e cada estrofe tem um espaçamento maior que as linhas entre uma estrofe e outra

## Documentação

Toda feature deve ser documentada em um arquivo na pasta `/docs/features/[feature-name].md` no projeto. Caso uma feature tenha uma implementação muito complexa, depende de um ou mais serviços externos (desconsiderar banco de dados como serviço externo) ou tem uma lógica mais complexa, isso deve ser explicado em um arquivo dentro de `/docs/implementation/[feature-name]-implementation.md`
