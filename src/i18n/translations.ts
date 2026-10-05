export type LanguageCode = 'EN' | 'DE'
export type OutcomeIconName = 'more' | 'waste' | 'operate'
export type SectionId = 'who-we-are' | 'problems' | 'what-we-do' | 'tools' | 'testimonials'

type Translation = {
  locale: 'en' | 'de'
  languageName: string
  metadata: {
    title: string
    description: string
  }
  accessibility: {
    closeNavigation: string
    openNavigation: string
    home: string
    language: (languageName: string) => string
    chooseLanguage: string
    mainNavigation: string
  }
  header: {
    navigation: Array<{ sectionId: SectionId; label: string }>
    cta: string
  }
  home: {
    hero: {
      title: [string, string]
      lead: string
      tools: string[]
      toolsLabel: string
    }
    about: {
      eyebrow: string
      title: string
      firstParagraph: { brand: string; text: string }
      secondParagraph: string
      teamRoles: [string, string, string]
    }
    problems: {
      eyebrow: string
      title: string
      items: Array<{ title: string; body: string }>
    }
    outcomes: {
      eyebrow: string
      title: string
      items: Array<{
        title: [string, string]
        icon: OutcomeIconName
        lines: string[]
      }>
    }
    process: {
      eyebrow: string
      title: string
      items: Array<{ title: string; body: string }>
    }
    tools: {
      eyebrow: string
      title: string
      description: string
      capabilities: Array<{ title: string; body: string }>
      statement: [string, string]
    }
    testimonials: {
      eyebrow: string
      title: string
      items: Array<{ quote: string; name: string; role: string }>
      carouselLabel: string
      centerLabel: (name: string) => string
      showLabel: (name: string, slide: number) => string
    }
    why: {
      eyebrow: string
      title: [string, string, string]
      body: string
      principles: Array<[string, string]>
    }
    contact: {
      lines: Array<{ text: string; emphasis?: boolean }>
    }
  }
  footer: {
    terms: string
    copy: string
    copied: string
  }
}

