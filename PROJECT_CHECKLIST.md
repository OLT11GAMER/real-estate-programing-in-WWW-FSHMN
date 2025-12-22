# Lista Kontrolluese për Projektin Semestral
## Krijimi dhe Zhvillimi i një Uebsajti Funksional

**Lënda:** Programimi në WWW  
**Universiteti i Prishtinës - FSHMN | Dept. Matematikë - Programi: Shkencë Kompjuterike**  
**©Prof. Asst. Dr. Korab Rrmoku**

---

## Informacioni i Projektit

**Grupi:** nr. ________ me anëtarët:
1. ________
2. ________
3. ________
4. ________
5. ________

**Linku i projektit të hostuar online:** ________

### Përdorimi i Framework-ave

☐ **Kemi përdorur Framework (korniza pune) si ndihmesë për realizimin e projektit.**

**Nëse po, cilën/cilat:**

- **Framework:** Swiper.js  
  **Përdorur për:** Karusel/Slider për shfaqjen e pronave në seksionin "Pronat më të kërkuara"  
  **Vendndodhja:** `index.html` (linjat 129-202), `assets/js/main.js` (linjat 22-33)

- **Framework:** Three.js  
  **Përdorur për:** Rendering dhe shfaqja e modeleve 3D të rezidencave  
  **Vendndodhja:** `assets/js/threejs-model.js`, `index.html` (linjat 795-800)

- **Framework:** React (via CDN)  
  **Përdorur për:** Komponent interaktiv për filtrimin e pronave me state management  
  **Vendndodhja:** `assets/js/react-components.js`, `index.html` (linjat 789-792, 807)

- **Framework:** Babel Standalone  
  **Përdorur për:** Transformimi i JSX në JavaScript për komponentët React  
  **Vendndodhja:** `index.html` (linja 792)

### Përdorimi i GenAI Platformave

☐ **Kemi përdorur GenAI platformat si ndihmesë për realizimin e projektit.**

**Nëse po, cilën/cilat:**

- **GenAI platforma:** Cursor AI / GitHub Copilot  
  **Përdorur për:** Asistencë në shkrimin e kodit, debugging, dhe implementimin e feature-ave komplekse si integrimi i React në projekt vanilla, implementimi i Three.js për modele 3D, dhe optimizimi i kodit JavaScript

- **GenAI platforma:** ChatGPT / Claude  
  **Përdorur për:** Konsultime për best practices në HTML5, CSS3, JavaScript ES6+, dhe React hooks, si dhe për strukturimin e dokumentacionit

### Deklarim

☐ **Deklarojmë që të dhënat janë të sakta për projektin tonë dhe Jemi të vetëdijshëm që edhe një (1) deklarim i vetëm i pasaktë, anulon projektin e lëndës në tërësi.**

**Data:** ________  
**Nënshkrimet:**  
1. ________  
2. ________  
3. ________  

---

## Lista e Plotë e Kontrollimit

### 1. General Project & Structure (Ch. 1–2, 3)

#### ☑ 1. Project organized into a clear folder structure
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:**
- `/assets/css/` - Stylesheets
- `/assets/js/` - JavaScript files
- `/assets/img/` - Images and 3D models
- `/css/` - Additional CSS files

**Dokumentim:** Struktura e projektit është e organizuar në mënyrë të qartë me folderë të ndara për CSS, JavaScript, dhe imazhe.

---

#### ☑ 2. All pages use UTF-8 and set it explicitly
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `index.html` (linja 4)  
**Kodi:**
```html
<meta charset="UTF-8" />
```

---

#### ☑ 3. Pages have meaningful `<title>` values
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `index.html` (linja 25)  
**Kodi:**
```html
<title>Faqe Interneti për Real Estate - H&SH</title>
```

---

#### ☑ 4. Consistent site navigation on all pages
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `index.html` (linjat 29-67)  
**Përshkrim:** Navigation menu është konsistente në të gjithë faqen me linke për: Ballina, Rezidencat, Vlerat tona, dhe Kontakt.

---

#### ☑ 5. Relative and absolute URLs used appropriately
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** 
- Relative URLs: `assets/css/styles.css`, `assets/img/home.jpg` (përdoret kudo)
- Absolute URLs: `https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css`, `https://cdn.jsdelivr.net/...` (për CDN resources)

---

#### ☑ 6. File names, URLs, and folders avoid spaces and unusual characters
**Status:** ✅ **IMPLEMENTED**  
**Përshkrim:** Të gjitha emrat e skedarëve përdorin underscore ose dash, pa hapësira.

