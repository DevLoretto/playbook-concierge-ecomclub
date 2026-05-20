// =================================================================
// PLAYBOOK CONCIERGE — Base de conhecimento
// Todo o conteúdo do FAQ vive aqui. Editar/adicionar artigos é
// só mexer neste arquivo.
// =================================================================

window.PLAYBOOK_DATA = {

  // -------- ÁREAS (categorias) --------
  areas: [
    { id: "nuvemshop",     title: "Nuvemshop",            icon: "⚙",  desc: "Configuração inicial, domínio, pagamentos, frete" },
    { id: "pagina-produto", title: "Página de produto",   icon: "📦", desc: "Descrição, fotos, gifs, BK Reviews, prova social" },
    { id: "trafego-pago",  title: "Tráfego pago",          icon: "📈", desc: "Meta Ads, estrutura ABO, métricas, otimização" },
    { id: "mineracao",     title: "Mineração",             icon: "🔍", desc: "TikTok Shop, ML Tendências, Shopee, Adminer" },
    { id: "fornecedores",  title: "Fornecedores",          icon: "🚚", desc: "Shopee, AliExpress, Dropi — quando usar cada um" },
    { id: "criativos",     title: "Criativos",             icon: "🎬", desc: "Frankenstein, CapCut, ganchos, copy" },
    { id: "processos",     title: "Processos Concierge",   icon: "🛡", desc: "SLA, priorização, scripts, escalonamento" },
  ],

  // -------- ARTIGOS --------
  // Cada artigo: id, area, title, summary, tags[], body (HTML)
  articles: [

    // ============ NUVEMSHOP ============
    {
      id: "ns-configuracao-inicial",
      area: "nuvemshop",
      title: "Configuração inicial da Nuvemshop — checklist do primeiro acesso",
      summary: "Passo a passo para um aluno que acabou de receber a loja pré-montada deixar tudo pronto para vender.",
      tags: ["nuvemshop", "setup", "loja-pronta", "iniciante"],
      body: `
        <p>Sempre que um aluno do Journey ou Scale recebe a loja pré-montada, o primeiro objetivo é deixar a base operacional antes de pensar em produto e tráfego. Faça nesta ordem para evitar retrabalho.</p>

        <h3>1. Dados da loja</h3>
        <ol>
          <li>Painel da Nuvemshop → <b>Configurações → Dados da minha loja</b>.</li>
          <li>Preencha nome da loja, CNPJ ou CPF, e-mail de contato e telefone.</li>
          <li>Defina o fuso horário (America/Sao_Paulo) e a moeda (BRL).</li>
        </ol>

        <h3>2. Endereço comercial e nota fiscal</h3>
        <p>Mesmo se o aluno trabalha sem emissão imediata, peça para cadastrar o endereço corretamente — sem isso o frete não calcula.</p>

        <h3>3. Conta bancária / Pix</h3>
        <p>Antes de ativar pagamentos, garanta que o aluno tenha conta de pessoa jurídica ou conta digital aceita pelos meios de pagamento. Sem isso, o repasse trava.</p>

        <h3>4. Termos legais</h3>
        <ul>
          <li>Política de troca e devolução (modelo enviado pelo time).</li>
          <li>Política de privacidade (modelo enviado pelo time).</li>
          <li>Termos de uso (modelo enviado pelo time).</li>
        </ul>

        <div class="callout">
          <b>Dica de Concierge:</b> envie os três modelos juntos em uma única mensagem com a frase: "Pode colar nesses três campos aqui em <b>Configurações → Termos legais</b>. Qualquer dúvida, me chame no passo X."
        </div>

        <h3>5. Idiomas</h3>
        <p>Mantenha apenas Português (Brasil). Outros idiomas só atrapalham aluno iniciante.</p>

        <h3>Resultado esperado</h3>
        <p>Em 30–40 minutos a loja está pronta para receber configurações de domínio, frete e pagamento.</p>
      `
    },

    {
      id: "ns-dominio-hostgator",
      area: "nuvemshop",
      title: "Como vincular domínio HostGator à Nuvemshop",
      summary: "Tutorial completo de configuração de DNS para apontar o domínio comprado na HostGator para a loja.",
      tags: ["nuvemshop", "dominio", "hostgator", "dns"],
      body: `
        <p>Esta é uma das dúvidas que mais aparece no chat. Salve este artigo nos favoritos e cole o link em vez de redigitar.</p>

        <h3>Pré-requisitos</h3>
        <ul>
          <li>Domínio já comprado e pago na HostGator.</li>
          <li>Acesso ao painel da HostGator (cPanel ou área do cliente).</li>
          <li>Acesso ao painel da Nuvemshop.</li>
        </ul>

        <h3>Passo 1 — Pegar os DNS da Nuvemshop</h3>
        <ol>
          <li>Painel Nuvemshop → <b>Configurações → Domínios</b>.</li>
          <li>Clique em <b>Adicionar um domínio</b>.</li>
          <li>Cole o domínio comprado (ex: <code>minhaloja.com.br</code>).</li>
          <li>A Nuvemshop vai exibir <b>2 endereços de DNS</b> (algo como <code>ns1.nuvemshop.com.br</code> e <code>ns2.nuvemshop.com.br</code>). Copie os dois.</li>
        </ol>

        <h3>Passo 2 — Alterar DNS na HostGator</h3>
        <ol>
          <li>Acesse a área do cliente da HostGator → <b>Domínios</b>.</li>
          <li>Clique no domínio que vai usar → <b>Alterar servidores de DNS / nameservers</b>.</li>
          <li>Apague os DNS atuais e cole os 2 da Nuvemshop.</li>
          <li>Salve.</li>
        </ol>

        <h3>Passo 3 — Voltar à Nuvemshop e finalizar</h3>
        <ol>
          <li>De volta em <b>Configurações → Domínios</b>.</li>
          <li>Defina o domínio como <b>principal</b>.</li>
          <li>Ative a opção de redirecionar a versão sem <code>www</code> para a versão com <code>www</code> (ou o contrário, consistência é o que importa).</li>
        </ol>

        <h3>Passo 4 — Aguardar propagação</h3>
        <p>A propagação de DNS leva de <b>30 minutos a 24 horas</b>. Avise o aluno explicitamente para não testar de 5 em 5 minutos. Boa prática: pedir para testar em uma rede móvel diferente da rede de casa após algumas horas.</p>

        <h3>Como confirmar que está funcionando</h3>
        <ul>
          <li>Abrir o domínio em uma aba anônima — deve cair direto na loja.</li>
          <li>Painel Nuvemshop → <b>Configurações → Domínios</b> deve mostrar status verde.</li>
          <li>Certificado SSL deve aparecer (cadeado no navegador).</li>
        </ul>

        <div class="callout warning">
          <b>Erro comum:</b> aluno usa "redirecionamento de URL" no painel HostGator em vez de alterar os nameservers. Isso quebra o SSL e o checkout. Sempre confirme que a alteração foi nos <i>nameservers</i>.
        </div>
      `
    },

    {
      id: "ns-pagamentos",
      area: "nuvemshop",
      title: "Configuração de pagamentos: Pix, cartão e Mercado Pago",
      summary: "Como ativar os meios de pagamento essenciais para uma loja iniciante começar a vender no Brasil.",
      tags: ["nuvemshop", "pagamento", "pix", "mercadopago", "checkout"],
      body: `
        <p>Para uma loja em fase 1 (validação), recomendamos começar com 2 meios de pagamento — simples, sem fricção e com baixa taxa.</p>

        <h3>Setup recomendado para iniciantes</h3>
        <ul>
          <li><b>Mercado Pago</b> — Pix instantâneo + cartão de crédito (parcelamento em até 12x). É o caminho mais rápido pra começar.</li>
          <li><b>PagBank</b> ou <b>PagSeguro</b> — backup caso o Mercado Pago dê problema.</li>
        </ul>

        <h3>Passo a passo — Mercado Pago</h3>
        <ol>
          <li>Aluno precisa ter uma conta Mercado Pago ativa e validada (CPF/CNPJ vinculado).</li>
          <li>Na Nuvemshop: <b>Configurações → Meios de pagamento → Mercado Pago</b>.</li>
          <li>Clicar em <b>Configurar</b> → fazer login na conta Mercado Pago → autorizar.</li>
          <li>Ativar Pix e cartão. Definir <b>parcelamento sem juros até 3x</b> e parcelas com juros de 4x a 12x.</li>
        </ol>

        <h3>Taxas atuais (referência)</h3>
        <ul>
          <li>Pix: ~0,99% por transação.</li>
          <li>Cartão à vista: ~4,99% (varia conforme volume).</li>
          <li>Cartão parcelado: taxa aumenta a cada parcela.</li>
        </ul>
        <p><i>Sempre conferir as taxas vigentes no painel do Mercado Pago — elas mudam.</i></p>

        <h3>Boas práticas para conversão</h3>
        <ul>
          <li><b>Desconto no Pix</b> de 5% a 10% — converte mais e tem taxa menor para o aluno.</li>
          <li>Parcelamento em até 12x — mesmo que o aluno não queira parcelar muito, mostrar "12x de R$ X" no card de produto aumenta percepção de acessibilidade.</li>
          <li>Não habilitar boleto na fase 1 — taxa de conversão pós-checkout é muito baixa.</li>
        </ul>

        <div class="callout">
          <b>Quando o aluno tem cobrança bloqueada no Mercado Pago:</b> orientar a abrir chamado direto com o suporte do Mercado Pago. Não é algo que resolvemos do nosso lado.
        </div>
      `
    },

    {
      id: "ns-frete",
      area: "nuvemshop",
      title: "Configuração de frete — Correios, Melhor Envio e frete fixo",
      summary: "Como configurar o frete da loja em fase 1, com foco em frete grátis estratégico para aumentar conversão.",
      tags: ["nuvemshop", "frete", "correios", "melhor-envio"],
      body: `
        <p>O frete é decisivo para conversão no ticket baixo (R$ 50 – R$ 150). Em fase 1, a estratégia é simples.</p>

        <h3>Estratégia recomendada (fase 1)</h3>
        <p>Como trabalhamos com produtos de custo até R$ 50 e venda até R$ 100, a estratégia é <b>incorporar o frete no preço do produto</b> e oferecer <b>frete grátis</b> no checkout. Aumenta MUITO a conversão.</p>

        <h3>Setup: frete fixo grátis</h3>
        <ol>
          <li>Painel Nuvemshop → <b>Configurações → Frete</b>.</li>
          <li>Desativar Correios e Jadlog por padrão.</li>
          <li>Criar uma nova opção: <b>Frete fixo</b>.</li>
          <li>Nome: <code>Frete Grátis</code>. Valor: <code>R$ 0,00</code>. Prazo: <code>De 7 a 15 dias úteis</code>.</li>
          <li>Aplicar a <b>todo o Brasil</b>.</li>
          <li>Salvar.</li>
        </ol>

        <div class="callout">
          <b>Por que prazo 7–15 dias?</b> Estamos usando Shopee como fornecedor (ver artigo de fornecedores). O prazo real do fornecedor + processamento manual cabe nessa janela. Subdimensionar o prazo gera reclamação.
        </div>

        <h3>Quando ativar Melhor Envio (fase 2/3)</h3>
        <p>A partir do momento em que o aluno trabalha com estoque próprio, fornecedor nacional rápido, ou volume que justifique negociar contratos, ativar:</p>
        <ol>
          <li>Criar conta no Melhor Envio.</li>
          <li>Nuvemshop → <b>Configurações → Frete → Melhor Envio</b>.</li>
          <li>Vincular a conta, ativar PAC e SEDEX.</li>
          <li>Configurar peso e dimensões padrão para produtos sem essas informações.</li>
        </ol>

        <h3>Erros comuns</h3>
        <ul>
          <li><b>Frete grátis sem prazo real</b> → cliente espera 7 dias, recebe em 18, abre reclamação.</li>
          <li><b>Calcular Correios na fase 1</b> → preço fica alto e mata a conversão.</li>
          <li><b>Não preencher endereço da loja</b> → frete não calcula nem na fase 2.</li>
        </ul>
      `
    },

    {
      id: "ns-abandono-carrinho",
      area: "nuvemshop",
      title: "Recuperação de carrinho abandonado",
      summary: "Como ativar e personalizar os e-mails automáticos de carrinho abandonado da Nuvemshop.",
      tags: ["nuvemshop", "conversao", "email", "carrinho"],
      body: `
        <p>Em média, 60–70% dos checkouts iniciados na fase 1 são abandonados. Recuperar mesmo 5% deles é venda extra de graça.</p>

        <h3>Ativar a recuperação automática</h3>
        <ol>
          <li>Nuvemshop → <b>Marketing → Carrinhos abandonados</b>.</li>
          <li>Ativar a opção <b>Enviar e-mail automático</b>.</li>
          <li>Configurar 3 disparos: 1 hora depois, 24 horas depois, 72 horas depois.</li>
        </ol>

        <h3>Personalizar os e-mails</h3>
        <p>O modelo padrão da Nuvemshop é ok, mas pode melhorar:</p>
        <ul>
          <li>Assunto curto e direto: "Você esqueceu algo aí 👀"</li>
          <li>Mostrar a foto do produto no corpo do e-mail.</li>
          <li>Oferecer cupom de 5% no segundo disparo (24h).</li>
          <li>Oferecer cupom de 10% no terceiro disparo (72h).</li>
        </ul>

        <h3>Quando o aluno reclama que "ninguém abre"</h3>
        <p>Geralmente o problema é:</p>
        <ol>
          <li>E-mail caiu em spam — orientar a configurar o DNS de e-mail (SPF/DKIM).</li>
          <li>Volume baixo — em fase 1 com pouco tráfego, é normal não ter recuperação. Não é o canal a otimizar antes de validar tráfego.</li>
        </ol>
      `
    },

    // ============ PÁGINA DE PRODUTO ============
    {
      id: "pp-descricao-estrategica",
      area: "pagina-produto",
      title: "Como escrever uma descrição estratégica de produto",
      summary: "Estrutura completa de descrição que converte: dor, solução, benefícios, prova social e CTA.",
      tags: ["pagina-produto", "descricao", "copy", "conversao"],
      body: `
        <p>Descrição não é ficha técnica. É uma carta de venda. Use sempre a mesma estrutura para garantir consistência.</p>

        <h3>Estrutura recomendada (top to bottom)</h3>
        <ol>
          <li><b>Gancho de dor</b> — uma pergunta ou afirmação que faz o cliente se reconhecer no problema.</li>
          <li><b>Apresentação do produto</b> — em 1 frase curta, o que ele é e o que resolve.</li>
          <li><b>3–5 benefícios</b> em bullet com emojis ou checkmarks (não características técnicas).</li>
          <li><b>Como funciona</b> — gif ou foto mostrando o produto em uso.</li>
          <li><b>Antes / depois</b> — quando aplicável, foto comparativa.</li>
          <li><b>Garantia</b> — "Garantia de 7 dias após o recebimento."</li>
          <li><b>Prova social</b> — selos de segurança, depoimentos, número de vendas.</li>
          <li><b>Call to action</b> — "Aproveite agora e receba em casa."</li>
        </ol>

        <h3>Exemplo aplicado (produto fictício: corretor de postura)</h3>
        <div class="example">
          <p><b>Está cansado de chegar em casa com dor nas costas e nos ombros?</b></p>
          <p>O Corretor Postural <i>NomeDoProduto</i> alinha sua coluna em apenas 30 minutos por dia, sem dor e sem exercício.</p>
          <p>✅ Melhora a postura desde o primeiro uso<br>✅ Reduz dores nas costas e ombros<br>✅ Confortável e discreto sob a roupa<br>✅ Ajustável para qualquer corpo<br>✅ Material respirável</p>
          <p>[GIF do produto sendo vestido]</p>
          <p>[FOTO ANTES E DEPOIS]</p>
          <p>🛡 <b>Garantia de 7 dias</b> após o recebimento.<br>🚚 <b>Frete grátis</b> para todo o Brasil.</p>
          <p>👉 Aproveite a promoção de hoje e receba em casa.</p>
        </div>

        <h3>Regras do que evitar</h3>
        <ul>
          <li>Parágrafos longos sem quebra — celular não lê.</li>
          <li>Características técnicas (peso, dimensões) no topo — colocar no fim, em um bloco separado.</li>
          <li>Promessas absurdas tipo "cura X" — não passa em anúncio do Meta.</li>
          <li>Excesso de emojis — usar com parcimônia, no máximo 1 por linha.</li>
        </ul>

        <div class="callout">
          <b>Tempo médio:</b> uma boa descrição leva 30–45 minutos para ser construída. Vale o investimento — é o que mais converte na página.
        </div>
      `
    },

    {
      id: "pp-fotos-gifs",
      area: "pagina-produto",
      title: "Padrão de fotos e gifs na página de produto",
      summary: "Quantas fotos usar, em que ordem, e como gerar gifs de demonstração a partir dos vídeos do fornecedor.",
      tags: ["pagina-produto", "fotos", "gifs", "imagens"],
      body: `
        <p>Página com fotos boas vende. Página com fotos amadoras gera dúvida, e dúvida no e-commerce é igual a abandono.</p>

        <h3>Quantidade ideal por produto</h3>
        <ul>
          <li><b>5 a 8 fotos</b> no total.</li>
          <li><b>2 gifs</b> mostrando o produto em uso.</li>
          <li><b>1 antes e depois</b> (quando aplicável).</li>
        </ul>

        <h3>Ordem das fotos</h3>
        <ol>
          <li>Foto principal — produto completo, fundo limpo, alta resolução.</li>
          <li>Foto em uso — pessoa usando o produto (sem o rosto se vier de fornecedor).</li>
          <li>Detalhes — close mostrando textura, acabamento.</li>
          <li>Foto comparativa — produto ao lado de um objeto para escala.</li>
          <li>Informações em arte — gráfico simples mostrando benefícios.</li>
          <li>Gif demonstração — funcionamento.</li>
          <li>Antes/depois ou comparativo.</li>
          <li>Foto da embalagem.</li>
        </ol>

        <h3>Como gerar gif a partir de vídeo do fornecedor</h3>
        <ol>
          <li>Baixe o vídeo do fornecedor (TikTok, Shopee, AliExpress) — sem áudio, sem rosto, sem logo.</li>
          <li>Use o site <b>ezgif.com</b> → Video to GIF.</li>
          <li>Corte para no máximo <b>3 a 5 segundos</b>.</li>
          <li>Defina qualidade 480p — gif maior que 2 MB demora pra carregar na página.</li>
          <li>Exporte e suba na página de produto.</li>
        </ol>

        <h3>Dimensões recomendadas</h3>
        <ul>
          <li>Fotos: 1080x1080 px (quadrada) ou 1080x1350 px (vertical 4:5).</li>
          <li>Peso máximo: 500 KB por foto (use TinyPNG para comprimir).</li>
          <li>Gif: máximo 2 MB.</li>
        </ul>

        <div class="callout warning">
          <b>Evitar a todo custo:</b> fotos com marca d'água do fornecedor, rostos identificáveis, logos visíveis no fundo. Bloqueia anúncio.
        </div>
      `
    },

    {
      id: "pp-bk-reviews",
      area: "pagina-produto",
      title: "Como importar avaliações com BK Reviews",
      summary: "Tutorial passo a passo para importar avaliações e construir prova social na página de produto.",
      tags: ["pagina-produto", "bk-reviews", "avaliacoes", "prova-social"],
      body: `
        <p>Avaliação na página é o que faz o aluno acreditar que o produto entrega. Sem avaliações, conversão cai pela metade.</p>

        <h3>O que é o BK Reviews</h3>
        <p>Aplicativo gratuito disponível na loja de aplicativos da Nuvemshop. Permite importar avaliações de produtos de outras lojas (AliExpress, Shopee, Amazon) com fotos.</p>

        <h3>Passo 1 — Instalar o app</h3>
        <ol>
          <li>Painel Nuvemshop → <b>Loja de aplicativos</b>.</li>
          <li>Buscar por "<b>BK Reviews</b>".</li>
          <li>Clicar em <b>Instalar</b> e autorizar permissões.</li>
        </ol>

        <h3>Passo 2 — Pegar avaliações do AliExpress</h3>
        <ol>
          <li>Encontrar o produto no AliExpress (mesmo produto ou similar do que vai vender).</li>
          <li>Copiar o link do produto.</li>
          <li>No BK Reviews, clicar em <b>Importar avaliações</b>.</li>
          <li>Colar o link.</li>
          <li>Selecionar <b>filtros</b>:
            <ul>
              <li>Apenas avaliações com 4 e 5 estrelas.</li>
              <li>Apenas avaliações com foto.</li>
              <li>Idioma: Português (se houver) ou Inglês (a ser traduzido).</li>
            </ul>
          </li>
          <li>Importar entre <b>20 e 40 avaliações</b>.</li>
        </ol>

        <h3>Passo 3 — Vincular ao produto</h3>
        <p>Importante: as avaliações importadas ficam "soltas" — você precisa vincular ao produto certo.</p>
        <ol>
          <li>BK Reviews → <b>Avaliações</b>.</li>
          <li>Selecionar as avaliações importadas.</li>
          <li>Atribuir ao produto correto no menu suspenso.</li>
          <li>Salvar.</li>
        </ol>

        <h3>Passo 4 — Tradução e ajustes</h3>
        <p>Avaliações em outro idioma precisam ser traduzidas manualmente.</p>
        <ul>
          <li>Traduzir para português natural — não usar Google Translate cru.</li>
          <li>Ajustar nomes estrangeiros para nomes brasileiros (Maria, João, Ana, Pedro).</li>
          <li>Variar tamanho dos textos — algumas curtas, algumas longas.</li>
          <li>Distribuir as datas para os últimos 60 dias.</li>
        </ul>

        <h3>Passo 5 — Aparecer na página</h3>
        <ol>
          <li>Tema da Nuvemshop → <b>Configurações do tema → Aplicativos</b>.</li>
          <li>Ativar o widget de avaliações do BK Reviews.</li>
          <li>Posicionar logo abaixo da descrição do produto.</li>
        </ol>

        <div class="callout">
          <b>Quantidade ideal:</b> entre 20 e 40 avaliações por produto. Menos que isso parece pouco; mais que isso, parece comprado.
        </div>

        <h3>Erros comuns que aparecem no chat</h3>
        <ul>
          <li>"Não aparece nada na página" → faltou ativar o widget no tema (Passo 5).</li>
          <li>"As avaliações estão em chinês" → faltou filtrar idioma no passo 2 e traduzir.</li>
          <li>"Importou no produto errado" → ir em BK Reviews → reatribuir.</li>
        </ul>
      `
    },

    {
      id: "pp-antes-depois",
      area: "pagina-produto",
      title: "Quando e como usar antes/depois",
      summary: "Quando o antes/depois funciona, quando ele bloqueia anúncio, e como montar sem violar regras do Meta.",
      tags: ["pagina-produto", "antes-depois", "meta-ads", "criativo"],
      body: `
        <p>Antes/depois é uma das estruturas mais poderosas para conversão, mas também a que mais bloqueia anúncio quando mal feita.</p>

        <h3>Onde usa bem</h3>
        <ul>
          <li>Produtos de limpeza (mancha antes/depois).</li>
          <li>Produtos de organização (gaveta bagunçada vs organizada).</li>
          <li>Produtos de cozinha (bagunça vs comida bem cortada).</li>
          <li>Produtos pet (pelo embaraçado vs pelo escovado).</li>
        </ul>

        <h3>Onde NÃO usar</h3>
        <ul>
          <li>Produtos de saúde, emagrecimento ou estética que envolvam corpo humano — bloqueia anúncio direto.</li>
          <li>Produtos médicos ou que prometam cura/melhora física — política Meta.</li>
          <li>Resultados que pareçam manipulação digital — desconfiança imediata.</li>
        </ul>

        <h3>Como montar</h3>
        <ol>
          <li>2 fotos lado a lado, mesma iluminação, mesmo ângulo.</li>
          <li>Rótulo "ANTES" e "DEPOIS" sem promessas exageradas.</li>
          <li>Usar como <b>imagem secundária</b> da página, não como capa.</li>
          <li>Repetir o mesmo padrão de antes/depois no criativo do anúncio.</li>
        </ol>

        <div class="callout warning">
          <b>Atenção:</b> antes/depois corporal (perda de peso, mudança de barriga, antes/depois de cremes) bloqueia conta no Meta. Para produtos desse nicho, usar apenas demonstração de uso, sem comparativos corporais.
        </div>
      `
    },

    {
      id: "pp-selos-seguranca",
      area: "pagina-produto",
      title: "Selos de segurança e gatilhos de confiança",
      summary: "Quais selos colocar na página, em que local, e como eles afetam taxa de conversão.",
      tags: ["pagina-produto", "selos", "confianca", "conversao"],
      body: `
        <p>Selos visuais reduzem ansiedade no checkout. São pequenos detalhes que somados aumentam conversão entre 5 e 12%.</p>

        <h3>Selos essenciais (logo abaixo do botão "Comprar")</h3>
        <ul>
          <li><b>Compra Segura</b> — cadeado.</li>
          <li><b>Frete Grátis</b> — caminhão.</li>
          <li><b>Garantia de 7 dias</b> — selo de check.</li>
          <li><b>Pagamento Seguro</b> — bandeiras de cartão + Pix.</li>
        </ul>

        <h3>Onde encontrar imagens prontas</h3>
        <ul>
          <li>Banco gratuito interno (link no grupo do time).</li>
          <li>Canva — busca por "selo loja online".</li>
          <li>Freepik — selo confiança, fundo transparente.</li>
        </ul>

        <h3>Posicionamento</h3>
        <ol>
          <li>Logo abaixo do botão de comprar — 1 linha com 4 selos pequenos.</li>
          <li>No meio da descrição — em uma seção separada "Por que comprar conosco".</li>
          <li>No rodapé do site — bandeiras de pagamento aceitas.</li>
        </ol>

        <div class="callout">
          <b>Não exagere:</b> 6+ selos visuais lotam a página e diminuem o impacto. Quatro bem escolhidos batem dez aleatórios.
        </div>
      `
    },

    // ============ TRÁFEGO PAGO ============
    {
      id: "tp-estrutura-abo",
      area: "trafego-pago",
      title: "Estrutura ABO de campanha — modelo padrão da fase 1",
      summary: "Como subir a primeira campanha de tráfego direto para a página de produto usando ABO, com R$ 15 por conjunto.",
      tags: ["trafego-pago", "meta-ads", "abo", "campanha", "iniciante"],
      body: `
        <p>Em fase 1 a estrutura padrão é simples e funciona para 90% dos produtos iniciais.</p>

        <h3>Estrutura completa</h3>
        <ul>
          <li><b>1 campanha</b> — objetivo Vendas.</li>
          <li><b>4 conjuntos de anúncios</b> (ABO).</li>
          <li><b>1 criativo por conjunto</b>.</li>
          <li><b>R$ 15 por conjunto</b> = R$ 60/dia de investimento total.</li>
        </ul>

        <h3>Passo 1 — Criar a campanha</h3>
        <ol>
          <li>Meta Ads → Criar campanha.</li>
          <li>Objetivo: <b>Vendas</b>.</li>
          <li>Tipo de compra: <b>Leilão</b>.</li>
          <li>Veiculação: <b>Padrão</b>.</li>
        </ol>

        <h3>Passo 2 — Configurar a campanha (não o conjunto!)</h3>
        <ul>
          <li>Estratégia de orçamento: <b>Orçamento do conjunto</b> (ABO).</li>
          <li>Buying type: leilão (padrão).</li>
          <li>Categoria especial: <b>Nenhuma</b> (a não ser produtos restritos).</li>
        </ul>

        <h3>Passo 3 — Configurar os 4 conjuntos (cada um igual)</h3>
        <ul>
          <li><b>Conversão</b>: Compra.</li>
          <li><b>Orçamento</b>: R$ 15/dia.</li>
          <li><b>Início</b>: amanhã às 00:01 (não comece no meio do dia — atrapalha a leitura de métricas).</li>
          <li><b>Público</b>: Aberto Brasil — idade conforme o avatar (geralmente 25–55, ajustar conforme nicho). <b>Sem interesses</b>.</li>
          <li><b>Posicionamentos</b>: Automáticos (Advantage+).</li>
          <li><b>Otimização</b>: Compras.</li>
        </ul>

        <h3>Passo 4 — Subir os criativos</h3>
        <p>Cada conjunto recebe 1 criativo diferente. Use os 4 vídeos do método Frankenstein.</p>
        <ul>
          <li>Formato: vídeo (preferência) ou imagem.</li>
          <li>Texto principal: copy curta com gancho de dor.</li>
          <li>Título: benefício principal.</li>
          <li>Descrição: oferta + garantia.</li>
          <li>Botão de chamada: <b>Comprar agora</b>.</li>
          <li>URL: direto para a página do produto (não home).</li>
        </ul>

        <h3>Passo 5 — Acompanhar</h3>
        <p>Não toque na campanha nas primeiras 48h. O Meta precisa de tempo para aprender.</p>

        <div class="callout">
          <b>Métrica-alvo dos primeiros dias:</b> CPM abaixo de R$ 50, CTR acima de 1%, custo por clique abaixo de R$ 2. Se passou disso, problema é criativo + página, não a campanha.
        </div>
      `
    },

    {
      id: "tp-leitura-metricas",
      area: "trafego-pago",
      title: "Como ler as métricas: CPM, CTR, CPC, ROAS",
      summary: "Glossário das métricas que importam em campanha de e-commerce e o que cada uma indica sobre o funil.",
      tags: ["trafego-pago", "metricas", "ctr", "cpm", "roas"],
      body: `
        <p>Sem ler métrica, o aluno apaga campanha que ia funcionar e mantém campanha que não vai. Use este artigo como referência durante reuniões.</p>

        <h3>CPM — Custo por mil impressões</h3>
        <p>Quanto custa pra mostrar o anúncio mil vezes. Mede a competitividade do leilão.</p>
        <ul>
          <li>Bom: R$ 20 a R$ 50.</li>
          <li>Atenção: R$ 50 a R$ 80 (público mais caro ou anúncio mal pontuado).</li>
          <li>Ruim: acima de R$ 80 (revisar criativo e segmentação).</li>
        </ul>

        <h3>CTR — Taxa de cliques</h3>
        <p>Quantos % das pessoas que viram o anúncio clicaram. Mede a força do criativo.</p>
        <ul>
          <li>Bom: acima de 1,5%.</li>
          <li>Atenção: 0,8% a 1,5%.</li>
          <li>Ruim: abaixo de 0,8% → problema no criativo (gancho fraco).</li>
        </ul>

        <h3>CPC — Custo por clique</h3>
        <p>CPM ÷ CTR × 1000. Quanto custa cada visita ao site.</p>
        <ul>
          <li>Bom: abaixo de R$ 1,50.</li>
          <li>Atenção: R$ 1,50 a R$ 3,00.</li>
          <li>Ruim: acima de R$ 3,00 → criativo não está performando.</li>
        </ul>

        <h3>Taxa de conversão da página</h3>
        <p>Quantos % dos cliques viram compra. Mede a página, não o anúncio.</p>
        <ul>
          <li>Bom: 1,5% a 3%.</li>
          <li>Atenção: 0,5% a 1,5%.</li>
          <li>Ruim: abaixo de 0,5% → problema na página de produto (descrição, fotos, preço).</li>
        </ul>

        <h3>ROAS — Retorno sobre investimento em anúncio</h3>
        <p>Faturamento ÷ valor gasto em ads.</p>
        <ul>
          <li>Empate: ROAS 2,0 com markup 2x.</li>
          <li>Bom: ROAS 2,5 a 3,5.</li>
          <li>Excelente: acima de 3,5.</li>
        </ul>

        <h3>Como diagnosticar pela métrica</h3>
        <div class="example">
          <p><b>CTR alto + conversão baixa</b> = problema na página.</p>
          <p><b>CTR baixo + CPM alto</b> = problema no criativo (gancho fraco).</p>
          <p><b>CTR ok + conversão ok + ROAS baixo</b> = margem muito apertada, revisar preço.</p>
          <p><b>Sem dados depois de R$ 30 gastos</b> = aguardar mais 24h, Meta ainda aprendendo.</p>
        </div>
      `
    },

    {
      id: "tp-otimizacao",
      area: "trafego-pago",
      title: "Quando matar, escalar ou esperar uma campanha",
      summary: "Regras claras de decisão para evitar matar campanha cedo demais ou queimar dinheiro com conjunto ruim.",
      tags: ["trafego-pago", "otimizacao", "decisao"],
      body: `
        <p>A pergunta que mais aparece no chat: "concierge, mato ou deixo mais um dia?". Use estas regras.</p>

        <h3>Regra dos R$ 30 (cada conjunto)</h3>
        <p>Cada conjunto precisa gastar pelo menos R$ 30 antes de qualquer decisão. Abaixo disso, dados não são significativos.</p>

        <h3>Decisão por marco de gasto</h3>

        <h4>Conjunto gastou R$ 30 sem venda</h4>
        <ul>
          <li>CTR &gt; 1% → manter mais 24h, problema pode ser página.</li>
          <li>CTR &lt; 1% → matar conjunto, criativo está fraco.</li>
        </ul>

        <h4>Conjunto gastou R$ 50 com 1 venda</h4>
        <ul>
          <li>ROAS 2+ → manter e observar mais 24h.</li>
          <li>ROAS abaixo de 2 → analisar página antes de matar.</li>
        </ul>

        <h4>Conjunto gastou R$ 100 com 0 venda</h4>
        <ul>
          <li>Matar conjunto, criativo + público não converteu.</li>
          <li>Não significa que o produto é ruim. Significa que essa combinação não foi.</li>
        </ul>

        <h4>Conjunto gastou R$ 100 com 2+ vendas, ROAS &gt; 2</h4>
        <ul>
          <li>Manter e <b>duplicar</b> para escalada.</li>
          <li>Nunca aumentar orçamento direto no conjunto vencedor (quebra a otimização).</li>
        </ul>

        <h3>Como duplicar para escalar</h3>
        <ol>
          <li>No Gerenciador de Anúncios, clicar com botão direito no conjunto vencedor.</li>
          <li>Duplicar.</li>
          <li>Manter o mesmo criativo, mesmo público.</li>
          <li>Subir o orçamento do novo conjunto para R$ 30 ou R$ 40.</li>
          <li>Deixar o conjunto original também rodando.</li>
        </ol>

        <div class="callout warning">
          <b>Nunca:</b> dobrar orçamento direto em conjunto que está performando bem. O Meta recalcula a otimização e geralmente quebra. Sempre duplicar.
        </div>
      `
    },

    {
      id: "tp-pixel-meta",
      area: "trafego-pago",
      title: "Pixel da Meta e configuração de eventos",
      summary: "Como instalar o pixel na Nuvemshop e configurar os eventos de conversão corretamente.",
      tags: ["trafego-pago", "pixel", "meta-ads", "eventos"],
      body: `
        <p>Sem pixel rodando direito, a campanha não otimiza e os números mentem. Instale primeiro, anuncie depois.</p>

        <h3>Passo 1 — Criar o pixel</h3>
        <ol>
          <li>Gerenciador de Negócios → Fontes de Dados → Pixels.</li>
          <li>Criar pixel → nome (igual ao da loja).</li>
          <li>Copiar o ID do pixel.</li>
        </ol>

        <h3>Passo 2 — Vincular à Nuvemshop</h3>
        <ol>
          <li>Nuvemshop → <b>Configurações → Métricas externas → Facebook Pixel</b>.</li>
          <li>Colar o ID do pixel.</li>
          <li>Salvar.</li>
        </ol>

        <h3>Passo 3 — Configurar API de Conversões</h3>
        <p>Importante para o iOS — sem isso, dados ficam muito incompletos.</p>
        <ol>
          <li>Nuvemshop → Loja de aplicativos → buscar "<b>API de Conversões Meta</b>".</li>
          <li>Instalar e autorizar.</li>
          <li>Vincular ao pixel.</li>
        </ol>

        <h3>Passo 4 — Configurar eventos no Gerenciador</h3>
        <ol>
          <li>Gerenciador de Eventos → seu pixel → Configurar.</li>
          <li>Definir os 8 eventos prioritários, na ordem:
            <ol>
              <li>Compra</li>
              <li>Inicialização de checkout</li>
              <li>Adicionar ao carrinho</li>
              <li>Adicionar informações de pagamento</li>
              <li>Adicionar à lista de desejos</li>
              <li>Pesquisar</li>
              <li>Visualizar conteúdo</li>
              <li>Lead</li>
            </ol>
          </li>
          <li>Salvar.</li>
        </ol>

        <h3>Como confirmar que está funcionando</h3>
        <ol>
          <li>Instalar a extensão <b>Meta Pixel Helper</b> no Chrome.</li>
          <li>Abrir a loja em uma aba.</li>
          <li>A extensão deve mostrar o ID do pixel e o evento <code>PageView</code> sendo disparado.</li>
          <li>Adicionar um produto ao carrinho e iniciar o checkout — devem aparecer os eventos <code>AddToCart</code> e <code>InitiateCheckout</code>.</li>
        </ol>

        <div class="callout">
          <b>Dica:</b> antes de subir campanha, faça uma compra teste real (pode cancelar depois) para garantir que o evento <code>Purchase</code> está disparando.
        </div>
      `
    },

    // ============ MINERAÇÃO ============
    {
      id: "mn-criterios-produto",
      area: "mineracao",
      title: "Critérios para selecionar produto de fase 1",
      summary: "O checklist para escolher o produto certo entre os 10 minerados e ter chance real de validar.",
      tags: ["mineracao", "produto", "fase-1", "validacao"],
      body: `
        <p>O 80/20 do dropshipping é o produto. Aplicar bem este checklist evita 80% dos motivos de uma operação não validar.</p>

        <h3>Checklist obrigatório (todos os itens)</h3>
        <ul>
          <li>✅ Custo de até <b>R$ 50</b> (com frete do fornecedor para o aluno).</li>
          <li>✅ Permite venda até <b>R$ 100</b> com margem (markup 2x mínimo).</li>
          <li>✅ Resolve <b>dor cotidiana</b> clara — não é "legal de ter", é "preciso".</li>
          <li>✅ Tem demanda comprovada — viralizou no TikTok ou aparece em ML Tendências.</li>
          <li>✅ Disponível em <b>fornecedor com prazo aceitável</b> (Shopee 5–10 dias, ou AliExpress 15–30).</li>
          <li>✅ Permite <b>criativo Frankenstein</b> — existem vídeos do produto na internet sem rosto identificável e sem logo.</li>
          <li>✅ <b>Não é restrito</b> pelo Meta Ads (não promete cura, emagrecimento corporal, produto adulto).</li>
        </ul>

        <h3>Checklist desejável (não bloqueia, mas ajuda)</h3>
        <ul>
          <li>👍 Tem variações (cor, tamanho) — aumenta ticket médio.</li>
          <li>👍 Tem produtos complementares para upsell.</li>
          <li>👍 É leve e pequeno (frete mais barato).</li>
          <li>👍 Tem avaliações com fotos em outras plataformas (BK Reviews vai usar).</li>
        </ul>

        <h3>Sinais de produto ruim (evitar)</h3>
        <ul>
          <li>❌ Custo alto + venda &gt; R$ 200 (precisa de mais sofisticação no funil).</li>
          <li>❌ Produto saturado há mais de 6 meses no Brasil (entrou na fase de margens espremidas).</li>
          <li>❌ Apenas com fornecedor internacional caro (prazo 40+ dias).</li>
          <li>❌ Sem variedade de criativo possível (todo vídeo é igual).</li>
          <li>❌ Produto com restrições legais (cosméticos não certificados, suplementos).</li>
        </ul>

        <div class="callout">
          <b>Pergunta-síntese:</b> "Se eu visse esse produto rolando no meu feed, eu pararia para assistir o vídeo?". Se a resposta é não, o aluno está errando o produto.
        </div>
      `
    },

    {
      id: "mn-tiktok-shop",
      area: "mineracao",
      title: "Mineração no TikTok Shop e TikTok Brasil",
      summary: "Como usar a busca do TikTok e o TikTok Shop para encontrar produtos validados antes de subir no Brasil.",
      tags: ["mineracao", "tiktok", "tiktok-shop"],
      body: `
        <p>O TikTok antecipa o que vai ser tendência no Brasil em 30–60 dias. Quem minera lá ganha vantagem de tempo.</p>

        <h3>Busca direta no TikTok (sem TikTok Shop)</h3>
        <ol>
          <li>Abrir o TikTok no celular.</li>
          <li>Buscar por termos como: "tiktok made me buy it", "produtos virais", "dropshipping", "amazon finds".</li>
          <li>Filtrar por <b>data: últimos 3 meses</b>.</li>
          <li>Ordenar por curtidas — anotar produtos que aparecem em mais de um vídeo viralizado.</li>
        </ol>

        <h3>TikTok Shop (quando disponível)</h3>
        <p>O TikTok Shop não está totalmente liberado no Brasil para venda como vendedor, mas serve como vitrine de mineração.</p>
        <ol>
          <li>Acessar a aba <b>Loja</b> dentro do TikTok.</li>
          <li>Ver os produtos em alta na sua categoria de interesse.</li>
          <li>Olhar quantos vídeos cada produto tem associados — mais vídeos = mais validação.</li>
        </ol>

        <h3>Termos de busca úteis</h3>
        <ul>
          <li>"acessórios cozinha viral"</li>
          <li>"produto pet TikTok"</li>
          <li>"organização casa"</li>
          <li>"compras úteis casa"</li>
          <li>"presente criativo"</li>
          <li>"item de cozinha que vale a pena"</li>
        </ul>

        <h3>O que anotar de cada produto</h3>
        <ul>
          <li>Nome / descrição do produto.</li>
          <li>Quantos vídeos diferentes ele tem com 100k+ views.</li>
          <li>Faixa de preço em que aparece sendo vendido.</li>
          <li>Tipo de gancho usado nos vídeos (problema, demonstração, comparação).</li>
        </ul>

        <div class="callout">
          <b>Atenção:</b> produto que viralizou há 6+ meses provavelmente já saturou no Brasil. Mire em produtos com vídeos virais dos últimos 30–90 dias.
        </div>
      `
    },

    {
      id: "mn-mercado-livre",
      area: "mineracao",
      title: "Mineração no Mercado Livre Tendências",
      summary: "Como usar o Mercado Livre Tendências e o ranking de mais vendidos para validar demanda no Brasil.",
      tags: ["mineracao", "mercado-livre", "tendencias"],
      body: `
        <p>O ML mostra o que o brasileiro está comprando AGORA, não o que viralizou em outro país. É a melhor fonte de validação de demanda local.</p>

        <h3>Mercado Livre Tendências</h3>
        <ol>
          <li>Acessar <code>tendencia.mercadolivre.com.br</code>.</li>
          <li>Selecionar a categoria do nicho.</li>
          <li>Ver os termos de busca mais crescentes nos últimos 7, 30 e 90 dias.</li>
          <li>Termos com crescimento acentuado e baixa concorrência são ouro.</li>
        </ol>

        <h3>Mais vendidos por categoria</h3>
        <ol>
          <li>Mercado Livre → Categorias → escolher categoria.</li>
          <li>Filtrar por "<b>Mais vendidos</b>".</li>
          <li>Anotar os top 20 da categoria.</li>
          <li>Filtrar pelos critérios de fase 1: custo até R$ 50, venda até R$ 100.</li>
        </ol>

        <h3>O que olhar em cada produto</h3>
        <ul>
          <li>Número de vendas históricas (acima de 500 = produto validado).</li>
          <li>Quantidade de anunciantes — muitos vendendo = saturação alta, evitar.</li>
          <li>Avaliações: 4+ estrelas com 100+ reviews = produto entrega.</li>
          <li>Faixa de preço de venda mais comum.</li>
        </ul>

        <h3>Cruzamento com TikTok</h3>
        <p>Produto que aparece como tendência crescente no ML <b>E</b> tem vídeos virais recentes no TikTok = forte candidato para fase 1.</p>
      `
    },

    {
      id: "mn-shopee-mineracao",
      area: "mineracao",
      title: "Mineração na Shopee",
      summary: "Como usar a Shopee como vitrine de tendência e identificar produtos com curva de demanda subindo.",
      tags: ["mineracao", "shopee"],
      body: `
        <p>A Shopee tem dois papéis na nossa metodologia: fornecedor (ver artigo de fornecedores) e fonte de mineração. Aqui falamos do segundo.</p>

        <h3>Onde minerar na Shopee</h3>
        <ol>
          <li>Categoria <b>Em alta</b> na home.</li>
          <li>Vídeos curtos da Shopee (aba "Shopee Vídeo").</li>
          <li>Lojas Mall com 4,9+ estrelas e mais de 10k vendas — produtos delas costumam ser bem alinhados ao público.</li>
        </ol>

        <h3>Busca por termos</h3>
        <p>Use os mesmos termos da busca no Mercado Livre Tendências, mas dentro da Shopee, e ordene por "mais vendidos".</p>

        <h3>Filtros importantes</h3>
        <ul>
          <li><b>Frete grátis</b> ativo — fornecedor com frete grátis facilita o preço final ao consumidor.</li>
          <li><b>4 estrelas ou mais</b> — produto entrega.</li>
          <li><b>Vendido por Shop Mall</b> — geralmente mais confiável e com prazo de entrega menor.</li>
        </ul>

        <h3>Sinais de produto mineroso</h3>
        <ul>
          <li>Vários vendedores diferentes vendendo o mesmo produto (validação de mercado).</li>
          <li>O mesmo produto com fotos parecidas vindas de fornecedor único — tem fornecedor estável.</li>
          <li>Reviews em foto frequentes — produto entrega o que promete.</li>
        </ul>
      `
    },

    {
      id: "mn-adminer",
      area: "mineracao",
      title: "Como usar o Adminer / espia de anúncios",
      summary: "Ferramenta de espionagem de anúncios do Meta para ver o que outros lojistas estão rodando agora.",
      tags: ["mineracao", "adminer", "spy", "anuncios"],
      body: `
        <p>Adminer e similares (Adheart, BigSpy, Minea) mostram anúncios que estão rodando AGORA no Facebook e Instagram. Mineração de anúncio em movimento.</p>

        <h3>Como acessar</h3>
        <p>O time tem acesso compartilhado a uma ferramenta. Pedir link e credenciais ao responsável de operações.</p>

        <h3>Filtros que mais funcionam</h3>
        <ul>
          <li><b>País</b>: Brasil.</li>
          <li><b>Idioma</b>: Português.</li>
          <li><b>Plataforma</b>: Facebook + Instagram.</li>
          <li><b>Engajamento</b>: ordenar pelos mais comentados/curtidos (alto engajamento = está vendendo).</li>
          <li><b>Dias rodando</b>: 14+ dias (anúncio que sobrevive duas semanas no Brasil é porque dá lucro).</li>
          <li><b>Categoria/palavra-chave</b>: ajustar conforme nicho.</li>
        </ul>

        <h3>O que copiar (e o que NÃO copiar)</h3>
        <p>O Adminer serve para identificar produtos e <b>estrutura</b> de criativo, não para clonar.</p>
        <ul>
          <li>✅ Identificar o produto que está sendo anunciado.</li>
          <li>✅ Analisar a estrutura do criativo (gancho, demonstração, oferta).</li>
          <li>✅ Ler a copy para entender ângulo de venda.</li>
          <li>✅ Visitar a página de produto e analisar a estrutura.</li>
          <li>❌ Baixar o vídeo e subir igual — Meta detecta e bloqueia.</li>
          <li>❌ Copiar a copy ipsis litteris — bloqueia também.</li>
        </ul>

        <h3>Workflow de mineração no Adminer</h3>
        <ol>
          <li>Filtrar por nicho + 14+ dias.</li>
          <li>Listar 15–20 produtos diferentes.</li>
          <li>Para cada um, conferir se passa nos critérios de produto de fase 1.</li>
          <li>Reduzir para os 10 melhores.</li>
          <li>Esses 10 são apresentados ao concierge para análise.</li>
        </ol>
      `
    },

    // ============ FORNECEDORES ============
    {
      id: "fn-shopee-vs-aliexpress",
      area: "fornecedores",
      title: "Shopee vs AliExpress / Dropi — quando usar cada um",
      summary: "Comparativo objetivo: prazo, preço, automação, gargalo operacional. Onde recomendamos cada um.",
      tags: ["fornecedores", "shopee", "aliexpress", "dropi"],
      body: `
        <p>Dentro da nossa metodologia da reunião de onboarding e da call estratégica, orientamos uso da Shopee como fornecedor padrão da fase 1. Aqui está o porquê.</p>

        <h3>Tabela comparativa</h3>
        <table class="cmp-table">
          <thead>
            <tr><th>Critério</th><th>Shopee</th><th>AliExpress + Dropi</th></tr>
          </thead>
          <tbody>
            <tr><td>Prazo médio até o cliente</td><td><b>5–10 dias</b></td><td>15–30 dias</td></tr>
            <tr><td>Preço médio do produto</td><td>Competitivo (cashback ajuda)</td><td>Mais barato em catálogo amplo</td></tr>
            <tr><td>Variedade de produtos</td><td>Boa para produtos virais</td><td>Excelente, mais opções</td></tr>
            <tr><td>Processamento de pedido</td><td><b>Manual</b> (gargalo)</td><td>Automatizado via Dropi</td></tr>
            <tr><td>Risco de o fornecedor sumir</td><td>Médio (rotatividade de vendedores)</td><td>Médio</td></tr>
            <tr><td>Frete grátis</td><td>Frequente, com cupom</td><td>Pago à parte</td></tr>
            <tr><td>Bom para escala 100+ pedidos/dia</td><td><b>Não</b> — vira gargalo</td><td>Sim</td></tr>
          </tbody>
        </table>

        <h3>Nossa orientação</h3>
        <ul>
          <li><b>Fase 1 (validação, até 10 vendas):</b> Shopee. Mais rápido para o cliente, primeiras vendas têm review melhor. Processamento manual ainda dá conta.</li>
          <li><b>Fase 2 (pré-escala, 10–30 vendas/dia):</b> avaliar transição para AliExpress + Dropi. Shopee começa a virar gargalo operacional.</li>
          <li><b>Fase 3 (escala, 30+ vendas/dia):</b> AliExpress + Dropi obrigatório. Ou fornecedor nacional dedicado, se a operação permitir.</li>
        </ul>

        <div class="callout warning">
          <b>Importante para o time:</b> esta orientação difere do que o aluno aprende nas aulas gravadas do Ecom Scale, que indicam AliExpress + Dropi como caminho padrão. Use a reunião estratégica para alinhar este ponto: na prática da fase 1, a Shopee converte melhor pelo prazo, mesmo com gargalo manual.
        </div>
      `
    },

    {
      id: "fn-comprar-shopee",
      area: "fornecedores",
      title: "Como processar pedidos na Shopee — passo a passo",
      summary: "Workflow manual de processamento de pedidos via Shopee, dos cuidados na compra ao envio do código de rastreio.",
      tags: ["fornecedores", "shopee", "pedido", "processamento"],
      body: `
        <p>Como o processamento é manual, ter um workflow padronizado evita erros e poupa tempo. Salve este artigo nos favoritos para repassar aos alunos.</p>

        <h3>Passo 1 — Receber o pedido</h3>
        <p>Sempre que entrar pedido na Nuvemshop, registrar no controle de pedidos (planilha ou app de gestão) com:</p>
        <ul>
          <li>Nº do pedido Nuvemshop.</li>
          <li>Produto vendido.</li>
          <li>Nome do cliente.</li>
          <li>Endereço completo.</li>
          <li>Data da venda.</li>
        </ul>

        <h3>Passo 2 — Comprar na Shopee</h3>
        <ol>
          <li>Localizar o produto no fornecedor escolhido.</li>
          <li>Conferir <b>variação</b>, <b>cor</b> e <b>tamanho</b> exatamente como pedido pelo cliente.</li>
          <li>No carrinho da Shopee, alterar o <b>endereço de entrega</b> para o endereço do cliente da loja.</li>
          <li>Aplicar cupons de frete grátis e cashback antes de pagar.</li>
          <li>Pagar (Pix ou cartão).</li>
          <li>Salvar o número de pedido da Shopee no controle.</li>
        </ol>

        <h3>Passo 3 — Pegar código de rastreio</h3>
        <p>Quando a Shopee enviar, vai gerar um código de rastreio (Shopee Logistics ou correios).</p>
        <ol>
          <li>Acessar o pedido na Shopee.</li>
          <li>Copiar o código de rastreio.</li>
        </ol>

        <h3>Passo 4 — Atualizar na Nuvemshop</h3>
        <ol>
          <li>Painel Nuvemshop → Pedidos → pedido em questão.</li>
          <li>Adicionar o código de rastreio na seção de envio.</li>
          <li>Marcar como <b>Enviado</b>.</li>
          <li>O cliente recebe e-mail automático com o código.</li>
        </ol>

        <h3>Quando o aluno tem 10+ pedidos por dia</h3>
        <p>Sinal que está hora de pensar em migrar para AliExpress + Dropi (ver artigo Shopee vs AliExpress).</p>

        <div class="callout">
          <b>Dica de Concierge:</b> orientar o aluno a separar 1 horário fixo do dia para processar pedidos em lote (ex: 19h–20h, depois do horário comercial). Ajuda a não interromper as outras tarefas.
        </div>
      `
    },

    {
      id: "fn-dropi-setup",
      area: "fornecedores",
      title: "Setup do Dropi para automação com AliExpress",
      summary: "Como instalar e configurar o Dropi para automatizar processamento de pedidos AliExpress na Nuvemshop.",
      tags: ["fornecedores", "dropi", "aliexpress", "automacao"],
      body: `
        <p>Quando a operação cresce e o processamento manual vira gargalo, o Dropi entra. Faz a ponte entre a Nuvemshop e o AliExpress.</p>

        <h3>O que o Dropi faz</h3>
        <ul>
          <li>Importa pedidos da Nuvemshop automaticamente.</li>
          <li>Faz a compra no AliExpress com 1 clique.</li>
          <li>Atualiza códigos de rastreio.</li>
          <li>Calcula custos e margens.</li>
          <li>Centraliza vários fornecedores além do AliExpress (CJ Dropshipping, etc).</li>
        </ul>

        <h3>Setup</h3>
        <ol>
          <li>Criar conta em <code>dropi.com.br</code>.</li>
          <li>Escolher plano (existe gratuito com limite de pedidos).</li>
          <li>Conectar Nuvemshop → painel Dropi → Lojas → Conectar Nuvemshop → autorizar.</li>
          <li>Conectar conta AliExpress.</li>
          <li>Conectar conta Mercado Pago ou outro meio para pagar os pedidos automaticamente.</li>
        </ol>

        <h3>Workflow com Dropi</h3>
        <ol>
          <li>Cliente compra na loja.</li>
          <li>Pedido aparece automaticamente no Dropi.</li>
          <li>Aluno revisa os dados (1 minuto).</li>
          <li>Aluno clica em "Comprar" → Dropi compra no AliExpress.</li>
          <li>Quando AliExpress envia, Dropi atualiza rastreio na Nuvemshop sozinho.</li>
        </ol>

        <h3>Quando migrar para Dropi</h3>
        <ul>
          <li>10+ pedidos por dia.</li>
          <li>Aluno está em fase 2 ou 3.</li>
          <li>O processamento manual está consumindo mais de 1h por dia.</li>
        </ul>

        <div class="callout">
          <b>Atenção:</b> antes de mudar de Shopee para AliExpress, o aluno precisa <b>ajustar o prazo de entrega na loja</b>. AliExpress demora 15–30 dias, contra 5–10 da Shopee. Mudar sem comunicar gera reclamação.
        </div>
      `
    },

    // ============ CRIATIVOS ============
    {
      id: "cr-metodo-frankenstein",
      area: "criativos",
      title: "Método Frankenstein — como montar criativo a partir de vídeos da internet",
      summary: "Passo a passo do método: como pegar vídeos do produto, recortar, combinar e gerar 4 criativos diferentes.",
      tags: ["criativos", "frankenstein", "capcut", "video"],
      body: `
        <p>O método Frankenstein é o que permite o aluno subir 4 criativos diferentes sem gravar nada próprio. Funciona muito bem em fase 1.</p>

        <h3>Princípio</h3>
        <p>Pegar fragmentos de vídeos diferentes do mesmo produto na internet, recombinar de forma única, e gerar criativos visualmente novos.</p>

        <h3>Onde pegar os vídeos</h3>
        <ul>
          <li>TikTok — busca por nome do produto.</li>
          <li>AliExpress — descrição do produto tem vídeos.</li>
          <li>Shopee Vídeo.</li>
          <li>YouTube — buscar reviews ou demonstrações.</li>
        </ul>

        <h3>Critérios do que pode usar</h3>
        <ul>
          <li>✅ <b>Sem rosto humano identificável</b> — bloqueia anúncio se aparecer.</li>
          <li>✅ <b>Sem logo / marca d'água</b> do fornecedor.</li>
          <li>✅ Resolução mínima 720p.</li>
          <li>✅ Mãos podem aparecer, corpo de longe também.</li>
        </ul>

        <h3>Estrutura do criativo (15 a 30 segundos)</h3>
        <ol>
          <li><b>0–3s: Gancho</b> — uma frase ou imagem que faz parar de rolar. Pode ser:
            <ul>
              <li>Problema visual ("Olha o que aconteceu com a minha cozinha")</li>
              <li>Pergunta direta ("Você sofre com X?")</li>
              <li>Resultado impressionante ("Em 30 segundos limpa tudo")</li>
            </ul>
          </li>
          <li><b>3–10s: Demonstração</b> — produto em uso.</li>
          <li><b>10–20s: Benefícios</b> — texto na tela, 3 a 5 bullets.</li>
          <li><b>20–30s: CTA</b> — oferta + link na bio / promoção limitada.</li>
        </ol>

        <h3>Os 4 criativos da campanha</h3>
        <p>Cada criativo precisa testar uma variável diferente:</p>
        <ul>
          <li><b>Criativo 1</b>: Gancho de problema/dor.</li>
          <li><b>Criativo 2</b>: Gancho de demonstração impressionante.</li>
          <li><b>Criativo 3</b>: Gancho de comparação antes/depois.</li>
          <li><b>Criativo 4</b>: Gancho de oferta ("Por R$ X você resolve...").</li>
        </ul>

        <div class="callout">
          <b>Tempo médio:</b> os 4 criativos juntos levam 2–3 horas para um aluno iniciante. Vale o tempo — é o coração da campanha.
        </div>
      `
    },

    {
      id: "cr-capcut-edicao",
      area: "criativos",
      title: "Edição no CapCut — workflow básico para criativos de e-commerce",
      summary: "Setup do CapCut, atalhos essenciais e como exportar criativo na resolução certa para o Meta.",
      tags: ["criativos", "capcut", "edicao"],
      body: `
        <p>CapCut é gratuito, completo e suficiente para todo o trabalho de criativo do dropshipping iniciante.</p>

        <h3>Setup inicial</h3>
        <ol>
          <li>Baixar CapCut (PC ou celular).</li>
          <li>Criar projeto novo.</li>
          <li>Definir proporção: <b>9:16 (vertical)</b> para feed do Instagram e Reels.</li>
          <li>Também exportar versão <b>1:1 (quadrada)</b> para feed do Facebook.</li>
        </ol>

        <h3>Workflow padrão</h3>
        <ol>
          <li><b>Importar os clipes</b> baixados (TikTok, AliExpress, etc).</li>
          <li><b>Cortar partes que tem rosto ou logo</b>.</li>
          <li><b>Reordenar</b> seguindo a estrutura: gancho → demonstração → benefícios → CTA.</li>
          <li><b>Adicionar texto na tela</b> com a copy curta.</li>
          <li><b>Adicionar trilha</b> — usar trilhas da biblioteca do CapCut, evitar áudio do TikTok original (direitos autorais).</li>
          <li><b>Adicionar efeitos sonoros</b> de transição (whoosh, ding).</li>
          <li><b>Exportar</b> em 1080p, 30fps, MP4.</li>
        </ol>

        <h3>Textos na tela — boas práticas</h3>
        <ul>
          <li>Fonte grande, legível em celular.</li>
          <li>Contraste alto — branco com contorno preto ou amarelo com contorno preto.</li>
          <li>Posicionamento no centro alto da tela (não na borda — fica cortado em alguns posicionamentos).</li>
          <li>Cada texto na tela por no máximo 3 segundos — celular não lê texto longo.</li>
        </ul>

        <h3>Exportação para o Meta</h3>
        <ul>
          <li>Resolução: <b>1080x1920 px</b> (9:16) para Reels/Stories.</li>
          <li>Também exportar versão <b>1080x1080 px</b> (1:1) para feed Facebook.</li>
          <li>Formato: MP4, H.264.</li>
          <li>Taxa de bits: padrão alta do CapCut está ok.</li>
          <li>Duração: 15 a 30 segundos (não passar de 30 para garantir alcance).</li>
        </ul>

        <div class="callout warning">
          <b>Cuidado com áudio:</b> não usar trilhas com direitos autorais (música popular do TikTok geralmente é). O Meta detecta e baixa o alcance ou bloqueia o anúncio. Usar exclusivamente a biblioteca do CapCut ou trilhas livres.
        </div>
      `
    },

    {
      id: "cr-ganchos-abertura",
      area: "criativos",
      title: "Ganchos de abertura que mais funcionam",
      summary: "Lista prática de ganchos testados para os primeiros 3 segundos do criativo, com exemplos por nicho.",
      tags: ["criativos", "gancho", "copy", "hook"],
      body: `
        <p>O primeiro segundo decide se o feed continua rolando ou o vídeo é assistido. Esta é uma lista viva de ganchos que funcionam.</p>

        <h3>Tipos de gancho</h3>

        <h4>1. Problema reconhecido</h4>
        <p>O cliente vê um problema que ele tem, em casa, identifica e para o vídeo.</p>
        <ul>
          <li>"Cansado de chegar em casa com dor nas costas?"</li>
          <li>"Sua gaveta de utensílios é uma bagunça?"</li>
          <li>"Pelo do seu pet em todo lugar?"</li>
        </ul>

        <h4>2. Solução visualmente impressionante</h4>
        <p>Mostra o produto em uso resolvendo algo. O "uau" visual segura a atenção.</p>
        <ul>
          <li>Demonstração de produto descascando alho em 1 segundo.</li>
          <li>Antes e depois de uma escova removendo pelos.</li>
          <li>Brinquedo organizador entrando em ação.</li>
        </ul>

        <h4>3. Pergunta provocativa</h4>
        <ul>
          <li>"Você sabia que existe X que resolve Y?"</li>
          <li>"Olha o que eu encontrei na internet por R$ X."</li>
          <li>"Por que ninguém me falou disso antes?"</li>
        </ul>

        <h4>4. Comparação chocante</h4>
        <ul>
          <li>"Pela metade do preço de Y."</li>
          <li>"Faz o que produto X faz, custando 90% menos."</li>
          <li>"Em vez de gastar R$ 200 no salão..."</li>
        </ul>

        <h4>5. Oferta imediata</h4>
        <ul>
          <li>"Por R$ 47 você resolve isso de uma vez."</li>
          <li>"Frete grátis para todo o Brasil."</li>
          <li>"50% off só hoje."</li>
        </ul>

        <h3>Ganchos que NÃO funcionam</h3>
        <ul>
          <li>❌ Logo do produto no primeiro segundo — sem contexto.</li>
          <li>❌ Texto sem som no celular sem som — pessoas rolam sem áudio.</li>
          <li>❌ "Olá pessoal, hoje vou te apresentar..." — formato YouTube, não converte em Reels.</li>
          <li>❌ Fundo branco / produto estático — não para o feed.</li>
        </ul>

        <div class="callout">
          <b>Regra de ouro:</b> nos primeiros 3 segundos, tem que ter <b>movimento</b> (visual ou texto entrando na tela) <b>E</b> <b>contexto</b> (algo que o público se identifica).
        </div>
      `
    },

    {
      id: "cr-copy-anuncio",
      area: "criativos",
      title: "Como escrever a copy do anúncio (texto principal + título)",
      summary: "Estrutura de copy de anúncio Meta para conversão direta em e-commerce.",
      tags: ["criativos", "copy", "meta-ads"],
      body: `
        <p>O criativo vende, mas a copy do texto principal e do título podem dar o empurrão final. Use estrutura curta e direta.</p>

        <h3>Texto principal (caixa de texto do anúncio)</h3>
        <p>Estrutura recomendada:</p>
        <ol>
          <li><b>Linha 1 — gancho</b>: pergunta ou afirmação que prende a atenção.</li>
          <li><b>Linha 2–3 — benefícios</b>: 2 a 3 bullets curtos.</li>
          <li><b>Linha 4 — oferta</b>: preço, frete grátis, garantia.</li>
          <li><b>Linha 5 — CTA</b>: "Clique e garanta o seu."</li>
        </ol>

        <h3>Exemplo (produto pet, escova removedora de pelos)</h3>
        <div class="example">
          <p>Cansado de encontrar pelo do seu pet em todo lugar? 🐾</p>
          <p>✅ Remove pelos em 1 passada<br>✅ Não machuca a pele do animal<br>✅ Funciona em pelo curto e longo</p>
          <p>🚚 Frete grátis para todo Brasil<br>🛡 Garantia de 7 dias</p>
          <p>👉 Clique abaixo e veja como funciona.</p>
        </div>

        <h3>Título (35 caracteres)</h3>
        <p>O título aparece em letras grandes embaixo do criativo. Tem que ser direto.</p>
        <ul>
          <li>"Remova pelos em 1 passada"</li>
          <li>"Sua casa sem pelos de novo"</li>
          <li>"R$ 47 com frete grátis"</li>
        </ul>

        <h3>Descrição (curta, opcional)</h3>
        <p>Reforço da oferta. Não é obrigatório, mas ajuda.</p>
        <ul>
          <li>"Frete grátis e garantia de 7 dias."</li>
          <li>"Aproveite enquanto está em promoção."</li>
        </ul>

        <h3>Erros comuns</h3>
        <ul>
          <li>Texto muito longo (acima de 200 palavras) — celular corta com "Ver mais".</li>
          <li>Linguagem muito formal — não combina com Reels.</li>
          <li>Promessa exagerada ("Cura definitiva") — bloqueia anúncio.</li>
          <li>Sem CTA — pessoa não sabe o que fazer.</li>
        </ul>
      `
    },

    // ============ PROCESSOS CONCIERGE ============
    {
      id: "pc-sla-prioridade",
      area: "processos",
      title: "Matriz de prioridade P0–P3 e SLA do time",
      summary: "Critérios objetivos para classificar cada chamado e o tempo máximo de resposta para cada nível.",
      tags: ["processos", "sla", "prioridade", "triagem"],
      body: `
        <p>Toda mensagem que chega no DigiSac entra em uma das 4 caixas. Decisão em 5 segundos, sem teoria.</p>

        <h3>P0 — Crítico (resposta em &lt; 1h)</h3>
        <p>Situação onde o aluno está perdendo dinheiro AGORA ou tem dano grave.</p>
        <ul>
          <li>Checkout quebrado.</li>
          <li>Página fora do ar.</li>
          <li>Conta Meta bloqueada.</li>
          <li>Pixel não dispara em campanha rodando.</li>
          <li>Cliente do aluno em situação de crise (chargeback, denúncia, problema legal).</li>
        </ul>

        <h3>P1 — Alto (resposta em &lt; 4h)</h3>
        <p>Scale ativo em fase de validação/escala, com tráfego rodando.</p>
        <ul>
          <li>Dúvida sobre criativo prestes a subir.</li>
          <li>Métrica ruim em campanha já rodando.</li>
          <li>Ajuste de página de produto que está recebendo tráfego.</li>
          <li>Aluno Scale na 1ª reunião estratégica (não deixar esfriar).</li>
        </ul>

        <h3>P2 — Médio (resposta no mesmo dia)</h3>
        <p>Journey ainda configurando loja, dúvida sobre próximos passos sem urgência operacional.</p>
        <ul>
          <li>Dúvida sobre mineração.</li>
          <li>Escolha de nicho.</li>
          <li>Próximo passo da fase 1 (sem tráfego ativo).</li>
          <li>Pedido de feedback de loja em construção.</li>
        </ul>

        <h3>P3 — Baixo (resposta em &lt; 24h)</h3>
        <p>Dúvida conceitual sem bloqueio, pergunta já respondida no curso.</p>
        <ul>
          <li>"Vale a pena fazer X?"</li>
          <li>"Qual a melhor estratégia em geral?"</li>
          <li>Pedido de feedback genérico, sem urgência.</li>
        </ul>

        <h3>Regra de decisão em caso de dúvida</h3>
        <p>Se está em dúvida entre dois níveis, <b>sobe um</b>. P3 vira P2, P2 vira P1.</p>

        <div class="callout">
          <b>Critério operacional:</b> três passadas no DigiSac por dia. Em cada passada, atendo todos os P0 e P1 antes de tocar em P2 e P3.
        </div>
      `
    },

    {
      id: "pc-fluxo-atendimento",
      area: "processos",
      title: "Fluxo de atendimento padrão — passo a passo",
      summary: "O fluxo de 5 passos para resolver qualquer chamado do DigiSac com menos toques.",
      tags: ["processos", "fluxo", "atendimento"],
      body: `
        <p>Use sempre o mesmo fluxo. Não improvise — improvisação é o que faz a média de mensagens/chamado subir para 4,74.</p>

        <h3>Passo 1 — Leia a mensagem completa antes de responder</h3>
        <p>Resista ao impulso de responder na primeira linha. O contexto inteiro economiza ping-pong.</p>
        <ul>
          <li>Identifique qual é a pergunta real (às vezes a pergunta dita não é a pergunta verdadeira).</li>
          <li>Veja o histórico do aluno — em que fase está, qual produto está testando.</li>
        </ul>

        <h3>Passo 2 — Classifique a prioridade (P0–P3)</h3>
        <p>Decisão de 5 segundos. Em dúvida, sobe um.</p>

        <h3>Passo 3 — Procure no Playbook antes de digitar</h3>
        <ul>
          <li>Use a busca global do Playbook.</li>
          <li>Procure por palavra-chave (ex: "BK Reviews", "domínio HostGator", "ABO").</li>
          <li>90% das dúvidas já estão documentadas.</li>
        </ul>

        <h3>Passo 4 — Cole o link da etapa + 1 linha personalizada</h3>
        <p>Não digite o passo a passo do zero. Cole o link.</p>
        <div class="example">
          <p><b>Modelo de resposta:</b></p>
          <p>"Oi <b>&lt;nome do aluno&gt;</b>, segue o passo a passo: <b>&lt;link do artigo&gt;</b>. Confere se ficou claro e qualquer dúvida no passo X me chama por aqui."</p>
        </div>

        <h3>Passo 5 — Se foi pergunta nova, registre no FAQ</h3>
        <p>Pergunta que ainda não está documentada é melhoria para o time. Anote, envie pro responsável de atualização do Playbook (a quarta-feira é o dia de revisar).</p>

        <h3>Quando o aluno responde sem entender</h3>
        <ul>
          <li>Não recomece do zero — pergunte qual passo específico ficou confuso.</li>
          <li>Se possível, mande um print do passo em questão.</li>
          <li>Se persistir, escale para call rápida (5–10 minutos).</li>
        </ul>

        <div class="callout">
          <b>Meta:</b> derrubar a média de 4,74 msgs/chamado para 3,0. Cada chamado resolvido em 3 mensagens libera espaço para atender mais alunos com a mesma equipe.
        </div>
      `
    },

    {
      id: "pc-escalonamento",
      area: "processos",
      title: "Quando escalonar uma demanda",
      summary: "Critérios para escalar um caso para reunião individual, para coordenação ou para o suporte técnico.",
      tags: ["processos", "escalonamento", "reuniao"],
      body: `
        <p>Nem tudo se resolve no chat. Saber quando subir o caso evita ficar martelando mensagem sem desfecho.</p>

        <h3>Escalar para call individual (5–15 min)</h3>
        <ul>
          <li>Aluno trocou 5+ mensagens sem ficar claro.</li>
          <li>Análise de tráfego que precisa olhar conjunto de números.</li>
          <li>Diagnóstico de página de produto (precisa abrir e ver junto).</li>
          <li>Aluno P0 ou P1 com bloqueio que está perdendo dinheiro.</li>
        </ul>

        <h3>Escalar para reunião estratégica formal</h3>
        <ul>
          <li>Mudança de nicho ou produto.</li>
          <li>Avaliação se está hora de migrar para fase 2 ou 3.</li>
          <li>Reorganização da operação inteira.</li>
        </ul>

        <h3>Escalar para suporte técnico Nuvemshop / Meta</h3>
        <ul>
          <li>Bug no painel da Nuvemshop (orientar aluno a abrir chamado direto).</li>
          <li>Conta Meta bloqueada — somente o aluno consegue contestar.</li>
          <li>Problema com fornecedor de pagamento (Mercado Pago, PagSeguro).</li>
        </ul>

        <h3>Escalar para coordenação do time</h3>
        <ul>
          <li>Caso fora do escopo da metodologia.</li>
          <li>Pedido de exceção de plano ou cobrança.</li>
          <li>Aluno com reclamação formal.</li>
          <li>Pedido de cancelamento ou reembolso.</li>
        </ul>

        <div class="callout">
          <b>Como escalar bem:</b> sempre que escalar, mandar resumo curto do caso (situação + o que já foi tentado + qual a pergunta para o próximo nível). Sem isso, o caso volta de novo para você.
        </div>
      `
    },

    {
      id: "pc-scripts-mensagem",
      area: "processos",
      title: "Scripts de mensagens — modelos prontos para colar",
      summary: "Modelos de mensagem para situações recorrentes: boas-vindas, follow-up, encerramento, escalonamento.",
      tags: ["processos", "scripts", "modelos"],
      body: `
        <p>Mensagens-modelo padronizam o tom e economizam tempo. Adapte com 1 linha pessoal, mas mantenha a estrutura.</p>

        <h3>Boas-vindas pós-onboarding</h3>
        <div class="example">
          <p>"Oi <b>&lt;nome&gt;</b>! Que bom te ver na call de onboarding hoje. Aqui sou seu concierge do dia a dia — qualquer dúvida durante a execução da metodologia, me chama por aqui.<br><br>
          Próximo passo é a sua 1ª reunião estratégica individual. Pode agendar pelo link: <b>&lt;link&gt;</b><br><br>
          Bora começar?"</p>
        </div>

        <h3>Aluno sumiu (follow-up depois de 5 dias sem resposta)</h3>
        <div class="example">
          <p>"Oi <b>&lt;nome&gt;</b>, tudo bem? Vi que faz alguns dias que não trocamos mensagem. Como está a execução da fase 1? Travou em alguma parte ou tudo fluindo?<br><br>
          Se precisar de ajuda em algum passo específico, me dá um toque."</p>
        </div>

        <h3>Resposta padrão linkando artigo do Playbook</h3>
        <div class="example">
          <p>"Oi <b>&lt;nome&gt;</b>, segue o passo a passo: <b>&lt;link do artigo&gt;</b><br><br>
          Confere se ficou claro e qualquer dúvida no passo X me chama por aqui."</p>
        </div>

        <h3>Pedido de mais informação para diagnóstico</h3>
        <div class="example">
          <p>"Oi <b>&lt;nome&gt;</b>, pra eu te orientar melhor, me manda:<br>
          1. Print da campanha (visão geral)<br>
          2. Quantos dias rodando<br>
          3. Quanto já gastou no total<br>
          4. Link da página de produto<br><br>
          Com isso consigo te dar uma direção certa."</p>
        </div>

        <h3>Encerramento de chamado resolvido</h3>
        <div class="example">
          <p>"<b>&lt;nome&gt;</b>, fico feliz que funcionou! Vou marcar esse chamado como resolvido aqui do meu lado. Qualquer outra dúvida que surgir, me chama. Boa execução! 🚀"</p>
        </div>

        <h3>Escalonamento para call</h3>
        <div class="example">
          <p>"<b>&lt;nome&gt;</b>, esse caso vale a gente conversar por chamada — fica mais fácil eu te orientar do que por texto. Bora marcar uns 15 min? Aqui está minha agenda: <b>&lt;link&gt;</b>"</p>
        </div>

        <h3>Quando o aluno pede algo fora do escopo</h3>
        <div class="example">
          <p>"<b>&lt;nome&gt;</b>, esse ponto específico fica fora do que a gente cobre na mentoria, mas posso te indicar uns caminhos.<br>
          [seguir com indicação se possível, ou explicar o limite]<br><br>
          Qualquer outra coisa dentro do método, me chama."</p>
        </div>

        <div class="callout">
          <b>Princípio:</b> mensagem-modelo é ponto de partida, não cópia mecânica. Sempre revise o nome e adicione 1 linha personalizada com o contexto do aluno. Caso contrário, o aluno percebe e perde confiança.
        </div>
      `
    },

    {
      id: "pc-fechamento-chamado",
      area: "processos",
      title: "Critério para fechar um chamado no DigiSac",
      summary: "Quando marcar um chamado como resolvido para que a métrica de chamados fechados reflita realidade.",
      tags: ["processos", "digisac", "fechamento", "metrica"],
      body: `
        <p>Chamado fechado é métrica-chave. Não fechar quando deveria distorce o número e oculta capacidade real do time.</p>

        <h3>Pode fechar quando</h3>
        <ul>
          <li>Aluno confirmou que resolveu ou agradeceu.</li>
          <li>Você executou o que ele pediu (ex: revisou loja, deu devolutiva, mandou material).</li>
          <li>Aluno foi orientado a aplicar e não voltou em 3 dias.</li>
          <li>O problema foi escalado para outra área e a transferência foi feita.</li>
        </ul>

        <h3>Não pode fechar quando</h3>
        <ul>
          <li>O aluno ainda tem ação pendente do seu lado a ser entregue.</li>
          <li>O chamado é P0 ou P1 e o problema não está confirmado como resolvido.</li>
          <li>O aluno disse "vou tentar e te aviso" — neste caso, deixar aberto até ele voltar ou até passar 3 dias.</li>
        </ul>

        <h3>Workflow de fechamento</h3>
        <ol>
          <li>Mandar mensagem de encerramento (ver scripts).</li>
          <li>No DigiSac, marcar como <b>Resolvido</b>.</li>
          <li>Se for caso interessante, registrar no log de aprendizados para o estudo de caso mensal.</li>
        </ol>

        <h3>Limpeza semanal</h3>
        <p>Toda sexta-feira, varrer chamados abertos há mais de 5 dias. Para cada:</p>
        <ul>
          <li>Se aluno respondeu e está pendente do nosso lado → tratar imediatamente.</li>
          <li>Se aluno sumiu → mandar follow-up (script).</li>
          <li>Se aluno disse "depois te falo" há semanas → mandar mensagem de encerramento amigável e fechar.</li>
        </ul>
      `
    },

  ]
};
