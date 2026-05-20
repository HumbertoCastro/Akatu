# AGENTS.md

## Objetivo do projeto

Este projeto deve priorizar clareza visual, consistência de interface, boa experiência do usuário, acessibilidade e manutenção simples do código.

Sempre que criar ou alterar telas, componentes ou fluxos, trate UI e UX como parte obrigatória da entrega, não como melhoria opcional.

## Stack e padrão técnico

- Use TypeScript.
- Use React com componentes funcionais.
- Priorize composição de componentes pequenos e reutilizáveis.
- Evite lógica de negócio dentro de componentes visuais.
- Separe responsabilidades entre UI, estado, chamadas de API e regras de negócio.
- Não adicione novas bibliotecas sem necessidade clara.
- Se uma biblioteca já existir no projeto, reutilize antes de sugerir outra.
- Preserve o padrão atual de pastas, nomes e arquitetura.
- Caso o projeto seja iniciado do 0, por regra, utilize o Shadcn como biblioteca para os components. somente crie components do 0 caso o shadcn não forneca o comportamento esperado.

## Regra principal de UI

Toda interface criada deve parecer parte de um produto real, moderno e consistente.

Evite:

- telas genéricas sem hierarquia visual
- excesso de bordas
- excesso de sombras
- espaçamentos aleatórios
- textos longos sem estrutura
- botões sem prioridade clara
- formulários sem feedback
- estados vazios sem orientação
- loaders genéricos quando o contexto exigir skeleton
- componentes desalinhados com o design existente

Priorize:

- hierarquia visual clara
- boa separação entre seções
- espaçamento consistente
- contraste adequado
- leitura rápida
- ações primárias evidentes
- estados de erro, vazio, carregando e sucesso
- responsividade real
- consistência entre páginas

## Design system

Antes de criar um novo padrão visual, verifique os componentes existentes.

Use tokens ou padrões existentes para:

- cores
- espaçamento
- tipografia
- border-radius
- sombras
- breakpoints
- estados de hover, focus, disabled e active

Se o projeto não tiver tokens explícitos, mantenha consistência visual com os componentes já existentes.

Não crie cores, tamanhos ou variações arbitrárias sem motivo.

## Layout

Toda tela deve ter uma estrutura clara:

- título principal
- descrição curta quando necessário
- área de ações principais
- conteúdo agrupado por contexto
- feedback visual para estados importantes

Use grid ou flex de forma previsível.

Garanta que a tela funcione bem em:

- mobile
- tablet
- desktop
- telas grandes

Evite layouts que só funcionam em uma largura específica.

## Tipografia

Use tipografia para criar hierarquia.

A tela deve deixar claro:

- o que é título
- o que é descrição
- o que é dado importante
- o que é metadado
- o que é ação

Evite múltiplos tamanhos sem padrão.

Textos de interface devem ser curtos, claros e orientados à ação.

## UX de formulários

Todo formulário deve ter:

- labels claros
- placeholder apenas como apoio, nunca como substituto do label
- validação visível
- mensagens de erro específicas
- feedback de carregamento no submit
- estado disabled quando a ação não puder ser executada
- prevenção de duplo submit
- navegação por teclado
- foco inicial quando fizer sentido

Mensagens de erro devem explicar o problema e, quando possível, como resolver.

Evite mensagens genéricas como "Erro ao salvar" quando houver contexto melhor.

## UX de tabelas e listas

Tabelas e listas devem ter:

- estado de carregamento
- estado vazio
- estado de erro
- paginação ou estratégia para muitos dados
- alinhamento correto por tipo de dado
- ações previsíveis
- confirmação para ações destrutivas
- filtros claros quando houver busca ou segmentação

Dados monetários, datas, status e identificadores devem ser formatados de forma legível.

## Estados obrigatórios

Ao criar qualquer tela ou componente assíncrono, implemente ou preserve:

- loading
- empty
- error
- success
- disabled
- hover
- focus
- active

Não entregue componente que só funciona no cenário feliz.

## Acessibilidade

Siga WCAG 2.2 como referência.

Garanta:

- HTML semântico
- labels associados a inputs
- contraste suficiente
- navegação por teclado
- foco visível
- textos alternativos em imagens relevantes
- botões reais para ações
- links reais para navegação
- aria apenas quando HTML semântico não for suficiente
- mensagens de erro acessíveis
- modais com foco controlado
- elementos clicáveis com área adequada

Não use div clicável quando button ou link for semanticamente correto.

## Microcopy

A escrita da interface deve ser objetiva.

Use:

- verbos de ação claros
- mensagens curtas
- tom profissional
- instruções simples
- feedback contextual

Evite:

- jargão desnecessário
- mensagens vagas
- textos técnicos para usuários finais
- excesso de explicação dentro da interface

## Regras para melhoria visual

Quando receber uma tarefa de "melhorar design", "melhorar UI" ou "melhorar UX":

1. Analise a hierarquia atual.
2. Identifique problemas de espaçamento, alinhamento, contraste e densidade.
3. Preserve a funcionalidade existente.
4. Melhore a composição visual sem reescrever tudo sem necessidade.
5. Adicione estados ausentes se o componente depender de dados.
6. Verifique responsividade.
7. Verifique acessibilidade.
8. Explique brevemente o que foi alterado.

## Checklist antes de finalizar

Antes de considerar a tarefa concluída, valide:

- A tela está visualmente consistente com o restante do projeto.
- A hierarquia visual está clara.
- O usuário entende a ação principal rapidamente.
- Todos os estados relevantes foram tratados.
- O layout é responsivo.
- O componente é acessível por teclado.
- Não há valores visuais aleatórios.
- Não há duplicação desnecessária de código.
- Não há biblioteca nova sem justificativa.
- O código segue o padrão existente do projeto.

## Quando pedir decisão ao usuário

Peça confirmação antes de:

- trocar biblioteca de UI
- alterar design system existente
- mudar fluxo de navegação
- remover funcionalidades
- alterar contratos de API
- adicionar dependências de produção

Não peça confirmação para pequenas melhorias visuais, correções de acessibilidade ou refatorações locais que preservem comportamento.

## Formato da resposta do agente

Ao finalizar uma alteração, responda com:

- resumo curto do que foi feito
- arquivos alterados
- pontos de UI/UX melhorados
- validações executadas
- pendências, se houver

Evite respostas longas quando a alteração for simples.