---

#### ☑ 7. Evidence that student understands client–server model
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/js/main.js` (linjat 1-8, 195-245)  
**Kodi:**
```javascript
/* 
 * CLIENT-SERVER MODEL UNDERSTANDING:
 * This code runs on the CLIENT side (browser). When the user scrolls, the browser
 * (client) sends scroll events to our JavaScript code. The server doesn't process
 * these events - they are handled entirely in the browser. This demonstrates the
 * client-server separation: client handles UI interactions, server handles data
 * requests/responses via HTTP/HTTPS protocols.
 */
```
**Dokumentim:** Komente të detajuara në kod që shpjegojnë client-server model, përdorimi i `fetch()` API për HTTP requests, dhe localStorage për client-side storage.

---

#### ☑ 8. Use of HTTP/HTTPS correctly in links where relevant
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `index.html` (linjat 13-21, 447-585, 745-772)  
**Përshkrim:** Të gjitha linket e jashtme përdorin `https://` dhe përfshijnë `rel="noopener noreferrer"` për siguri.

---

### 2. HTML Core Content & Semantics (Ch. 3)

#### ☑ 9. Correct use of `<!DOCTYPE html>`
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `index.html` (linja 1)

---

#### ☑ 10. `<html lang="...">` includes correct language code
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `index.html` (linja 2)  
**Kodi:**
```html
<html lang="sq">
```

---

#### ☑ 11. Proper separation of `<head>` and `<body>` sections
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `index.html` (linjat 3-26 për head, 28-809 për body)

---

#### ☑ 12. Headings used hierarchically
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `index.html` (përdoret h1, h2, h3 në mënyrë hierarkike)  
**Shembuj:**
- `h1` për titullin kryesor (linja 73)
- `h2` për seksionet (linja 128, 203, etc.)
- `h3` për nën-titullat (linja 139, 217, etc.)

---

#### ☑ 13. Paragraphs structured with `<p>` instead of repeated `<br>`
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `index.html` (përdoret `<p>` kudo, p.sh. linjat 74-77, 140-143)

---

#### ☑ 14. Ordered lists `<ol>` and unordered lists `<ul>` with `<li>` used appropriately
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:**
- `<ul>`: `index.html` (linjat 34-62 për navigation, 390-421 për footer links)
- `<ol>`: `index.html` (linjat 95-119 për home value list)

---

#### ☑ 15. Inline vs block elements used reasonably
**Status:** ✅ **IMPLEMENTED**  
**Përshkrim:** Përdorim i duhur i elementeve inline dhe block. Teksti në paragrafë përdor `<p>`, jo `<div>` të tepruar.

---

#### ☑ 16. Emphasis and importance indicated using `<em>` and `<strong>`
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `index.html` (linjat 206-209, 507, 570)  
**Shembuj:**
```html
<strong>të përkushtuar</strong>
<em>i sigurt</em>
```

---

#### ☑ 17. Internal and external links created via `<a href="...">`
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `index.html` (linjat 36-60 për internal links, 745-772 për external links)

---

#### ☑ 18. `target` and `rel` attributes used appropriately when external links open in new tabs
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `index.html` (linjat 745-772)  
**Kodi:**
```html
<a href="https://fshmn.uni-pr.edu/" target="_blank" rel="noopener noreferrer">
```

---

#### ☑ 19. Images inserted via `<img>` include meaningful alt text
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `index.html` (linjat 119, 142-144, 161-163, 180-182, 195, 280)  
**Shembuj:**
```html
<img src="assets/img/home.jpg" alt="Shtëpia kryesore" />
<img src="assets/img/popular1.jpg" alt="Rezidenca Arbëria - Apartament modern në Prishtinë" />
```

---

#### ☑ 20. Image sizing primarily controlled via CSS rather than only HTML attributes
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/css/styles.css` (linjat 84-87, 461-465)  
**Kodi:**
```css
img {
  max-width: 100%;
  height: auto;
}
```

---

#### ☑ 21. Structural semantics using elements like `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `index.html`
- `<header>`: linja 29
- `<nav>`: linja 30
- `<main>`: linja 69
- `<section>`: linjat 70, 132, 206, 273, 275, 370, 447, 589, 639
- `<article>`: linjat 131, 147, 157, 176
- `<footer>`: linja 684

---

#### ☑ 22. Use of `<figure>` and `<figcaption>` where appropriate
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `index.html` (linjat 139-145, 158-164, 177-183)  
**Kodi:**
```html
<figure>
  <img class="popular__img" src="assets/img/popular1.jpg" alt="..." />
  <figcaption>Rezidenca Arbëria - Vila moderne</figcaption>
</figure>
```

