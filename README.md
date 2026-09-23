# Für dich

Statische 2-Seiten-Website (HTML/CSS/JS, keine Frameworks/Build-Schritt).

- `index.html` — die Nachricht mit den Countern und der Frage
- `galerie.html` — Fotogalerie (aktuell 15 Platzhalterbilder von picsum.photos, später durch echte Fotos ersetzen)
- `style.css`, `script.js` — Styles & Logik

## Auf GitHub Pages veröffentlichen
1. Diese Dateien in ein Repo pushen.
2. Repo-Einstellungen → **Pages** → Branch `main`, Ordner `/ (root)` auswählen.
3. Die Seite ist danach unter `https://<username>.github.io/<repo>/` erreichbar.

## Eigene Fotos einfügen
In `galerie.html` jedes `<img src="https://picsum.photos/seed/...">` durch den Pfad zu einem eigenen Bild ersetzen, z. B. `img/foto1.jpg`, und die Bilder in einen `img/`-Ordner legen.
