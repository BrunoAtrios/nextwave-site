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
- application_shell: A landing usa ErrorBoundary, navegacao, progresso de rolagem e carregamento preguiçoso de seções por React.lazy e Suspense. A aplicação agora é multi-rota: main.jsx monta BrowserRouter com / (landing) e /portfolio (portfolio institucional), e rota desconhecida cai na landing.
- portfolio_content_source: Conteudo do portfolio centralizado em src/content/portfolio.js (competencias, solucoes, etapas do metodo e principios de controle). Os componentes visuais ficam em src/pages/PortfolioPage.jsx, src/components/PortfolioFlow.jsx e src/components/PortfolioNavigation.jsx, e os estilos em src/portfolio.css com classes de prefixo portfolio-.
- portfolio_route: A rota /portfolio entrega o portfolio institucional em src/pages/PortfolioPage.jsx, com seções de hero, competencias, inteligencia conectada/RFID, solucoes, metodo, atuacao e contato. A home (/) foi preservada e recebeu apenas a seção de destaque src/sections/PortfolioSpotlight.jsx, cujo botao e cuja arte levam para /portfolio.
- visual_identity: Nova identidade visual da Next Sistemas (NextW) com paleta azul (#1677ff, #59a5ff, #06070a, #0d1118), tipografia atemporal Arial/Helvetica e slogan 'Soluções inteligentes. Resultados reais.'
- build_output: A build gera assets com hash, divide pacotes de React, Framer Motion e ícones e usa alvo es2020.
- portfolio_seo: Metadados por rota aplicados em tempo de execução por src/components/Seo.jsx (title, description, canonical, Open Graph e Twitter Card). A rota /portfolio foi adicionada ao public/sitemap.xml com prioridade 0.9.

## Infraestrutura relevante
- vite_base_path: Vite passou de base './' para base '/', para que assets com caminho absoluto carreguem corretamente em rota aninhada como /portfolio. O fallback SPA do .htaccess continua servindo index.html para rotas desconhecidas.
- production_deploy: Deploy automático via GitHub Actions (deploy.yml) com build Vite e envio FTP para HostGator em https://www.nextw.com.br
- index_html_favicons: Os favicons no index.html usam caminhos absolutos (/favicon.svg, /favicon-32.png, /favicon-16.png, /favicon-192.png) para não quebrarem em rotas aninhadas.

## Decisões ativas
- Criar o portfolio institucional em rota própria (/portfolio) e preservar a landing, adicionando apenas uma seção de destaque clicável na home. Motivo: Evitar regressão no conteúdo e no SEO já publicados e ainda assim apresentar a narrativa institucional completa de competencias, IA, IoT/AIoT e RFID.
- A marca institucional é NextW Sistemas (forma curta NextW) e ServOS é o ecossistema de produtos; a decisão anterior que tratava NextWave como marca central está superada. Motivo: Alinhar contexto, README e site à identidade visual já publicada.
- Adoção da nova identidade visual Next Sistemas (NextW). Motivo: Remodelação de todos os componentes, paletas e textos do site para refletir a marca Next Sistemas e o símbolo NextW conforme novo manual de marca e assets oficiais.
- NextWave é a marca central e ServOS é o ecossistema operacional apresentado pelo site. Motivo: Manter a hierarquia de marca consistente no conteúdo institucional.
- Dados de contato e marca ficam centralizados em src/config.js. Motivo: Evitar divergência entre seções do site.
- A unidade de RFID é apresentada como competencia especializada com area própria (identificação, rastreabilidade, ativos, inventarios, logistica, acesso e monitoramento), e não como um produto isolado. Motivo: Refletir o posicionamento descrito pela empresa e dar destaque ao negócio de RFID.
- As soluções são descritas no formato desafio, solução e capacidades, e reaproveitam os seis produtos reais já existentes (ServOS, ServObras, Next Gestão, ServOS Church, Minhas Cifras e Smart Card). Motivo: Apresentar os produtos como prova da capacidade de engenharia sem inventar cases ou resultados.

## Regras importantes
- layout_overflow_guard: Itens de grid que contêm títulos longos precisam de min-width: 0 e overflow-wrap: break-word. Sem isso, o min-content de um título grande dimensiona a coluna além do contêiner e o conteúdo é recortado pelo overflow: hidden.
- portfolio_claims_policy: O portfolio apresenta apenas capacidades, produtos próprios e cenarios de uso. Não inclui nomes de clientes, depoimentos, logos, numeros de resultado nem contratos públicos, e descreve atuacao no setor publico como capacidade de atendimento.
- production_artifacts: O pós-build copia .htaccess, robots.txt e sitemap.xml para dist; Apache aplica fallback SPA, cache de assets e headers de segurança.
- portfolio_accessibility: O menu móvel do portfolio fecha com Escape, bloqueia o scroll do fundo enquanto aberto e devolve o foco ao botão de abertura. As animações usam useReducedMotion e o CSS respeita prefers-reduced-motion.
- portfolio_contact_payload: O formulario da rota /portfolio inclui nome, e-mail e descrição na mensagem do WhatsApp e anuncia o estado de envio em região aria-live. O formulário da landing permanece inalterado.

## Tarefas abertas
- [A fazer] Acompanhar renovação automática de SSL e revisar configuração DNS dos subdomínios.
- [A fazer] Revisar claims numéricos herdados da home (6 produtos, 13 projetos, 5 áreas, 100% código próprio) e a contradição entre '100% Local' na seção de IA e o fallback DeepSeek cloud descrito nos textos.
- [A fazer] Corrigir elementos que estouram a lateral na seção de IA da home em telas estreitas (o card .ai-metric começa em -11px).

## Mudanças recentes
- Criada a rota /portfolio com portfolio institucional completo (hero, competencias, inteligencia conectada e RFID, solucoes, metodo, atuacao e contato) e adicionado destaque clicável na home que leva à nova rota (2026-09-16). Motivo: Solicitação de criar o portfolio da empresa a partir da página existente.
- Fato atualizado: architecture.application_shell (2026-09-16). Motivo: Refletir a introdução de rotas na casca da aplicação.
- Adicionado roteamento com react-router-dom em src/main.jsx, componente de SEO por rota, entrada do portfolio no sitemap.xml, favicons em caminho absoluto e mudança do base do Vite para '/' (2026-09-16). Motivo: Suportar rota aninhada com carregamento correto de assets e metadados próprios.
- Corrigido estouro horizontal de cerca de 64px na seção de contato do portfolio em telas estreitas, com min-width: 0 nos itens de grid, tipografia responsiva e overflow-wrap nos títulos (2026-09-16). Motivo: O min-content de um título a 58,56px dimensionava a coluna além do contêiner e o conteúdo era recortado.
- Remodelação completa do site institucional com a nova identidade visual Next Sistemas (NextW), atualização dos componentes, paleta azul/dark, novos assets em /public, deploy em produção no HostGator e limpeza da pasta temporária de imagens (2026-09-05). Motivo: Atualização solicitada da identidade visual da empresa.
- Atualizado o README com as rotas / e /portfolio, a estrutura de arquivos ampliada (src/pages, src/content, portfolio.css) e a hierarquia de marca NextW Sistemas (2026-09-16). Motivo: A documentação descrevia NextWave como marca central e não listava a nova rota.
- Alterado o deslocamento de entrada do bloco visual do hero do portfolio de horizontal para vertical, para que nenhum estado intermediário de animação corte o bloco na borda direita (2026-09-16). Motivo: Reduzir risco visual caso a animação não conclua.