---

### 3. CSS Basics: Selectors & Styling (Ch. 4)

#### ☑ 23. External CSS linked via `<link rel="stylesheet" href="...">`
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `index.html` (linja 23)  
**Kodi:**
```html
<link rel="stylesheet" href="assets/css/styles.css" />
```

---

#### ☑ 24. Inline `style="..."` kept to a minimum
**Status:** ✅ **IMPLEMENTED**  
**Përshkrim:** Përdoret vetëm në raste të vogla (p.sh. `style="cursor: pointer"` në linjat 307, 325, 341, 359), kryesisht për JavaScript interactions.

---

#### ☑ 25. Element selectors used
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/css/styles.css` (linjat 69-74, 76-78, 80-82, 84-87)  
**Shembuj:**
```css
h1, h2, h3 { ... }
ul { ... }
a { ... }
img { ... }
```

---

#### ☑ 26. Class selectors (`.className {}`) and ID selectors (`#idName {}`) used correctly
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/css/styles.css` (përdoret gjerësisht)  
**Shembuj:**
- Class: `.container`, `.section`, `.button`, `.nav__link`
- ID: `#header`, `#scroll-up`, `#theme-button`, `#threejs-canvas`

---

#### ☑ 27. Descendant/child selectors used
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/css/styles.css`  
**Shembuj:**
```css
nav ul li { ... }
.nav__link i { ... }
.home__value-number span { ... }
```

---

#### ☑ 28. Grouping selectors used
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/css/styles.css` (linjat 69-74, 89-94)  
**Shembuj:**
```css
h1, h2, h3 { ... }
input, button { ... }
```

---

#### ☑ 29. Colors defined using hex, rgb(a), or hsl
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/css/styles.css` (linjat 4-17)  
**Kodi:**
```css
:root {
  --first-color: hsl(30, 70%, 60%);
  --title-color: hsl(30, 20%, 20%);
  --body-color: hsl(30, 20%, 95%);
}
```

---

#### ☑ 30. Text formatting properties applied
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/css/styles.css` (linjat 19-31, 61-67)  
**Përshkrim:** Përdoret `font-family`, `font-size`, `font-weight`, `line-height`, `text-align` kudo.

---

#### ☑ 31. Background styling used
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/css/styles.css` (linjat 64, 288-291, 731-735)  
**Shembuj:**
```css
background-color: var(--body-color);
background: linear-gradient(170deg, ...);
```

---

#### ☑ 32. Box model properties used correctly
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/css/styles.css` (përdoret gjerësisht)  
**Përshkrim:** `margin`, `padding`, `border` përdoren kudo për spacing dhe layout.

---

#### ☑ 33. Borders styled with style, width, and optional radius
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/css/styles.css`  
**Shembuj:**
```css
border: 2px solid var(--border-color);
border-radius: 0.5rem;
```

---

#### ☑ 34. Avoids unnecessary use of `!important`
**Status:** ✅ **IMPLEMENTED**  
**Përshkrim:** Nuk përdoret `!important` në kod.

---

#### ☑ 35. Classes preferred over IDs for styling groups of elements
**Status:** ✅ **IMPLEMENTED**  
**Përshkrim:** Përdoren kryesisht classes (`.nav__link`, `.button`, `.section`) për styling, IDs përdoren vetëm për JavaScript targeting.

---

### 4. Tables & Data Presentation (Ch. 5 – HTML 2)

#### ☑ 36. `<table>` used only for tabular data, not for page layout
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `index.html` (linjat 206-250)  
**Përshkrim:** Tabela përdoret për të shfaqur çmimet e pronave (të dhëna tabelare).

---

#### ☑ 37. Correct use of `<tr>`, `<th>`, and `<td>`
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `index.html` (linjat 218-247)

---

#### ☑ 38. Use of `<thead>`, `<tbody>`, and `<tfoot>` where appropriate
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `index.html` (linjat 217-248)  
**Kodi:**
```html
<thead>...</thead>
<tbody>...</tbody>
<tfoot>...</tfoot>
```

---

#### ☑ 39. At least one table includes a `<caption>`
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `index.html` (linja 216)  
**Kodi:**
```html
<caption>Krahasimi i çmimeve për lloje të ndryshme pronash</caption>
```

---

#### ☑ 40. Column and row headings are clearly distinguishable
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/css/styles.css` (linjat 1308-1330)  
**Përshkrim:** Headings në `<thead>` kanë styling të veçantë (background color, font-weight).

