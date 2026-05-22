# Design System e Boas Práticas da Landing Akatu

Este documento registra as decisões visuais e de UX adotadas na landing da Akatu. Use como referência para manter consistência em futuras telas, seções e ajustes do projeto.

## Objetivo Visual

A interface deve transmitir uma clínica infantil acolhedora, técnica e lúdica. O visual pode ser expressivo, mas precisa continuar claro, legível e confiável para famílias.

Prioridades:

- Clareza rápida da proposta da Akatu.
- Hierarquia visual forte em títulos, descrições e ações.
- Aparência consistente entre todas as seções.
- Sensação lúdica sem perder organização clínica.
- Experiência responsiva real em mobile, tablet e desktop.

## Identidade

O estilo atual combina formas infantis, ilustração simples, bordas fortes e cores vivas. A linguagem visual é próxima de um produto editorial lúdico com acabamento neo-brutalista leve.

Características principais:

- Bordas grossas em quase todos os elementos destacados.
- Sombras sólidas coloridas ou em tinta escura.
- Cantos arredondados generosos.
- Ícones simples da biblioteca `lucide-react`.
- Layouts com seções bem separadas por cor de fundo e bordas horizontais.
- Textos curtos, diretos e acolhedores.

## Paleta

Tokens principais usados no projeto:

| Token | Hex | Uso principal |
| --- | --- | --- |
| `teal` | `#10B8C5` | Destaques, áreas institucionais, botões, ícones, sombras |
| `coral` | `#EF5B36` | Ênfase, localização, detalhes quentes, sombras |
| `yellow` | `#FFD83D` | Ações secundárias, energia lúdica, marcadores |
| `ink` | `#25212B` | Texto principal, bordas, sombras fortes |
| `paper` | `#FFFDF8` | Fundo base claro |
| `soft` | `#F7F5F0` | Fundo neutro de apoio |

Boas práticas:

- Não criar novas cores sem necessidade clara.
- Usar `ink` para texto principal e bordas.
- Usar fundos coloridos por seção para dar ritmo à página.
- Manter contraste alto entre texto e fundo.
- Evitar gradientes decorativos; a identidade atual funciona melhor com cor chapada.

## Tipografia

Fonte principal:

- `Poppins`, importada via Google Fonts.

Hierarquia recomendada:

- Hero: títulos grandes, `font-black`, line-height apertado.
- Seções: títulos entre `text-4xl` e `text-5xl`, `font-black`.
- Cards: títulos entre `text-lg` e `text-2xl`, `font-black`.
- Corpo: `font-medium`, `leading-7` ou `leading-8`.
- Labels: uppercase, tracking amplo, `font-extrabold` ou `font-black`.

Boas práticas:

- Usar frases curtas.
- Evitar blocos longos de texto.
- Usar acentuação correta em todo texto visível.
- Reservar textos em uppercase para labels, chips e metadados.
- Não usar muitos tamanhos diferentes dentro do mesmo bloco.

## Bordas, Raios e Sombras

Padrão visual atual:

- Bordas: `border-2` a `border-4` com `#25212B`.
- Cards grandes: `rounded-[30px]` a `rounded-[42px]`.
- Botões e ícones: `rounded-2xl`, `rounded-full` ou `rounded-[18px]`.
- Sombras sólidas: `shadow-[6px_6px_0_#25212B]` ou sombra colorida.

Boas práticas:

- Manter sombras sólidas em vez de sombras suaves genéricas.
- Usar sombras coloridas para diferenciar seções e cards.
- Garantir que elementos internos tenham raio menor que o container externo.
- Evitar excesso de bordas dentro de uma mesma área.

## Layout de Seções

Toda seção deve ter estrutura previsível:

- Label de seção com `SectionLabel`.
- Título claro.
- Descrição curta, quando necessário.
- Conteúdo agrupado por contexto.
- Ação principal ou orientação quando fizer sentido.

Padrões já usados:

- Hero com texto, ações e ilustração principal.
- Seção de valores com cards.
- Seção sticky de profissionais no desktop.
- Seção da fundadora com imagem e texto.
- Seção de depoimentos com cards soltos.
- Seção sobre a clínica com cards e painel visual.
- Localização com informações de contato e mapa.
- FAQ com `details/summary`.
- Footer com links sociais e crédito.

Boas práticas:

- Usar `max-w-[1180px]` como largura principal.
- Usar `px-5 sm:px-10` para respiro lateral responsivo.
- Separar seções importantes com `border-y-4 border-[#25212B]`.
- Evitar layout que só funciona em uma largura específica.

## Componentes e Padrões

### Labels de seção

Use `SectionLabel` para manter consistência nos rótulos:

- Fundo branco.
- Borda escura.
- Texto uppercase com tracking.
- Sombra sólida.

### Botões

Padrões atuais:

- Botão primário escuro com texto branco e sombra colorida.
- Botão secundário branco ou amarelo com borda forte.
- Estado hover com leve subida.
- Estado active com escala sutil.
- Foco visível com `focus-visible:ring`.

Boas práticas:

- A ação principal deve ser visualmente óbvia.
- Links externos precisam de `target="_blank"` e `rel="noreferrer"`.
- Usar ícone `ArrowRight` em ações de navegação ou contato.

### Cards

Cards devem ter:

- Borda forte.
- Sombra sólida.
- Título curto.
- Texto de apoio objetivo.
- Ícone ou marcador visual quando ajuda a leitura.

Evite:

- Cards com textos longos.
- Muitos cards com o mesmo peso visual quando há uma ação mais importante.
- Cards genéricos sem contexto.

