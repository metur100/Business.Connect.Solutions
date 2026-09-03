export const company = {
  name: 'BCO Solutions',
  legal: 'Business Connect Solutions',
  phone: '+49 151 4122 4419',
  phoneHref: 'tel:+4915141224419',
  whatsapp: 'https://wa.me/4915141224419',
  email: 'info@bco-solutions.de',
  street: 'Professor-Messerschmitt-Straße 3a',
  city: '85579 Neubiberg bei München',
  country: 'Deutschland',
  instagram: 'https://www.instagram.com/bcosolutions/',
  linkedin: 'https://www.linkedin.com/company/bco-solutions/',
  facebook: 'https://www.facebook.com/profile.php?id=61584745757604',
}

export const dossier = [
  { k: 'Im Dienst seit', v: '2006', n: 'Chauffeur — über 20 Jahre für internationale Kunden' },
  { k: 'Sicherheitsfahrer seit', v: '2012', n: 'Sachsenring inkl. Sonderschutzfahrzeuge, Mercedes Guard' },
  { k: 'Erreichbarkeit', v: '24/7', n: 'Eine Nummer, eine Ansprechperson — auch kurzfristig' },
  { k: 'Sprachen', v: 'DE / EN / TR', n: 'Einsätze in Europa, Asien und der Schweiz' },
]



export type Service = {
  code: string
  slug: string
  title: string
  teaser: string
  body: string[]
  points: string[]
}

export const services: Service[] = [
  {
    code: 'S-01',
    slug: 'limousine-chauffeurservice',
    title: 'Limousine & Chauffeurservice',
    teaser: 'Ihr persönlicher Fahrer für höchste Sicherheitsansprüche — statt anonymer Flotte.',
    body: [
      'Seit 2006 bin ich als Chauffeur tätig, seit 2012 zusätzlich als ausgebildeter Sicherheitsfahrer. Die Ausbildung umfasst mehrtägige Fahrsicherheitstrainings am Fahrsicherheitszentrum Sachsenring – inklusive Training für Sonderschutzfahrzeuge – sowie das Mercedes Guard Programm.',
      'Über viele Jahre habe ich Vorstände, Delegationen, Privatpersonen und internationale Gäste sicher begleitet – unter anderem im Rahmen der Münchner Sicherheitskonferenz sowie bei Einsätzen für Regierungsdelegationen im In- und Ausland.',
    ],
    points: [
      'Sicherheitsfahrten und Transfers',
      'Chauffeurservice für Vorstände und Delegationen',
      'Roadshows und mehrtägige Begleitungen',
      'Flughafen- und diverse Transfers',
      'Stundenbuchungen',
      'Hochzeiten und besondere Anlässe',
      'Event- und Konferenzbegleitung',
    ],
  },
  {
    code: 'S-02',
    slug: 'flughafentransfer',
    title: 'Flughafentransfer',
    teaser: 'Exklusive Transfers von und zu allen nationalen und internationalen Flughäfen.',
    body: [
      'Jede Reise erfordert Expertise. Ankunfts- und Abflugzeiten werden laufend überwacht, Verspätungen und Umbuchungen ohne Rückfragen aufgefangen.',
      'Empfang in der Ankunftshalle, Gepäckübernahme und ein Fahrzeug, das bereits bereitsteht, wenn Sie durch die Tür kommen.',
    ],
    points: ['Flugüberwachung in Echtzeit', 'Meet & Greet in der Ankunftshalle', 'Wartezeit inklusive', 'Feste Preise ohne Aufschläge'],
  },
  {
    code: 'S-03',
    slug: 'sicherheitsdienst',
    title: 'Sicherheitsdienst',
    teaser: 'Bewaffnete und unbewaffnete professionelle Sicherheitslösungen für sensible Einsätze.',
    body: [
      'Sicherheit ohne Kompromisse: Für risikoreiche und sensible Anlässe stellen wir geschultes Personal, abgestimmt auf Lage, Route und Protokoll.',
      'Grundlage sind Sachkunde- und Unterrichtungsnachweis nach §34a GewO sowie langjährige Praxis bei Regierungsdelegationen und Grossveranstaltungen.',
    ],
    points: ['Personenbegleitung', 'Routen- und Lagebewertung', 'Sonderschutzfahrzeuge auf Anfrage', 'Abstimmung mit Protokoll und Behörden'],
  },
  {
    code: 'S-04',
    slug: 'einzelpersonen-und-gruppen',
    title: 'Einzelpersonen und Gruppen',
    teaser: 'Gruppentransport ist keine Beförderung, sondern Koordination.',
    body: [
      'Bei Kongressen, Roadshows oder Grossveranstaltungen müssen viele Gäste gleichzeitig bewegt werden. Wir planen Abfolge, Fahrzeugmix und Übergabepunkte im Voraus.',
      'Vom Einzelfahrzeug bis zum Konvoi mit Sprintern und Reisebussen – aus einer Hand disponiert.',
    ],
    points: ['Konvoi- und Shuttleplanung', 'Sprinter und Reisebusse auf Anfrage', 'Feste Einsatzleitung vor Ort', 'Namenslisten und Zeitfenster'],
  },
  {
    code: 'S-05',
    slug: 'reisemanagement',
    title: 'Reisemanagement',
    teaser: 'Reisen ist ein gesteuerter Prozess: Planung, Koordination und Timing.',
    body: [
      'Der Reisemanagement-Service basiert auf einem ganzheitlichen Ansatz, der alle Phasen einer Geschäfts- oder Privatreise abdeckt – von der ersten Anfrage bis zur Rückkehr.',
      'Alle Transportbedürfnisse zu Land, in der Luft und auf dem Wasser werden gemeinsam behandelt.',
    ],
    points: ['Routen- und Zeitplanung', 'Hotel- und Terminkoordination', 'Jet-, Helikopter- und Yachtvermittlung', 'Ein Ansprechpartner für die gesamte Reise'],
  },
  {
    code: 'S-06',
    slug: 'host-hostessenservices',
    title: 'Host & Hostessenservices',
    teaser: 'Professionelle Repräsentation am ersten Kontaktpunkt.',
    body: [
      'Persönliche Assistenz für Reisen, Termine und Sonderwünsche – am Flughafen, am Messestand oder im Hotel.',
      'Mehrsprachiges Personal, abgestimmt auf Anlass und Gästestruktur.',
    ],
    points: ['Empfang und Gästebetreuung', 'Messe- und Konferenzbegleitung', 'Mehrsprachiges Personal', 'Persönliche Assistenz vor Ort'],
  },
  {
    code: 'S-07',
    slug: 'dispositionssoftware-tracking-systeme',
    title: 'Dispositionssoftware & Tracking',
    teaser: 'Mobilitätsoperationen transparent und vollständig kontrollierbar.',
    body: [
      'Die technologische Infrastruktur macht jeden Einsatz nachvollziehbar: Disposition, Fahrzeugstatus und Ankunftszeiten in einem System.',
      'Auf Wunsch erhalten Auftraggeber Zugriff auf Live-Status und Nachweisberichte.',
    ],
    points: ['Live-Tracking der Fahrzeuge', 'Digitale Disposition', 'Nachweis- und Abrechnungsberichte', 'Schnittstellen für Firmenkunden'],
  },
  {
  code: 'S-08',
  slug: 'concierge-und-persoenliche-assistenz',
  title: 'Concierge & persönliche Assistenz',
  teaser: 'Persönliche Unterstützung für Reisen, Termine, Gäste und besondere Wünsche.',
  body: [
    'Eine professionelle Reise endet nicht an der Fahrzeugtür. Auf Wunsch unterstützt BCO auch bei der Koordination von Hotels, Terminen, Restaurants, Veranstaltungen und individuellen Reiseplänen.',
    'Ein Ansprechpartner behält den Überblick und stimmt Chauffeurservice, Transfers, Gastgeber, Sicherheitsanforderungen und weitere Dienstleister aufeinander ab.',
  ],
  points: [
    'Persönliche Reiseassistenz',
    'Hotel- und Restaurantkoordination',
    'Organisation von Terminen und Transfers',
    'Gästebetreuung und VIP-Handling',
    'Event- und Veranstaltungskoordination',
    'Yacht-, Jet- und Helikopteranfragen',
    'Individuelle Sonderwünsche',
  ],
},
]

