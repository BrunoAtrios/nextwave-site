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
- posicionamento_atual: A NextW Sistemas desenvolve software sob medida, automacao de processos, integracao de plataformas, Inteligencia Artificial aplicada, IoT, AIoT e projetos de RFID, atendendo empresas privadas e com capacidade para colaborar com orgaos publicos e governos municipais e estaduais. A marca institucional e Next Sistemas, com NextW como forma curta. O campo objetivo herdado deste registro ainda cita NextWave e nao pode ser editado pelo CLI.

## Arquitetura
- Stack: `React 18 + Vite 5 + Tailwind 3 + Framer Motion`
- application_shell: A landing usa ErrorBoundary, navegacao, progresso de rolagem e carregamento preguiçoso de seções por React.lazy e Suspense. A aplicação agora é multi-rota: main.jsx monta BrowserRouter com / (landing) e /portfolio (portfolio institucional), e rota desconhecida cai na landing.
- portfolio_content_source: Conteudo do portfolio centralizado em src/content/portfolio.js (competencias, solucoes, etapas do metodo e principios de controle). Os componentes visuais ficam em src/pages/PortfolioPage.jsx, src/components/PortfolioFlow.jsx e src/components/PortfolioNavigation.jsx, e os estilos em src/portfolio.css com classes de prefixo portfolio-.
- portfolio_route: A rota /portfolio entrega o portfolio institucional em src/pages/PortfolioPage.jsx, com seções de hero, competencias, inteligencia conectada/RFID, solucoes, metodo, atuacao e contato. A home (/) foi preservada e recebeu apenas a seção de destaque src/sections/PortfolioSpotlight.jsx, cujo botao e cuja arte levam para /portfolio.
- route_metadata_source: Titulo, descricao, canonical e imagem de cada rota ficam em routeMeta dentro de src/config.js, que e a fonte unica consumida em tempo de execucao pelo componente Seo e em tempo de build pelo scripts/postbuild.mjs. Alterar metadados de rota significa editar apenas src/config.js e rodar o build.
- static_route_html: O pos-build gera dist/portfolio.html a partir do dist/index.html, reescrevendo titulo, description, canonical, Open Graph e Twitter Card, e injetando um bloco noscript que esconde o splash e apresenta o posicionamento. O .htaccess serve esse arquivo em /portfolio e /portfolio/, apenas se o arquivo existir, mantendo o fallback SPA como rede de seguranca.
- visual_identity: Nova identidade visual da Next Sistemas (NextW) com paleta azul (#1677ff, #59a5ff, #06070a, #0d1118), tipografia atemporal Arial/Helvetica e slogan 'Soluções inteligentes. Resultados reais.'
- build_output: A build gera assets com hash, divide pacotes de React, Framer Motion e ícones e usa alvo es2020.
- portfolio_seo: Metadados por rota aplicados em tempo de execução por src/components/Seo.jsx (title, description, canonical, Open Graph e Twitter Card). A rota /portfolio foi adicionada ao public/sitemap.xml com prioridade 0.9.

## Infraestrutura relevante
- vite_base_path: Vite passou de base './' para base '/', para que assets com caminho absoluto carreguem corretamente em rota aninhada como /portfolio. O fallback SPA do .htaccess continua servindo index.html para rotas desconhecidas.
- production_deploy: Deploy automático via GitHub Actions (deploy.yml) com build Vite e envio FTP para HostGator em https://www.nextw.com.br
- index_html_favicons: Os favicons no index.html usam caminhos absolutos (/favicon.svg, /favicon-32.png, /favicon-16.png, /favicon-192.png) para não quebrarem em rotas aninhadas.

## Decisões ativas
- Substituir os contadores de vaidade da home por uma faixa de competencias verificaveis, em vez de manter numeros sem fonte ou inventar valores plausiveis. Motivo: Dos quatro numeros exibidos apenas a existencia de seis solucoes proprias era comprovavel; inventar os demais criaria risco comercial e reputacional.
- Criar o portfolio institucional em rota própria (/portfolio) e preservar a landing, adicionando apenas uma seção de destaque clicável na home. Motivo: Evitar regressão no conteúdo e no SEO já publicados e ainda assim apresentar a narrativa institucional completa de competencias, IA, IoT/AIoT e RFID.
- A marca institucional é NextW Sistemas (forma curta NextW) e ServOS é o ecossistema de produtos; a decisão anterior que tratava NextWave como marca central está superada. Motivo: Alinhar contexto, README e site à identidade visual já publicada.
- Adoção da nova identidade visual Next Sistemas (NextW). Motivo: Remodelação de todos os componentes, paletas e textos do site para refletir a marca Next Sistemas e o símbolo NextW conforme novo manual de marca e assets oficiais.
- NextWave é a marca central e ServOS é o ecossistema operacional apresentado pelo site. Motivo: Manter a hierarquia de marca consistente no conteúdo institucional.
- Dados de contato e marca ficam centralizados em src/config.js. Motivo: Evitar divergência entre seções do site.
- Gerar HTML estatico por rota em vez de adotar pré-renderizacao ou SSR completo. Motivo: Entrega o beneficio que importa (link compartilhado com titulo e descricao corretos) sem adicionar dependencia, servidor de render ou complexidade ao deploy estatico via FTP.
- Nao executar operacao destrutiva no contexto para remover as linhas antigas que citam NextWave; apenas registrar o posicionamento correto e manter a decisao que declara a anterior superada. Motivo: Limpar exigiria purgar decisoes ou re-registrar o projeto, apagando historico e reiniciando datas, o que e custo alto para um ganho cosmetico.
- A unidade de RFID é apresentada como competencia especializada com area própria (identificação, rastreabilidade, ativos, inventarios, logistica, acesso e monitoramento), e não como um produto isolado. Motivo: Refletir o posicionamento descrito pela empresa e dar destaque ao negócio de RFID.
- As soluções são descritas no formato desafio, solução e capacidades, e reaproveitam os seis produtos reais já existentes (ServOS, ServObras, Next Gestão, ServOS Church, Minhas Cifras e Smart Card). Motivo: Apresentar os produtos como prova da capacidade de engenharia sem inventar cases ou resultados.

## Regras importantes
- claims_policy: O site nao exibe numeros, clientes, depoimentos ou resultados sem fonte verificavel. A faixa sob o hero apresenta competencias comprovaveis (solucoes proprias, construcao sob medida, arquiteturas local/cloud/hibrido, atendimento nacional) e o indicador de IA informa Local + Cloud, coerente com a cascata real que inclui provedor na nuvem.
- diagnostico_de_layout: Antes de tratar um transbordo horizontal como defeito, recalcular a posicao removendo o deslocamento da animacao: subtrair o translateX da matriz de transform de getBoundingClientRect. Quando requestAnimationFrame nao executa, elementos com initial x diferente de zero ficam deslocados e aparecem como estouro falso. O defeito real se confirma quando o gridTemplateColumns ou a largura de layout ultrapassa o container.
- layout_overflow_guard: Itens de grid que contêm títulos longos precisam de min-width: 0 e overflow-wrap: break-word. Sem isso, o min-content de um título grande dimensiona a coluna além do contêiner e o conteúdo é recortado pelo overflow: hidden.
- portfolio_claims_policy: O portfolio apresenta apenas capacidades, produtos próprios e cenarios de uso. Não inclui nomes de clientes, depoimentos, logos, numeros de resultado nem contratos públicos, e descreve atuacao no setor publico como capacidade de atendimento.
- production_artifacts: O pós-build copia .htaccess, robots.txt e sitemap.xml para dist; Apache aplica fallback SPA, cache de assets e headers de segurança.
- build_validation_artifacts: A verificacao automatizada do build exige dist/index.html, dist/portfolio.html com titulo e canonical proprios, .htaccess, robots.txt e sitemap.xml. Ao adicionar uma rota, incluir o artefato correspondente nessa verificacao.
- portfolio_accessibility: O menu móvel do portfolio fecha com Escape, bloqueia o scroll do fundo enquanto aberto e devolve o foco ao botão de abertura. As animações usam useReducedMotion e o CSS respeita prefers-reduced-motion.
- portfolio_contact_payload: O formulario da rota /portfolio inclui nome, e-mail e descrição na mensagem do WhatsApp e anuncia o estado de envio em região aria-live. O formulário da landing permanece inalterado.

## Tarefas abertas
- [A fazer] Acompanhar renovação automática de SSL e revisar configuração DNS dos subdomínios.
- [A fazer] Avaliar se vale editar o campo objetivo do projeto ou re-registrar o registro para remover a mencao a NextWave.

## Mudanças recentes
- Criada a rota /portfolio com portfolio institucional completo (hero, competencias, inteligencia conectada e RFID, solucoes, metodo, atuacao e contato) e adicionado destaque clicável na home que leva à nova rota (2026-09-16). Motivo: Solicitação de criar o portfolio da empresa a partir da página existente.
- Substituida a faixa de contadores da home (6 produtos, 13 projetos, 5 areas, 100% codigo proprio) por quatro competencias verificaveis e removido o codigo do contador animado (2026-09-16). Motivo: Eliminar claims sem fonte e alinhar a home com a narrativa institucional do portfolio.
- Adicionada geracao de dist/portfolio.html no pos-build com metadados proprios da rota, bloco noscript de fallback, regra condicional no .htaccess, metadados centralizados em routeMeta no src/config.js e validacao do artefato na verificacao de build (2026-09-16). Motivo: Previews de link e rastreadores sem JavaScript exibiam o titulo da home na rota do portfolio.
- Cancelada a tarefa que afirmava estouro horizontal na secao de IA da home: a medicao removendo o deslocamento de animacao mostrou o layout entre 12px e 302px em 314px disponiveis, sem transbordo (2026-09-16). Motivo: O deslocamento observado era o x de -40 e 40 da animacao de entrada congelada porque requestAnimationFrame nao executa no harness de teste.
- Fato atualizado: architecture.application_shell (2026-09-16). Motivo: Refletir a introdução de rotas na casca da aplicação.
- Adicionado roteamento com react-router-dom em src/main.jsx, componente de SEO por rota, entrada do portfolio no sitemap.xml, favicons em caminho absoluto e mudança do base do Vite para '/' (2026-09-16). Motivo: Suportar rota aninhada com carregamento correto de assets e metadados próprios.
- Corrigido estouro horizontal de cerca de 64px na seção de contato do portfolio em telas estreitas, com min-width: 0 nos itens de grid, tipografia responsiva e overflow-wrap nos títulos (2026-09-16). Motivo: O min-content de um título a 58,56px dimensionava a coluna além do contêiner e o conteúdo era recortado.
- Remodelação completa do site institucional com a nova identidade visual Next Sistemas (NextW), atualização dos componentes, paleta azul/dark, novos assets em /public, deploy em produção no HostGator e limpeza da pasta temporária de imagens (2026-09-05). Motivo: Atualização solicitada da identidade visual da empresa.
- Corrigido o indicador da secao de IA de 100% Local para Local + Cloud, eliminando a contradicao com a cascata que inclui provedor na nuvem (2026-09-16). Motivo: O texto da propria secao descreve fallback para DeepSeek cloud.
- Atualizado o README com as rotas / e /portfolio, a estrutura de arquivos ampliada (src/pages, src/content, portfolio.css) e a hierarquia de marca NextW Sistemas (2026-09-16). Motivo: A documentação descrevia NextWave como marca central e não listava a nova rota.
