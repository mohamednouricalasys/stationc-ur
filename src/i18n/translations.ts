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
      backToAssociation: 'Retour au site Nous Avons Des Elles',
    },

    // Hero
    hero: {
      title: 'Station-Cœur',
      titleLine1: 'Un tiers-lieu solidaire',
      titleLine2: 'au cœur de la gare',
      description:
        "Porté par l'association Nous Avons Des Elles, Station-Cœur est un espace de rencontre, de partage et d'entraide ouvert à tous. Venez découvrir un lieu unique où solidarité et convivialité sont au rendez-vous.",
      primaryCta: 'Découvrir le projet',
      secondaryCta: 'Nous contacter',
      scrollLabel: 'Découvrir',
    },

    // Presentation
    presentation: {
      subtitle: 'À propos',
      title: 'Un tiers-lieu solidaire au cœur de la gare',
      p1: "<strong>Station-Cœur</strong> est un projet innovant porté par l'association <strong>Nous Avons Des Elles</strong>. Implanté au sein d'une gare, ce tiers-lieu solidaire vise à créer un espace de vie, de partage et d'entraide accessible à tous.",
      p2: "Notre ambition est de transformer un lieu de passage en un véritable lieu de vie, où chacun peut trouver sa place, qu'il soit habitant du quartier, voyageur de passage, ou personne en recherche d'accompagnement.",
      p3: "À travers une boutique ressourcerie, un café associatif, des ateliers de réparation et des actions dédiées au bien-vieillir, Station-Cœur œuvre pour le lien social, l'inclusion par l'emploi, l'économie circulaire et la transition écologique.",
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
          title: 'Créer des emplois inclusifs',
          description:
            "Recruter et employer directement des personnes éloignées de l'emploi, avec l'objectif de créer au moins 8 postes.",
        },
        {
          title: "Favoriser l'inclusion",
          description:
            'Accueillir tous les publics sans distinction et créer un espace accessible et bienveillant pour chacun.',
        },
      ],
    },

    // Bien vieillir
    ageing: {
      subtitle: 'Bien vieillir',
      title: 'Faire de la gare un lieu repère du bien-vieillir',
      p1: "Station-Cœur accorde une place particulière aux personnes âgées. Accessible directement en gare, le tiers-lieu offre aux seniors un lieu de proximité pour sortir de l'isolement, rester actifs et tisser des liens.",
      p2: "Avec « Les liens de cœur », seniors et familles s'entraident : écouter une maman solo, lire avec les enfants, prendre des nouvelles, proposer une sortie… Un membre de l'équipe facilite les premières rencontres et reste disponible pour les accompagner.",
      pillars: [
        {
          title: "Lutter contre l'isolement",
          description: "Un lieu accueillant et facile d'accès pour sortir de chez soi et rencontrer du monde.",
        },
        {
          title: "Préserver l'autonomie",
          description: 'Des parcours de prévention pour rester en forme et entretenir son autonomie.',
        },
        {
          title: 'Soutenir les aidants',
          description: "De l'écoute et des relais vers les ressources adaptées.",
        },
        {
          title: 'Relier les générations',
          description: 'Jeux, cuisine, culture et entraide pour partager du temps entre seniors, familles et enfants.',
        },
      ],
      partnersTitle: 'Des partenaires engagés pour le bien-vieillir',
      partners: [
        {
          name: "CNAV – L'Assurance retraite",
          description: "Lutte contre l'isolement et accès des seniors à un lieu de proximité.",
        },
        {
          name: 'PRIF',
          description: "Prévention Retraite Île-de-France : des parcours de prévention pour entretenir l'autonomie.",
        },
        {
          name: 'Malakoff Humanis',
          description: 'Soutien aux actions de bien-vieillir et au volet aidants.',
        },
      ],
    },

    // Inclusion par l'emploi
    employment: {
      subtitle: "Inclusion par l'emploi",
      title: 'Créer des emplois pour celles et ceux qui en sont éloignés',
      p1: "Station-Cœur est aussi un lieu qui crée de l'emploi. L'association recrute et emploie directement des personnes éloignées de l'emploi pour faire vivre le tiers-lieu au quotidien.",
      p2: "L'éloignement de l'emploi peut avoir de multiples causes. À Station-Cœur, chacune et chacun peut trouver un poste à sa mesure, au sein d'une équipe bienveillante.",
      factorsTitle: "L'éloignement de l'emploi peut être lié à :",
      factors: [
        'Une situation de handicap',
        'Des difficultés personnelles ou sociales',
        "D'autres situations de vulnérabilité",
      ],
      goalValue: '8',
      goalLabel: 'postes au minimum',
      goalDescription: "C'est notre objectif de création d'emplois au sein de Station-Cœur.",
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
          title: "Personnes éloignées de l'emploi",
          description: 'Des postes créés au sein du lieu pour retrouver une activité professionnelle.',
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
    },

    // Testimonials
    testimonials: {
      subtitle: 'Témoignages',
      title: 'Ils parlent de nous',
      description:
        'Des paroles recueillies auprès des habitantes, habitants et clientes qui font déjà vivre le projet.',
      items: [
        {
          quote:
            "C'est magnifique. Il est chaud en plus, vraiment agréable. Je suis très contente d'avoir trouvé ça, c'est un beau cadeau de Noël. Merci, merci vraiment, ça me touche beaucoup.",
          author: 'Une cliente',
          role: 'Boutique solidaire',
        },
        {
          quote:
            "Pour moi, c'est du partage et des rencontres. Et aussi une manière de faire une petite action pour la planète, parce que chacun peut participer à l'avancée vers une meilleure transition écologique.",
          author: 'Une participante',
          role: 'Habitante engagée',
        },
        {
          quote:
            "Le collier aux petits coquillages que je t'ai acheté, Nadira : à chaque fois, on me demande où je l'ai trouvé ! Le bonheur de s'habiller comme on a toujours cherché à être, c'est sublime.",
          author: 'Une cliente fidèle',
          role: 'Boutique solidaire',
        },
        {
          quote:
            "Depuis que ma mère est décédée en 2006, je suis tout seul, je n'ai jamais eu d'enfant. Voir les enfants des autres, c'est comme si c'étaient les miens. Ce que je souhaiterais, c'est un lieu où l'on puisse se rencontrer, échanger des idées. Moi, j'aime beaucoup le Scrabble : j'aimerais bien trouver quelqu'un avec qui jouer.",
          author: 'Un habitant',
          role: 'Senior du quartier',
        },
        {
          quote:
            "C'est très positif, parce que ça permet à des gens de se rencontrer, et on a tellement besoin de rapprochement entre les personnes. Ça ne peut apporter que du bonheur.",
          author: 'Une habitante',
          role: 'Voisine du projet',
        },
        {
          quote:
            "Si je devais le définir en trois mots : la solidarité, la convivialité, l'amour. L'amour.",
          author: 'Une bénévole',
          role: 'Membre de la communauté',
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
      backToAssociation: 'Back to the Nous Avons Des Elles website',
    },

    // Hero
    hero: {
      title: 'Station-Cœur',
      titleLine1: 'A solidarity hub',
      titleLine2: 'in the heart of the station',
      description:
        'Led by the association Nous Avons Des Elles, Station-Cœur is a meeting space for sharing and mutual aid, open to everyone. Come discover a unique place where solidarity and conviviality await you.',
      primaryCta: 'Discover the project',
      secondaryCta: 'Contact us',
      scrollLabel: 'Discover',
    },

    // Presentation
    presentation: {
      subtitle: 'About',
      title: 'A solidarity hub in the heart of the station',
      p1: '<strong>Station-Cœur</strong> is an innovative project led by the association <strong>Nous Avons Des Elles</strong>. Located within a train station, this solidarity hub aims to create a living space for sharing and mutual aid, accessible to all.',
      p2: 'Our ambition is to transform a transit space into a true living place, where everyone can find their place, whether they are neighborhood residents, passing travelers, or people seeking support.',
      p3: 'Through a thrift store, an associative café, repair workshops, and actions dedicated to healthy ageing, Station-Cœur works for social bonds, inclusion through employment, circular economy, and ecological transition.',
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
          title: 'Create inclusive jobs',
          description:
            'Directly recruit and employ people who are far from the job market, with the goal of creating at least 8 positions.',
        },
        {
          title: 'Foster inclusion',
          description:
            'Welcome all audiences without distinction and create an accessible and caring space for everyone.',
        },
      ],
    },

    // Healthy ageing
    ageing: {
      subtitle: 'Healthy ageing',
      title: 'Making the station a landmark for healthy ageing',
      p1: 'Station-Cœur gives a special place to older people. Directly accessible at the station, the hub offers seniors a local place to break isolation, stay active, and build connections.',
      p2: 'With "Les liens de cœur", seniors and families help each other: listening to a single mother, reading with children, checking in, suggesting an outing… A team member facilitates the first meetings and remains available to support them.',
      pillars: [
        {
          title: 'Fighting isolation',
          description: 'A welcoming, easy-to-reach place to get out and meet people.',
        },
        {
          title: 'Preserving autonomy',
          description: 'Prevention programmes to stay fit and maintain independence.',
        },
        {
          title: 'Supporting caregivers',
          description: 'A listening ear and links to the right resources.',
        },
        {
          title: 'Connecting generations',
          description: 'Games, cooking, culture, and mutual aid to share time between seniors, families, and children.',
        },
      ],
      partnersTitle: 'Partners committed to healthy ageing',
      partners: [
        {
          name: "CNAV – L'Assurance retraite",
          description: 'Fighting isolation and giving seniors access to a local place.',
        },
        {
          name: 'PRIF',
          description: 'Prévention Retraite Île-de-France: prevention programmes to maintain autonomy.',
        },
        {
          name: 'Malakoff Humanis',
          description: 'Support for healthy-ageing actions and caregiver support.',
        },
      ],
    },

    // Inclusion through employment
    employment: {
      subtitle: 'Inclusion through employment',
      title: 'Creating jobs for people far from employment',
      p1: 'Station-Cœur is also a place that creates jobs. The association directly recruits and employs people who are far from the job market to keep the hub running day to day.',
      p2: 'Distance from employment can have many causes. At Station-Cœur, everyone can find a position suited to them, within a caring team.',
      factorsTitle: 'Distance from employment may be linked to:',
      factors: [
        'A disability',
        'Personal or social difficulties',
        'Other situations of vulnerability',
      ],
      goalValue: '8',
      goalLabel: 'positions minimum',
      goalDescription: 'This is our job-creation goal within Station-Cœur.',
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
          title: 'People far from employment',
          description: 'Jobs created within the hub to return to professional activity.',
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
    },

    // Testimonials
    testimonials: {
      subtitle: 'Testimonials',
      title: 'What they say about us',
      description:
        'Words gathered from the residents and customers who already bring the project to life.',
      items: [
        {
          quote:
            "It's beautiful. And it's warm too, really lovely. I'm so happy I found it, it's a wonderful Christmas present. Thank you, thank you so much, it really touches me.",
          author: 'A customer',
          role: 'Solidarity shop',
        },
        {
          quote:
            "For me, it's about sharing and meeting people. And also a way of doing a small thing for the planet, because everyone can help move towards a better ecological transition.",
          author: 'A participant',
          role: 'Engaged resident',
        },
        {
          quote:
            "The little seashell necklace I bought from you, Nadira: every time, people ask me where I got it! The joy of dressing the way you've always wanted to be, it's wonderful.",
          author: 'A regular customer',
          role: 'Solidarity shop',
        },
        {
          quote:
            "Since my mother passed away in 2006, I've been on my own, I never had children. Seeing other people's children, it's as if they were mine. What I'd like is a place where people can meet and share ideas. I really love Scrabble: I'd love to find someone to play with.",
          author: 'A resident',
          role: 'Local senior',
        },
        {
          quote:
            "It's very positive, because it lets people meet each other, and we need so much to bring people closer together. It can only bring happiness.",
          author: 'A resident',
          role: 'Project neighbour',
        },
        {
          quote:
            "If I had to describe it in three words: solidarity, friendliness, love. Love.",
          author: 'A volunteer',
          role: 'Community member',
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
