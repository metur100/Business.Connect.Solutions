// Same order as the `onDemand` list in content.de/en.ts.
export type OnDemandImage = { src: string; alt: string }

export const onDemandImages: OnDemandImage[] = [
  {
    src: `${import.meta.env.BASE_URL}images/mercedes-maybach-hotel.png`,
    alt: 'Mercedes-Maybach als Chauffeurfahrzeug auf Anfrage',
  },
  {
    src: `${import.meta.env.BASE_URL}images/mercedes-g-klasse-hotel.png`,
    alt: 'Mercedes-Benz G-Klasse als Chauffeurfahrzeug auf Anfrage',
  },
  {
    src: `${import.meta.env.BASE_URL}images/range-rover-hotel.png`,
    alt: 'Range Rover als Chauffeurfahrzeug auf Anfrage',
  },
  {
    src: `${import.meta.env.BASE_URL}images/rolls-royce-hotel.png`,
    alt: 'Rolls-Royce als Chauffeurfahrzeug auf Anfrage',
  },
  {
    src: `${import.meta.env.BASE_URL}images/bentley-hotel.png`,
    alt: 'Bentley als Chauffeurfahrzeug auf Anfrage',
  },
  {
    src: `${import.meta.env.BASE_URL}images/mercedes-sprinter-hotel.png`,
    alt: 'Mercedes-Benz Sprinter für Gruppentransfers auf Anfrage',
  },
  {
    src: `${import.meta.env.BASE_URL}images/reisebus-hotel.png`,
    alt: 'Reisebus für Gruppenreisen auf Anfrage',
  },
  {
    src: `${import.meta.env.BASE_URL}images/sonderschutzfahrzeug-hotel.png`,
    alt: 'Sonderschutzfahrzeug auf Anfrage',
  },
]
