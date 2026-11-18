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
  { title: 'Geschäftsreisen', text: 'Wiederkehrende Firmenfahrten mit festen Konditionen und einem Ansprechpartner.' },
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
export const worldwide = ['Monaco', 'St. Tropez', 'Courchevel', 'New York', 'London', 'Mailand', 'Wien', 'Zürich']

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
    slug: 'ski-saison-transfer-muenchen',
    title: 'Ski-Saison 2026/27 – Von München direkt auf die Piste',
    date: 'Ab Fr. 27.11.2026',
    city: 'München · Alpen',
    text: 'Die Ski-Saison beginnt: Einzel- oder Gruppentransfers von München direkt in die Skigebiete Bayerns, Tirols und der Schweiz.',
    image: 'images/mercedes-g-klasse-hotel.png',
    body: [
      'Die Ski-Saison beginnt: Am 27. November 2026 startet die Zugspitze in den Winter, das Sudelfeld folgt am 28. November, die SkiWelt Wilder Kaiser-Brixental am 5. Dezember und Garmisch-Classic Mitte Dezember. In Kitzbühel und auf den Tiroler Gletschern laufen die Lifte bereits.',
      'Von München direkt auf die Piste – ob als Einzeltransfer im komfortablen SUV oder als Gruppentransfer im Van oder Sprinter für Familie, Freunde oder Firmenteam. Wir holen Sie zu Hause, im Hotel oder am Flughafen ab und bringen Sie samt Ski- und Snowboardausrüstung sicher ans Ziel.',
      'Unsere Fahrzeuge sind wintertauglich ausgestattet, unsere Fahrer im Umgang mit Schnee, Glätte und Passstraßen geübt. Ob Tagesausflug an den Spitzingsee, Wochenende in Kitzbühel oder Saisonaufenthalt in Lech, St. Moritz oder Courchevel – wir sind für Sie da.',
    ],
  },
  {
    slug: 'hahnenkamm-rennen-kitzbuehel',
    title: 'Hahnenkamm-Rennen Kitzbühel 2027',
    date: 'Fr. 22. – So. 24.01.2027',
    city: 'Kitzbühel',
    text: 'Das 87. Hahnenkamm-Rennen auf der Streif – Transfers von München nach Kitzbühel und zurück für Gäste, VIPs und Firmengruppen.',
    image: 'images/range-rover-hotel.png',
    body: [
      'Vom 18. bis 24. Januar 2027 wird Kitzbühel zum Treffpunkt des alpinen Skisports: Beim 87. Hahnenkamm-Rennen stehen der Super-G am Freitag (22.01.), die legendäre Abfahrt auf der Streif am Samstag (23.01.) und der Slalom am Sonntag (24.01.) auf dem Programm.',
      'An den Renntagen sind Zufahrten gesperrt, Parkplätze knapp und die Straßen rund um Kitzbühel überlastet. Wir übernehmen den Transfer von München, vom Flughafen oder aus Ihrem Hotel direkt nach Kitzbühel, stimmen Ankunfts- und Abholzeiten mit VIP-Bereichen und Hospitality-Programmen ab und bringen Sie nach dem Rennen sicher zurück.',
      'Für Firmengruppen und Delegationen disponieren wir mehrere Fahrzeuge gleichzeitig – als Einzel- oder Gruppentransfer, auf Wunsch auch über mehrere Tage.',
    ],
  },
  {
    slug: 'ski-weltcup-garmisch-partenkirchen',
    title: 'Ski-Weltcup Garmisch-Partenkirchen 2027',
    date: 'Sa. 20.02. & Sa. 27.02.2027',
    city: 'Garmisch-Partenkirchen',
    text: 'Weltcup-Abfahrten der Herren und Damen auf der Kandahar – Transfers von München nach Garmisch-Partenkirchen für Gäste und Sponsoren.',
    image: 'images/v-klasse-flotte-warm.png',
    body: [
      'Im Februar 2027 gastiert der alpine Ski-Weltcup laut vorläufigem FIS-Kalender wieder in Garmisch-Partenkirchen: Am 20. Februar steht die Abfahrt der Herren, am 27. Februar die Abfahrt der Damen auf der Kandahar auf dem Programm.',
      'Die Anreise aus München dauert rund eine Stunde – an Renntagen jedoch oft deutlich länger. Wir bringen Sie und Ihre Gäste von Hotel, Büro oder Flughafen direkt zum Zielgelände, kennen die Zufahrten und Sperrzeiten und holen Sie nach dem Rennen zuverlässig wieder ab.',
      'Ob Einzeltransfer oder Gruppentransfer für Sponsoren, Kunden und Mitarbeitende – wir sind für Sie da.',
    ],
  },
  {
    slug: 'weihnachtsmaerkte-muenchen',
    title: 'Weihnachtsmärkte München 2026',
    date: 'Ende November — 23.12.2026',
    city: 'München',
    text: 'Christkindlmarkt am Marienplatz und Winter-Tollwood auf der Theresienwiese – Transfers und Gästebetreuung rund um die Münchner Weihnachtsmärkte.',
    image: 'images/christkindlmarkt-muenchen.jpg',
    body: [
      'Ab Ende November verwandeln der Christkindlmarkt am Marienplatz und das Winter-Tollwood auf der Theresienwiese (bis 23.12.) die Innenstadt und die Theresienwiese in belebte Weihnachtsziele – mit entsprechend dichtem Verkehr und ausgebuchten Parkplätzen.',
      'Für Firmenweihnachtsfeiern, Kundenbesuche oder private Ausflüge zu den Märkten übernehmen wir die Abholung am Hotel oder Flughafen und bringen Ihre Gäste zuverlässig zum Marienplatz oder zur Theresienwiese und wieder zurück.',
      'Wir kennen die Zufahrtswege und Sperrzeiten rund um die Innenstadt und die Theresienwiese und planen Abholzeiten so, dass Wartezeit für Ihre Gäste entfällt.',
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
