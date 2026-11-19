<<<<<<< HEAD
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Bipin | Graphic Designer</title>
  <meta name="description" content="Portfolio of Bipin, a graphic designer based in Kathmandu, Nepal.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,700;12..96,800&family=DM+Sans:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="topbar">
    <!-- <a href="#home" class="topbar__logo" data-target="home" id="logo"></a> -->
    <nav class="topbar__nav" id="nav" aria-label="Sections"></nav>
  </header>

  <main id="track" class="track" tabindex="0" aria-label="Portfolio, scroll sideways">

    <section id="home" class="panel hero" data-title="Home">
      <p class="hero__role" id="heroRole"></p>
      <h1 class="hero__name" id="heroName" aria-label=""></h1>
      <p class="hero__tag" id="heroTag"></p>
      <p class="hero__hint">Scroll sideways to explore</p>
      <div class="hero__orb" aria-hidden="true"></div>
    </section>

    <section id="work" class="panel work" data-title="Work">
      <div class="work__intro">
        <h2 id="workTitle"></h2>
        <p id="workText"></p>
      </div>
      <div class="projects" id="projects"></div>
    </section>

    <section id="about" class="panel about" data-title="About">
      <h2 id="aboutTitle"></h2>
      <div class="about__body" id="aboutBody"></div>
      <div class="about__lists">
        <div><h3>Skills</h3><ul id="skills"></ul></div>
        <div><h3>Tools</h3><ul id="tools"></ul></div>
      </div>
    </section>

    <section id="services" class="panel services" data-title="Services">
      <h2 id="servicesTitle"></h2>
      <ol class="services__list" id="services"></ol>
    </section>

    <section id="contact" class="panel contact" data-title="Contact">
      <h2 id="contactTitle"></h2>
      <a class="contact__mail" id="mail" href="#"></a>
      <ul class="contact__links" id="socials"></ul>
      <p class="contact__foot" id="foot"></p>
    </section>
  </main>

  <div class="progress" aria-hidden="true"><span id="bar"></span></div>

  <script src="data.js"></script>
  <script src="script.js"></script>
</body>
</html>
=======
# Bipin Nakarmi — Portfolio source

A responsive, static portfolio built with semantic HTML, modular CSS and vanilla JavaScript.

## Project structure

```text
bipin_portfolio_source/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── app.js
├── assets/
│   └── Bipin-Nakarmi-CV.pdf   (add your own CV)
└── README.md
```

## Run locally

1. Extract the project folder.
2. Open `index.html` in a modern browser.
3. For a more production-like local preview, use VS Code Live Server or run:
   `python -m http.server 8000`
4. Open `http://localhost:8000`.

No build process or framework is required.

## Personalise the website

Open `js/app.js` and update:

- `CONFIG.social.instagram`
- `CONFIG.social.behance`
- `CONFIG.social.linkedin`
- `CONFIG.cvUrl`
- `CONFIG.formEndpoint`

Add your CV at `assets/Bipin-Nakarmi-CV.pdf`, or update `cvUrl` to its path.

Replace the concept project cards in `index.html` with your real project images, titles, categories and case-study links. Keep image files in `assets/` and use descriptive alt text.

## Contact form — important

The browser cannot securely send email directly to a mailbox. This project deliberately does not include email-provider credentials in client-side code.

To receive messages at `bpin.nakarmi77@gmail.com`:

1. Create a form at a provider such as Formspree, Getform or Netlify Forms, or implement your own serverless endpoint.
2. Configure that provider to deliver submissions to `bpin.nakarmi77@gmail.com`.
3. Copy the provider's HTTPS form endpoint into `CONFIG.formEndpoint` in `js/app.js`.
4. Test a submission, including the success and failure states, before publishing.

Never place SMTP passwords, private API keys or mail-provider secrets in `app.js`.

## Production checklist

- Replace all six placeholder project artworks with original portfolio work.
- Add the real social profile URLs.
- Add and test the CV PDF.
- Configure and test the form endpoint.
- Add a custom favicon and Open Graph sharing image.
- Test keyboard navigation, mobile layouts and reduced-motion settings.
- Deploy the folder to a static host such as Netlify, Vercel or GitHub Pages.
- Connect a custom domain and enable HTTPS.

## Architecture

- `index.html`: semantic content and accessible component markup.
- `css/styles.css`: design tokens, layout, responsive behaviour, states and motion.
- `js/app.js`: navigation, section observation, reveal effects, project carousel, social links, CV path and contact form submission.

The site uses vanilla JavaScript and has no runtime framework dependency.
>>>>>>> 6ea2063 (Updated portfolio)