---

#### ☑ 41. Tables styled with basic CSS
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/css/styles.css` (linjat 1288-1330)  
**Përshkrim:** Tabela ka borders, padding, zebra striping (nth-child), hover effects.

---

### 5. Forms & User Input (Ch. 5 – HTML 2)

#### ☑ 42. `<form>` element includes appropriate `action` and `method`
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `index.html` (linjat 79, 447)  
**Kodi:**
```html
<form action="#" method="get" class="home__search">
<form action="#" method="post" class="contact-form__form" id="contactForm">
```

---

#### ☑ 43. `<label>` elements correctly associated with inputs via `for`/`id`
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `index.html` (linjat 81, 456-580)  
**Shembuj:**
```html
<label for="location-search">...</label>
<input id="location-search" ... />
<label for="fullname">...</label>
<input id="fullname" ... />
```

---

#### ☑ 44. Various input types used
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `index.html` (linjat 447-580)  
**Input types:**
- `text` (linja 457)
- `email` (linja 464)
- `tel` (linja 471)
- `date` (linja 477)
- `number` (linja 525)
- `search` (linja 83)
- `checkbox` (linjat 537-548)
- `radio` (linjat 552-563)

---

#### ☑ 45. At least one `<select>` with `<option>` (and optionally `<optgroup>`)
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `index.html` (linjat 507-522)  
**Kodi:**
```html
<select id="property-type" name="property-type" required>
  <optgroup label="Rezidenciale">
    <option value="">Zgjidhni...</option>
    <option value="apartment-1">Apartament 1+1</option>
    ...
  </optgroup>
  <optgroup label="Komerciale">
    ...
  </optgroup>
</select>
```

---

#### ☑ 46. At least one `<textarea>` used for multi-line input
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `index.html` (linjat 571-579)  
**Kodi:**
```html
<textarea id="message" name="message" rows="5" required ...></textarea>
```

---

#### ☑ 47. HTML5 validation attributes used
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `index.html` (linjat 83-89, 457-580)  
**Attributes:**
- `required` (linjat 88, 458, 465, 508, 553, 575)
- `min`, `max` (linjat 479-480, 530-531)
- `pattern` (linjat 460, 473)
- `maxlength` (linjat 461, 577)
- `minlength` (linja 576)

---

#### ☑ 48. Fields grouped logically with `<fieldset>` and `<legend>`
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `index.html` (linjat 451-581)  
**Kodi:**
```html
<fieldset>
  <legend>Informacioni Personal</legend>
  ...
</fieldset>
<fieldset>
  <legend>Informacioni për Pronën</legend>
  ...
</fieldset>
```

---

#### ☑ 49. Accessible submit button(s) present
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `index.html` (linjat 91, 583)  
**Kodi:**
```html
<button type="submit" class="button">Kërko</button>
<button type="submit" class="button">Dërgo Mesazhin</button>
```

---

### 6. Web Media (Ch. 6)

#### ☑ 50. Images used with responsive sizing
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/css/styles.css` (linjat 84-87)  
**Kodi:**
```css
img {
  max-width: 100%;
  height: auto;
}
```

---

#### ☑ 51. Audio included with `<audio controls>` and at least one `<source>`
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `index.html` (linjat 642-650)  
**Kodi:**
```html
<audio controls>
  <source src="assets/audio/info.mp3" type="audio/mpeg" />
  <source src="assets/audio/info.ogg" type="audio/ogg" />
  <p>Fallback text...</p>
</audio>
```

---

#### ☑ 52. Video included with `<video controls>` and at least one `<source>`
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `index.html` (linjat 615-620)  
**Kodi:**
```html
<video controls poster="assets/img/home.jpg">
  <source src="assets/video/tour.mp4" type="video/mp4" />
  <source src="assets/video/tour.webm" type="video/webm" />
  <p>Fallback text...</p>
</video>
```

---

#### ☑ 53. Fallback text provided for unsupported audio/video
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `index.html` (linjat 619, 649)  
**Kodi:**
```html
<p>Shfletuesi juaj nuk mbështet elementin video. <a href="assets/video/tour.mp4">Shkarkoni skedarin video</a>.</p>
```

---

#### ☑ 54. `<track>` elements used for captions/subtitles where relevant
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `index.html` (linja 618)  
**Kodi:**
```html
<track kind="captions" src="assets/video/captions.vtt" srclang="sq" label="Shqip" default />
```

---

#### ☑ 55. External media embedded using `<iframe>` (e.g., YouTube, maps)
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `index.html` (linjat 626-633, 652-658)  
**Shembuj:**
- Google Maps iframe (linjat 626-633)
- YouTube iframe (linjat 652-658)

