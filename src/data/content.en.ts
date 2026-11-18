export const dossier = [
  { k: 'In service since', v: '2006', n: 'Chauffeur — 20+ years for international clients' },
  { k: 'Security driver since', v: '2012', n: 'Sachsenring incl. special protection vehicles, Mercedes Guard' },
  { k: 'Availability', v: '24/7', n: 'One number, one point of contact — even at short notice' },
  { k: 'Languages', v: 'DE / EN', n: 'Assignments across Europe, Asia and Switzerland' },
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
    title: 'Limousine & Chauffeur Service',
    teaser: 'Your personal driver for the highest security standards — not an anonymous fleet.',
    image: 'images/s01-chauffeurservice.png',
    body: [
      'I have worked as a chauffeur since 2006, and as a trained security driver since 2012. My training includes multi-day advanced driving courses at the Sachsenring driving safety centre – including training for special protection vehicles – as well as the Mercedes Guard programme.',
      'Over many years I have safely accompanied executives, delegations, private clients and international guests – including at the Munich Security Conference and on assignments for government delegations at home and abroad.',
    ],
    points: [
      'Security drives and transfers',
      'Chauffeur service for executives and delegations',
      'Roadshows and multi-day assignments',
      'Airport and other transfers',
      'Hourly bookings',
      'Weddings and special occasions',
      'Event and conference support',
    ],
  },
  {
    code: 'S-02',
    slug: 'flughafentransfer',
    title: 'Airport Transfer',
    teaser: 'Exclusive transfers to and from all national and international airports.',
    image: 'images/s02-flughafentransfer.png',
    body: [
      'Every journey requires expertise. Arrival and departure times are monitored continuously, and delays or rebookings are handled without you having to ask.',
      'A welcome in the arrivals hall, help with your luggage, and a vehicle already waiting when you walk through the door.',
    ],
    points: ['Real-time flight monitoring', 'Meet & greet in the arrivals hall', 'Waiting time included', 'Fixed prices, no surcharges'],
  },
  {
    code: 'S-03',
    slug: 'sicherheitsdienst',
    title: 'Security Service on Request',
    teaser: 'Armed and unarmed professional security solutions for sensitive assignments.',
    image: 'images/s03-sicherheitsdienst.png',
    body: [
      'Security without compromise: for high-risk and sensitive occasions we provide trained personnel, matched to the situation, route and protocol.',
      'This is based on the expertise and instruction certificate required under §34a of the German Trade Regulation Act (GewO), together with many years of practical experience with government delegations and major events.',
    ],
    points: ['Personal protection escort', 'Route and situation assessment', 'Special protection vehicles on request', 'Coordination with protocol offices and authorities'],
  },
  {
    code: 'S-04',
    slug: 'gruppen',
    title: 'Group Travel & Transport',
    teaser: "Group transport isn't just transportation — it's coordination.",
    image: 'images/s04-gruppenreisen.png',
    body: [
      'Congresses, roadshows and large-scale events often mean moving many guests at the same time. We plan the sequence, vehicle mix and handover points in advance.',
      'From a single vehicle to a multi-car fleet with Sprinters and coaches – dispatched from a single point of contact.',
    ],
    points: ['Fleet and shuttle planning', 'Sprinters and coaches on request', 'Dedicated on-site operations lead', 'Name lists and time slots'],
  },
  {
    code: 'S-05',
    slug: 'reisemanagement',
    title: 'Travel Management',
    teaser: 'Travel is a managed process: planning, coordination and timing.',
    image: 'images/s05-reisemanagement.png',
    body: [
      'The travel management service is built on a holistic approach that covers every phase of a business or private trip – from the first enquiry to the return journey.',
      'All transport needs on land, in the air and on water are handled together.',
    ],
    points: ['Route and schedule planning', 'Hotel and appointment coordination', 'Jet, helicopter and yacht arrangement', 'One point of contact for the entire trip'],
  },
  {
    code: 'S-06',
    slug: 'host-hostessenservices',
    title: 'Host & Hostess Services',
    teaser: 'Professional representation at the first point of contact.',
    image: 'images/s06-host-hostessen.png',
    body: [
      'Personal assistance for travel, appointments and special requests – at the airport, the trade fair stand or the hotel.',
      'Multilingual staff, matched to the occasion and the guest profile.',
    ],
    points: ['Reception and guest care', 'Trade fair and conference support', 'Multilingual staff', 'Personal on-site assistance'],
  },
  {
    code: 'S-07',
    slug: 'concierge-und-persoenliche-assistenz',
    title: 'Concierge & Personal Assistance',
    teaser: 'Personal support for travel, appointments, guests and special requests.',
    image: 'images/s07-concierge-assistenz.png',
    body: [
      "A professional trip doesn't end at the car door. On request, BCO also helps coordinate hotels, appointments, restaurants, events and individual travel plans.",
      'One point of contact keeps track of everything and aligns chauffeur service, transfers, hosts, security requirements and other service providers with one another.',
    ],
    points: [
      'Personal travel assistance',
      'Hotel and restaurant coordination',
      'Organising appointments and transfers',
      'Guest care and VIP handling',
      'Event coordination',
      'Yacht, jet and helicopter enquiries',
      'Individual special requests',
    ],
  },
  {
    code: 'S-08',
    slug: 'vip-meet-and-greet',
    title: 'VIP Meet & Greet',
    teaser: 'Personal welcome right at the aircraft or gate — discreet and without waiting.',
    image: 'images/s08-vip-meet-and-greet.png',
    body: [
      'For guests who shouldn\'t lose time at the terminal: a welcome directly at the aircraft door or gate, escort through customs and security, and handover to the waiting chauffeur.',
      'Coordinated with the airline and airport so arrival and onward travel flow together seamlessly.',
    ],
    points: ['Welcome at the aircraft or gate', 'Escort through customs and checks', 'Luggage handling', 'Seamless handover to the chauffeur'],
  },
]

