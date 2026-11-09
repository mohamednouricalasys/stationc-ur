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
      p3: "À travers une boutique ressourcerie, une cantine végétale, des ateliers de réparation, une ludothèque et des actions dédiées au bien-vieillir, Station-Cœur œuvre pour le lien social, l'inclusion, l'économie circulaire et la transition écologique.",
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
          title: 'Rompre l\'isolement',
          description:
            'Créer des occasions durables de se rencontrer et favoriser les échanges entre les habitants et les acteurs locaux.',
        },
        {
          title: "Faire durer les ressources",
          description:
            'Réparer, réemployer et consommer autrement pour réduire les déchets et préserver les ressources.',
        },
        {
          title: 'Relier les générations',
          description:
            "Partager du temps, des savoirs et de l'entraide entre seniors, familles et enfants.",
        },
        {
          title: "Faire vivre le territoire",
          description:
            'Transformer une gare en lieu de vie ouvert et créer un espace où chacun peut recevoir et contribuer.',
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

    // Inclusion et pouvoir d'agir
    employment: {
      subtitle: "Inclusion et pouvoir d'agir",
      title: 'Recréer des repères et valoriser les compétences',
      p1: "Station-Cœur offre à chacun la possibilité de reprendre confiance. Accueillir, trier, réparer, organiser : les acquis sont reconnus et valorisés dans un cadre bienveillant.",
      p2: "Le lieu facilite l'orientation vers les acteurs sociaux et de l'insertion pour les personnes qui le souhaitent. Une place active pour chacun : être accueilli, proposer une idée, transmettre un savoir-faire, puis contribuer à son rythme.",
      factorsTitle: "Station-Cœur s'adresse notamment à :",
      factors: [
        'Les personnes en situation de handicap',
        'Les personnes rencontrant des difficultés personnelles ou sociales',
        'Les personnes en situation de vulnérabilité',
      ],
      goalValue: '+',
      goalLabel: 'de pouvoir d\'agir',
      goalDescription: "Chacun peut recevoir, contribuer et reprendre confiance.",
    },

    // Activities
    activities: {
      subtitle: 'Nos activités',
      title: 'Un lieu vivant et animé',
      description:
        'Découvrez les différentes activités proposées à Station-Cœur, un espace polyvalent où chacun trouve sa place.',
      items: [
        {
          title: 'Boutique ressourcerie',
          description:
            'Une boutique accessible et tendance qui donne une seconde vie aux vêtements et objets, encourage une consommation plus responsable.',
          tags: ['Réemploi', 'Solidarité'],
        },
        {
          title: 'Ateliers de réparation',
          description:
            'Des ateliers pratiques pour apprendre à réparer, transformer et réemployer, développer les savoir-faire et réduire durablement les déchets.',
          tags: ['Savoir-faire', 'Écologie'],
        },
        {
          title: 'Café-cantine végétale',
          description:
            'Une offre de restauration saine, végétale et accessible, sur place ou à emporter de 7h à 20h, pour les voyageurs et habitants.',
          tags: ['Alimentation', 'Convivialité'],
        },
        {
          title: 'Ludothèque intergénérationnelle',
          description:
            'Un espace ouvert à toutes les générations où le jeu devient un support de rencontres, de transmission et de lutte contre l\'isolement.',
          tags: ['Jeux', 'Lien social'],
        },
        {
          title: 'Événements culturels',
          description:
            'Expositions, concerts, ateliers, rencontres et événements intergénérationnels pour rendre la culture accessible et créer du lien.',
          tags: ['Culture', 'Animation'],
        },
        {
          title: 'Bibliothèque d\'objets',
          description:
            'Un service de prêt et de location d\'objets, d\'outils, de jeux et de livres qui facilite l\'accès aux équipements et favorise l\'économie circulaire.',
          tags: ['Partage', 'Économie circulaire'],
        },
      ],
    },

    // Publics
    publics: {
      subtitle: 'Pour qui ?',
      title: 'Un lieu ouvert à tous',
      description:
        "La mixité des générations et des parcours favorise la réciprocité. Station-Cœur accueille chacun dans un esprit d'inclusion et de bienveillance.",
      items: [
        {
          title: 'Seniors isolés',
          description: 'Retrouver des rendez-vous, entretenir ses capacités et transmettre son expérience.',
        },
        {
          title: 'Proches aidants',
          description:
            "Être écoutés, rencontrer des pairs et accéder aux ressources adaptées.",
        },
        {
          title: 'Femmes et familles fragilisées',
          description: 'Retrouver du soutien, une place dans le collectif et des occasions d\'agir.',
        },
        {
          title: 'Personnes en situation de handicap',
          description: 'Participer à un lieu ouvert, avec des usages et un accueil attentifs aux besoins.',
        },
      ],
    },

    // Ecological
    ecological: {
      subtitle: 'Transition écologique',
      title: 'Une démarche écologique au quotidien',
      p1: "Station-Cœur intègre la transition écologique dans chacune de ses activités : alimentation végétale, seconde main, réparation, partage d'objets et végétalisation participative.",
      p2: "À travers notre cantine végétale, notre ressourcerie, nos ateliers de réparation et notre bibliothèque d'objets, nous encourageons des pratiques plus durables et solidaires.",
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
      p3: 'Through a thrift store, a plant-based canteen, repair workshops, a games library, and actions dedicated to healthy ageing, Station-Cœur works for social bonds, inclusion, circular economy, and ecological transition.',
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
          title: 'Break isolation',
          description:
            'Create lasting opportunities to meet and foster exchanges between residents and local actors.',
        },
        {
          title: 'Make resources last',
          description:
            'Repair, reuse, and consume differently to reduce waste and preserve resources.',
        },
        {
          title: 'Connect generations',
          description:
            'Share time, knowledge, and mutual aid between seniors, families, and children.',
        },
        {
          title: 'Bring the territory to life',
          description:
            'Transform a station into an open living space where everyone can receive and contribute.',
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

    // Inclusion and empowerment
    employment: {
      subtitle: 'Inclusion and empowerment',
      title: 'Rebuilding confidence and valuing skills',
      p1: 'Station-Cœur offers everyone the opportunity to regain confidence. Welcoming, sorting, repairing, organising: skills are recognised and valued in a caring environment.',
      p2: 'The place facilitates referrals to social and employment services for those who wish. An active role for everyone: being welcomed, suggesting an idea, passing on a skill, then contributing at their own pace.',
      factorsTitle: 'Station-Cœur particularly welcomes:',
      factors: [
        'People with disabilities',
        'People facing personal or social difficulties',
        'People in vulnerable situations',
      ],
      goalValue: '+',
      goalLabel: 'empowerment',
      goalDescription: 'Everyone can receive, contribute, and regain confidence.',
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
            'An accessible and trendy shop that gives a second life to clothes and objects, encouraging more responsible consumption.',
          tags: ['Reuse', 'Solidarity'],
        },
        {
          title: 'Repair workshops',
          description:
            'Practical workshops to learn how to repair, transform, and reuse items, develop skills, and sustainably reduce waste.',
          tags: ['Know-how', 'Ecology'],
        },
        {
          title: 'Plant-based café-canteen',
          description:
            'A healthy, plant-based, and accessible food offer, on-site or take-away from 7am to 8pm, for travellers and residents.',
          tags: ['Food', 'Conviviality'],
        },
        {
          title: 'Intergenerational games library',
          description:
            'A space open to all generations where games become a vehicle for encounters, sharing, and combating isolation.',
          tags: ['Games', 'Social bonds'],
        },
        {
          title: 'Cultural events',
          description:
            'Exhibitions, concerts, workshops, gatherings, and intergenerational events to make culture accessible and create bonds.',
          tags: ['Culture', 'Animation'],
        },
        {
          title: 'Library of objects',
          description:
            'A lending and rental service for objects, tools, games, and books that facilitates access to equipment and promotes circular economy.',
          tags: ['Sharing', 'Circular economy'],
        },
      ],
    },

    // Publics
    publics: {
      subtitle: 'For whom?',
      title: 'A place open to all',
      description:
        'The mix of generations and backgrounds fosters reciprocity. Station-Cœur welcomes everyone in a spirit of inclusion and benevolence.',
      items: [
        {
          title: 'Isolated seniors',
          description: 'Finding regular activities, maintaining abilities, and passing on experience.',
        },
        {
          title: 'Family caregivers',
          description:
            'Being heard, meeting peers, and accessing appropriate resources.',
        },
        {
          title: 'Women and vulnerable families',
          description: 'Finding support, a place in the community, and opportunities to take action.',
        },
        {
          title: 'People with disabilities',
          description: 'Participating in an open place, with uses and reception attentive to needs.',
        },
      ],
    },

    // Ecological
    ecological: {
      subtitle: 'Ecological transition',
      title: 'An ecological approach in everyday life',
      p1: 'Station-Cœur integrates ecological transition into each of its activities: plant-based food, second-hand goods, repair, object sharing, and participatory greening.',
      p2: 'Through our plant-based canteen, thrift store, repair workshops, and library of objects, we encourage more sustainable and supportive practices.',
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