---

### 7. CSS Layout & Responsive Design (Ch. 7)

#### ☑ 56. `display` values used consciously for layout
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/css/styles.css`  
**Përshkrim:** Përdoret `display: flex`, `display: grid`, `display: block`, `display: inline-block` në mënyrë të qartë.

---

#### ☑ 57. At least one advanced layout technique used (float, flexbox, or grid)
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/css/styles.css`  
**Përshkrim:** 
- **Flexbox:** linjat 168-170, 207-210, 341-344, 787-794
- **Grid:** linjat 996-997, 1015-1019, 1510-1514

---

#### ☑ 58. No heavy use of `<br>` or non-breaking spaces for layout/spacing
**Status:** ✅ **IMPLEMENTED**  
**Përshkrim:** Spacing kontrollohet me CSS (margin, padding), jo me `<br>`.

---

#### ☑ 59. Flex container implemented with `display: flex` and properties like `justify-content` and `align-items`
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/css/styles.css` (linjat 207-210, 341-344)  
**Shembuj:**
```css
.nav__list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

---

#### ☑ 60. Flex item properties used
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/css/styles.css`  
**Përshkrim:** Përdoret `flex`, `flex-grow`, `flex-basis` ku është e nevojshme.

---

#### ☑ 61. OR a grid container with `display: grid`, `grid-template-columns/rows`, and `gap` is used
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/css/styles.css` (linjat 996-997, 1510-1514)  
**Shembuj:**
```css
.home__container {
  grid-template-columns: repeat(2, 1fr);
  ...
}
.media__compact-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}
```

---

#### ☑ 62. `position` property used in a controlled way
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/css/styles.css`  
**Përshkrim:** Përdoret `position: fixed` për header dhe scroll-up button, `position: absolute` për positioning relative.

---

#### ☑ 63. Positioned elements do not create severe overlap or accessibility issues
**Status:** ✅ **IMPLEMENTED**  
**Përshkrim:** Të gjitha elementet e pozicionuara janë të testuara dhe nuk krijojnë probleme accessibility.

---

#### ☑ 64. At least one media query adjusts layout or typography for different viewport widths
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/css/styles.css` (linjat 229-263, 907-974, 1009-1243, 1791-1884)  
**Përshkrim:** Shumë media queries për responsive design:
- `@media screen and (max-width: 1023px)`
- `@media screen and (max-width: 767px)`
- `@media screen and (min-width: 767px)`
- `@media screen and (min-width: 1023px)`

---

#### ☑ 65. Responsive units used in some places
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/css/styles.css`  
**Përshkrim:** Përdoret `%`, `vh`, `vw`, `rem` kudo:
- `%` për widths dhe heights
- `rem` për font sizes dhe spacing
- `vh`/`vw` për viewport-based sizing

---

#### ☑ 66. Layout remains usable on mobile-sized viewports
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/css/styles.css` (media queries për mobile)  
**Përshkrim:** Layout është plotësisht responsive dhe i përdorshëm në mobile.

---

### 8. JavaScript Language Fundamentals (Ch. 8)

#### ☑ 67. JavaScript code placed in external `.js` file(s) rather than only inline scripts
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:**
- `assets/js/main.js` - Main JavaScript functionality
- `assets/js/threejs-model.js` - 3D model loading
- `assets/js/react-components.js` - React components

---

#### ☑ 68. Modern variable declarations `let` and `const` used correctly
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/js/main.js`, `assets/js/threejs-model.js`  
**Shembuj:**
```javascript
const scrollHeader = () => { ... };
let isDragging = false;
const properties = [ ... ];
```

---

#### ☑ 69. Basic primitive types used
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/js/main.js`  
**Përshkrim:** Përdoret numbers, strings, booleans kudo.

---

#### ☑ 70. Comparisons use `===` and `!==` when appropriate
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/js/main.js`, `assets/js/threejs-model.js`  
**Shembuj:**
```javascript
if (selectedTheme === 'dark') { ... }
if (typeof THREE !== 'undefined') { ... }
```

---

#### ☑ 71. Conditional logic implemented using `if`, `else if`, `else` (and/or `switch`)
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/js/main.js`, `assets/js/threejs-model.js`  
**Përshkrim:** Përdoret gjerësisht if/else logic.

---