export const solutions = [
  { title: 'Lösungen für Geschäftsreisen', text: 'Wiederkehrende Firmenfahrten mit festen Konditionen und einem Ansprechpartner.' },
  { title: 'Globale Event- & Organisationslösungen', text: 'Mobilitätskonzepte für Kongresse, Festivals und internationale Organisationen.' },
  { title: 'Roadshow-Management', text: 'Mehrtägige Begleitungen über Städte und Ländergrenzen hinweg, lückenlos getaktet.' },
  { title: 'Geschäftsreisen & Executive Travel', text: 'Vorstands- und Führungskräftefahrten mit Diskretion als Standard.' },
  { title: 'VIP & Protokollösungen', text: 'Abstimmung mit Protokoll, Sicherheitsdiensten und Veranstaltern.' },
  { title: 'Integrierte Mobilitäts- & Operationslösungen', text: 'Transport, Personal und Technik als ein gesteuertes System.' },
  { title: 'VIP-Sicherheits- und Risikomanagement', text: 'Lagebewertung, Routenplanung und geschultes Sicherheitspersonal.' },
  {
  title: 'Private Reisen & Concierge Management',
  text: 'Individuell geplante Reisen mit persönlicher Assistenz, Chauffeurservice und laufender Koordination.',},
]

export const fleet = [
  { name: 'Mercedes-Benz E-Klasse', seats: 'Bis zu 3 Passagiere', text: 'Für Geschäftsfahrten und elegante Transfers – Komfort im Fond, Diskretion und ruhiges Fahren in der Stadt.' },
  { name: 'Mercedes-Benz S-Klasse', seats: 'Bis zu 3 Passagiere', text: 'Die Executive-Limousine für Flughafentransfers, vertrauliche Termine und repräsentative Fahrten.' },
  { name: 'Mercedes-Benz V-Klasse', seats: 'Bis zu 6 Passagiere', text: 'Für Gruppen, Gepäck und mehrtägige Begleitungen, ohne auf eine komfortable Ankunft zu verzichten.' },
]