export const solutions = [
  { title: 'Business Travel', text: 'Recurring corporate journeys with fixed terms and a single point of contact.' },
  { title: 'Global Event & Organisation Solutions', text: 'Mobility concepts for congresses, festivals and international organisations.' },
  { title: 'Roadshow Management', text: 'Multi-day support across cities and borders, scheduled without gaps.' },
  { title: 'Business Travel & Executive Travel', text: 'Journeys for board members and executives, with discretion as standard.' },
  { title: 'VIP & Protocol Solutions', text: 'Coordination with protocol offices, security services and event organisers.' },
  { title: 'Integrated Mobility & Operations Solutions', text: 'Transport, personnel and technology run as a single managed system.' },
  { title: 'VIP Security & Risk Management', text: 'Situation assessment, route planning and trained security personnel.' },
  { title: 'Private Travel & Concierge Management', text: 'Individually planned trips with personal assistance, chauffeur service and ongoing coordination.' },
]

export const fleet = [
  { name: 'Mercedes-Benz E-Class', seats: 'Up to 3 passengers', text: 'For business journeys and elegant transfers – rear-seat comfort, discretion and a smooth ride through the city.' },
  { name: 'Mercedes-Benz S-Class', seats: 'Up to 3 passengers', text: 'The executive limousine for airport transfers, confidential meetings and representative journeys.' },
  { name: 'Mercedes-Benz V-Class', seats: 'Up to 6 passengers', text: 'For groups, luggage and multi-day assignments, without compromising on a comfortable arrival.' },
]

export const onDemand = ['Mercedes-Maybach', 'Mercedes G-Class', 'Range Rover', 'Rolls-Royce', 'Bentley', 'Mercedes Sprinter', 'Coaches', 'Special protection vehicles']

