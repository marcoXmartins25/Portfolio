export const translations = {
  pt: {
    nav: {
      about: "Sobre",
      experience: "Experiência",
      education: "Formação",
      projects: "Projetos",
      skills: "Competências",
      softSkills: "Idiomas",
      contact: "Contacto",
      cta: "Contactar",
      skip: "Saltar para o conteúdo",
    },
    hero: {
      available: "Disponível para novas oportunidades",
      greeting: "Olá, eu sou",
      role: "Full Stack Developer",
      description: "Apaixonado por criar experiências digitais que combinam",
      performance: "performance",
      design: "design",
      cleanCode: "código limpo",
      ctaPrimary: "Entrar em contacto",
      ctaSecondary: "Ver projetos",
      scroll: "Scroll",
    },
    about: {
      title: "Sobre Mim",
      p1: "Sou programador de software com",
      p1b: "3 anos de experiência",
      p1c: ", focado em desenvolvimento web com experiência numa vasta gama de linguagens e tecnologias.",
      p2: "A minha jornada na programação começou através dos jogos com amigos no PC. Essa curiosidade inicial transformou-se numa paixão por construir e entender como o software funciona.",
      p3: "Procuro integrar-me numa equipa onde possa crescer em toda a área tecnológica e contribuir para projetos de longo prazo.",
      cta: "Vamos trabalhar juntos →",
      stats: [
        { number: "3+", label: "Anos de Experiência" },
        { number: "3", label: "Projetos Concluídos" },
        { number: "7+", label: "Tecnologias" },
      ],
    },
    experience: {
      title: "Experiência",
      items: [
        {
          title: "Desenvolvedor de Software",
          company: "TECH X Digital Solutions Lda",
          period: "Dez 2025 - Mai 2026",
          description:
            "Geri e criei uma plataforma SaaS multi-tenant para documentos RGPD e RGPC, com sistema de e-mails dinâmico por cliente (SMTP) e auditoria compatível com RGPD. Experiência em desenvolvimento full-stack com foco em performance e UI/UX. Integração de ferramentas de IA no fluxo de desenvolvimento.",
          tech: ["React", "PHP", "MySQL", "PostgreSQL", "APIs REST"],
        },
        {
          title: "Desenvolvedor de Software (Projeto Académico)",
          company: "Instituto Politécnico de Bragança",
          period: "2023 - 2026",
          description:
            "Desenvolvimento e gestão de plataforma SaaS multi-tenant para gestão de laboratórios e equipamentos, com foco na organização de aulas e otimização de recursos. Coordenação de equipa e definição de prioridades.",
          tech: ["SaaS", "Gestão de Equipa", "Otimização de Recursos"],
        },
        {
          title: "Criador & Desenvolvedor (SprintBase)",
          company: "Projeto Open Source",
          period: "Projeto Atual",
          description:
            "Criação de aplicação full-stack para gestão de sprints de desenvolvimento. Ferramenta para pequenas equipas planearem sprints, gerirem tarefas com prioridades e exportarem relatórios PDF.",
          tech: ["Node.js", "React", "PostgreSQL", "Tailwind CSS", "MIT"],
        },
      ],
    },
    education: {
      title: "Formação",
      items: [
        {
          degree: "CTESP - Desenvolvimento de Software",
          institution: "Instituto Politécnico de Bragança",
          period: "2023 - 2026",
          description:
            "Curso com enfoque em desenvolvimento de software, incluindo programação orientada a objetos, bases de dados, desenvolvimento web (frontend e backend) e metodologias ágeis. Desenvolvimento de projetos práticos aplicados a contextos reais.",
        },
      ],
    },
    projects: {
      title: "Projetos",
      code: "Código",
      demo: "Demo",
      featured: "Destaque",
      items: [
        {
          title: "Plataforma SaaS Gestão de Laboratórios",
          description:
            "Plataforma SaaS multi-tenant para gestão de laboratórios e equipamentos, com foco na organização de aulas e otimização de recursos. Coordenação de equipa e definição de prioridades.",
          label: "SaaS",
          tech: ["React", "PHP", "MySQL"],
        },
        {
          title: "Plataforma SaaS RGPD / RGPC",
          description:
            "Plataforma multi-tenant para gestão de documentos RGPD e RGPC, com sistema de e-mails dinâmico por cliente (SMTP) e auditoria compatível com RGPD.",
          label: "Compliance",
          tech: ["PHP", "MySQL", "SMTP"],
        },
        {
          title: "SprintBase",
          description:
            "Aplicação full-stack para gestão de sprints de desenvolvimento. Cria sprints, gere tarefas com prioridades e exporta relatórios PDF. Projeto open source com licença MIT.",
          label: "Open Source",
          featured: true,
          tech: ["Node.js", "React", "PostgreSQL"],
        },
      ],
    },
    skills: {
      title: "Competências",
      items: [
        { name: "HTML5", label: "Marcação" },
        { name: "CSS3", label: "Estilização" },
        { name: "JavaScript", label: "Linguagem" },
        { name: "React", label: "Frontend" },
        { name: "PHP (Laravel)", label: "Backend" },
        { name: "PostgreSQL", label: "Base de dados" },
        { name: "MySQL", label: "Base de dados" },
        { name: "APIs REST", label: "Comunicação" },
        { name: "Git / GitHub", label: "Controlo de versões" },
        { name: "VS Code", label: "Editor" },
        { name: "DBeaver", label: "Gestão de BD" },
        { name: "Postman", label: "Testes de APIs" },
        { name: "Figma", label: "UI/UX Design" },
        { name: "AI", label: "Inteligência artificial" },
      ],
    },
    softSkills: {
      title: "Competências Pessoais",
      softLabel: "Soft Skills",
      langLabel: "Idiomas",
      skills: [
        { name: "Comunicação", icon: "💬" },
        { name: "Criatividade", icon: "✨" },
        { name: "Autonomia", icon: "🎯" },
        { name: "Trabalho em equipa", icon: "🤝" },
        { name: "Gestão de tempo", icon: "⏱️" },
        { name: "Responsabilidade", icon: "🛡️" },
      ],
      languages: [
        { name: "Português", level: "Nativo", percent: 100, color: "#00d4ff" },
        { name: "Inglês", level: "Intermédio (B2)", percent: 70, color: "#7c3aed" },
        { name: "Espanhol", level: "Intermédio (B1)", percent: 55, color: "#10b981" },
      ],
    },
    contact: {
      title: "Contacto",
      heading: "Vamos",
      headingAccent: "trabalhar juntos",
      headingEnd: "?",
      description: "Estou sempre aberto a novas oportunidades e projetos interessantes. Entra em contacto!",
      labels: { email: "Email", phone: "Telefone", address: "Morada", github: "GitHub" },
      form: {
        name: "Nome",
        namePlaceholder: "O teu nome",
        email: "Email",
        emailPlaceholder: "seu@email.com",
        subject: "Assunto",
        subjectPlaceholder: "Assunto da mensagem",
        message: "Mensagem",
        messagePlaceholder: "A tua mensagem...",
        send: "Enviar Mensagem",
        sending: "A enviar...",
        success: "Mensagem enviada com sucesso!",
        errorFallback: "Erro ao enviar. Tenta novamente.",
      },
    },
    footer: {
      madeWith: "Feito com",
      and: "&",
      backToTop: "Voltar ao topo",
    },
  },

  en: {
    nav: {
      about: "About",
      experience: "Experience",
      education: "Education",
      projects: "Projects",
      skills: "Skills",
      softSkills: "Languages",
      contact: "Contact",
      cta: "Contact me",
      skip: "Skip to content",
    },
    hero: {
      available: "Available for new opportunities",
      greeting: "Hi, I'm",
      role: "Full Stack Developer",
      description: "Passionate about building digital experiences that combine",
      performance: "performance",
      design: "design",
      cleanCode: "clean code",
      ctaPrimary: "Get in touch",
      ctaSecondary: "View projects",
      scroll: "Scroll",
    },
    about: {
      title: "About Me",
      p1: "I'm a software developer with",
      p1b: "3 years of experience",
      p1c: ", focused on web development with expertise across a wide range of languages and technologies.",
      p2: "My journey in programming started through gaming with friends on PC. That initial curiosity turned into a passion for building and understanding how software works.",
      p3: "I'm looking to join a team where I can grow across the tech stack and contribute to long-term projects.",
      cta: "Let's work together →",
      stats: [
        { number: "3+", label: "Years of Experience" },
        { number: "3", label: "Completed Projects" },
        { number: "7+", label: "Technologies" },
      ],
    },
    experience: {
      title: "Experience",
      items: [
        {
          title: "Software Developer",
          company: "TECH X Digital Solutions Lda",
          period: "Dec 2025 - May 2026",
          description:
            "Built and managed a multi-tenant SaaS platform for GDPR and RGPC documents, with dynamic per-client email system (SMTP) and GDPR-compliant auditing. Full-stack development with focus on performance and UI/UX. Integrated AI tools into the development workflow.",
          tech: ["React", "PHP", "MySQL", "PostgreSQL", "REST APIs"],
        },
        {
          title: "Software Developer (Academic Project)",
          company: "Polytechnic Institute of Bragança",
          period: "2023 - 2026",
          description:
            "Development and management of a multi-tenant SaaS platform for laboratory and equipment management, focused on class scheduling and resource optimization. Team coordination and task prioritization.",
          tech: ["SaaS", "Team Management", "Resource Optimization"],
        },
        {
          title: "Creator & Developer (SprintBase)",
          company: "Open Source Project",
          period: "Current Project",
          description:
            "Built a full-stack application for development sprint management. Tool for small teams to plan sprints, manage tasks with priorities and time estimates, and export PDF reports.",
          tech: ["Node.js", "React", "PostgreSQL", "Tailwind CSS", "MIT"],
        },
      ],
    },
    education: {
      title: "Education",
      items: [
        {
          degree: "CTESP - Software Development",
          institution: "Polytechnic Institute of Bragança",
          period: "2023 - 2026",
          description:
            "Course focused on software development, including object-oriented programming, databases, web development (frontend and backend) and agile methodologies. Development of practical projects applied to real-world contexts.",
        },
      ],
    },
    projects: {
      title: "Projects",
      code: "Code",
      demo: "Demo",
      featured: "Featured",
      items: [
        {
          title: "Laboratory Management SaaS Platform",
          description:
            "Multi-tenant SaaS platform for laboratory and equipment management, focused on class scheduling and resource optimization. Team coordination and task prioritization.",
          label: "SaaS",
          tech: ["React", "PHP", "MySQL"],
        },
        {
          title: "GDPR / RGPC SaaS Platform",
          description:
            "Multi-tenant platform for GDPR and RGPC document management, with dynamic per-client email system (SMTP) and GDPR-compliant auditing.",
          label: "Compliance",
          tech: ["PHP", "MySQL", "SMTP"],
        },
        {
          title: "SprintBase",
          description:
            "Full-stack application for development sprint management. Create sprints, manage tasks with priorities and export PDF reports. Open source project under MIT license.",
          label: "Open Source",
          featured: true,
          tech: ["Node.js", "React", "PostgreSQL"],
        },
      ],
    },
    skills: {
      title: "Skills",
      items: [
        { name: "HTML5", label: "Markup" },
        { name: "CSS3", label: "Styling" },
        { name: "JavaScript", label: "Language" },
        { name: "React", label: "Frontend" },
        { name: "PHP (Laravel)", label: "Backend" },
        { name: "PostgreSQL", label: "Database" },
        { name: "MySQL", label: "Database" },
        { name: "APIs REST", label: "Communication" },
        { name: "Git / GitHub", label: "Version Control" },
        { name: "VS Code", label: "Editor" },
        { name: "DBeaver", label: "DB Management" },
        { name: "Postman", label: "API Testing" },
        { name: "Figma", label: "UI/UX Design" },
        { name: "AI", label: "Artificial Intelligence" },
      ],
    },
    softSkills: {
      title: "Personal Skills",
      softLabel: "Soft Skills",
      langLabel: "Languages",
      skills: [
        { name: "Communication", icon: "💬" },
        { name: "Creativity", icon: "✨" },
        { name: "Autonomy", icon: "🎯" },
        { name: "Teamwork", icon: "🤝" },
        { name: "Time Management", icon: "⏱️" },
        { name: "Responsibility", icon: "🛡️" },
      ],
      languages: [
        { name: "Portuguese", level: "Native", percent: 100, color: "#00d4ff" },
        { name: "English", level: "Intermediate (B2)", percent: 70, color: "#7c3aed" },
        { name: "Spanish", level: "Intermediate (B1)", percent: 55, color: "#10b981" },
      ],
    },
    contact: {
      title: "Contact",
      heading: "Let's",
      headingAccent: "work together",
      headingEnd: "?",
      description: "I'm always open to new opportunities and interesting projects. Get in touch!",
      labels: { email: "Email", phone: "Phone", address: "Address", github: "GitHub" },
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "your@email.com",
        subject: "Subject",
        subjectPlaceholder: "Message subject",
        message: "Message",
        messagePlaceholder: "Your message...",
        send: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully!",
        errorFallback: "Failed to send. Please try again.",
      },
    },
    footer: {
      madeWith: "Made with",
      and: "&",
      backToTop: "Back to top",
    },
  },
} as const;

export type Lang = keyof typeof translations;
export type Translations = typeof translations.pt;