export const onDemand = ['Mercedes-Maybach', 'Range Rover', 'Rolls-Royce', 'Bentley', 'Mercedes Sprinter', 'Reisebusse', 'Sonderschutzfahrzeuge']

export const regions = ['München', 'Nürnberg', 'Stuttgart', 'Frankfurt', 'Berlin', 'Hamburg', 'Düsseldorf', 'Salzburg']
export const worldwide = ['Monaco', 'St. Tropez', 'Courchevel', 'Davos', 'London', 'Mailand', 'Wien', 'Zürich']

export const events = [
  { title: 'Münchner Sicherheitskonferenz', date: 'Februar 2026', city: 'München', text: 'Delegationen, Protokollfahrten und Sicherheitsbegleitung im gesamten Konferenzumfeld. Wir sind seit Jahren im Einsatz.' },
  { title: 'Oktoberfest', date: '19.09. — 04.10.2026', city: 'München', text: 'Zelt-Transfers, Firmenabende und Gästebetreuung – mit Fahrern, die die Sperrungen rund um die Theresienwiese kennen.' },
  { title: 'Internationale Handwerksmesse', date: 'März 2026', city: 'München', text: 'Aussteller- und Besucherlogistik zwischen Messe München, Hotels und Flughafen.' },
  { title: 'IFAT Munich', date: 'Mai 2026', city: 'München', text: 'Die Weltleitmesse für Umwelttechnologien – Gruppenshuttles und Standbetreuung.' },
]

export const qualifications = [
  ['2006', 'Chauffeur — seither durchgehend im Einsatz'],
  ['2012', 'Ausgebildeter Sicherheitsfahrer'],
  ['Training', 'Mehrtägiges Fahrsicherheitstraining Sachsenring, inkl. Sonderschutzfahrzeuge'],
  ['Programm', 'Mercedes Guard Programm'],
  ['§34a', 'Sachkunde- und Unterrichtungsnachweis nach GewO'],
  ['Erste Hilfe', 'Aktuelle Erste-Hilfe-Kenntnisse'],
  ['Einsätze', 'WEF Davos, Münchner Sicherheitskonferenz, Regierungsdelegationen'],
  ['Regionen', 'Europa, Asien und die Schweiz'],
  ['Sprachen', 'Deutsch, Englisch, Türkisch'],
]

export const faqs = [
  { q: 'Welche Chauffeurleistungen bieten Sie in München an?', a: 'Sicherheitsfahrten und Transfers, Chauffeurservice für Vorstände und Delegationen, Roadshows und mehrtägige Begleitungen, Flughafentransfers, Stundenbuchungen, Hochzeiten sowie Event- und Konferenzbegleitung.' },
  { q: 'In welchen Städten sind Sie unterwegs?', a: 'Basis ist München. Wir fahren deutschlandweit sowie europaweit – regelmässig nach Monaco, St. Tropez, Courchevel, Davos, Mailand, Wien und Zürich. Einsätze in Asien und der Schweiz gehören zur Erfahrung.' },
  { q: 'Bekomme ich immer denselben Fahrer?', a: 'Ja, das ist der Kern des Angebots. Statt einer anonymen Fahrzeugflotte erhalten Sie einen persönlichen, fest zugeordneten Fahrer – kurze Wege, klare Absprachen, Vertrauen.' },
  { q: 'Ist der Service rund um die Uhr verfügbar?', a: 'Ja. Anfragen, Änderungen und kurzfristige Einsätze nehmen wir 24 Stunden am Tag entgegen, per Telefon oder WhatsApp.' },
  { q: 'Was unterscheidet einen Sicherheitsfahrer von einem Chauffeur?', a: 'Ein Sicherheitsfahrer ist zusätzlich für defensives und ausweichendes Fahren, Routenbewertung und den Umgang mit Sonderschutzfahrzeugen ausgebildet. Grundlage sind Trainings am Sachsenring und das Mercedes Guard Programm.' },
  { q: 'Kann ich Fahrzeuge buchen, die nicht in der Flotte stehen?', a: 'Ja. Mercedes-Maybach, Range Rover, Rolls-Royce, Bentley, Sprinter und Reisebusse stellen wir auf Anfrage bereit. Bitte planen Sie hierfür etwas Vorlauf ein.' },
  { q: 'Wie buche ich?', a: 'Rufen Sie an, schreiben Sie per WhatsApp oder senden Sie das Anfrageformular. Sie erhalten eine verbindliche Bestätigung mit Fahrer, Fahrzeug und Zeitfenster.' },
]