#### ☑ 72. Loops used at least once
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/js/main.js` (linjat 37, 54, 163-165, 177-179)  
**Shembuj:**
```javascript
accordionItems.forEach((item) => { ... });
sections.forEach((current) => { ... });
properties.map(prop => prop.name);
properties.filter(prop => prop.price < 100000);
```

---

#### ☑ 73. Functions correctly declared
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/js/main.js`  
**Shembuj:**
- Function declarations: `function scrollActive() { ... }`
- Arrow functions: `const scrollHeader = () => { ... }`
- Function expressions: `const toggleTheme = () => { ... }`

---

#### ☑ 74. Arrow functions used for at least one simple callback
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/js/main.js` (linjat 11, 102, 163, 177)  
**Shembuj:**
```javascript
const scrollHeader = () => { ... };
accordionItems.forEach((item) => { ... });
properties.map(prop => prop.name);
```

---

#### ☑ 75. Arrays used with basic methods such as `push` or `forEach`
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/js/main.js` (linjat 163-179, 286)  
**Shembuj:**
```javascript
properties.forEach((prop) => { ... });
submissions.push({ ...formObject, timestamp: ... });
```

---

#### ☑ 76. Objects used with properties accessed via dot or bracket notation
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/js/main.js` (linjat 163-179)  
**Shembuj:**
```javascript
const { name, price, location } = property; // Destructuring
property.name
property['price']
```

---

### 9. JavaScript in the Browser: DOM & Events (Ch. 9)

#### ☑ 77. DOM elements accessed using `document.querySelector` or `document.querySelectorAll`
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/js/main.js` (linjat 2, 36, 48, 49, 75, 86, 98)  
**Shembuj:**
```javascript
const header = document.getElementById("header");
const sections = document.querySelectorAll("section[id]");
const accordionItems = document.querySelectorAll(".value__accordion-item");
```

---

#### ☑ 78. Text content of elements modified via `textContent` (and `innerHTML` when appropriate)
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/js/main.js` (linjat 295-310)  
**Shembuj:**
```javascript
element.textContent = `${Math.round(current).toLocaleString()}+`;
```

---

#### ☑ 79. CSS classes added, removed, or toggled via `classList`
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/js/main.js` (linjat 4, 14, 61, 66, 78, 80, 103, 114)  
**Shembuj:**
```javascript
header.classList.add("scroll-header");
navLink.classList.add("active-link");
document.body.classList.toggle(darkTheme);
```

---

#### ☑ 80. Element attributes and/or styles modified via JavaScript
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/js/main.js`, `assets/js/threejs-model.js`  
**Shembuj:**
```javascript
accordionContent.style.height = accordionContent.scrollHeight + "px";
model.rotation.y += deltaX * 0.01;
```

---

#### ☑ 81. Events handled with `addEventListener`
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/js/main.js` (linjat 7, 19, 39, 51, 71, 84, 87, 118, 249)  
**Shembuj:**
```javascript
window.addEventListener("scroll", scrollHeader);
accordionHeader.addEventListener("click", () => { ... });
contactForm.addEventListener('submit', async (event) => { ... });
```

---

#### ☑ 82. At least one form validation or dynamic UI behavior implemented in JavaScript
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/js/main.js` (linjat 247-292)  
**Kodi:**
```javascript
if (!fullname || !email || !message) {
  alert('Ju lutem plotësoni të gjitha fushat e detyrueshme.');
  return;
}
```

---

#### ☑ 83. `event.preventDefault()` used on forms or links where default behavior must be stopped
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/js/main.js` (linjat 87, 250, 405)  
**Shembuj:**
```javascript
event.preventDefault();
contactForm.addEventListener('submit', async (event) => {
  event.preventDefault();
});
```

---

#### ☑ 84. Basic use of timers such as `setTimeout` or `setInterval` or simple JS-driven animations
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/js/main.js` (linjat 294-310, 397-402)  
**Shembuj:**
```javascript
const timer = setInterval(() => { ... }, 16);
setTimeout(() => { ... }, 500);
```

---

### 10. Modern JS Features & Data Handling (Ch. 10)

#### ☑ 85. Template literals used for string interpolation
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/js/main.js` (linjat 158, 172, 179, 278, 305)  
**Shembuj:**
```javascript
return `Hello ${name}`;
const avgPrice = calculateAverage(69000, 85000, 120000, 95000);
console.log(`Average price: €${Math.round(avgPrice).toLocaleString()}`);
```

---

