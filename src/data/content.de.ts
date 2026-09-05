export const dossier = [
  { k: 'Im Dienst seit', v: '2006', n: 'Chauffeur — über 20 Jahre für internationale Kunden' },
  { k: 'Sicherheitsfahrer seit', v: '2012', n: 'Sachsenring inkl. Sonderschutzfahrzeuge, Mercedes Guard' },
  { k: 'Erreichbarkeit', v: '24/7', n: 'Eine Nummer, eine Ansprechperson — auch kurzfristig' },
  { k: 'Sprachen', v: 'DE / EN', n: 'Einsätze in Europa, Asien und der Schweiz' },
]

export type Service = {
  code: string
  slug: string
  title: string
  teaser: string
  image?: string
  body: string[]
  points: string[]
}

export const services: Service[] = [
  {
    code: 'S-01',
    slug: 'limousine-chauffeurservice',
    title: 'Limousine & Chauffeurservice',
    teaser: 'Ihr persönlicher Fahrer für höchste Sicherheitsansprüche — statt anonymer Flotte.',
    image: 'images/s01-chauffeurservice.png',
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
    image: 'images/s02-flughafentransfer.png',
    body: [
      'Jede Reise erfordert Expertise. Ankunfts- und Abflugzeiten werden laufend überwacht, Verspätungen und Umbuchungen ohne Rückfragen aufgefangen.',
      'Empfang in der Ankunftshalle, Gepäckübernahme und ein Fahrzeug, das bereits bereitsteht, wenn Sie durch die Tür kommen.',
    ],
    points: ['Flugüberwachung in Echtzeit', 'Meet & Greet in der Ankunftshalle', 'Wartezeit inklusive', 'Feste Preise ohne Aufschläge'],
  },
  {
    code: 'S-03',
    slug: 'sicherheitsdienst',
    title: 'Sicherheitsdienst auf Anfrage',
    teaser: 'Bewaffnete und unbewaffnete professionelle Sicherheitslösungen für sensible Einsätze.',
    image: 'images/s03-sicherheitsdienst.png',
    body: [
      'Sicherheit ohne Kompromisse: Für risikoreiche und sensible Anlässe stellen wir geschultes Personal, abgestimmt auf Lage, Route und Protokoll.',
      'Grundlage sind Sachkunde- und Unterrichtungsnachweis nach §34a GewO sowie langjährige Praxis bei Regierungsdelegationen und Grossveranstaltungen.',
    ],
    points: ['Personenbegleitung', 'Routen- und Lagebewertung', 'Sonderschutzfahrzeuge auf Anfrage', 'Abstimmung mit Protokoll und Behörden'],
  },
  {
    code: 'S-04',
    slug: 'gruppen',
    title: 'Gruppenreisen & Transport',
    teaser: 'Gruppentransport ist keine Beförderung, sondern Koordination.',
    image: 'images/s04-gruppenreisen.png',
    body: [
      'Bei Kongressen, Roadshows oder Grossveranstaltungen müssen viele Gäste gleichzeitig bewegt werden. Wir planen Abfolge, Fahrzeugmix und Übergabepunkte im Voraus.',
      'Vom Einzelfahrzeug bis zur mehrköpfigen Flotte mit Sprintern und Reisebussen – aus einer Hand disponiert.',
    ],
    points: ['Flotten- und Shuttleplanung', 'Sprinter und Reisebusse auf Anfrage', 'Feste Einsatzleitung vor Ort', 'Namenslisten und Zeitfenster'],
  },
  {
    code: 'S-05',
    slug: 'reisemanagement',
    title: 'Reisemanagement',
    teaser: 'Reisen ist ein gesteuerter Prozess: Planung, Koordination und Timing.',
    image: 'images/s05-reisemanagement.png',
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
    image: 'images/s06-host-hostessen.png',
    body: [
      'Persönliche Assistenz für Reisen, Termine und Sonderwünsche – am Flughafen, am Messestand oder im Hotel.',
      'Mehrsprachiges Personal, abgestimmt auf Anlass und Gästestruktur.',
    ],
    points: ['Empfang und Gästebetreuung', 'Messe- und Konferenzbegleitung', 'Mehrsprachiges Personal', 'Persönliche Assistenz vor Ort'],
  },
  {
    code: 'S-07',
    slug: 'concierge-und-persoenliche-assistenz',
    title: 'Concierge & persönliche Assistenz',
    teaser: 'Persönliche Unterstützung für Reisen, Termine, Gäste und besondere Wünsche.',
    image: 'images/s07-concierge-assistenz.png',
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
  {
    code: 'S-08',
    slug: 'vip-meet-and-greet',
    title: 'VIP Meet & Greet',
    teaser: 'Persönlicher Empfang direkt am Flugzeug oder am Gate – diskret und ohne Wartezeit.',
    image: 'images/s08-vip-meet-and-greet.png',
    body: [
      'Für Gäste, die keine Zeit am Terminal verlieren sollen: Empfang direkt an der Flugzeugtür oder am Gate, Begleitung durch Zoll und Sicherheitskontrolle und Übergabe an den wartenden Chauffeur.',
      'Abgestimmt mit Fluggesellschaft und Flughafen, damit Ankunft und Weiterfahrt nahtlos ineinander übergehen.',
    ],
    points: ['Empfang an Flugzeug oder Gate', 'Begleitung durch Zoll und Kontrollen', 'Gepäckübernahme', 'Nahtlose Übergabe an den Chauffeur'],
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
  { title: 'Private Reisen & Concierge Management', text: 'Individuell geplante Reisen mit persönlicher Assistenz, Chauffeurservice und laufender Koordination.' },
]

export const fleet = [
  { name: 'Mercedes-Benz E-Klasse', seats: 'Bis zu 3 Passagiere', text: 'Für Geschäftsfahrten und elegante Transfers – Komfort im Fond, Diskretion und ruhiges Fahren in der Stadt.' },
  { name: 'Mercedes-Benz S-Klasse', seats: 'Bis zu 3 Passagiere', text: 'Die Executive-Limousine für Flughafentransfers, vertrauliche Termine und repräsentative Fahrten.' },
  { name: 'Mercedes-Benz V-Klasse', seats: 'Bis zu 6 Passagiere', text: 'Für Gruppen, Gepäck und mehrtägige Begleitungen, ohne auf eine komfortable Ankunft zu verzichten.' },
]

export const onDemand = ['Mercedes-Maybach', 'Mercedes G-Klasse', 'Range Rover', 'Rolls-Royce', 'Bentley', 'Mercedes Sprinter', 'Reisebusse', 'Sonderschutzfahrzeuge']

export const regions = ['München', 'Nürnberg', 'Stuttgart', 'Frankfurt', 'Berlin', 'Hamburg', 'Düsseldorf', 'Salzburg']
export const worldwide = ['Monaco', 'St. Tropez', 'Courchevel', 'Davos', 'London', 'Mailand', 'Wien', 'Zürich']

export type EventItem = {
  slug: string
  title: string
  date: string
  city: string
  text: string
  image: string
  body: string[]
}

export const events: EventItem[] = [
  {
    slug: 'oktoberfest-muenchen',
    title: 'Oktoberfest München 2026',
    date: '19.09. — 04.10.2026',
    city: 'München',
    text: 'Zelt-Transfers, Firmenabende und Gästebetreuung – mit Fahrern, die die Sperrungen rund um die Theresienwiese kennen.',
    image: 'images/oktoberfest.jpeg',
    body: [
      'Zwei Wochen lang verwandelt sich die Theresienwiese in die grösste Volksfestbühne der Welt – mit ihr auch der Verkehr rings um die Wiesn: großräumige Sperrungen, überlastete Taxistände und ausgebuchte Hotels.',
      'Für ein einzelnes Zeltabendessen genügt oft ein Fahrzeug. Holt eine Firma dagegen mehrere Gäste zeitgleich von unterschiedlichen Hotels ab, wird daraus schnell eine kleine Flotte – genau dafür disponieren wir im Vorfeld Fahrzeugmix, Reihenfolge und Übergabepunkte.',
      'Wir kennen die Zufahrtswege und Sperrzeiten rund um die Theresienwiese und planen Abholzeiten so, dass Wartezeit für Ihre Gäste entfällt.',
    ],
  },
  {
    slug: 'expo-real-muenchen',
    title: 'Expo Real 2026',
    date: '5.–7. Oktober 2026',
    city: 'München',
    text: 'Internationale Fachmesse für Immobilien und Investitionen – Aussteller- und Delegationslogistik zwischen Messe, Hotels und Flughafen.',
    image: 'images/expo.jpeg',
    body: [
      'Die Expo Real bringt jeden Oktober die internationale Immobilien- und Investmentbranche auf das Gelände der Messe München – mit dichtem Terminplan zwischen Empfängen, Standterminen und Networking-Abenden in der ganzen Stadt.',
      'Aussteller und Delegationen bewegen sich meist im Halbstundentakt zwischen Hotel, Messehalle und Abendveranstaltung. Wir planen diese Taktung im Voraus und stellen sicher, dass der Fahrer vor Ort ist, bevor der Termin endet.',
      'Für Unternehmen mit mehreren Standbesuchern disponieren wir auch mehrere Fahrzeuge parallel, mit fester Ansprechperson für die gesamte Messewoche.',
    ],
  },
  {
    slug: 'electronica-muenchen',
    title: 'Electronica München 2026',
    date: '10.–13. November 2026',
    city: 'München',
    text: 'Weltleitmesse der Elektronikbranche – Gruppenshuttles und Standbetreuung für internationale Delegationen.',
    image: 'images/electronica.jpeg',
    body: [
      'Die Electronica zählt zu den grössten Fachmessen der Elektronikbranche weltweit und zieht Aussteller und Delegationen aus allen Kontinenten nach München.',
      'Vier Messetage bedeuten dichten Programmablauf zwischen Flughafenankunft, Hotel, Messestand und Abendveranstaltungen – oft für Gruppen, die zeitversetzt anreisen. Wir koordinieren Abholzeiten je nach Ankunft und stellen bei Bedarf mehrere Fahrzeuge gleichzeitig.',
      'Auf Wunsch übernehmen wir auch die Standbetreuung ankommender Gäste, von der Begrüssung am Flughafen bis zur Übergabe am Messestand.',
    ],
  },
  {
    slug: 'nfl-munich-game',
    title: 'NFL Munich Game 2026',
    date: 'So. 15.11.2026 · 15:30 Uhr',
    city: 'München',
    text: 'Patriots vs. Lions in der Allianz Arena – Stadion-Transfers und Hospitality-Shuttles für Gäste und Sponsoren.',
    image: 'images/nfl.jpeg',
    body: [
      'Zum dritten NFL-Spiel in München füllt sich die Allianz Arena am 15. November 2026 mit internationalen Gästen – Anpfiff ist um 15:30 Uhr, wenn die New England Patriots auf die Detroit Lions treffen.',
      'Rund um Spieltage dieser Grössenordnung sind Parkplätze rar, Strassen gesperrt und Taxistände überlastet. Wir übernehmen den Transfer von Hotel oder Flughafen direkt zum Stadion, holen Sie nach dem Schlusspfiff wieder ab und stimmen Ankunftszeiten mit Hospitality-Programmen und VIP-Bereichen ab.',
      'Für Firmengruppen und Sponsoren-Delegationen disponieren wir mehrere Fahrzeuge gleichzeitig, inklusive fester Einsatzleitung vor Ort.',
    ],
  },
]

export const qualifications = [
  ['2006', 'Chauffeur — seither durchgehend im Einsatz'],
  ['2012', 'Ausgebildeter Sicherheitsfahrer'],
  ['Training', 'Mehrtägiges Fahrsicherheitstraining Sachsenring, inkl. Sonderschutzfahrzeuge'],
  ['Programm', 'Mercedes Guard Programm'],
  ['Erste Hilfe', 'Aktuelle Erste-Hilfe-Kenntnisse'],
  ['Einsätze', 'WEF Davos, Münchner Sicherheitskonferenz, Regierungsdelegationen'],
  ['Regionen', 'Europa, Asien und die Schweiz'],
  ['Sprachen', 'Deutsch, Englisch'],
]

export const faqs = [
  { q: 'Welche Chauffeurleistungen bieten Sie in München an?', a: 'Sicherheitsfahrten und Transfers, Chauffeurservice für Vorstände und Delegationen, Roadshows und mehrtägige Begleitungen, Flughafentransfers, Stundenbuchungen, Hochzeiten sowie Event- und Konferenzbegleitung.' },
  { q: 'In welchen Städten sind Sie unterwegs?', a: 'Wir operieren von München aus und sind deutschlandweit für unsere Kunden im Einsatz. Internationale Fahrten und Transfers – etwa nach Salzburg, Zürich, Wien, Mailand, Davos, Courchevel, Monaco oder St. Tropez – realisieren wir je nach Auftrag mit eigenen Fahrzeugen oder über unser geprüftes Partnernetzwerk.' },
  { q: 'Bekomme ich immer denselben Fahrer?', a: 'Ja, das ist der Kern des Angebots. Statt einer anonymen Fahrzeugflotte erhalten Sie einen persönlichen, fest zugeordneten Fahrer – kurze Wege, klare Absprachen, Vertrauen.' },
  { q: 'Ist der Service rund um die Uhr verfügbar?', a: 'Ja. Anfragen, Änderungen und kurzfristige Einsätze nehmen wir 24 Stunden am Tag entgegen, per Telefon oder WhatsApp.' },
  { q: 'Was unterscheidet einen Sicherheitsfahrer von einem Chauffeur?', a: 'Ein Sicherheitsfahrer verfügt über ein mehrtägiges Spezialtraining für den Grenzbereich der Fahrphysik. Neben souveränem Auftreten beherrscht er Notbremsungen mit Ausweichmanövern, gezieltes Abfangen bei Schleudern, Über- oder Untersteuern sowie das sichere Fahren bei Extremwetter wie Aquaplaning und Glatteis.' },
  { q: 'Kann ich Fahrzeuge buchen, die nicht in der Flotte stehen?', a: 'Ja. Mercedes-Maybach, Mercedes G-Klasse, Range Rover, Rolls-Royce, Bentley, Sprinter und Reisebusse stellen wir auf Anfrage bereit. Bitte planen Sie hierfür etwas Vorlauf ein.' },
  { q: 'Wie buche ich?', a: 'Rufen Sie an, schreiben Sie per WhatsApp oder senden Sie das Anfrageformular. Sie erhalten eine verbindliche Bestätigung mit Fahrer, Fahrzeug und Zeitfenster.' },
]
