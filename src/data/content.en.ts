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
  body: string[]
  points: string[]
}

export const services: Service[] = [
  {
    code: 'S-01',
    slug: 'limousine-chauffeurservice',
    title: 'Limousine & Chauffeur Service',
    teaser: 'Your personal driver for the highest security standards — not an anonymous fleet.',
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
    body: [
      'Every journey requires expertise. Arrival and departure times are monitored continuously, and delays or rebookings are handled without you having to ask.',
      'A welcome in the arrivals hall, help with your luggage, and a vehicle already waiting when you walk through the door.',
    ],
    points: ['Real-time flight monitoring', 'Meet & greet in the arrivals hall', 'Waiting time included', 'Fixed prices, no surcharges'],
  },
  {
    code: 'S-03',
    slug: 'sicherheitsdienst',
    title: 'Security Service',
    teaser: 'Armed and unarmed professional security solutions for sensitive assignments.',
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
    body: [
      'For guests who shouldn\'t lose time at the terminal: a welcome directly at the aircraft door or gate, escort through customs and security, and handover to the waiting chauffeur.',
      'Coordinated with the airline and airport so arrival and onward travel flow together seamlessly.',
    ],
    points: ['Welcome at the aircraft or gate', 'Escort through customs and checks', 'Luggage handling', 'Seamless handover to the chauffeur'],
  },
]

export const solutions = [
  { title: 'Solutions for Business Travel', text: 'Recurring corporate journeys with fixed terms and a single point of contact.' },
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
    slug: 'nfl-munich-game',
    title: 'NFL Munich Game 2026',
    date: 'Sun, 15 Nov 2026 · 3:30 pm',
    city: 'Munich',
    text: 'Patriots vs. Lions at the Allianz Arena – stadium transfers and hospitality shuttles for guests and sponsors.',
    image: 'images/nfl.jpeg',
    body: [
      'For the third NFL game in Munich, the Allianz Arena will fill with international guests on 15 November 2026 – kick-off is at 3:30 pm, when the New England Patriots take on the Detroit Lions.',
      'Around a matchday of this size, parking is scarce, roads are closed and taxi ranks are overwhelmed. We handle the transfer from your hotel or the airport straight to the stadium, pick you up again after the final whistle, and coordinate arrival times with hospitality programmes and VIP areas.',
      'For corporate groups and sponsor delegations we dispatch several vehicles at once, including a dedicated on-site operations lead.',
    ],
  },
  {
    slug: 'oktoberfest-muenchen',
    title: 'Oktoberfest Munich 2026',
    date: '19 Sep — 4 Oct 2026',
    city: 'Munich',
    text: 'Tent transfers, corporate evenings and guest care – with drivers who know the road closures around the Theresienwiese.',
    image: 'images/oktoberfest.jpeg',
    body: [
      "For two weeks, the Theresienwiese turns into the world's biggest folk festival stage – and with it, traffic around the Wiesn changes too: wide-ranging road closures, overwhelmed taxi ranks and fully booked hotels.",
      'A single tent dinner often only needs one vehicle. But if a company is picking up several guests from different hotels at the same time, that quickly becomes a small fleet — which is exactly what we plan in advance: vehicle mix, sequence and handover points.',
      'We know the access routes and closure times around the Theresienwiese and plan pick-up times so your guests never have to wait.',
    ],
  },
  {
    slug: 'expo-real-muenchen',
    title: 'Expo Real 2026',
    date: '5–7 Oct 2026',
    city: 'Munich',
    text: 'The international trade fair for property and investment – exhibitor and delegation logistics between the fairground, hotels and airport.',
    image: 'images/expo.jpeg',
    body: [
      'Every October, Expo Real brings the international property and investment industry to the Messe München fairground – with a packed schedule of receptions, stand appointments and networking evenings across the city.',
      'Exhibitors and delegations often move between hotel, exhibition hall and evening event on a tight half-hour schedule. We plan this timing in advance and make sure the driver is on site before each appointment ends.',
      'For companies sending several stand visitors, we also dispatch multiple vehicles in parallel, with one fixed point of contact for the whole trade fair week.',
    ],
  },
  {
    slug: 'electronica-muenchen',
    title: 'electronica Munich 2026',
    date: '10–13 Nov 2026',
    city: 'Munich',
    text: 'The world\'s leading electronics trade fair – group shuttles and stand support for international delegations.',
    image: 'images/electronica.jpeg',
    body: [
      'electronica is one of the largest trade fairs in the electronics industry worldwide, drawing exhibitors and delegations from every continent to Munich.',
      'Four fair days mean a dense schedule between airport arrival, hotel, exhibition stand and evening events – often for groups arriving at staggered times. We coordinate pick-up times around each arrival and provide several vehicles at once when needed.',
      'On request, we also take care of arriving guests from start to finish — from the welcome at the airport through to hand-off at the exhibition stand.',
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
  { q: 'Which cities do you operate in?', a: "We're based in Munich. We drive throughout Germany and Europe — regularly to Monaco, St. Tropez, Courchevel, Davos, Milan, Vienna and Zurich. Assignments in Asia and Switzerland are also part of our experience." },
  { q: 'Do I always get the same driver?', a: "Yes — that's the core of the offering. Instead of an anonymous vehicle fleet, you get one personal, dedicated driver: short lines of communication, clear arrangements, trust." },
  { q: 'Is the service available around the clock?', a: 'Yes. We take enquiries, changes and short-notice requests 24 hours a day, by phone or WhatsApp.' },
  { q: "What's the difference between a security driver and a chauffeur?", a: 'A security driver is additionally trained in defensive and evasive driving, route assessment and handling special protection vehicles, based on training at Sachsenring and the Mercedes Guard programme.' },
  { q: "Can I book vehicles that aren't part of the fleet?", a: 'Yes. We can provide a Mercedes-Maybach, Mercedes G-Class, Range Rover, Rolls-Royce, Bentley, Sprinter or coach on request. Please allow some lead time for this.' },
  { q: 'How do I book?', a: "Call us, message us on WhatsApp, or send the enquiry form. You'll receive a binding confirmation with driver, vehicle and time slot." },
]