#### ☑ 86. Destructuring applied to arrays or objects
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/js/main.js` (linjat 163, 228, 255)  
**Shembuj:**
```javascript
const { name, price, location } = property;
const { fullname, email, message } = formObject;
const [first, second, ...rest] = items;
```

---

#### ☑ 87. Spread and/or rest operators used
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/js/main.js` (linjat 186, 286)  
**Shembuj:**
```javascript
const moreProperties = [...properties, { ... }];
const calculateAverage = (...prices) => { ... };
submissions.push({ ...formObject, timestamp: ... });
```

---

#### ☑ 88. Array methods like `map()`, `filter()`, or `reduce()` used for data processing
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/js/main.js` (linjat 163-179)  
**Shembuj:**
```javascript
const propertyNames = properties.map(prop => prop.name);
const affordableProperties = properties.filter(prop => prop.price < 100000);
const totalValue = properties.reduce((sum, prop) => sum + prop.price, 0);
```

---

#### ☑ 89. JSON handled using `JSON.parse` and/or `JSON.stringify`
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/js/main.js` (linjat 227, 231, 286, 288)  
**Shembuj:**
```javascript
localStorage.setItem('properties', JSON.stringify(data));
const localData = JSON.parse(localStorage.getItem('properties') || '[]');
body: JSON.stringify(formObject)
```

---

#### ☑ 90. Data fetched using `fetch()` or similar API
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/js/main.js` (linjat 197-245, 267-290)  
**Kodi:**
```javascript
const response = await fetch('/api/properties.json');
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formObject)
});
```

---

#### ☑ 91. Promises handled with `.then()/.catch()` or `async/await`
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/js/main.js` (linjat 197-245, 250-292, 310-318)  
**Shembuj:**
```javascript
const fetchProperties = async () => { ... };
const response = await fetch(...);
loadUserPreferences().then(...).catch(...);
```

---

#### ☑ 92. Simple data persisted using `localStorage` or `sessionStorage`
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/js/main.js` (linjat 106, 107, 110, 111, 227, 231, 286, 288)  
**Shembuj:**
```javascript
localStorage.setItem('selected-theme', ...);
localStorage.getItem('selected-theme');
localStorage.setItem('properties', JSON.stringify(data));
```

---

### 11. React Basics (Ch. 11)

#### ☑ 93. React project organized clearly
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/js/react-components.js`  
**Përshkrim:** React komponentët janë në file të veçantë, të organizuar me komponentë parent dhe child.

---

#### ☑ 94. JSX syntax used correctly
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/js/react-components.js`  
**Përshkrim:** JSX përdoret me single parent element, `{}` për JavaScript expressions.

---

#### ☑ 95. Components defined as function components
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/js/react-components.js` (linjat 66, 92)  
**Kodi:**
```javascript
function PropertyCard({ property, onSelect }) { ... }
function PropertyFilter() { ... }
```

---

#### ☑ 96. Parent components pass props to child components
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/js/react-components.js` (linjat 66, 240-245)  
**Kodi:**
```javascript
<PropertyCard
  key={property.id}
  property={property}
  onSelect={handlePropertySelect}
/>
```

---

#### ☑ 97. Child components receive and use props correctly
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/js/react-components.js` (linjat 66-89)  
**Kodi:**
```javascript
function PropertyCard({ property, onSelect }) {
  const { name, price, location, type, bedrooms, bathrooms, area, image } = property;
  return ( ... );
}
```

---

#### ☑ 98. Props include sensible types
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/js/react-components.js`  
**Përshkrim:** Props përfshijnë strings, numbers, arrays, objects, dhe functions.

---

#### ☑ 99. `useState` hook used for local component state
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/js/react-components.js` (linjat 95-100)  
**Kodi:**
```javascript
const [properties, setProperties] = useState(initialProperties);
const [filteredProperties, setFilteredProperties] = useState(initialProperties);
const [searchTerm, setSearchTerm] = useState('');
```

---

#### ☑ 100. State updated only via its setter function
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/js/react-components.js`  
**Përshkrim:** State përditësohet vetëm me `setSearchTerm()`, `setMaxPrice()`, etj.

---

#### ☑ 101. Event handlers update component state
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/js/react-components.js` (linjat 120-135)  
**Kodi:**
```javascript
const handleSearchChange = (e) => {
  setSearchTerm(e.target.value);
};
```

---

#### ☑ 102. Conditional rendering implemented
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/js/react-components.js` (linjat 200-260)  
**Shembuj:**
```javascript
{isLoading ? (
  <p className="react-loading">Duke ngarkuar...</p>
) : (
  ...
)}
{selectedProperty && (
  <div>...</div>
)}
```

---

#### ☑ 103. Lists rendered using `array.map()` with unique `key` props
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/js/react-components.js` (linjat 240-245)  
**Kodi:**
```javascript
{filteredProperties.map(property => (
  <PropertyCard
    key={property.id}
    property={property}
    onSelect={handlePropertySelect}
  />
))}
```

