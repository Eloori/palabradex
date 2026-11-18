# Palabradex

**Spanisch lernen mit Kurzgeschichten.** Ein kostenloser Prototyp von [Eloori Interactive](mailto:contact@eloori-interactive.com).

Palabradex ist eine Lese-App für Spanisch: Man liest spannende Kurzgeschichten auf dem passenden Niveau (A1 bis C2), fährt mit der Maus über Wörter (oder tippt auf dem Tablet), sieht die Übersetzung und sammelt jedes neue Wort in seinem **Wortdex**.

## Die Methode

**Lies dich fliessend. Palabradex verbindet eine Geschichte, die man weiterlesen will, mit fünf gut belegten Prinzipien der Sprachlernforschung.**

| Prinzip | Forschung | In Palabradex |
|---|---|---|
| Lesen mit 95 bis 98 % bekannten Wörtern | Hu & Nation 2000; Schmitt, Jiang & Grabe 2011 | Lesbarkeitsanzeige pro Kapitel, Tagebucheinträge (Diario de Mia) bereiten schwierige Kapitel vor |
| Rund 10 Begegnungen pro Wort | Webb 2007; Pellicer-Sánchez & Schmitt 2010; Webb & Chang 2015 | Wiederkehrender Wortschatz über 60 Kapitel, Begegnungszähler auf jeder Karte |
| Verteiltes Wiederholen | Cepeda et al. 2006 | Karteikasten mit 6 Fächern (1, 3, 7, 16, 35, 90 Tage), 5 Schlüsselwörter nach jedem Kapitel |
| Abrufen statt Wiederlesen | Roediger & Karpicke 2006 | Quiz pro Kapitel, Karteikarten, bei gefestigten Wörtern freie Eingabe |
| Lesen und Hören | Brown, Waring & Donkaewbua 2008; Webb & Chang 2012 | Vorlesen jedes Wortes und jeder Seite |

Lernstand pro Wort: Entdeckt, Vertraut, Gefestigt, Gemeistert (10 Begegnungen und 4 erfolgreiche Wiederholungen).

Palabradex ist ein Lernwerkzeug und ersetzt keinen Sprachkurs. Die Prinzipien sind gut erforscht, die App selbst wurde nicht in einer eigenen Studie getestet.

### Historia de España
Ein zweiter Modus pro Niveau: Joan erzählt Mia jeden Dienstag ein Stück spanische Geschichte, im Präsens, wie man Geschichte auf Spanisch oft erzählt. A1 Teil 1 (20 Kapitel) reicht von Atapuerca und Altamira über Iberer, Kelten, Phönizier, Griechen und Karthago bis zu den Römern und Barcino. Freigeschaltet nach Kapitel 10 der Story.

### Fangen
Häufige Wörter fängt man mit einem Tippen. Seltene Wörter (Raro, Épico) werden beim Lesen nur gesichtet und am Kapitelende in der Fangzeit mit einem Minispiel gefangen: Bedeutung wählen, Buchstaben ordnen oder aus dem Gedächtnis schreiben. Fällige Wörter aus dem Karteikasten sind im Text markiert und lassen sich direkt beim Lesen wiederholen.

## Features

- **60 Kapitel auf Niveau A1**, eine durchgehende Geschichte in Barcelona, rund 800 Wörter
- **Reader wie ein E-Reader**: Seiten blättern per Wischen, Tippen, Pfeiltasten oder Trackpad
- **Wörter sammeln** per Hover oder Tippen, mit Übersetzung auf Deutsch oder Englisch
- **Sammelkarten** im Trading-Card-Stil mit Seltenheit, Varianten (Holo, Oro, Legendaria) und Fun Facts
- **Verbformen freischalten**, sobald man sie in einer Geschichte findet
- **Quiz** nach jedem Kapitel, **Karteikarten-Training** und **Quests**
- **XP, Level, Truhen** und freischaltbare Lesethemen und Schriften
- **Colecciones**: 11 Themenseiten mit festen Karten, Bonusszenen aus Sicht anderer Figuren, Goldseiten und Sammlerrang
- **Puntos** zum gezielten Kaufen fehlender Spezialkarten
- **PDF Export** für Colecciones und das persönliche Sammelalbum, Teilen von Karten und Seiten als Bild
- Installierbar als Web App (PWA) auf Mac, iPhone und Android, funktioniert offline
- Läuft komplett im Browser, Fortschritt wird automatisch lokal gespeichert (Export und Import für Gerätewechsel)

## Technik

Eine einzige statische Seite (`index.html`) ohne Build-Schritt, ohne Tracking, ohne externe Anfragen. Schriften liegen lokal in `fonts/` (SIL Open Font License), PDF Erzeugung mit [jsPDF](https://github.com/parallax/jsPDF) lokal in `vendor/` (MIT License).

Lokal testen: `index.html` im Browser öffnen oder `python3 -m http.server` im Ordner starten.

## Rechtliches

- [Legal Notice](legal.html)
- [Privacy Policy](privacy.html)

© 2026 Elija Zemp, Eloori Interactive. Die Nutzung zum Lernen ist kostenlos. Alle Rechte vorbehalten.
Geschichten und Wortschatz wurden mit Unterstützung von KI erstellt und können Fehler enthalten.