### Profissionais

Padrão adotado:

- No desktop, a seção é sticky e troca o profissional ativo conforme o scroll.
- O título da seção permanece fixo.
- Imagem e texto alternam esquerda/direita.
- Botões numerados permitem navegação direta.
- No mobile, o sticky é desativado para evitar conteúdo cortado.

Boas práticas:

- Não usar sticky no mobile quando o conteúdo for maior que a viewport.
- Garantir `aria-current` no item ativo.
- Manter botões com área mínima adequada.

### FAQ

Padrão adotado:

- Usar `details/summary`, que já entrega acessibilidade básica e navegação por teclado.
- Cada pergunta tem número, cor de apoio e ícone de seta.
- A seta rotaciona com `group-open`.

Boas práticas:

- Perguntas objetivas.
- Respostas curtas e contextuais.
- Não abrir todos os itens por padrão.

### WhatsApp flutuante

Padrão adotado:

- Botão fixo no canto inferior direito.
- Ícone `MessageCircle`.
- Animação bounce leve.
- Link direto para `wa.me`.
- `aria-label` descritivo.
- `prefers-reduced-motion` desativa animação.

Boas práticas:

- Não cobrir conteúdo crítico.
- Manter área de toque mínima de 40x40px.
- Usar `z-50` apenas quando necessário.

## Animações

Animações existentes:

- `akatu-bounce`
- `akatu-float`
- `akatu-float-slow`
- `akatu-wiggle`
- `akatu-hop`
- `akatu-spin-slow`
- `akatu-professional-enter`
- `akatu-whatsapp-bounce`

Boas práticas:

- Usar animações leves, com movimento curto.
- Evitar animação que prejudique leitura.
- Sempre respeitar `prefers-reduced-motion`.
- Evitar `transition: all`; preferir propriedades específicas.

## Acessibilidade

Checklist obrigatório:

- Usar HTML semântico.
- Usar links reais para navegação.
- Usar botões reais para ações.
- Garantir foco visível.
- Garantir contraste suficiente.
- Usar `alt` em imagens relevantes.
- Usar `aria-label` em ícones sem texto.
- Evitar `div` clicável.
- Manter áreas interativas com pelo menos 40x40px.
- Testar navegação por teclado em dropdowns e botões.

## Responsividade

Breakpoints usados com Tailwind:

- Mobile base.
- `sm` para ajustes de espaçamento e tamanho.
- `md` para grids intermediários.
- `lg` para layouts em duas colunas.
- `xl` para grids mais amplos quando necessário.

Boas práticas:

- Criar mobile-first.
- Validar pelo menos uma largura mobile real, como `390x844`.
- Evitar textos que dependam de largura fixa.
- Desativar ou adaptar interações complexas no mobile quando necessário.
- Não permitir overflow horizontal.

## Microcopy

Tom recomendado:

- Profissional.
- Acolhedor.
- Claro.
- Sem jargão técnico desnecessário.

Padrões:

- Preferir verbos de ação: "Agendar", "Conhecer", "Ver", "Tirar dúvida".
- Explicar benefícios com frases curtas.
- Evitar promessas exageradas.
- Usar português com acentuação completa.

## Conteúdo e Ortografia

Cuidados adotados:

- Acentuação revisada em textos visíveis.
- Nomes próprios com acento quando aplicável: `Natália Lara`, `Marina Emília Andrade`.
- Termos recorrentes corrigidos: `criança`, `família`, `clínica`, `ciência`, `vínculo`, `terapêutico`, `comunicação`, `orientação`, `segurança`.
- IDs, anchors, URLs e handles permanecem sem acento quando necessário para estabilidade técnica.

## Quando Usar Imagens

Hoje o projeto possui poucos assets reais. Quando não houver foto real:

- Usar ilustrações internas coerentes com a identidade.
- Evitar imagens genéricas de banco.
- Deixar a estrutura preparada para substituir por fotos reais depois.

Quando houver fotos da clínica:

- Usar imagens reais do espaço em seções institucionais.
- Adicionar `alt` descritivo.
- Aplicar borda, raio e sombra consistentes.
- Evitar cortes que impeçam o usuário de entender o ambiente.

## Checklist Antes de Finalizar Alterações de UI

- A seção parece parte da landing atual.
- A hierarquia visual está clara.
- O texto está correto e acentuado.
- O layout funciona em desktop e mobile.
- Não há overflow horizontal.
- Estados de hover, focus e active estão presentes quando há interação.
- Elementos interativos têm semântica correta.
- Não foi adicionada biblioteca sem necessidade.
- `npm run build` passa.
- Browser foi usado para validar renderização quando a alteração é visual.

## O Que Evitar

- Criar nova paleta sem motivo.
- Usar gradientes decorativos genéricos.
- Usar texto longo dentro de card.
- Adicionar sombras suaves que destoem da identidade.
- Fazer sticky em conteúdo maior que a viewport no mobile.
- Trocar fluxo de navegação sem necessidade.
- Usar imagens irrelevantes ou genéricas.
- Deixar textos sem acento.

## Referência Técnica

Stack atual:

- React com componentes funcionais.
- TypeScript.
- Tailwind CSS.
- Vite.
- `lucide-react` para ícones.

Padrão de implementação:

- Preferir composição simples.
- Manter dados de conteúdo em arrays quando a seção repete cards ou itens.
- Separar pequenos componentes reutilizáveis quando reduzem duplicação.
- Não adicionar dependências para comportamentos nativos simples.