---

#### ☑ 104. `useEffect` hook used for side-effects
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/js/react-components.js` (linjat 107-125, 127-140)  
**Kodi:**
```javascript
useEffect(() => {
  setIsLoading(true);
  const timer = setTimeout(() => {
    setIsLoading(false);
  }, 500);
  return () => clearTimeout(timer);
}, []);

useEffect(() => {
  const filtered = properties.filter(...);
  setFilteredProperties(filtered);
}, [searchTerm, maxPrice, propertyType, properties]);
```

---

#### ☑ 105. Cleanup functions used in `useEffect` where relevant
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/js/react-components.js` (linjat 115-117)  
**Kodi:**
```javascript
return () => clearTimeout(timer);
```

---

#### ☑ 106. At least one controlled form component
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/js/react-components.js` (linjat 145-185)  
**Kodi:**
```javascript
<input
  type="text"
  value={searchTerm}
  onChange={handleSearchChange}
  ...
/>
```

---

#### ☑ 107. Form submission handled in React without full page reload
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:** `assets/js/react-components.js` (linjat 145, 185-190)  
**Kodi:**
```javascript
<form onSubmit={handleFormSubmit}>
  ...
</form>
const handleFormSubmit = (e) => {
  e.preventDefault();
  ...
};
```

---

### 12. Meta Items (Style, Quality, Accessibility)

#### ☑ 108. Basic accessibility considered
**Status:** ✅ **IMPLEMENTED**  
**Vendndodhja:**
- Alt text: `index.html` (të gjitha imazhet)
- Labels: `index.html` (të gjitha input fields)
- Heading structure: Hierarkik (h1 → h2 → h3)
- Color contrast: CSS variables me kontrast të mirë

---

#### ☑ 109. Code consistently indented and formatted
**Status:** ✅ **IMPLEMENTED**  
**Përshkrim:** Të gjitha files kanë indentation dhe formatting konsistente.

---

#### ☑ 110. Meaningful file names and variable names chosen
**Status:** ✅ **IMPLEMENTED**  
**Përshkrim:** 
- Files: `main.js`, `styles.css`, `threejs-model.js`, `react-components.js`
- Variables: `scrollHeader`, `filteredProperties`, `handleSearchChange`

---

#### ☑ 111. No obvious copy–paste of templates without customization or understanding
**Status:** ✅ **IMPLEMENTED**  
**Përshkrim:** Kodi është i personalizuar dhe i adaptuar për projektin e real estate.

---

## Përmbledhje

**Totali i itemeve të implementuara:** 111/111 ✅

**Të gjitha kërkesat e checklist-it janë plotësisht të implementuara!**

---

## Struktura e Projektit

```
real-estate-programing-in-WWW-FSHMN/
├── index.html                 # Faqja kryesore me të gjitha seksionet
├── assets/
│   ├── css/
│   │   └── styles.css        # Styling kryesor
│   ├── js/
│   │   ├── main.js           # JavaScript kryesor (DOM, events, modern JS)
│   │   ├── threejs-model.js  # Three.js për modele 3D
│   │   └── react-components.js # React komponentë
│   └── img/                   # Imazhe dhe modele 3D
├── css/
│   └── main.css              # CSS shtesë
└── PROJECT_CHECKLIST.md      # Ky dokument
```

---

## Teknologjitë dhe Libraries e Përdorura

1. **HTML5** - Semantic elements, forms, media
2. **CSS3** - Flexbox, Grid, Media Queries, CSS Variables
3. **Vanilla JavaScript (ES6+)** - Modern features, DOM manipulation
4. **React 18** - Component-based UI (via CDN)
5. **Three.js** - 3D model rendering
6. **Swiper.js** - Carousel/Slider functionality
7. **Babel Standalone** - JSX transformation

---

## Si të Testoni Projektin

1. **Hapni projektin në një local server:**
   ```bash
   # Python
   python -m http.server 8000
   
   # Node.js
   npx http-server
   
   # PHP
   php -S localhost:8000
   ```

2. **Hapni në browser:**
   ```
   http://localhost:8000
   ```

3. **Testoni features:**
   - Navigation menu
   - Form validation
   - React property filter
   - 3D model viewer (drag to rotate, scroll to zoom)
   - Dark/Light theme toggle
   - Responsive design (resize browser window)

---

**Data e përfundimit:** ________  
**Version:** 1.0

