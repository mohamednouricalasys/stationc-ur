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
      project: 'Le chantier',
      objectives: 'Notre cap',
      activities: 'Le lieu',
      publics: 'Publics',
      partners: 'Partenaires',
      contact: 'Contact',
      support: 'Soutenir le projet',
      backToAssociation: 'Retour au site Nous Avons Des Elles',
    },

    // Hero
    hero: {
      title: 'Station-Cœur · Gare de Bougival',
      titleLine1: 'Rien ne se perd,',
      titleLine2: 'tout se transforme en espoir.',
      description:
        "Prochain arrêt : un lieu où l'on se retrouve. Porté par l'association Nous Avons Des Elles, Station-Cœur s'installe en gare de Bougival, et les travaux ont commencé.",
      primaryCta: 'Monter à bord',
      secondaryCta: 'Soutenir le projet',
      scrollLabel: 'Prochain arrêt',
      compare: {
        sketchAlt: 'Illustration dessinée de la gare de Bougival',
        slider: "Comparer l'illustration et la photo",
      },
    },

    // Le chantier (presentation)
    presentation: {
      subtitle: 'Le chantier',
      title: 'Que se passe-t-il en gare de Bougival ?',
      p1: "Un nouveau lieu y prend forme. <strong>Station-Cœur</strong> s'installe dans la gare, dans le cadre de l'appel à projets « Gares de demain », et les travaux ont commencé.",
      p2: "Porté par l'association <strong>Nous Avons Des Elles</strong>, ce tiers-lieu solidaire réunira une boutique ressourcerie, une cantine végétale, des ateliers de réparation, une ludothèque, une bibliothèque d'objets et des actions dédiées au bien-vieillir.",
      ticket: [
        { label: 'Destination', value: 'Gare de Bougival' },
        { label: 'Ligne', value: 'Transilien L, depuis Paris Saint-Lazare' },
        { label: 'Ouverture prévue', value: 'Date à confirmer' },
      ],
      photos: [
        { alt: 'La gare de Bougival côté parvis', caption: 'Côté parvis' },
        { alt: 'Le bâtiment voyageurs de la gare de Bougival côté quais', caption: 'Côté quais' },
        { alt: "La gare de Bougival vue d'en haut, avec un train à quai", caption: "Vue d'en haut" },
      ],
      cta: 'Découvrir notre cap',
      association: "L'association",
    },

    // Chiffres clés
    stakes: {
      subtitle: 'Pourquoi Station-Cœur ?',
      title: 'Personne ne devrait rester sur le quai',
      items: [
        {
          value: '1 sur 4',
          label: 'des enfants mineurs vivent dans une famille monoparentale en France.',
        },
        {
          value: '2 millions',
          label: 'de personnes âgées sont isolées de leur entourage proche, notamment de leur famille et de leurs amis.',
        },
        {
          value: '750 000',
          label: "personnes âgées sont en situation de « mort sociale », c'est-à-dire privées de liens réguliers avec leur entourage et les réseaux de sociabilité.",
        },
      ],
      sources:
        'Sources : Insee, « En 2023, trois enfants sur dix vivent avec un seul de leurs parents », janvier 2025 ; Petits Frères des Pauvres, « Baromètre solitude et isolement des personnes âgées en France », septembre 2025.',
    },

    // Notre cap (objectives)
    objectives: {
      subtitle: 'Notre cap',
      title: 'Faire de la gare un lieu de vie',
      lead: "Créer un lieu vivant où le réemploi des objets devient un levier de protection de la planète, d'émancipation des femmes et de reconstruction du lien social.",
      body: "Une gare, c'est un lieu où l'on passe. Station-Cœur veut en faire un lieu où l'on s'arrête : un espace de vie, d'échanges et de solutions pour les voyageurs et les riverains, où chacun trouve sa place.",
      linesTitle: 'Trois lignes, une même direction',
      lines: [
        {
          title: 'Sociale et intergénérationnelle',
          description: 'Recréer des espaces de lien pour les familles, les seniors et les jeunes.',
        },
        {
          title: 'Écologique et citoyenne',
          description:
            "Une ressourcerie solidaire, des ateliers d'upcycling, un jardin collectif et des activités de bien-être accessibles à tous.",
        },
        {
          title: 'Culturelle et conviviale',
          description:
            'Une gare transformée en agora moderne, avec un café éco-responsable, des animations fédératrices et des événements artistiques et culturels.',
        },
      ],
      goalsTitle: 'Ce qui nous anime',
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
    // Le lieu (activities)
    activities: {
      subtitle: 'Le lieu',
      title: 'Tout le monde descend ici',
      description:
        'Un espace polyvalent où chacun trouve sa place. Ces espaces sont des projets en construction : ils peuvent évoluer au fil des travaux.',
      platform: 'Voie',
      items: [
        {
          title: 'Café-cantine végétale',
          description:
            "Un café où l'on viendra autant pour se nourrir que pour se retrouver : des recettes végétales, locales et équilibrées, pensées pour prendre soin du corps et du mental. Avec une cuisine professionnelle, de la vente à emporter de 7h00 à 20h00 pour les voyageurs, et un espace café et wifi pour se poser ou télétravailler.",
          tags: ['Alimentation', 'Convivialité'],
        },
        {
          title: 'Boutique ressourcerie éco-responsable',
          description:
            'Chaque objet y racontera une seconde histoire. Une boutique accessible et tendance, et une invitation à consommer moins, mais mieux : choisir, réparer, transmettre.',
          tags: ['Réemploi', 'Solidarité'],
        },
        {
          title: "Ateliers de réparation et d'upcycling",
          description:
            'Réparer, détourner, transformer : les mains reprendront le pouvoir, la matière reprendra vie, et chacun redécouvrira le plaisir de faire durer.',
          tags: ['Savoir-faire', 'Écologie'],
        },
        {
          title: "Bibliothèque d'objets et de livres",
          description:
            "Pourquoi posséder ce que l'on peut partager ? Outils, jeux, livres et appareils du quotidien seront à emprunter, pour désencombrer les vies et alléger la planète.",
          tags: ['Partage', 'Économie circulaire'],
        },
        {
          title: 'Ludothèque intergénérationnelle',
          description:
            "Les enfants et les anciens se retrouveront autour de jeux, pour tisser du lien à travers le rire, la stratégie et l'imagination, et rompre l'isolement.",
          tags: ['Jeux', 'Lien social'],
        },
        {
          title: 'Service courrier et colis',
          caption: 'Station-Cœur – La Poste',
          description:
            "Il n'y a plus de bureau de poste à Bougival et le quartier de la gare manque de services postaux. Un point courrier sera mis à disposition des voyageurs et des habitants.",
          tags: ['Proximité', 'Services'],
        },
        {
          title: 'Événements culturels',
          description:
            'Expositions, concerts, ateliers, rencontres et événements intergénérationnels pour rendre la culture accessible et créer du lien.',
          tags: ['Culture', 'Animation'],
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
      title: 'Envie de monter à bord ?',
      description:
        'Que vous souhaitiez devenir bénévole, partenaire, soutenir le chantier ou simplement nous rendre visite : il reste de la place à bord !',
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
        "Un tiers-lieu solidaire en gare de Bougival, porté par l'association Nous Avons Des Elles. Ensemble, créons un espace de partage, d'entraide et d'inclusion.",
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
      nextStop: 'Prochain arrêt',
      station: 'Gare de Bougival',
      projectImage: 'Image du projet',
    },
  },

  en: {
    // Navigation
    nav: {
      project: 'The worksite',
      objectives: 'Our course',
      activities: 'The place',
      publics: 'Audiences',
      partners: 'Partners',
      contact: 'Contact',
      support: 'Support the project',
      backToAssociation: 'Back to the Nous Avons Des Elles website',
    },

    // Hero
    hero: {
      title: 'Station-Cœur · Bougival station',
      titleLine1: 'Nothing is lost,',
      titleLine2: 'everything turns into hope.',
      description:
        'Next stop: a place where people come together. Led by the association Nous Avons Des Elles, Station-Cœur is moving into Bougival station, and work has begun.',
      primaryCta: 'All aboard',
      secondaryCta: 'Support the project',
      scrollLabel: 'Next stop',
      compare: {
        sketchAlt: 'Hand-drawn illustration of Bougival station',
        slider: 'Compare the illustration and the photo',
      },
    },

    // The worksite (presentation)
    presentation: {
      subtitle: 'The worksite',
      title: "What's happening at Bougival station?",
      p1: 'A new place is taking shape. <strong>Station-Cœur</strong> is moving into the station as part of the "Gares de demain" (Stations of Tomorrow) call for projects, and work has begun.',
      p2: 'Led by the association <strong>Nous Avons Des Elles</strong>, this solidarity hub will bring together a thrift store, a plant-based canteen, repair workshops, a games library, a library of objects, and actions dedicated to healthy ageing.',
      ticket: [
        { label: 'Destination', value: 'Bougival station' },
        { label: 'Line', value: 'Transilien L, from Paris Saint-Lazare' },
        { label: 'Planned opening', value: 'Date to be confirmed' },
      ],
      photos: [
        { alt: 'Bougival station from the forecourt', caption: 'Forecourt side' },
        { alt: 'The Bougival station building from the platforms', caption: 'Platform side' },
        { alt: 'Bougival station seen from above, with a train at the platform', caption: 'From above' },
      ],
      cta: 'Discover our course',
      association: 'The association',
    },

    // Key figures
    stakes: {
      subtitle: 'Why Station-Cœur?',
      title: 'No one should be left on the platform',
      items: [
        {
          value: '1 in 4',
          label: 'minor children in France live in a single-parent family.',
        },
        {
          value: '2 million',
          label: 'older people are cut off from their close circle, especially their family and friends.',
        },
        {
          value: '750,000',
          label: 'older people are in a state of "social death", meaning they have no regular contact with those around them or with social networks.',
        },
      ],
      sources:
        'Sources: Insee, "En 2023, trois enfants sur dix vivent avec un seul de leurs parents", January 2025; Petits Frères des Pauvres, "Baromètre solitude et isolement des personnes âgées en France", September 2025.',
    },

    // Our course (objectives)
    objectives: {
      subtitle: 'Our course',
      title: 'Making the station a place to live',
      lead: 'Creating a lively place where reusing objects becomes a lever for protecting the planet, empowering women, and rebuilding social bonds.',
      body: 'A station is a place people pass through. Station-Cœur wants to make it a place where people stop: a space for living, sharing, and finding solutions, for travellers and local residents alike, where everyone finds their place.',
      linesTitle: 'Three lines, one direction',
      lines: [
        {
          title: 'Social and intergenerational',
          description: 'Recreating spaces for connection for families, seniors, and young people.',
        },
        {
          title: 'Ecological and civic',
          description:
            'A solidarity thrift store, upcycling workshops, a shared garden, and well-being activities open to all.',
        },
        {
          title: 'Cultural and convivial',
          description:
            'A station turned into a modern agora, with an eco-friendly café, community activities, and artistic and cultural events.',
        },
      ],
      goalsTitle: 'What drives us',
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
    // The place (activities)
    activities: {
      subtitle: 'The place',
      title: 'Everyone gets off here',
      description:
        'A versatile space where everyone finds their place. These spaces are projects under construction: they may change as the work progresses.',
      platform: 'Platform',
      items: [
        {
          title: 'Plant-based café-canteen',
          description:
            'A café where people will come as much to eat as to meet: plant-based, local, and balanced recipes designed to care for body and mind. With a professional kitchen, take-away from 7am to 8pm for travellers, and a café and wifi space to relax or work remotely.',
          tags: ['Food', 'Conviviality'],
        },
        {
          title: 'Eco-friendly thrift store',
          description:
            'Every object will tell a second story. An accessible and trendy shop, and an invitation to consume less but better: choose, repair, pass on.',
          tags: ['Reuse', 'Solidarity'],
        },
        {
          title: 'Repair and upcycling workshops',
          description:
            'Repair, repurpose, transform: hands will take back control, materials will come back to life, and everyone will rediscover the joy of making things last.',
          tags: ['Know-how', 'Ecology'],
        },
        {
          title: 'Library of objects and books',
          description:
            'Why own what you can share? Tools, games, books, and everyday appliances will be available to borrow, to declutter lives and lighten the planet.',
          tags: ['Sharing', 'Circular economy'],
        },
        {
          title: 'Intergenerational games library',
          description:
            'Children and elders will come together around games, building bonds through laughter, strategy, and imagination, and breaking isolation.',
          tags: ['Games', 'Social bonds'],
        },
        {
          title: 'Mail and parcel service',
          caption: 'Station-Cœur – La Poste',
          description:
            'Bougival no longer has a post office and the station area lacks postal services. A mail point will be available to travellers and residents.',
          tags: ['Local', 'Services'],
        },
        {
          title: 'Cultural events',
          description:
            'Exhibitions, concerts, workshops, gatherings, and intergenerational events to make culture accessible and create bonds.',
          tags: ['Culture', 'Animation'],
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
      title: 'Ready to come aboard?',
      description:
        'Whether you want to become a volunteer, a partner, support the worksite, or simply visit us: there is still room on board!',
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
        'A solidarity hub at Bougival station, led by the association Nous Avons Des Elles. Together, let\'s create a space for sharing, mutual aid, and inclusion.',
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
      nextStop: 'Next stop',
      station: 'Bougival station',
      projectImage: 'Project image',
    },
  },
} as const;

export type TranslationKeys = typeof translations.fr;
