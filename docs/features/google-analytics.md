# Analytics

Esta feature adiciona o monitoramento de acessos ao blog utilizando Google Analytics via `@next/third-parties`.

## Como funciona

A integração é feita através de um componente wrapper `Analytics` localizado em `components/analytics/Analytics.tsx`. Este componente recebe o ID do GA via props e renderiza o componente `GoogleAnalytics` da biblioteca oficial do Next.js.

O componente é incluído no `RootLayout` (`app/layout.tsx`) para garantir que o rastreamento ocorra em todas as páginas.

## Configuração

A chave do Analytics deve ser configurada através da variável de ambiente `NEXT_PUBLIC_GA_ID`.

- O arquivo `.env` contém a variável vazia por padrão e deve ser commitado.
- Para produção, o ID real deve ser colocado no arquivo `.env.production` (que é ignorado pelo git).

## Como mudar de plataforma

O componente `Analytics.tsx` foi desenhado para ser agnóstico. Se desejar mudar do Google Analytics para outra plataforma (ex: Plausible, Vercel Analytics):

1. Altere o conteúdo de `components/analytics/Analytics.tsx`.
2. Substitua o `GoogleAnalytics` pelo componente/script da nova plataforma.
3. Mantenha ou altere as props conforme necessário no `app/layout.tsx`.

## Testes

Foram adicionados testes unitários para garantir que:

- O script não é renderizado se o ID estiver ausente.
- O script é renderizado corretamente com o ID fornecido.

Para rodar os testes:

```bash
npx jest tests/unit/components/analytics/Analytics.test.tsx
```