export const translations: Record<LanguageCode, Translation> = {
  EN: {
    locale: 'en',
    languageName: 'English',
    metadata: {
      title: 'wehelp.studio',
      description:
        'We find expensive problems in businesses and solve them with the right technology.',
    },
    accessibility: {
      closeNavigation: 'Close navigation',
      openNavigation: 'Open navigation',
      home: 'wehelp.studio home',
      language: (languageName) => `Language: ${languageName}`,
      chooseLanguage: 'Choose language',
      mainNavigation: 'Main navigation',
    },
    header: {
      navigation: [
        { sectionId: 'who-we-are', label: 'Who we are' },
        { sectionId: 'problems', label: 'Problems' },
        { sectionId: 'what-we-do', label: 'What we do' },
        { sectionId: 'tools', label: 'Tools' },
        { sectionId: 'testimonials', label: 'Testimonials' },
      ],
      cta: "Let's discuss",
    },
    home: {
      hero: {
        title: ['Make more.', 'Waste less.'],
        lead:
          'We find expensive problems in your business and solve them with the right technology.',
        tools: [
          'Existing SaaS',
          'Automation & Integration',
          'AI',
          'Custom Software',
          'Product & Interface design',
          'Backend & Data',
        ],
        toolsLabel: 'Our technology capabilities',
      },
      about: {
        eyebrow: 'Who we are',
        title: 'We help businesses',
        firstParagraph: {
          brand: 'Wehelp.studio',
          text: ' is a small technology & operations studio. We work with companies that want to make more, waste less, or operate more efficiently.',
        },
        secondParagraph:
          'We start by understanding how the business actually works — the people, processes, tools and data behind it.',
        teamRoles: ['Founder & Project Lead', 'Developer', 'Designer'],
      },
      problems: {
        eyebrow: 'Problems worth fixing',
        title: 'Problems cost more than they look',
        items: [
          {
            title: 'Too much work is still manual',
            body: 'Your team spends hours copying, checking, updating or chasing things that software could handle.',
          },
          {
            title: "Your tools don't work together",
            body: 'Information lives across spreadsheets, inboxes, CRM, CMS and internal systems.',
          },
          {
            title: 'Revenue falls through the cracks',
            body: 'Leads go cold, follow-ups get missed and existing customer data stays unused.',
          },
          {
            title: 'You have data, but not visibility',
            body: 'People spend time finding out what is happening instead of acting on it.',
          },
          {
            title: 'Growth requires more people',
            body: 'More customers or transactions create proportionally more operational work.',
          },
        ],
      },
      outcomes: {
        eyebrow: 'What changes',
        title: 'Better technology should change the economics of the work',
        items: [
          {
            title: ['Make', 'more'],
            icon: 'more',
            lines: [
              'More leads converted.',
              'More customers reactivated.',
              'Fewer opportunities lost.',
            ],
          },
          {
            title: ['Waste', 'less'],
            icon: 'waste',
            lines: [
              'Less manual work.',
              'Fewer errors and duplicated tasks.',
              'Lower administrative overhead.',
            ],
          },
          {
            title: ['Operate', 'better'],
            icon: 'operate',
            lines: [
              'Handle more without growing the team.',
              'Move faster.',
              'See what is happening.',
            ],
          },
        ],
      },
      process: {
        eyebrow: 'What we do',
        title: 'We start with the problem',
        items: [
          {
            title: 'Understand',
            body: 'We learn how the work actually happens — people, tools, data and constraints.',
          },
          {
            title: 'Find the money',
            body: 'We identify where revenue, time or capacity is being lost.',
          },
          {
            title: 'Quantify',
            body: 'We establish the baseline and build the business case.',
          },
          {
            title: 'Design the fix',
            body: 'We choose the simplest solution capable of creating the impact.',
          },
          {
            title: 'Implement',
            body: 'We build, configure and integrate it into the real workflow.',
          },
          {
            title: 'Measure',
            body: 'We launch with users, remove friction and measure what changed.',
          },
        ],
      },
      tools: {
        eyebrow: 'The right tool',
        title: 'Sometimes the answer is custom software',
        description: "Sometimes it isn't. We use whatever solves the problem best.",
        capabilities: [
          {
            title: 'AI',
            body: 'Extraction, classification, drafting, search, copilots and decision support.',
          },
          {
            title: 'Automation & integrations',
            body: 'CRM, email, CMS, payments, forms, documents and APIs.',
          },
          {
            title: 'Custom software',
            body: 'Internal tools, portals, dashboards and workflow applications.',
          },
          {
            title: 'Product & interface design',
            body: 'Tools employees and customers can actually use.',
          },
          {
            title: 'Backend & data',
            body: 'Business logic, migrations, permissions and reliable integrations.',
          },
          {
            title: 'Existing SaaS',
            body: 'When an existing product solves the problem better, we use it.',
          },
        ],
        statement: [
          "We don't sell technology.",
          'We improve businesses with it.',
        ],
      },
      testimonials: {
        eyebrow: 'In their words',
        title: "What it's like to work with us",
        items: [
          {
            quote:
              '“Wehelp took the time to understand how our business actually works before proposing a solution. The process felt thoughtful, practical and focused on what would create the most value.”',
            name: 'Dr. Sybil Moffatt',
            role: 'Co-founder IAVC Animal Ghiropractic',
          },
          {
            quote:
              '“They translated a complicated workflow into something clear, useful and realistic. We always understood what was being built, why it mattered and what would change for the team.”',
            name: 'Tim Fiebach',
            role: 'Founder Top-IT-Service, IT-Administrator',
          },
          {
            quote:
              '“The result was not technology for its own sake. It removed friction from the daily work and gave us a solution the team could confidently use from day one.”',
            name: 'Dr. Donald Moffatt',
            role: 'Co-founder IAVC Animal Ghiropractic',
          },
        ],
        carouselLabel: 'Choose a testimonial',
        centerLabel: (name) => `Center testimonial from ${name}`,
        showLabel: (name, slide) => `Show testimonial from ${name}, slide ${slide}`,
      },
      why: {
        eyebrow: 'Why wehelp.studio',
        title: ['Small team.', 'Close to the problem.', 'Responsible for the result'],
        body:
          'We work directly with the people who understand the problem and the people who will use the solution. The same team can investigate the workflow, design the fix and take it into production.',
        principles: [
          ['Business first', 'Start with impact, not technology.'],
          ['End to end', 'From understanding the problem to production.'],
          ['Technology agnostic', 'Build only when building makes sense.'],
          ['Production minded', "A recommendation that never gets used isn't a solution."],
        ],
      },
      contact: {
        lines: [
          { text: 'There may be' },
          { text: 'an expensive problem', emphasis: true },
          { text: 'hiding in your operations.' },
          { text: 'Reach us for a discuss' },
        ],
      },
    },
    footer: {
      terms: 'Terms & Conditions',
      copy: 'copy',
      copied: 'copied',
    },
  },
  DE: {
    locale: 'de',
    languageName: 'Deutsch',
    metadata: {
      title: 'wehelp.studio',
      description:
        'Wir finden kostspielige Probleme in Ihrem Unternehmen und lösen sie mit der passenden Technologie.',
    },
    accessibility: {
      closeNavigation: 'Navigation schließen',
      openNavigation: 'Navigation öffnen',
      home: 'wehelp.studio Startseite',
      language: (languageName) => `Sprache: ${languageName}`,
      chooseLanguage: 'Sprache wählen',
      mainNavigation: 'Hauptnavigation',
    },
    header: {
      navigation: [
        { sectionId: 'who-we-are', label: 'ÜBER UNS' },
        { sectionId: 'problems', label: 'PROBLEME' },
        { sectionId: 'what-we-do', label: 'WAS WIR TUN' },
        { sectionId: 'tools', label: 'TECHNOLOGIEN' },
        { sectionId: 'testimonials', label: 'KUNDENSTIMMEN' },
      ],
      cta: 'PROJEKT BESPRECHEN',
    },
    home: {
      hero: {
        title: ['Mehr erreichen.', 'Weniger verschwenden.'],
        lead:
          'Wir finden kostspielige Probleme in Ihrem Unternehmen und lösen sie mit der passenden Technologie.',
        tools: [
          'Bestehende SaaS-Lösungen',
          'Automatisierung & Integration',
          'KI',
          'Individuelle Software',
          'Produkt- & Interface-Design',
          'Backend & Daten',
        ],
        toolsLabel: 'Unsere technologischen Kompetenzen',
      },
      about: {
        eyebrow: 'ÜBER UNS',
        title: 'Wir helfen Unternehmen',
        firstParagraph: {
          brand: 'wehelp.studio',
          text: ' ist ein kleines Studio für Technologie und Geschäftsprozesse. Wir arbeiten mit Unternehmen, die mehr erreichen, weniger verschwenden und effizienter arbeiten wollen.',
        },
        secondParagraph:
          'Zuerst verstehen wir, wie das Unternehmen tatsächlich funktioniert – die Menschen, Prozesse, Tools und Daten dahinter.',
        teamRoles: ['Gründer & Projektleitung', 'Entwickler', 'Designerin'],
      },
      problems: {
        eyebrow: 'PROBLEME, DIE SICH ZU LÖSEN LOHNEN',
        title: 'Probleme kosten mehr, als man denkt',
        items: [
          {
            title: 'Zu viel Arbeit läuft noch manuell',
            body: 'Ihr Team verbringt Stunden mit Kopieren, Prüfen, Aktualisieren oder Nachfassen – Aufgaben, die Software übernehmen könnte.',
          },
          {
            title: 'Ihre Tools arbeiten nicht zusammen',
            body: 'Informationen verteilen sich auf Tabellen, Postfächer, CRM, CMS und interne Systeme.',
          },
          {
            title: 'Umsatzpotenzial geht verloren',
            body: 'Leads werden kalt, Follow-ups gehen unter und vorhandene Kundendaten bleiben ungenutzt.',
          },
          {
            title: 'Sie haben Daten, aber keinen Überblick',
            body: 'Zeit geht dafür verloren herauszufinden, was gerade passiert, statt darauf zu reagieren.',
          },
          {
            title: 'Wachstum erfordert mehr Personal',
            body: 'Mehr Kunden oder Transaktionen bedeuten proportional mehr operative Arbeit.',
          },
        ],
      },
      outcomes: {
        eyebrow: 'WAS SICH VERÄNDERT',
        title: 'Bessere Technologie sollte verändern, wie sich Arbeit rechnet.',
        items: [
          {
            title: ['Mehr', 'erreichen'],
            icon: 'more',
            lines: [
              'Mehr Leads konvertieren.',
              'Mehr Kunden reaktivieren.',
              'Weniger Chancen verlieren.',
            ],
          },
          {
            title: ['Weniger', 'Aufwand'],
            icon: 'waste',
            lines: [
              'Weniger manuelle Arbeit.',
              'Weniger Fehler und doppelte Aufgaben.',
              'Weniger Verwaltungsaufwand.',
            ],
          },
          {
            title: ['Besser', 'arbeiten'],
            icon: 'operate',
            lines: [
              'Mehr bewältigen, ohne das Team zu vergrößern.',
              'Schneller handeln.',
              'Sehen, was gerade passiert.',
            ],
          },
        ],
      },
      process: {
        eyebrow: 'WAS WIR TUN',
        title: 'Wir beginnen mit dem Problem',
        items: [
          {
            title: 'Verstehen',
            body: 'Wir verstehen, wie die Arbeit tatsächlich abläuft – mit Menschen, Tools, Daten und Rahmenbedingungen.',
          },
          {
            title: 'Potenzial finden',
            body: 'Wir identifizieren, wo Umsatz, Zeit oder Kapazität verloren gehen.',
          },
          {
            title: 'Beziffern',
            body: 'Wir schaffen eine Ausgangsbasis und entwickeln daraus den Business Case.',
          },
          {
            title: 'Lösung entwickeln',
            body: 'Wir wählen die einfachste Lösung, die die gewünschte Wirkung erzielen kann.',
          },
          {
            title: 'Umsetzen',
            body: 'Wir entwickeln, konfigurieren und integrieren die Lösung in den tatsächlichen Arbeitsablauf.',
          },
          {
            title: 'Messen',
            body: 'Wir führen die Lösung mit den Nutzern ein, beseitigen Reibungsverluste und messen, was sich verändert hat.',
          },
        ],
      },
      tools: {
        eyebrow: 'DAS RICHTIGE WERKZEUG',
        title: 'Manchmal ist individuelle Software die richtige Lösung',
        description:
          'Manchmal auch nicht. Wir setzen das ein, was das Problem am besten löst.',
        capabilities: [
          {
            title: 'KI',
            body: 'Extraktion, Klassifizierung, Texterstellung, Suche, Copilots und Entscheidungsunterstützung.',
          },
          {
            title: 'Automatisierung & Integrationen',
            body: 'CRM, E-Mail, CMS, Zahlungen, Formulare, Dokumente und APIs.',
          },
          {
            title: 'Individuelle Software',
            body: 'Interne Tools, Portale, Dashboards und Workflow-Anwendungen.',
          },
          {
            title: 'Produkt- & Interface-Design',
            body: 'Tools, die Mitarbeiter und Kunden tatsächlich nutzen können.',
          },
          {
            title: 'Backend & Daten',
            body: 'Geschäftslogik, Migrationen, Berechtigungen und zuverlässige Integrationen.',
          },
          {
            title: 'Bestehende SaaS-Lösungen',
            body: 'Wenn ein bestehendes Produkt das Problem besser löst, setzen wir es ein.',
          },
        ],
        statement: [
          'Wir verkaufen keine Technologie.',
          'Wir verbessern Unternehmen damit.',
        ],
      },
      testimonials: {
        eyebrow: 'AUS SICHT UNSERER KUNDEN',
        title: 'Wie es ist, mit uns zu arbeiten',
        items: [
          {
            quote:
              '„Wehelp hat sich zunächst die Zeit genommen, wirklich zu verstehen, wie unser Unternehmen funktioniert, bevor eine Lösung vorgeschlagen wurde. Der gesamte Prozess war durchdacht, pragmatisch und konsequent darauf ausgerichtet, den größten Mehrwert zu schaffen.“',
            name: 'Dr. Sybil Moffatt',
            role: 'Mitgründerin, IAVC Animal Chiropractic',
          },
          {
            quote:
              '„Sie haben einen komplexen Workflow in eine klare, praxisnahe und realistische Lösung übersetzt. Wir wussten jederzeit, was entwickelt wird, warum es wichtig ist und was sich dadurch für unser Team verändern würde.“',
            name: 'Tim Fiebach',
            role: 'Gründer von Top-IT-Service, IT-Administrator',
          },
          {
            quote:
              '„Das Ergebnis war keine Technologie um der Technologie willen. Die Lösung hat Reibungsverluste im Arbeitsalltag beseitigt und uns etwas gegeben, das unser Team vom ersten Tag an sicher einsetzen konnte.“',
            name: 'Dr. Donald Moffatt',
            role: 'Mitgründer, IAVC Animal Chiropractic',
          },
        ],
        carouselLabel: 'Kundenstimme auswählen',
        centerLabel: (name) => `Kundenstimme von ${name} zentrieren`,
        showLabel: (name, slide) => `Kundenstimme von ${name}, Folie ${slide} anzeigen`,
      },
      why: {
        eyebrow: 'WARUM WEHELP.STUDIO',
        title: ['Kleines Team.', 'Nah am Problem.', 'Verantwortlich für das Ergebnis.'],
        body:
          'Wir arbeiten direkt mit den Menschen, die das Problem verstehen, und mit denen, die die Lösung später nutzen. Dasselbe Team kann den Arbeitsablauf analysieren, die Lösung entwickeln und bis in den produktiven Einsatz begleiten.',
        principles: [
          ['Business zuerst', 'Wir beginnen mit der Wirkung, nicht mit der Technologie.'],
          ['End-to-End', 'Vom Verständnis des Problems bis zum produktiven Einsatz.'],
          ['Technologieoffen', 'Wir entwickeln nur dann selbst, wenn es wirklich sinnvoll ist.'],
          ['Für den Einsatz gebaut', 'Eine Empfehlung, die nie eingesetzt wird, ist keine Lösung.'],
        ],
      },
      contact: {
        lines: [
          { text: 'Vielleicht versteckt sich' },
          { text: 'ein kostspieliges Problem', emphasis: true },
          { text: 'in Ihren Abläufen.' },
          { text: 'Finden wir es.' },
        ],
      },
    },
    footer: {
      terms: 'Allgemeine Geschäftsbedingungen',
      copy: 'kopieren',
      copied: 'kopiert',
    },
  },
}