export const regions = ['Munich', 'Nuremberg', 'Stuttgart', 'Frankfurt', 'Berlin', 'Hamburg', 'Düsseldorf', 'Salzburg']
export const worldwide = ['Monaco', 'St. Tropez', 'Courchevel', 'Davos', 'London', 'Milan', 'Vienna', 'Zurich']

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
    title: 'Ski Season 2026/27 – From Munich Straight to the Slopes',
    date: 'From Fri, 27 Nov 2026',
    city: 'Munich · Alps',
    text: 'The ski season begins: individual or group transfers from Munich straight to the ski resorts of Bavaria, Tyrol and Switzerland.',
    image: 'images/mercedes-g-klasse-hotel.png',
    body: [
      'The ski season begins: the Zugspitze opens for winter on 27 November 2026, followed by Sudelfeld on 28 November, SkiWelt Wilder Kaiser-Brixental on 5 December and Garmisch-Classic in mid-December. In Kitzbühel and on the Tyrolean glaciers, the lifts are already running.',
      'From Munich straight to the slopes – as an individual transfer in a comfortable SUV or as a group transfer in a van or Sprinter for family, friends or your company team. We pick you up at home, at your hotel or at the airport and get you and your ski and snowboard gear safely to your destination.',
      'Our vehicles are fully equipped for winter, and our drivers are experienced with snow, ice and mountain passes. Whether a day trip to Spitzingsee, a weekend in Kitzbühel or a longer stay in Lech, St. Moritz or Courchevel – we are here for you.',
    ],
  },
  {
    slug: 'hahnenkamm-rennen-kitzbuehel',
    title: 'Hahnenkamm Races Kitzbühel 2027',
    date: 'Fri, 22 – Sun, 24 Jan 2027',
    city: 'Kitzbühel',
    text: 'The 87th Hahnenkamm Races on the Streif – transfers from Munich to Kitzbühel and back for guests, VIPs and corporate groups.',
    image: 'images/range-rover-hotel.png',
    body: [
      'From 18 to 24 January 2027, Kitzbühel becomes the meeting point of alpine skiing: the 87th Hahnenkamm Races feature the Super-G on Friday (22 Jan), the legendary downhill on the Streif on Saturday (23 Jan) and the slalom on Sunday (24 Jan).',
      'On race days, access roads are closed, parking is scarce and the roads around Kitzbühel are congested. We handle the transfer from Munich, the airport or your hotel straight to Kitzbühel, coordinate arrival and pick-up times with VIP areas and hospitality programmes, and bring you safely back after the race.',
      'For corporate groups and delegations we dispatch several vehicles at once – as individual or group transfers, and over several days on request.',
    ],
  },
  {
    slug: 'ski-weltcup-garmisch-partenkirchen',
    title: 'Ski World Cup Garmisch-Partenkirchen 2027',
    date: 'Sat, 20 Feb & Sat, 27 Feb 2027',
    city: 'Garmisch-Partenkirchen',
    text: "Men's and women's World Cup downhills on the Kandahar – transfers from Munich to Garmisch-Partenkirchen for guests and sponsors.",
    image: 'images/v-klasse-flotte-warm.png',
    body: [
      "According to the provisional FIS calendar, the Alpine Ski World Cup returns to Garmisch-Partenkirchen in February 2027: the men's downhill on the Kandahar is scheduled for 20 February, the women's downhill for 27 February.",
      'The drive from Munich takes around an hour – but often considerably longer on race days. We bring you and your guests from your hotel, office or the airport straight to the finish area, know the access routes and closure times, and reliably pick you up again after the race.',
      'Whether an individual transfer or a group transfer for sponsors, clients and staff – we are here for you.',
    ],
  },
  {
    slug: 'weihnachtsmaerkte-muenchen',
    title: 'Munich Christmas Markets 2026',
    date: 'Late Nov — 23 Dec 2026',
    city: 'Munich',
    text: "The Christkindlmarkt at Marienplatz and Winter Tollwood at Theresienwiese – transfers and guest care around Munich's Christmas markets.",
    image: 'images/christkindlmarkt-muenchen.jpg',
    body: [
      "From late November, the Christkindlmarkt at Marienplatz and Winter Tollwood at Theresienwiese (until 23 Dec) turn the city centre and the Theresienwiese into bustling Christmas destinations – with correspondingly dense traffic and fully booked parking.",
      'For corporate Christmas parties, client visits or private trips to the markets, we handle pick-up from your hotel or the airport and get your guests reliably to Marienplatz or the Theresienwiese and back.',
      'We know the access routes and closure times around the city centre and the Theresienwiese and plan pick-up times so your guests never have to wait.',
    ],
  },
]

export const qualifications = [
  ['2006', 'Chauffeur — continuously active ever since'],
  ['2012', 'Trained security driver'],
  ['Training', 'Multi-day advanced driving course at Sachsenring, incl. special protection vehicles'],
  ['Programme', 'Mercedes Guard programme'],
  ['First aid', 'Current first-aid certification'],
  ['Assignments', 'WEF Davos, Munich Security Conference, government delegations'],
  ['Regions', 'Europe, Asia and Switzerland'],
  ['Languages', 'German, English'],
]

export const faqs = [
  { q: 'What chauffeur services do you offer in Munich?', a: 'Security drives and transfers, chauffeur service for executives and delegations, roadshows and multi-day assignments, airport transfers, hourly bookings, weddings, and event and conference support.' },
  { q: 'Which cities do you operate in?', a: 'We operate from Munich and are at our clients’ service throughout Germany. International journeys and transfers – such as to Salzburg, Zurich, Vienna, Milan, Davos, Courchevel, Monaco, or St. Tropez – are provided either with our own vehicles or through our vetted partner network, depending on the assignment.' },
  { q: 'Do I always get the same driver?', a: "Yes — that's the core of the offering. Instead of an anonymous vehicle fleet, you get one personal, dedicated driver: short lines of communication, clear arrangements, trust." },
  { q: 'Is the service available around the clock?', a: 'Yes. We take enquiries, changes and short-notice requests 24 hours a day, by phone or WhatsApp.' },
  { q: "What's the difference between a security driver and a chauffeur?", a: 'A security driver has completed multi-day specialized training in high-level vehicle dynamics. In addition to a professional chauffeur presence, they master emergency braking with evasive maneuvers, skid recovery, control during oversteer or understeer, and precise vehicle handling in extreme weather such as aquaplaning and black ice.' },
  { q: "Can I book vehicles that aren't part of the fleet?", a: 'Yes. We can provide a Mercedes-Maybach, Mercedes G-Class, Range Rover, Rolls-Royce, Bentley, Sprinter or coach on request. Please allow some lead time for this.' },
  { q: 'How do I book?', a: "Call us, message us on WhatsApp, or send the enquiry form. You'll receive a binding confirmation with driver, vehicle and time slot." },
]
