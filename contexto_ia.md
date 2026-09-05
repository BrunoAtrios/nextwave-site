<!--
ARQUIVO GERADO AUTOMATICAMENTE PELO CONTEXT LITE.
NÃO EDITAR MANUALMENTE.
Fonte: C:\Users\Dev\.context-lite\context.db
-->

# Projeto

- Nome: Site Next
- ID: `site-next`

## Objetivo
- Site institucional da NextWave para apresentar o ecossistema de produtos.

## Arquitetura
- Stack: `React 18 + Vite 5 + Tailwind 3 + Framer Motion`
- application_shell: A página principal usa ErrorBoundary, navegação, progresso de rolagem e carregamento preguiçoso de seções por React.lazy e Suspense.
- build_output: A build gera assets com hash, divide pacotes de React, Framer Motion e ícones e usa alvo es2020.

## Decisões ativas
- NextWave é a marca central e ServOS é o ecossistema operacional apresentado pelo site. Motivo: Manter a hierarquia de marca consistente no conteúdo institucional.
- Dados de contato e marca ficam centralizados em src/config.js. Motivo: Evitar divergência entre seções do site.

## Regras importantes
- production_artifacts: O pós-build copia .htaccess, robots.txt e sitemap.xml para dist; Apache aplica fallback SPA, cache de assets e headers de segurança.

## Tarefas abertas
- [A fazer] Acompanhar renovação automática de SSL e revisar configuração DNS dos subdomínios.
