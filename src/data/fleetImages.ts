import type { CSSProperties } from 'react'

// Same order as the `fleet` array in content.de/en.ts.
// The V-Klasse shots are portrait phone photos: a tuned crop shows the whole van
// while still filling the card, where `contain` would letterbox it to a thin strip.
export type FleetImage = { src: string; alt: string; style?: CSSProperties }

export const fleetImages: FleetImage[] = [
  {
    src: `${import.meta.env.BASE_URL}images/bco-fleet-e-class.png`,
    alt: 'Schwarze Mercedes-Benz E-Klasse für geschäftliche Chauffeurfahrten in München',
  },
  {
    src: `${import.meta.env.BASE_URL}images/img12.jpeg`,
    alt: 'Die für BCO Solutions bestellte Mercedes-Benz S-Klasse',
  },
  {
    src: `${import.meta.env.BASE_URL}images/img4.jpeg`,
    alt: 'Die eigene Mercedes-Benz V-Klasse von BCO Solutions',
    style: { objectFit: 'cover', objectPosition: 'center 54%', padding: 0 },
  },
]
