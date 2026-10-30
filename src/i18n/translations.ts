export const languages = {
  fr: 'Français',
  en: 'English',
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'fr';

export const translations = {
  fr: {
    // Navigation
    nav: {
      project: 'Le Projet',
      objectives: 'Objectifs',
      activities: 'Activités',
      publics: 'Publics',
      partners: 'Partenaires',
      contact: 'Contact',
      joinAdventure: "Rejoindre l'aventure",
    },

    // Hero
    hero: {
      badge: 'Nous Avons Des Elles',
      title: 'Station-Cœur',
      subtitle: 'Un tiers-lieu solidaire au cœur de la gare',
      description:
        "Porté par l'association Nous Avons Des Elles, Station-Cœur est un espace de rencontre, de partage et d'entraide ouvert à tous. Venez découvrir un lieu unique où solidarité et convivialité sont au rendez-vous.",
      primaryCta: 'Découvrir le projet',
      secondaryCta: 'Nous contacter',
      stats: {
        years: "Années d'engagement",
        beneficiaries: 'Bénéficiaires',
        partners: 'Partenaires',
      },
      scrollLabel: 'Découvrir',
    },

    // Presentation
    presentation: {
      subtitle: 'À propos',
      title: 'Un tiers-lieu solidaire au cœur de la gare',
      p1: "<strong>Station-Cœur</strong> est un projet innovant porté par l'association <strong>Nous Avons Des Elles</strong>. Implanté au sein d'une gare, ce tiers-lieu solidaire vise à créer un espace de vie, de partage et d'entraide accessible à tous.",
      p2: "Notre ambition est de transformer un lieu de passage en un véritable lieu de vie, où chacun peut trouver sa place, qu'il soit habitant du quartier, voyageur de passage, ou personne en recherche d'accompagnement.",
      p3: "À travers une ressourcerie, un café associatif, des ateliers et un accompagnement personnalisé, Station-Cœur œuvre pour l'inclusion sociale, l'économie circulaire et la transition écologique.",
      cta: 'Découvrir nos objectifs',
      association: "L'association",
    },

    // Objectives
    objectives: {
      subtitle: 'Nos objectifs',
      title: 'Ce qui nous anime',
      description:
        'Station-Cœur poursuit des objectifs ambitieux pour créer un impact positif durable sur le territoire et ses habitants.',
      items: [
        {
          title: 'Créer du lien social',
          description:
            'Favoriser les rencontres et les échanges entre les habitants du quartier, les voyageurs et les acteurs locaux.',
        },
        {
          title: "Promouvoir l'économie circulaire",
          description:
            'Encourager le réemploi, la réparation et le don d\'objets pour réduire les déchets et préserver les ressources.',
        },
        {
          title: "Accompagner vers l'emploi",
          description:
            "Proposer des formations, des ateliers et un accompagnement personnalisé pour favoriser l'insertion professionnelle.",
        },
        {
          title: "Favoriser l'inclusion",
          description:
            'Accueillir tous les publics sans distinction et créer un espace accessible et bienveillant pour chacun.',
        },
      ],
    },

    // Activities
    activities: {
      subtitle: 'Nos activités',
      title: 'Un lieu vivant et animé',
      description:
        'Découvrez les différentes activités proposées à Station-Cœur, un espace polyvalent où chacun trouve sa place.',
      items: [
        {
          title: 'Ressourcerie solidaire',
          description:
            'Collecte, tri et revente d\'objets de seconde main à prix solidaires. Donnez une seconde vie à vos objets !',
          tags: ['Réemploi', 'Solidarité'],
        },
        {
          title: 'Ateliers de réparation',
          description:
            'Apprenez à réparer vos objets du quotidien grâce à nos ateliers participatifs animés par des bénévoles experts.',
          tags: ['Formation', 'Écologie'],
        },
        {
          title: 'Café associatif',
          description:
            'Un espace convivial pour se retrouver, échanger et partager un moment autour d\'une boisson chaude ou fraîche.',
          tags: ['Convivialité', 'Rencontres'],
        },
        {
          title: 'Accompagnement social',
          description:
            'Des permanences pour vous aider dans vos démarches administratives et vous orienter vers les services adaptés.',
          tags: ['Accompagnement', 'Entraide'],
        },
        {
          title: 'Événements culturels',
          description:
            'Expositions, concerts, spectacles... Station-Cœur s\'anime tout au long de l\'année avec une programmation variée.',
          tags: ['Culture', 'Animation'],
        },
        {
          title: 'Espace de coworking',
          description:
            'Un lieu de travail partagé pour les entrepreneurs, freelances et télétravailleurs du quartier.',
          tags: ['Travail', 'Collaboration'],
        },
      ],
    },

    // Publics
    publics: {
      subtitle: 'Pour qui ?',
      title: 'Un lieu ouvert à tous',
      description:
        "Station-Cœur accueille tous les publics dans un esprit d'inclusion et de bienveillance.",
      items: [
        {
          title: 'Habitants du quartier',
          description: 'Un lieu de proximité pour tous les riverains, accessible et accueillant.',
        },
        {
          title: 'Voyageurs',
          description:
            "Un point d'accueil en gare pour tous ceux qui passent et souhaitent faire une pause.",
        },
        {
          title: 'Personnes en insertion',
          description: "Un accompagnement personnalisé vers l'emploi et l'autonomie.",
        },
        {
          title: 'Associations locales',
          description: 'Un espace de collaboration et de mutualisation des ressources.',
        },
      ],
    },

    // Ecological
    ecological: {
      subtitle: 'Notre engagement',
      title: 'Une démarche écologique et solidaire',
      p1: "Au cœur de notre projet, l'économie circulaire et la transition écologique sont des valeurs fondamentales. Nous croyons qu'il est possible de concilier solidarité et respect de l'environnement.",
      p2: "À travers notre ressourcerie, nos ateliers de réparation et nos actions de sensibilisation, nous encourageons le réemploi, la réduction des déchets et une consommation plus responsable.",
      stats: {
        reused: "d'objets réemployés / an",
        reduction: 'de réduction des déchets',
        participants: 'participants aux ateliers',
      },
    },

    // Testimonials
    testimonials: {
      subtitle: 'Témoignages',
      title: 'Ils parlent de nous',
      description:
        'Découvrez les témoignages de ceux qui font vivre Station-Cœur au quotidien.',
      items: [
        {
          quote:
            "Station-Cœur m'a permis de retrouver confiance en moi et de me réinsérer professionnellement. Un lieu formidable !",
          author: 'Marie D.',
          role: 'Bénéficiaire',
        },
        {
          quote:
            "Un vrai cœur battant dans notre quartier. On s'y sent accueilli et utile. Je recommande à tous !",
          author: 'Jean-Pierre L.',
          role: 'Bénévole',
        },
        {
          quote:
            'Le partenariat avec Station-Cœur nous permet de toucher des publics éloignés de nos services habituels.',
          author: 'Sophie M.',
          role: 'Partenaire institutionnel',
        },
      ],
    },

    // Partners
    partners: {
      subtitle: 'Nos partenaires',
      title: 'Ils nous font confiance',
      description:
        'Station-Cœur est soutenu par de nombreux partenaires institutionnels, associatifs et privés.',
      cta: 'Devenir partenaire',
    },

    // Gallery
    gallery: {
      subtitle: 'Galerie',
      title: 'Station-Cœur en images',
      description:
        'Découvrez notre lieu, nos activités et les moments partagés au sein de Station-Cœur.',
    },

    // CTA
    cta: {
      title: "Rejoignez l'aventure Station-Cœur",
      description:
        'Que vous souhaitiez devenir bénévole, partenaire ou simplement nous rendre visite, nous serons ravis de vous accueillir !',
      primary: 'Nous contacter',
      secondary: "Découvrir l'association",
    },

    // Contact
    contact: {
      subtitle: 'Contact',
      title: 'Échangeons ensemble',
      description:
        "Une question, une idée, une envie de collaborer ? N'hésitez pas à nous contacter.",
      info: {
        title: 'Prenons contact',
        description:
          'Vous souhaitez en savoir plus sur Station-Cœur, devenir partenaire ou simplement nous dire bonjour ? Nous serions ravis d\'échanger avec vous !',
        email: 'Email',
        phone: 'Téléphone',
        address: 'Adresse',
        social: 'Suivez-nous sur les réseaux',
      },
      cta: 'Nous envoyer un email',
    },

    // Footer
    footer: {
      description:
        "Un tiers-lieu solidaire au cœur de la gare, porté par l'association Nous Avons Des Elles. Ensemble, créons un espace de partage, d'entraide et d'inclusion.",
      navigation: 'Navigation',
      association: "L'Association",
      legal: 'Mentions légales',
      privacy: 'Confidentialité',
      rights: 'Tous droits réservés.',
    },

    // Legal pages
    legal: {
      title: 'Mentions légales',
      back: "Retour à l'accueil",
    },
    privacy: {
      title: 'Politique de confidentialité',
      back: "Retour à l'accueil",
    },

    // Misc
    misc: {
      solidarity: 'Solidarité',
      localHelp: 'Entraide locale',
      inclusion: 'Inclusion',
      forAll: 'Pour tous',
      projectImage: 'Image du projet',
    },
  },

  en: {
    // Navigation
    nav: {
      project: 'The Project',
      objectives: 'Objectives',
      activities: 'Activities',
      publics: 'Audiences',
      partners: 'Partners',
      contact: 'Contact',
      joinAdventure: 'Join the adventure',
    },

    // Hero
    hero: {
      badge: 'Nous Avons Des Elles',
      title: 'Station-Cœur',
      subtitle: 'A solidarity hub in the heart of the station',
      description:
        'Led by the association Nous Avons Des Elles, Station-Cœur is a meeting space for sharing and mutual aid, open to everyone. Come discover a unique place where solidarity and conviviality await you.',
      primaryCta: 'Discover the project',
      secondaryCta: 'Contact us',
      stats: {
        years: 'Years of commitment',
        beneficiaries: 'Beneficiaries',
        partners: 'Partners',
      },
      scrollLabel: 'Discover',
    },

    // Presentation
    presentation: {
      subtitle: 'About',
      title: 'A solidarity hub in the heart of the station',
      p1: '<strong>Station-Cœur</strong> is an innovative project led by the association <strong>Nous Avons Des Elles</strong>. Located within a train station, this solidarity hub aims to create a living space for sharing and mutual aid, accessible to all.',
      p2: 'Our ambition is to transform a transit space into a true living place, where everyone can find their place, whether they are neighborhood residents, passing travelers, or people seeking support.',
      p3: 'Through a thrift store, an associative café, workshops, and personalized support, Station-Cœur works for social inclusion, circular economy, and ecological transition.',
      cta: 'Discover our objectives',
      association: 'The association',
    },

    // Objectives
    objectives: {
      subtitle: 'Our objectives',
      title: 'What drives us',
      description:
        'Station-Cœur pursues ambitious objectives to create a lasting positive impact on the territory and its inhabitants.',
      items: [
        {
          title: 'Create social bonds',
          description:
            'Foster meetings and exchanges between neighborhood residents, travelers, and local actors.',
        },
        {
          title: 'Promote circular economy',
          description:
            'Encourage reuse, repair, and donation of objects to reduce waste and preserve resources.',
        },
        {
          title: 'Support employment',
          description:
            'Offer training, workshops, and personalized support to promote professional integration.',
        },
        {
          title: 'Foster inclusion',
          description:
            'Welcome all audiences without distinction and create an accessible and caring space for everyone.',
        },
      ],
    },

    // Activities
    activities: {
      subtitle: 'Our activities',
      title: 'A lively and animated place',
      description:
        'Discover the various activities offered at Station-Cœur, a versatile space where everyone finds their place.',
      items: [
        {
          title: 'Solidarity thrift store',
          description:
            'Collection, sorting, and resale of second-hand items at solidarity prices. Give your objects a second life!',
          tags: ['Reuse', 'Solidarity'],
        },
        {
          title: 'Repair workshops',
          description:
            'Learn to repair your everyday objects through our participatory workshops led by expert volunteers.',
          tags: ['Training', 'Ecology'],
        },
        {
          title: 'Associative café',
          description:
            'A friendly space to meet, exchange, and share a moment over a hot or cold drink.',
          tags: ['Friendliness', 'Meetings'],
        },
        {
          title: 'Social support',
          description:
            'Drop-in sessions to help you with your administrative procedures and guide you to appropriate services.',
          tags: ['Support', 'Mutual aid'],
        },
        {
          title: 'Cultural events',
          description:
            'Exhibitions, concerts, shows... Station-Cœur comes alive throughout the year with a varied program.',
          tags: ['Culture', 'Animation'],
        },
        {
          title: 'Coworking space',
          description:
            'A shared workspace for entrepreneurs, freelancers, and remote workers in the neighborhood.',
          tags: ['Work', 'Collaboration'],
        },
      ],
    },

    // Publics
    publics: {
      subtitle: 'For whom?',
      title: 'A place open to all',
      description:
        'Station-Cœur welcomes all audiences in a spirit of inclusion and benevolence.',
      items: [
        {
          title: 'Neighborhood residents',
          description: 'A local place for all residents, accessible and welcoming.',
        },
        {
          title: 'Travelers',
          description:
            'A welcome point at the station for all those passing through who wish to take a break.',
        },
        {
          title: 'People in integration',
          description: 'Personalized support towards employment and autonomy.',
        },
        {
          title: 'Local associations',
          description: 'A space for collaboration and pooling of resources.',
        },
      ],
    },

    // Ecological
    ecological: {
      subtitle: 'Our commitment',
      title: 'An ecological and solidarity approach',
      p1: 'At the heart of our project, circular economy and ecological transition are fundamental values. We believe it is possible to reconcile solidarity and respect for the environment.',
      p2: 'Through our thrift store, repair workshops, and awareness actions, we encourage reuse, waste reduction, and more responsible consumption.',
      stats: {
        reused: 'of items reused / year',
        reduction: 'waste reduction',
        participants: 'workshop participants',
      },
    },

    // Testimonials
    testimonials: {
      subtitle: 'Testimonials',
      title: 'What they say about us',
      description:
        'Discover the testimonials of those who bring Station-Cœur to life every day.',
      items: [
        {
          quote:
            'Station-Cœur helped me regain confidence and reintegrate professionally. A wonderful place!',
          author: 'Marie D.',
          role: 'Beneficiary',
        },
        {
          quote:
            'A true beating heart in our neighborhood. You feel welcomed and useful there. I recommend it to everyone!',
          author: 'Jean-Pierre L.',
          role: 'Volunteer',
        },
        {
          quote:
            'The partnership with Station-Cœur allows us to reach audiences far from our usual services.',
          author: 'Sophie M.',
          role: 'Institutional partner',
        },
      ],
    },

    // Partners
    partners: {
      subtitle: 'Our partners',
      title: 'They trust us',
      description:
        'Station-Cœur is supported by many institutional, associative, and private partners.',
      cta: 'Become a partner',
    },

    // Gallery
    gallery: {
      subtitle: 'Gallery',
      title: 'Station-Cœur in pictures',
      description:
        'Discover our place, our activities, and the moments shared at Station-Cœur.',
    },

    // CTA
    cta: {
      title: 'Join the Station-Cœur adventure',
      description:
        'Whether you want to become a volunteer, partner, or simply visit us, we would be delighted to welcome you!',
      primary: 'Contact us',
      secondary: 'Discover the association',
    },

    // Contact
    contact: {
      subtitle: 'Contact',
      title: "Let's talk together",
      description:
        "A question, an idea, a desire to collaborate? Don't hesitate to contact us.",
      info: {
        title: "Let's get in touch",
        description:
          "Want to learn more about Station-Cœur, become a partner, or just say hello? We'd be happy to chat with you!",
        email: 'Email',
        phone: 'Phone',
        address: 'Address',
        social: 'Follow us on social media',
      },
      cta: 'Send us an email',
    },

    // Footer
    footer: {
      description:
        'A solidarity hub in the heart of the station, led by the association Nous Avons Des Elles. Together, let\'s create a space for sharing, mutual aid, and inclusion.',
      navigation: 'Navigation',
      association: 'The Association',
      legal: 'Legal notice',
      privacy: 'Privacy',
      rights: 'All rights reserved.',
    },

    // Legal pages
    legal: {
      title: 'Legal notice',
      back: 'Back to home',
    },
    privacy: {
      title: 'Privacy policy',
      back: 'Back to home',
    },

    // Misc
    misc: {
      solidarity: 'Solidarity',
      localHelp: 'Local help',
      inclusion: 'Inclusion',
      forAll: 'For all',
      projectImage: 'Project image',
    },
  },
} as const;

export type TranslationKeys = typeof translations.fr;
