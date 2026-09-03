# BCO Solutions - Website (React + Vite + TypeScript)

Chauffeur- und Sicherheitsfahrerservice, Muenchen. Neuentwicklung auf Basis der Inhalte von
bcosolution.com und der im WhatsApp-Verlauf abgestimmten Wuensche.

## Starten

    npm i
    npm run dev

Build: `npm run build` -> `dist/`. Vorschau: `npm run preview`.

## Struktur

    src/
      data/content.ts        <- ALLE Texte, Leistungen, Flotte, Events, FAQ an einer Stelle
      styles/global.css      <- Design-Tokens (Farben, Typo, Abstaende) und Styles
      components/            <- Header, Footer, Kontaktleiste, FAQ, CTA, Scroll-Reveal
      pages/                 <- Start, Leistungen (+Detail), Fahrer, Flotte, Anlaesse, Kontakt, 404

Texte aendern: nur `src/data/content.ts` anfassen. Farben/Schriften: `:root` in `global.css`.

## Was noch eingesetzt werden muss

| Datei | Zweck |
| --- | --- |
| `public/hero.mp4` | Hero-Video (Wunsch von Murat: "Video mit Beginn der Seite"), 8-15 s, ohne Ton |
| `public/hero-poster.jpg` | Standbild, wird angezeigt bis das Video laedt |
| Fahrzeugbilder | In `Fleet.tsx` / `Home.tsx` den Platzhalter `.fleet__ph` durch `<img>` ersetzen |
| Rechtstexte | `/impressum`, `/datenschutz`, `/agb` |

Ohne diese Dateien laeuft die Seite trotzdem: das Video faellt sauber auf den dunklen
Hintergrund zurueck.

## Umgesetzte Wuensche aus dem Chat

- Video am Seitenanfang
- Feste untere Leiste: Telefon, WhatsApp, E-Mail, Anfragen
- "Noch Fragen?" mit 24/7-Hinweis am Seitenende
- FAQ-Akkordeon
- "On demand"-Block: Maybach, Range Rover, Rolls-Royce, Bentley, Sprinter, Reisebusse
- Fahrzeugkarten E-/S-/V-Klasse mit Passagierzahl
- Orte-Leisten "In Muenchen und Deutschland ..." / "... und rund um die Welt",
  inkl. Monaco und St. Tropez statt Megeve
- Muenchner Veranstaltungskalender: Oktoberfest, MSC, internationale Messen
- Auflistung der Chauffeurleistungen als Chips im Hero
- Murats Beschreibung (seit 2006 Chauffeur, seit 2012 Sicherheitsfahrer, Sachsenring,
  Mercedes Guard, Paragraf 34a, WEF/MSC) auf der Seite "Ihr Fahrer"
- Logo im Stil der E-Mail-Signatur (BUSINESS | CONNECT / SOLUTIONS) als CSS-Marke -
  skaliert scharf und laesst sich fuer E-Mails identisch nachbauen
- Keine Google-Bewertungen (bewusst weggelassen, wie in der Sprachnachricht gewuenscht)

## SEO und KI-Sichtbarkeit

- JSON-LD (`LimousineService`) in `index.html`: Name, Telefon, Adresse, Oeffnungszeiten 24/7,
  Sprachen, Einsatzgebiete. Daraus zitieren Google und KI-Assistenten.
- `robots.txt` erlaubt GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot und Google-Extended
  ausdruecklich - ohne diese Freigabe taucht die Seite in KI-Antworten nicht auf.
- FAQ in Frage-Antwort-Form: genau das Format, das KI-Assistenten uebernehmen.
- `sitemap.xml`, sprechende deutsche URLs, semantische Ueberschriftenhierarchie.
- Empfehlung: pro Stadt und pro Anlass eine eigene Unterseite (z. B. "Chauffeur Oktoberfest").
  Die Datenstruktur in `content.ts` ist dafuer vorbereitet.
