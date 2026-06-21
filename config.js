/**
 * Cherry AI — config.js
 * Configuração central: idiomas, integrações, eventos e textos.
 * Edite este arquivo para personalizar o site sem tocar em HTML ou CSS.
 */

const CherryConfig = {

  /* ═══════════════════════════════════════════════════════════════
     GUIA RÁPIDO DO CONFIG
     Este arquivo é o painel central do site.
     Use ele para trocar textos, links, imagens, vídeos, CTAs, ícones
     e conteúdos principais sem precisar mexer no HTML, CSS ou JS.

     IMAGENS:
     Agora as imagens podem ficar soltas na raiz do site, junto do index.html.
     Exemplo simples: image: "minha-imagem.png"
     Também aceita links externos e formatos comuns: .png, .jpg, .jpeg,
     .webp, .svg, .gif e outros aceitos pelo navegador.

     VÍDEOS:
     Os vídeos também podem ficar soltos na raiz do site.
     Exemplo simples: files: ["meu-video.mp4", "meu-video.webm"]
     O site escolhe desktop/mobile automaticamente quando configurado.
     ═══════════════════════════════════════════════════════════════ */

  /* ─── CONTATO ──────────────────────────────────────────────── */
  whatsapp: {
    number: "5511916072188",
    name: "Rodrigo"
  },

  /* ─── MARCA / LOGOS ───────────────────────────────────────────
     Troque aqui a logo, ícone dos botões, favicon e ícone do iPhone.
     Deixe os arquivos soltos na raiz do site, junto com index.html.
     Exemplo: logo: "minha-logo.png" */
  brandAssets: {
    logo: "logosemfundo.png",
    emblem: "logosemfundo.png",
    favicon: "logosemfundo.png",
    appleTouchIcon: "logosemfundo.png"
  },

  /* ─── PESSOAS ONLINE NO CABEÇALHO ────────────────────────────
     Edite initial, min e max para controlar a numeração exibida ao lado da logo. */
  peopleOnline: {
    enabled: true,
    initial: 18,
    min: 12,
    max: 32,
    variationMs: 9000,
    label: {
      pt: "pessoas no site",
      en: "people on site",
      es: "personas en el sitio"
    }
  },

  /* ─── LINKS EXTERNOS DOS BOTÕES ──────────────────────────────
     Edite aqui para trocar os destinos sem mexer no HTML. */
  externalLinks: {
    whatsapp: "https://wa.me/5511916072188?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Cherry%20AI%20e%20quero%20solicitar%20um%20diagn%C3%B3stico%20gratuito.",
    diagnostic: "https://wa.me/5511916072188?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Cherry%20AI%20e%20quero%20solicitar%20um%20diagn%C3%B3stico%20gratuito.",
    instagram: "https://www.instagram.com/cherryai.br/",
    tiktok: "https://www.tiktok.com/@cherryai.br",
    // Coloque aqui os links externos dos cards dos trabalhos, na mesma ordem dos cards.
    demos: [
      "https://movanegocios.github.io/ABERTO/",
      "https://apv-empresas.github.io/amandatur/",
      "https://movanegocios.github.io/site-copa-oficial/",
      "https://apv-empresas.github.io/lumina/"
    ],

    // Link do botão do modal. Pode deixar "#diagnostic" ou colocar um link externo.
    modalButton: "https://wa.me/5511916072188?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Cherry%20AI%20e%20quero%20solicitar%20um%20diagn%C3%B3stico%20gratuito."
  },

  /* ─── MODAL DE CONVERSÃO ─────────────────────────────────────
     Aparece depois de 40 segundos. Para tirar o botão sem quebrar, use showButton:false. */
  conversionModal: {
    enabled: true,
    delayMs: 40000,
    showButton: true,
    showOncePerSession: true
  },

  /* ─── SOM PREMIUM NAS INTERAÇÕES ─────────────────────────────
     Usa Web Audio API, sem arquivo externo. O som só toca após ação do usuário,
     respeita modo de economia de movimento e pode ser desligado aqui. */
  uiSound: {
    enabled: true,
    volume: 0.085,
    frequency: 820,
    secondaryFrequency: 1240,
    durationMs: 74,
    type: "sine"
  },

  /* ─── FORMULÁRIO INTELIGENTE ───────────────────────────────
     Melhora a experiência sem trocar campos, integrações ou payload. */
  formUX: {
    enabled: true,
    progressEnabled: true,
    whatsappMask: true,
    focusHints: true,
    autoResizeMessage: true,
    hints: {
      name: "Use seu nome para facilitar o atendimento.",
      whatsapp: "Digite com DDD. Exemplo: (11) 99999-9999.",
      company: "Pode ser o nome da empresa, projeto ou perfil.",
      segment: "Exemplo: restaurante, clínica, loja, barbearia.",
      improve: "Escolha o principal gargalo que você quer resolver.",
      interest: "Escolha a solução que mais combina com o momento.",
      message: "Opcional. Conte o que está travando seu atendimento ou vendas."
    }
  },

  /* ─── BOTÃO WHATSAPP FIXO ───────────────────────────────────
     Controla o botão atual "Estamos aqui para atender" sem mexer no HTML. */
  stickyWhatsapp: {
    enabled: true,
    text: {
      pt: "Estamos aqui para atender",
      en: "We are here to help",
      es: "Estamos aquí para atender"
    },
    hoverText: {
      pt: "Rodrigo Online🟢",
      en: "Rodrigo Online🟢",
      es: "Rodrigo en línea🟢"
    },
    logo: "logosemfundo.png",
    logoSize: 54,
    mobileLogoSize: 52,
    link: "https://wa.me/5511916072188?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Cherry%20AI%20e%20quero%20solicitar%20um%20diagn%C3%B3stico%20gratuito."
  },

  /* ─── BOTÃO FLUTUANTE AO ROLAR ──────────────────────────────
     Aparece quando o usuário desce o site. Use position: "left", "right" ou "center". */
  scrollLogoCta: {
    enabled: true,
    showAfterPx: 430,
    text: {
      pt: "Vamos começar",
      en: "Let's start",
      es: "Empecemos"
    },
    hoverText: {
      pt: "A cereja que faltava para",
      en: "The missing cherry\nfor your business.",
      es: "La cereza que faltaba\npara tu negocio."
    },
    logo: "logonegocio.png",
    mobileLogo: "logonegocio.png",
    logoSize: 64,
    mobileLogoSize: 62,
    link: "https://wa.me/5511916072188?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Cherry%20AI%20e%20quero%20come%C3%A7ar.",
    position: {
      desktop: "left",
      mobile: "center"
    }
  },

  /* ─── BOTÃO VOLTAR AO TOPO ─────────────────────────────────
     Ajuda o cliente a subir o site sem mexer nos CTAs de WhatsApp. */
  backToTop: {
    enabled: true,
    showAfterPx: 620,
    label: {
      pt: "Voltar ao topo",
      en: "Back to top",
      es: "Volver arriba"
    },
    icon: "↑",
    position: {
      desktop: {
        right: 28,
        bottom: 170
      },
      mobile: {
        right: 18,
        bottom: 152
      }
    }
  },

  /* ─── PROTEÇÃO BÁSICA ───────────────────────────────────────
     Dificulta inspeção por usuários comuns. Não é uma proteção definitiva. */
  security: {
    disableContextMenu: true,
    disableInspectShortcuts: true
  },

  /* ─── AJUSTES VISUAIS EDITÁVEIS ──────────────────────────────
     Mantém o estilo atual, mas permite personalizar pontos principais pelo config. */
  visual: {
    themeColor: "#050506",
    accentColor: "#D9154F",
    headerOffset: 84
  },

  /* ─── PERFORMANCE ──────────────────────────────────────────── */
  performance: {
    preloadCriticalVideos: true,
    lazyImages: true,
    reduceMotionRespect: true
  },

  /* ─── VÍDEOS DO HERO / PRIMEIRA DOBRA ─────────────────────────
     Aqui você troca os vídeos principais do topo do site.
     Deixe os vídeos soltos na raiz do site ou use link direto.
     Aceita formatos comuns de vídeo suportados pelo navegador.
     Exemplo: files: ["meu-video.mp4", "meu-video.webm"] */
  heroVideo: {
    desktop: {
      files: ["videopc04.webm","cerejanobolo.webm"]
    },
    mobile: {
      files: ["videopc04.webm","cerejanobolo.webm"]
    }
  },

  /* ─── CARROSSEL POR TRÁS DA TELA ───────────────────────────────
     autoplayMs controla o tempo da troca automática de slides.
     Use 0 para desligar autoplay.
     fallbackImage aparece se algum slide estiver sem imagem. */
  behindCarousel: {
    autoplayMs: 4800,
    fallbackImage: "logosemfundo.png"
  },

  /* ─── PADRÃO DE IMAGEM NO CONFIG ───────────────────────────────
     Forma simples, recomendada:
       image: "minha-imagem.png"

     A imagem pode ficar solta na raiz do site, junto com index.html.
     Também pode usar link direto:
       image: "https://seudominio.com/minha-imagem.webp"

     Forma avançada, opcional:
       sources: [
         { srcset: "minha-imagem.webp", type: "image/webp" },
         { srcset: "minha-imagem.jpg",  type: "image/jpeg" }
       ],
       image: "minha-imagem.jpg"

     O campo image funciona como fallback.
  */

  /* ─── VÍDEO DA SEÇÃO CEREJA DO BOLO / CHERRY BOOST ───────────
     Aqui você troca o vídeo de fundo da seção Cherry Boost.
     Deixe os vídeos soltos na raiz do site ou use link direto. */
  boostVideo: {
    desktop: {
      files: ["videopc04.webm", "cerejanobolo.webm"]
    },
    mobile: {
      files: ["videopc04.webm", "cerejanobolo.webm"]
    }
  },

  /* ─── INTEGRAÇÕES ──────────────────────────────────────────── */
  integrations: {
    n8n: {
      enabled: true,
      url: "" // Ex: https://seu-n8n.com/webhook/cherry-lead
    },
    appScript: {
      enabled: true,
      url: "" // Ex: https://script.google.com/macros/s/SEU_ID/exec
    },
    metaPixel: {
      enabled: false,
      pixelId: "" // Ex: "1234567890"
    },
    tiktokPixel: {
      enabled: false,
      pixelId: "" // Ex: "CXXXXXXXXXXXX"
    },
    gtm: {
      enabled: false,
      id: "" // Ex: "GTM-XXXXXX"
    }
  },

  /* ─── IDIOMA PADRÃO ────────────────────────────────────────── */
  defaultLang: "pt",

  /* ─── TEXTOS MULTILÍNGUES ──────────────────────────────────── */
  i18n: {

    /* ── PORTUGUÊS ─────────────────────────────────────────── */
    pt: {
      meta: {
        title: "Cherry AI — IA, Automação e Sites Inteligentes para Empresas Locais",
        description: "Sites inteligentes, automações, agentes de IA, WhatsApp inteligente e impulsionamento para empresas locais venderem mais e crescerem com estrutura."
      },
      nav: {
        home: "Início",
        problem: "O problema",
        about: "A Cherry",
        solutions: "Soluções",
        how: "Como funciona",
        demos: "Meus trabalhos",
        behind: "Bastidores",
        boost: "Cherry Boost",
        objections: "Sem dúvidas",
        faq: "Dúvidas",
        language: "Idioma",
        diagnostic: "Diagnóstico"
      },
      hero: {
        title: "A inteligência que transforma atenção em venda.",
        subtitle: "Sites inteligentes, automações e agentes de IA para empresas locais venderem mais, atenderem melhor e crescerem com estrutura.",
        cta_primary: "Solicitar diagnóstico gratuito",
        cta_secondary: "Conhecer soluções"
      },
      pain: {
        label: "O PROBLEMA",
        title: "Seu negócio não perde vendas por falta de interesse.",
        title_highlight: "Perde por falta de estrutura.",
        subtitle: "Você recebe atenção. Mas sem estrutura, a atenção vira desperdício.",
        items: [
          { icon: "💬", title: "WhatsApp bagunçado", text: "Mensagens perdidas, sem organização e sem contexto. O cliente some antes de ser atendido." },
          { icon: "🕳️", title: "Leads esquecidos", text: "Contatos chegam mas não são qualificados nem acompanhados. A venda nunca acontece." },
          { icon: "👻", title: "Clientes que somem", text: "Sem follow-up automático, o interesse esfria e o cliente vai para o concorrente." },
          { icon: "🔔", title: "Sem follow-up", text: "Nenhuma régua de comunicação ativa. Cada venda depende de você lembrar de ligar." },
          { icon: "📉", title: "Presença digital fraca", text: "Site ultrapassado, redes desconectadas e nenhuma estrutura para converter visitas." },
          { icon: "🧍", title: "Atendimento dependente", text: "Tudo para quando você não está disponível. O negócio não funciona sem você." },
          { icon: "💸", title: "Oportunidades perdidas", text: "Cada hora sem estrutura é receita que vai embora. Silêncio custa caro." }
        ]
      },
      solution: {
        label: "A SOLUÇÃO",
        title: "Cherry AI conecta sua operação.",
        subtitle: "Reunimos tudo que uma empresa local precisa para captar, atender e vender com inteligência — sem depender de sorte ou de estar disponível 24h.",
        features: [
          "Presença digital que converte",
          "Atendimento automático e inteligente",
          "Fluxos de automação conectados",
          "Agentes de IA trabalhando por você",
          "Dados organizados e acessíveis",
          "Impulsionamento estratégico"
        ]
      },
      products: {
        label: "SOLUÇÕES CHERRY",
        title: "Tudo que sua empresa precisa.",
        subtitle: "Cada produto Cherry foi pensado para resolver um gargalo real. Juntos, formam uma operação inteligente e escalável.",
        items: [
          {
            icon: "🌐",
            name: "Cherry Site",
            tagline: "Sua vitrine inteligente",
            desc: "Site premium para apresentar, captar e converter. Rápido, bonito, integrado e feito para gerar resultado.",
            tags: ["Landing Page", "SEO", "Integrado"]
          },
          {
            icon: "💬",
            name: "Cherry WhatsApp",
            tagline: "Atendimento que nunca dorme",
            desc: "IA no WhatsApp para responder, organizar e direcionar clientes com agilidade e personalidade.",
            tags: ["WhatsApp", "IA", "Automação"]
          },
          {
            icon: "⚡",
            name: "Cherry Flow",
            tagline: "Sua operação automatizada",
            desc: "Automações com n8n, planilhas, CRM, Apps Script e alertas. Tudo conectado, tudo funcionando.",
            tags: ["n8n", "Apps Script", "CRM"]
          },
          {
            icon: "🤖",
            name: "Cherry Agent",
            tagline: "IA que qualifica e vende",
            desc: "Agentes de IA para qualificar leads, responder dúvidas e conduzir oportunidades ao fechamento.",
            tags: ["Agente IA", "Qualificação", "24/7"]
          },
          {
            icon: "🚀",
            name: "Cherry Boost",
            tagline: "Movimento inteligente",
            desc: "Impulsionamento estratégico para colocar sua estrutura em movimento com visitantes e conversas reais.",
            tags: ["Meta Ads", "GTM", "Pixel"]
          },
          {
            icon: "🔍",
            name: "Diagnóstico",
            tagline: "100% gratuito",
            desc: "Análise completa do seu negócio para identificar gargalos e criar uma proposta personalizada.",
            tags: ["Gratuito", "Personalizado", "Sem compromisso"]
          }
        ]
      },
      demos: {
        label: "MEUS TRABALHOS",
        title: "Sites e experiências inteligentes já criadas.",
        subtitle: "Demonstrações reais de estruturas digitais, páginas comerciais e sistemas pensados para transformar atenção em contato, organização e venda.",
        cta: "Ver projeto",
        items: [
          { name: "Dano's Burger", type: "Cherry Site + WhatsApp", problem: "Site inteligente para cardápio, pedidos, atendimento e conversão direta pelo WhatsApp.", image: "danos.webp", imageAlt: "Imagem do projeto Dano's Burger" },
          { name: "AMANDATUR", type: "Cherry Site + Sistema de Reservas", problem: "Sistema visual para reservas de poltronas, organização de passageiros e atendimento integrado.", image: "amandatur.webp", imageAlt: "Imagem do projeto AMANDATUR" },
          { name: "Site Inteligente para Copa 2026", type: "Cherry Site + Cherry Boost", problem: "Estrutura comercial para bares, restaurantes e negócios venderem mais durante os jogos.", image: "copa.webp", imageAlt: "Imagem do site inteligente para Copa 2026" },
          { name: "Lumina", type: "Cherry Site + Vitrine Inteligente", problem: "Página moderna de produto com experiência visual premium, CTA e contato direto pelo WhatsApp.", image: "lumina.webp", imageAlt: "Imagem do projeto Lumina" }
        ]
      },
      how: {
        label: "COMO FUNCIONA",
        title: "Do diagnóstico à operação.",
        subtitle: "Um processo claro, estruturado e personalizado para cada negócio.",
        steps: [
          { n: "01", title: "Você solicita o diagnóstico", text: "Preenche o formulário e nos conta sobre seu negócio." },
          { n: "02", title: "A Cherry entende seu negócio", text: "Analisamos sua operação, mercado, dores e oportunidades." },
          { n: "03", title: "Identificamos gargalos", text: "Mapeamos onde você perde tempo, dinheiro e clientes." },
          { n: "04", title: "Criamos uma proposta", text: "Proposta personalizada com soluções, cronograma e investimento." },
          { n: "05", title: "Desenvolvemos a solução", text: "Executamos com precisão, testes e atenção a cada detalhe." },
          { n: "06", title: "Conectamos tudo", text: "Automações, dados, atendimento e canais integrados." },
          { n: "07", title: "Colocamos em movimento", text: "Sua estrutura operando e gerando resultado de verdade." }
        ]
      },
      behind: {
        label: "POR TRÁS DA TELA",
        title: "O cliente vê uma resposta.",
        title2: "Sua empresa ganha uma operação.",
        subtitle: "Enquanto seu cliente recebe atendimento instantâneo, uma estrutura completa trabalha nos bastidores.",
        nextLabel: "Próximo",
        resultLabel: "Resultado",
        ctaLabel: "Solicitar diagnóstico gratuito",

        // Fluxo original preservado como referência e fallback.
        flow: [
          { icon: "💬", label: "WhatsApp" },
          { icon: "🧠", label: "IA" },
          { icon: "🎯", label: "Lead" },
          { icon: "📊", label: "CRM/Planilha" },
          { icon: "⚡", label: "n8n" },
          { icon: "🔔", label: "Follow-up" },
          { icon: "💰", label: "Venda" }
        ],

        // Carrossel premium: edite aqui título, descrição, ícone, imagem, próxima etapa e CTA.
        // Imagens aceitas: .png, .jpg, .jpeg, .webp, .svg ou link externo direto.
        carousel: [
          {
            step: "01",
            icon: "💬",
            title: "WhatsApp",
            next: "IA",
            text: "Tudo começa quando o cliente chama. A conversa entra pelo WhatsApp sem atrito e sua operação recebe o primeiro sinal em tempo real.",
            image: "01.webp",
            imageAlt: "Etapa do fluxo mostrando o WhatsApp"
          },
          {
            step: "02",
            icon: "🧠",
            title: "IA",
            next: "Lead",
            text: "A inteligência artificial interpreta a mensagem, entende o contexto e conduz o atendimento com velocidade, padrão e clareza.",
            image: "02.webp",
            imageAlt: "Etapa do fluxo mostrando a inteligência artificial"
          },
          {
            step: "03",
            icon: "🎯",
            title: "Lead",
            next: "CRM/Planilha",
            text: "O interesse deixa de ser apenas uma conversa solta e vira uma oportunidade organizada para ser acompanhada pela empresa.",
            image: "03.webp",
            imageAlt: "Etapa do fluxo mostrando o lead identificado"
          },
          {
            step: "04",
            icon: "📊",
            title: "CRM/Planilha",
            next: "n8n",
            text: "Os dados são registrados em uma base clara. Sua empresa ganha memória, controle e visão sobre cada oportunidade recebida.",
            image: "04.webp",
            imageAlt: "Etapa do fluxo mostrando CRM ou planilha"
          },
          {
            step: "05",
            icon: "⚡",
            title: "n8n",
            next: "Follow-up",
            text: "O n8n conecta sistemas, dispara ações, move dados e reduz tarefas manuais para que a operação continue rodando nos bastidores.",
            image: "05.webp",
            imageAlt: "Etapa do fluxo mostrando automação com n8n"
          },
          {
            step: "06",
            icon: "🔔",
            title: "Follow-up",
            next: "Venda",
            text: "O relacionamento continua ativo. O sistema relembra, responde e reacende o interesse antes que o cliente esfrie ou desapareça.",
            image: "06.webp",
            imageAlt: "Etapa do fluxo mostrando follow-up automático"
          },
          {
            step: "07",
            icon: "💰",
            title: "Venda",
            next: "Resultado",
            text: "No final, o cliente vê uma resposta. Sua empresa ganha estrutura, previsibilidade e mais chances de transformar atenção em venda real.",
            image: "07.webp",
            imageAlt: "Etapa do fluxo mostrando venda concluída"
          }
        ]
      },
      boost: {
        label: "CHERRY BOOST",
        title: "A cereja do bolo não é ter um site bonito.",
        title2: "É fazer esse site trabalhar por você.",
        text: "Depois da estrutura pronta, a Cherry ajuda seu negócio a gerar movimento: visitantes, conversas, oportunidades, recuperação de clientes e vendas reais.",
        items: [
          { icon: "📣", title: "Tráfego inteligente", text: "Campanhas estratégicas no Meta, Google e canais certos." },
          { icon: "🔁", title: "Recuperação de clientes", text: "Automações que reativam quem sumiu com a mensagem certa." },
          { icon: "📈", title: "Dados e otimização", text: "Pixel, GTM e Analytics rastreando cada passo da jornada." }
        ]
      },
      objections: {
        label: "SEM COMPLICAÇÃO",
        title: "Você não precisa entender tecnologia. Precisa ver resultado.",
        subtitle: "A Cherry transforma IA, site, WhatsApp, dados e automações em uma estrutura clara para sua empresa vender melhor.",
        items: [
          { title: "Não sei por onde começar", text: "Você começa pelo diagnóstico gratuito. A Cherry analisa seu cenário e mostra o caminho mais inteligente." },
          { title: "Meu negócio é pequeno", text: "Justamente por isso a estrutura precisa ser simples, enxuta e preparada para captar oportunidades sem desperdiçar tempo." },
          { title: "Tenho medo de ser complicado", text: "A parte técnica fica com a Cherry. Você recebe uma solução organizada, testada e pensada para o dia a dia da sua operação." },
          { title: "Já tenho Instagram e WhatsApp", text: "Ótimo. A Cherry conecta esses canais a uma estrutura que organiza leads, cria follow-up e transforma atenção em venda." }
        ]
      },
      faq: {
        label: "PERGUNTAS FREQUENTES",
        title: "Respostas diretas.",
        items: [
          {
            q: "Quanto custa o diagnóstico?",
            a: "O diagnóstico é completamente gratuito e sem compromisso. Você nos conta sobre seu negócio, analisamos e entregamos uma proposta personalizada."
          },
          {
            q: "Preciso ter conhecimento técnico?",
            a: "Não. Cuidamos de toda a parte técnica. Você foca no seu negócio, nós cuidamos da estrutura digital."
          },
          {
            q: "Quanto tempo leva para implementar?",
            a: "Depende da solução. Um Cherry Site pode estar no ar em dias. Automações completas podem levar algumas semanas. Tudo é definido na proposta."
          },
          {
            q: "Funciona para qualquer tipo de negócio?",
            a: "Sim. Cherry AI foi feita para empresas locais de qualquer segmento: clínicas, imobiliárias, restaurantes, consultórios, salões, lojas, prestadores de serviço e muito mais."
          },
          {
            q: "O que acontece depois do diagnóstico?",
            a: "Você recebe uma proposta detalhada e personalizada. Se fizer sentido, avançamos juntos. Sem pressão."
          },
          {
            q: "Vocês dão suporte depois da entrega?",
            a: "Sim. Oferecemos acompanhamento, ajustes e suporte contínuo conforme o plano contratado."
          }
        ]
      },
      diagnostic: {
        label: "DIAGNÓSTICO GRATUITO",
        title: "Comece agora.",
        subtitle: "Preencha o formulário abaixo. Em breve, a Cherry AI entra em contato com uma proposta personalizada para o seu negócio.",
        fields: {
          name: "Seu nome",
          whatsapp: "WhatsApp com DDD",
          company: "Empresa ou projeto",
          segment: "Segmento do negócio",
          improve: "O que deseja melhorar",
          interest: "Interesse principal",
          message: "Mensagem (opcional)"
        },
        improve_opts: [
          "Selecione...",
          "Atendimento ao cliente",
          "Captação de leads",
          "Automação de processos",
          "Presença digital",
          "Vendas e conversão",
          "Gestão e organização",
          "Outro"
        ],
        interest_opts: [
          "Selecione...",
          "Cherry Site",
          "Cherry WhatsApp",
          "Cherry Flow",
          "Cherry Agent",
          "Cherry Boost",
          "Diagnóstico completo",
          "Não sei ainda"
        ],
        submit: "Solicitar diagnóstico gratuito",
        submitting: "Enviando...",
        success_title: "Diagnóstico solicitado!",
        success_text: "Você será redirecionado para o WhatsApp para confirmar. Aguarde nosso contato com a proposta personalizada.",
        privacy: "Seus dados são usados exclusivamente para o diagnóstico. Sem spam."
      },
      modal: {
        label: "DIAGNÓSTICO GRATUITO",
        title: "Sua empresa pode estar perdendo vendas agora.",
        text: "Em poucos minutos, a Cherry AI analisa sua estrutura digital e mostra onde você pode vender mais, atender melhor e recuperar clientes que somem.",
        button: "Solicitar diagnóstico gratuito",
        close: "Fechar"
      },
      footer: {
        tagline: "Inteligência para empresas locais crescerem com estrutura.",
        solutions: "Soluções",
        company: "Empresa",
        links_solutions: ["Cherry Site", "Cherry WhatsApp", "Cherry Flow", "Cherry Agent", "Cherry Boost"],
        links_company: ["Sobre", "Diagnóstico gratuito", "Contato"],
        rights: "Cherry AI. Todos os direitos reservados.",
        made: "Feito com"
      }
    },

    /* ── ENGLISH ────────────────────────────────────────────── */
    en: {
      meta: {
        title: "Cherry AI — AI, Automation and Smart Websites for Local Businesses",
        description: "Smart websites, automations, AI agents, intelligent WhatsApp and growth solutions for local businesses to sell more and grow with structure."
      },
      nav: {
        home: "Home",
        problem: "The problem",
        about: "About Cherry",
        solutions: "Solutions",
        how: "How it works",
        demos: "Our Work",
        behind: "Behind the scenes",
        boost: "Cherry Boost",
        objections: "No doubts",
        faq: "FAQ",
        language: "Language",
        diagnostic: "Assessment"
      },
      hero: {
        title: "The intelligence that turns attention into sales.",
        subtitle: "Smart websites, automations and AI agents for local businesses to sell more, serve better and grow with structure.",
        cta_primary: "Request a free assessment",
        cta_secondary: "Explore solutions"
      },
      pain: {
        label: "THE PROBLEM",
        title: "Your business doesn't lose sales due to lack of interest.",
        title_highlight: "It loses due to lack of structure.",
        subtitle: "You get attention. But without structure, attention turns into waste.",
        items: [
          { icon: "💬", title: "Messy WhatsApp", text: "Lost messages, no organization or context. The customer disappears before being served." },
          { icon: "🕳️", title: "Forgotten leads", text: "Contacts come in but aren't qualified or followed up. The sale never happens." },
          { icon: "👻", title: "Vanishing customers", text: "Without automatic follow-up, interest fades and the customer goes to a competitor." },
          { icon: "🔔", title: "No follow-up", text: "No active communication routine. Every sale depends on you remembering to call." },
          { icon: "📉", title: "Weak digital presence", text: "Outdated website, disconnected channels and no structure to convert visits." },
          { icon: "🧍", title: "People-dependent service", text: "Everything stops when you're unavailable. The business doesn't run without you." },
          { icon: "💸", title: "Lost opportunities", text: "Every hour without structure is revenue walking out the door. Silence is expensive." }
        ]
      },
      solution: {
        label: "THE SOLUTION",
        title: "Cherry AI connects your operation.",
        subtitle: "We bring together everything a local business needs to attract, serve and sell intelligently — without depending on luck or being available 24/7.",
        features: [
          "Digital presence that converts",
          "Automatic and intelligent service",
          "Connected automation flows",
          "AI agents working for you",
          "Organized and accessible data",
          "Strategic growth"
        ]
      },
      products: {
        label: "CHERRY SOLUTIONS",
        title: "Everything your business needs.",
        subtitle: "Each Cherry product was designed to solve a real bottleneck. Together, they form an intelligent, scalable operation.",
        items: [
          {
            icon: "🌐",
            name: "Cherry Site",
            tagline: "Your smart showcase",
            desc: "Premium website to present, capture and convert. Fast, beautiful, integrated and built to generate results.",
            tags: ["Landing Page", "SEO", "Integrated"]
          },
          {
            icon: "💬",
            name: "Cherry WhatsApp",
            tagline: "Service that never sleeps",
            desc: "AI on WhatsApp to respond, organize and direct customers with speed and personality.",
            tags: ["WhatsApp", "AI", "Automation"]
          },
          {
            icon: "⚡",
            name: "Cherry Flow",
            tagline: "Your automated operation",
            desc: "Automations with n8n, spreadsheets, CRM, Apps Script and alerts. Everything connected, everything working.",
            tags: ["n8n", "Apps Script", "CRM"]
          },
          {
            icon: "🤖",
            name: "Cherry Agent",
            tagline: "AI that qualifies and sells",
            desc: "AI agents to qualify leads, answer questions and guide opportunities to close.",
            tags: ["AI Agent", "Qualification", "24/7"]
          },
          {
            icon: "🚀",
            name: "Cherry Boost",
            tagline: "Smart movement",
            desc: "Strategic boost to put your structure in motion with real visitors and conversations.",
            tags: ["Meta Ads", "GTM", "Pixel"]
          },
          {
            icon: "🔍",
            name: "Assessment",
            tagline: "100% free",
            desc: "A complete review of your business to identify bottlenecks and create a personalized proposal.",
            tags: ["Free", "Personalized", "No commitment"]
          }
        ]
      },
      demos: {
        label: "OUR WORK",
        title: "Smart websites and experiences already built.",
        subtitle: "Real demos of digital structures, commercial pages and systems designed to turn attention into contact, organization and sales.",
        cta: "View project",
        items: [
          { name: "Dano's Burger", type: "Cherry Site + WhatsApp", problem: "Smart website for menu, orders, service and direct conversion through WhatsApp.", image: "danos.webp", imageAlt: "Dano's Burger project image" },
          { name: "AMANDATUR", type: "Cherry Site + Booking System", problem: "Visual seat-booking system for passenger organization and integrated service.", image: "amandatur.webp", imageAlt: "AMANDATUR project image" },
          { name: "Smart Website for World Cup 2026", type: "Cherry Site + Cherry Boost", problem: "Commercial structure for bars, restaurants and local businesses to sell more during the games.", image: "copa.webp", imageAlt: "World Cup 2026 smart website project image" },
          { name: "Lumina", type: "Cherry Site + Smart Showcase", problem: "Modern product page with a premium visual experience, CTA and direct WhatsApp contact.", image: "lumina.webp", imageAlt: "Lumina project image" }
        ]
      },
      how: {
        label: "HOW IT WORKS",
        title: "From assessment to operation.",
        subtitle: "A clear, structured and personalized process for each business.",
        steps: [
          { n: "01", title: "You request the assessment", text: "Fill out the form and tell us about your business." },
          { n: "02", title: "Cherry understands your business", text: "We analyze your operation, market, pain points and opportunities." },
          { n: "03", title: "We identify bottlenecks", text: "We map where you lose time, money and customers." },
          { n: "04", title: "We create a proposal", text: "Custom proposal with solutions, timeline and investment." },
          { n: "05", title: "We develop the solution", text: "We execute with precision, testing and attention to every detail." },
          { n: "06", title: "We connect everything", text: "Automations, data, service and channels integrated." },
          { n: "07", title: "We put it in motion", text: "Your structure operating and generating real results." }
        ]
      },
      behind: {
        label: "BEHIND THE SCREEN",
        title: "The customer sees a response.",
        title2: "Your business gains an operation.",
        subtitle: "While your customer receives instant service, a complete structure works behind the scenes.",
        nextLabel: "Next",
        resultLabel: "Result",
        ctaLabel: "Request a free assessment",
        flow: [
          { icon: "💬", label: "WhatsApp" },
          { icon: "🧠", label: "AI" },
          { icon: "🎯", label: "Lead" },
          { icon: "📊", label: "CRM/Sheet" },
          { icon: "⚡", label: "n8n" },
          { icon: "🔔", label: "Follow-up" },
          { icon: "💰", label: "Sale" }
        ],
        carousel: [
          { step: "01", icon: "💬", title: "WhatsApp", next: "AI", text: "Everything starts when the customer sends a message. The conversation arrives through WhatsApp and your operation receives the first signal in real time.", image: "01.webp", imageAlt: "Workflow step showing WhatsApp" },
          { step: "02", icon: "🧠", title: "AI", next: "Lead", text: "Artificial intelligence interprets the message, understands the context and guides the service with speed, consistency and clarity.", image: "02.webp", imageAlt: "Workflow step showing AI" },
          { step: "03", icon: "🎯", title: "Lead", next: "CRM/Sheet", text: "Interest stops being just a loose conversation and becomes an organized opportunity that can be followed by the company.", image: "03.webp", imageAlt: "Workflow step showing lead identification" },
          { step: "04", icon: "📊", title: "CRM/Sheet", next: "n8n", text: "The data is registered in a clear base. Your company gains memory, control and visibility over each opportunity received.", image: "04.webp", imageAlt: "Workflow step showing CRM or spreadsheet" },
          { step: "05", icon: "⚡", title: "n8n", next: "Follow-up", text: "n8n connects systems, triggers actions, moves data and reduces manual work so the operation keeps running behind the scenes.", image: "05.webp", imageAlt: "Workflow step showing n8n automation" },
          { step: "06", icon: "🔔", title: "Follow-up", next: "Sale", text: "The relationship stays active. The system reminds, responds and reactivates interest before the customer cools down or disappears.", image: "06.webp", imageAlt: "Workflow step showing automated follow-up" },
          { step: "07", icon: "💰", title: "Sale", next: "Result", text: "In the end, the customer sees a response. Your business gains structure, predictability and a better chance of turning attention into real sales.", image: "07.webp", imageAlt: "Workflow step showing sale completed" }
        ]
      },
      boost: {
        label: "CHERRY BOOST",
        title: "The cherry on top isn't having a beautiful website.",
        title2: "It's making that website work for you.",
        text: "After the structure is ready, Cherry helps your business generate movement: visitors, conversations, opportunities, customer recovery and real sales.",
        items: [
          { icon: "📣", title: "Smart traffic", text: "Strategic campaigns on Meta, Google and the right channels." },
          { icon: "🔁", title: "Customer recovery", text: "Automations that reactivate lost contacts with the right message." },
          { icon: "📈", title: "Data and optimization", text: "Pixel, GTM and Analytics tracking every step of the journey." }
        ]
      },
      objections: {
        label: "NO COMPLICATION",
        title: "You don’t need to understand technology. You need to see results.",
        subtitle: "Cherry turns AI, websites, WhatsApp, data and automations into a clear structure for your business to sell better.",
        items: [
          { title: "I don’t know where to start", text: "You start with the free assessment. Cherry analyzes your current situation and shows the smartest path forward." },
          { title: "My business is small", text: "That is exactly why the structure must be simple, lean and ready to capture opportunities without wasting time." },
          { title: "I’m afraid it will be complicated", text: "Cherry handles the technical side. You receive an organized, tested solution designed for your daily operation." },
          { title: "I already have Instagram and WhatsApp", text: "Great. Cherry connects those channels to a structure that organizes leads, creates follow-up and turns attention into sales." }
        ]
      },
      faq: {
        label: "FREQUENTLY ASKED QUESTIONS",
        title: "Straight answers.",
        items: [
          {
            q: "How much does the assessment cost?",
            a: "The assessment is completely free and without commitment. You tell us about your business, we analyze it and deliver a personalized proposal."
          },
          {
            q: "Do I need technical knowledge?",
            a: "No. We handle all the technical parts. You focus on your business, we take care of the digital structure."
          },
          {
            q: "How long does implementation take?",
            a: "It depends on the solution. A Cherry Site can be live in days. Complete automations may take a few weeks. Everything is defined in the proposal."
          },
          {
            q: "Does it work for any type of business?",
            a: "Yes. Cherry AI was made for local businesses of any segment: clinics, real estate, restaurants, practices, salons, stores, service providers and more."
          },
          {
            q: "What happens after the assessment?",
            a: "You receive a detailed, personalized proposal. If it makes sense, we move forward together. No pressure."
          },
          {
            q: "Do you provide support after delivery?",
            a: "Yes. We offer monitoring, adjustments and ongoing support according to the contracted plan."
          }
        ]
      },
      diagnostic: {
        label: "FREE ASSESSMENT",
        title: "Start now.",
        subtitle: "Fill out the form below. Soon, Cherry AI will contact you with a personalized proposal for your business.",
        fields: {
          name: "Your name",
          whatsapp: "WhatsApp with country code",
          company: "Company or project",
          segment: "Business segment",
          improve: "What do you want to improve",
          interest: "Main interest",
          message: "Message (optional)"
        },
        improve_opts: [
          "Select...",
          "Customer service",
          "Lead generation",
          "Process automation",
          "Digital presence",
          "Sales and conversion",
          "Management and organization",
          "Other"
        ],
        interest_opts: [
          "Select...",
          "Cherry Site",
          "Cherry WhatsApp",
          "Cherry Flow",
          "Cherry Agent",
          "Cherry Boost",
          "Complete assessment",
          "Not sure yet"
        ],
        submit: "Request a free assessment",
        submitting: "Sending...",
        success_title: "Assessment requested!",
        success_text: "You'll be redirected to WhatsApp to confirm. We will contact you with a personalized proposal.",
        privacy: "Your data is used exclusively for the assessment. No spam."
      },
      modal: {
        label: "FREE ASSESSMENT",
        title: "Your business may be losing sales right now.",
        text: "In a few minutes, Cherry AI reviews your digital structure and shows where you can sell more, serve better and recover customers who disappear.",
        button: "Request free assessment",
        close: "Close"
      },
      footer: {
        tagline: "Intelligence for local businesses to grow with structure.",
        solutions: "Solutions",
        company: "Company",
        links_solutions: ["Cherry Site", "Cherry WhatsApp", "Cherry Flow", "Cherry Agent", "Cherry Boost"],
        links_company: ["About", "Free assessment", "Contact"],
        rights: "Cherry AI. All rights reserved.",
        made: "Made with"
      }
    },

    /* ── ESPAÑOL ────────────────────────────────────────────── */
    es: {
      meta: {
        title: "Cherry AI — IA, Automatización y Sitios Inteligentes para Negocios Locales",
        description: "Sitios inteligentes, automatizaciones, agentes de IA, WhatsApp inteligente e impulso para negocios locales que quieren vender más y crecer con estructura."
      },
      nav: {
        home: "Inicio",
        problem: "El problema",
        about: "Sobre Cherry",
        solutions: "Soluciones",
        how: "Cómo funciona",
        demos: "Nuestros trabajos",
        behind: "Detrás de escena",
        boost: "Cherry Boost",
        objections: "Sin dudas",
        faq: "Dudas",
        language: "Idioma",
        diagnostic: "Diagnóstico"
      },
      hero: {
        title: "La inteligencia que convierte atención en ventas.",
        subtitle: "Sitios inteligentes, automatizaciones y agentes de IA para que los negocios locales vendan más, atiendan mejor y crezcan con estructura.",
        cta_primary: "Solicitar diagnóstico gratuito",
        cta_secondary: "Conocer soluciones"
      },
      pain: {
        label: "EL PROBLEMA",
        title: "Tu negocio no pierde ventas por falta de interés.",
        title_highlight: "Las pierde por falta de estructura.",
        subtitle: "Recibes atención. Pero sin estructura, la atención se convierte en desperdicio.",
        items: [
          { icon: "💬", title: "WhatsApp desordenado", text: "Mensajes perdidos, sin organización ni contexto. El cliente desaparece antes de ser atendido." },
          { icon: "🕳️", title: "Leads olvidados", text: "Los contactos llegan pero no son calificados ni seguidos. La venta nunca ocurre." },
          { icon: "👻", title: "Clientes que desaparecen", text: "Sin seguimiento automático, el interés se enfría y el cliente va a la competencia." },
          { icon: "🔔", title: "Sin seguimiento", text: "Sin rutina de comunicación activa. Cada venta depende de que recuerdes llamar." },
          { icon: "📉", title: "Presencia digital débil", text: "Sitio desactualizado, canales desconectados y ninguna estructura para convertir visitas." },
          { icon: "🧍", title: "Atención dependiente", text: "Todo se detiene cuando no estás disponible. El negocio no funciona sin ti." },
          { icon: "💸", title: "Oportunidades perdidas", text: "Cada hora sin estructura es ingresos que se van. El silencio cuesta caro." }
        ]
      },
      solution: {
        label: "LA SOLUCIÓN",
        title: "Cherry AI conecta tu operación.",
        subtitle: "Reunimos todo lo que un negocio local necesita para captar, atender y vender con inteligencia — sin depender de la suerte ni estar disponible las 24h.",
        features: [
          "Presencia digital que convierte",
          "Atención automática e inteligente",
          "Flujos de automatización conectados",
          "Agentes de IA trabajando por ti",
          "Datos organizados y accesibles",
          "Impulso estratégico"
        ]
      },
      products: {
        label: "SOLUCIONES CHERRY",
        title: "Todo lo que tu negocio necesita.",
        subtitle: "Cada producto Cherry fue diseñado para resolver un cuello de botella real. Juntos, forman una operación inteligente y escalable.",
        items: [
          {
            icon: "🌐",
            name: "Cherry Site",
            tagline: "Tu vitrina inteligente",
            desc: "Sitio premium para presentar, captar y convertir. Rápido, bonito, integrado y hecho para generar resultados.",
            tags: ["Landing Page", "SEO", "Integrado"]
          },
          {
            icon: "💬",
            name: "Cherry WhatsApp",
            tagline: "Atención que nunca duerme",
            desc: "IA en WhatsApp para responder, organizar y dirigir clientes con agilidad y personalidad.",
            tags: ["WhatsApp", "IA", "Automatización"]
          },
          {
            icon: "⚡",
            name: "Cherry Flow",
            tagline: "Tu operación automatizada",
            desc: "Automatizaciones con n8n, planillas, CRM, Apps Script y alertas. Todo conectado, todo funcionando.",
            tags: ["n8n", "Apps Script", "CRM"]
          },
          {
            icon: "🤖",
            name: "Cherry Agent",
            tagline: "IA que califica y vende",
            desc: "Agentes de IA para calificar leads, responder dudas y conducir oportunidades al cierre.",
            tags: ["Agente IA", "Calificación", "24/7"]
          },
          {
            icon: "🚀",
            name: "Cherry Boost",
            tagline: "Movimiento inteligente",
            desc: "Impulso estratégico para poner tu estructura en movimiento con visitantes y conversaciones reales.",
            tags: ["Meta Ads", "GTM", "Pixel"]
          },
          {
            icon: "🔍",
            name: "Diagnóstico",
            tagline: "100% gratuito",
            desc: "Análisis completo de tu negocio para identificar cuellos de botella y crear una propuesta personalizada.",
            tags: ["Gratuito", "Personalizado", "Sin compromiso"]
          }
        ]
      },
      demos: {
        label: "NUESTROS TRABAJOS",
        title: "Sitios y experiencias inteligentes ya creadas.",
        subtitle: "Demostraciones reales de estructuras digitales, páginas comerciales y sistemas pensados para convertir atención en contacto, organización y ventas.",
        cta: "Ver proyecto",
        items: [
          { name: "Dano's Burger", type: "Cherry Site + WhatsApp", problem: "Sitio inteligente para menú, pedidos, atención y conversión directa por WhatsApp.", image: "danos.webp", imageAlt: "Imagen del proyecto Dano's Burger" },
          { name: "AMANDATUR", type: "Cherry Site + Sistema de Reservas", problem: "Sistema visual para reservas de asientos, organización de pasajeros y atención integrada.", image: "amandatur.webp", imageAlt: "Imagen del proyecto AMANDATUR" },
          { name: "Sitio Inteligente para la Copa 2026", type: "Cherry Site + Cherry Boost", problem: "Estructura comercial para bares, restaurantes y negocios locales vender más durante los partidos.", image: "copa.webp", imageAlt: "Imagen del sitio inteligente para la Copa 2026" },
          { name: "Lumina", type: "Cherry Site + Vitrina Inteligente", problem: "Página moderna de producto con experiencia visual premium, CTA y contacto directo por WhatsApp.", image: "lumina.webp", imageAlt: "Imagen del proyecto Lumina" }
        ]
      },
      how: {
        label: "CÓMO FUNCIONA",
        title: "Del diagnóstico a la operación.",
        subtitle: "Un proceso claro, estructurado y personalizado para cada negocio.",
        steps: [
          { n: "01", title: "Solicitas el diagnóstico", text: "Completas el formulario y nos cuentas sobre tu negocio." },
          { n: "02", title: "Cherry entiende tu negocio", text: "Analizamos tu operación, mercado, dolores y oportunidades." },
          { n: "03", title: "Identificamos cuellos de botella", text: "Mapeamos dónde pierdes tiempo, dinero y clientes." },
          { n: "04", title: "Creamos una propuesta", text: "Propuesta personalizada con soluciones, cronograma e inversión." },
          { n: "05", title: "Desarrollamos la solución", text: "Ejecutamos con precisión, pruebas y atención a cada detalle." },
          { n: "06", title: "Conectamos todo", text: "Automatizaciones, datos, atención y canales integrados." },
          { n: "07", title: "Ponemos en movimiento", text: "Tu estructura operando y generando resultados reales." }
        ]
      },
      behind: {
        label: "DETRÁS DE LA PANTALLA",
        title: "El cliente ve una respuesta.",
        title2: "Tu empresa gana una operación.",
        subtitle: "Mientras tu cliente recibe atención instantánea, una estructura completa trabaja en segundo plano.",
        nextLabel: "Siguiente",
        resultLabel: "Resultado",
        ctaLabel: "Solicitar diagnóstico gratuito",
        flow: [
          { icon: "💬", label: "WhatsApp" },
          { icon: "🧠", label: "IA" },
          { icon: "🎯", label: "Lead" },
          { icon: "📊", label: "CRM/Planilla" },
          { icon: "⚡", label: "n8n" },
          { icon: "🔔", label: "Follow-up" },
          { icon: "💰", label: "Venta" }
        ],
        carousel: [
          { step: "01", icon: "💬", title: "WhatsApp", next: "IA", text: "Todo comienza cuando el cliente envía un mensaje. La conversación entra por WhatsApp y tu operación recibe la primera señal en tiempo real.", image: "01.webp", imageAlt: "Etapa del flujo mostrando WhatsApp" },
          { step: "02", icon: "🧠", title: "IA", next: "Lead", text: "La inteligencia artificial interpreta el mensaje, entiende el contexto y conduce la atención con velocidad, consistencia y claridad.", image: "02.webp", imageAlt: "Etapa del flujo mostrando inteligencia artificial" },
          { step: "03", icon: "🎯", title: "Lead", next: "CRM/Planilla", text: "El interés deja de ser solo una conversación suelta y se convierte en una oportunidad organizada para ser acompañada por la empresa.", image: "03.webp", imageAlt: "Etapa del flujo mostrando lead identificado" },
          { step: "04", icon: "📊", title: "CRM/Planilla", next: "n8n", text: "Los datos se registran en una base clara. Tu empresa gana memoria, control y visibilidad sobre cada oportunidad recibida.", image: "04.webp", imageAlt: "Etapa del flujo mostrando CRM o planilla" },
          { step: "05", icon: "⚡", title: "n8n", next: "Follow-up", text: "n8n conecta sistemas, dispara acciones, mueve datos y reduce tareas manuales para que la operación siga funcionando en segundo plano.", image: "05.webp", imageAlt: "Etapa del flujo mostrando automatización con n8n" },
          { step: "06", icon: "🔔", title: "Follow-up", next: "Venta", text: "La relación sigue activa. El sistema recuerda, responde y reactiva el interés antes de que el cliente se enfríe o desaparezca.", image: "06.webp", imageAlt: "Etapa del flujo mostrando follow-up automático" },
          { step: "07", icon: "💰", title: "Venta", next: "Resultado", text: "Al final, el cliente ve una respuesta. Tu empresa gana estructura, previsibilidad y más capacidad de convertir atención en ventas reales.", image: "07.webp", imageAlt: "Etapa del flujo mostrando venta concluida" }
        ]
      },
      boost: {
        label: "CHERRY BOOST",
        title: "La cereza del pastel no es tener un sitio bonito.",
        title2: "Es hacer que ese sitio trabaje por ti.",
        text: "Después de que la estructura esté lista, Cherry ayuda a tu negocio a generar movimiento: visitantes, conversaciones, oportunidades, recuperación de clientes y ventas reales.",
        items: [
          { icon: "📣", title: "Tráfico inteligente", text: "Campañas estratégicas en Meta, Google y los canales correctos." },
          { icon: "🔁", title: "Recuperación de clientes", text: "Automatizaciones que reactivan contactos perdidos con el mensaje correcto." },
          { icon: "📈", title: "Datos y optimización", text: "Pixel, GTM y Analytics rastreando cada paso de la jornada." }
        ]
      },
      objections: {
        label: "SIN COMPLICACIONES",
        title: "No necesitas entender tecnología. Necesitas ver resultados.",
        subtitle: "Cherry convierte IA, sitio web, WhatsApp, datos y automatizaciones en una estructura clara para que tu negocio venda mejor.",
        items: [
          { title: "No sé por dónde empezar", text: "Empiezas con el diagnóstico gratuito. Cherry analiza tu situación actual y muestra el camino más inteligente." },
          { title: "Mi negocio es pequeño", text: "Precisamente por eso la estructura debe ser simple, ligera y preparada para captar oportunidades sin perder tiempo." },
          { title: "Tengo miedo de que sea complicado", text: "La parte técnica queda con Cherry. Recibes una solución organizada, probada y pensada para tu operación diaria." },
          { title: "Ya tengo Instagram y WhatsApp", text: "Perfecto. Cherry conecta esos canales a una estructura que organiza leads, crea seguimiento y convierte atención en ventas." }
        ]
      },
      faq: {
        label: "PREGUNTAS FRECUENTES",
        title: "Respuestas directas.",
        items: [
          {
            q: "¿Cuánto cuesta el diagnóstico?",
            a: "El diagnóstico es completamente gratuito y sin compromiso. Nos cuentas sobre tu negocio, lo analizamos y entregamos una propuesta personalizada."
          },
          {
            q: "¿Necesito conocimiento técnico?",
            a: "No. Nos encargamos de toda la parte técnica. Tú te enfocas en tu negocio, nosotros cuidamos la estructura digital."
          },
          {
            q: "¿Cuánto tarda la implementación?",
            a: "Depende de la solución. Un Cherry Site puede estar en línea en días. Las automatizaciones completas pueden tardar algunas semanas. Todo se define en la propuesta."
          },
          {
            q: "¿Funciona para cualquier tipo de negocio?",
            a: "Sí. Cherry AI fue hecha para negocios locales de cualquier segmento: clínicas, inmobiliarias, restaurantes, consultorios, salones, tiendas, proveedores de servicios y más."
          },
          {
            q: "¿Qué pasa después del diagnóstico?",
            a: "Recibes una propuesta detallada y personalizada. Si tiene sentido, avanzamos juntos. Sin presión."
          },
          {
            q: "¿Dan soporte después de la entrega?",
            a: "Sí. Ofrecemos acompañamiento, ajustes y soporte continuo según el plan contratado."
          }
        ]
      },
      diagnostic: {
        label: "DIAGNÓSTICO GRATUITO",
        title: "Empieza ahora.",
        subtitle: "Completa el formulario a continuación. En breve, Cherry AI se pondrá en contacto con una propuesta personalizada para tu negocio.",
        fields: {
          name: "Tu nombre",
          whatsapp: "WhatsApp con código de país",
          company: "Empresa o proyecto",
          segment: "Segmento del negocio",
          improve: "¿Qué deseas mejorar?",
          interest: "Interés principal",
          message: "Mensaje (opcional)"
        },
        improve_opts: [
          "Seleccionar...",
          "Atención al cliente",
          "Captación de leads",
          "Automatización de procesos",
          "Presencia digital",
          "Ventas y conversión",
          "Gestión y organización",
          "Otro"
        ],
        interest_opts: [
          "Seleccionar...",
          "Cherry Site",
          "Cherry WhatsApp",
          "Cherry Flow",
          "Cherry Agent",
          "Cherry Boost",
          "Diagnóstico completo",
          "No lo sé aún"
        ],
        submit: "Solicitar diagnóstico gratuito",
        submitting: "Enviando...",
        success_title: "¡Diagnóstico solicitado!",
        success_text: "Serás redirigido a WhatsApp para confirmar. Espera nuestro contacto con la propuesta personalizada.",
        privacy: "Tus datos se usan exclusivamente para el diagnóstico. Sin spam."
      },
      modal: {
        label: "DIAGNÓSTICO GRATUITO",
        title: "Tu negocio puede estar perdiendo ventas ahora.",
        text: "En pocos minutos, Cherry AI analiza tu estructura digital y muestra dónde puedes vender más, atender mejor y recuperar clientes que desaparecen.",
        button: "Solicitar diagnóstico gratuito",
        close: "Cerrar"
      },
      footer: {
        tagline: "Inteligencia para negocios locales que crecen con estructura.",
        solutions: "Soluciones",
        company: "Empresa",
        links_solutions: ["Cherry Site", "Cherry WhatsApp", "Cherry Flow", "Cherry Agent", "Cherry Boost"],
        links_company: ["Sobre", "Diagnóstico gratuito", "Contacto"],
        rights: "Cherry AI. Todos los derechos reservados.",
        made: "Hecho con"
      }
    }
  }
};
