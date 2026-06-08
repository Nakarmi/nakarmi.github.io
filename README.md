<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Jane Doe — Graphic Designer</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header class="header">
    <div class="logo">JD</div>
    <nav>
      <a href="#work">Work</a>
      <a href="#services">Services</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
    <button id="themeToggle">◐</button>
  </header>

  <section class="hero" id="top">
    <div class="orb"></div>
    <div class="hero-content">
      <p class="eyebrow">Premium Graphic Design Portfolio</p>
      <h1>Jane Doe — Graphic Designer & Visual Storyteller</h1>
      <p>I craft elegant visual identities, campaigns, and brand systems that make businesses memorable.</p>
      <div class="buttons">
        <a href="#work" class="btn primary">View Work</a>
        <a href="#contact" class="btn">Contact Me</a>
      </div>
    </div>
  </section>

  <section class="about-preview">
    <div class="portrait"></div>
    <div>
      <h2>Design with purpose, emotion, and clarity.</h2>
      <p>I help brands communicate with confidence through thoughtful visuals, strong typography, and refined storytelling.</p>
      <div class="stats">
        <span><b>7+</b> Years Experience</span>
        <span><b>160+</b> Projects</span>
        <span><b>45+</b> Clients</span>
      </div>
    </div>
  </section>

  <section id="work">
    <h2>Featured Projects</h2>
    <div class="grid projects">
      <article class="project" data-case="case1">
        <img src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=900&q=80">
        <span>Brand Identity</span>
        <h3>Nova Studio Rebrand</h3>
      </article>
      <article class="project" data-case="case2">
        <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80">
        <span>Social Media</span>
        <h3>Bold Campaign System</h3>
      </article>
      <article class="project" data-case="case3">
        <img src="https://images.unsplash.com/photo-1613909207039-6b173b755cc1?auto=format&fit=crop&w=900&q=80">
        <span>Packaging</span>
        <h3>Luma Product Design</h3>
      </article>
    </div>
  </section>

  <section class="case-studies">
    <h2>Case Studies</h2>
    <div class="case-card">
      <h3>Nova Studio Rebrand</h3>
      <p><b>Client:</b> Nova Studio | <b>Industry:</b> Creative Agency | <b>Timeline:</b> 6 Weeks</p>
      <p><b>Problem:</b> The brand lacked distinction and consistency across digital and print touchpoints.</p>
      <p><b>Process:</b> Research, moodboards, sketches, logo exploration, typography system, and final brand applications.</p>
      <p><b>Outcome:</b> A premium identity system with improved recognition, stronger social presence, and positive client feedback.</p>
    </div>
  </section>

  <section id="services">
    <h2>Services</h2>
    <div class="grid cards">
      <div>Brand Identity Design</div>
      <div>Logo Design</div>
      <div>Social Media Design</div>
      <div>Print Design</div>
      <div>Packaging Design</div>
      <div>Motion Graphics</div>
    </div>
  </section>

  <section>
    <h2>Skills & Expertise</h2>
    <div class="skills">
      <span>Branding</span><span>Typography</span><span>Illustration</span><span>Layout Design</span>
      <span>Art Direction</span><span>Photoshop</span><span>Illustrator</span><span>InDesign</span>
      <span>After Effects</span><span>Figma</span>
    </div>
  </section>

  <section>
    <h2>Design Process</h2>
    <div class="timeline">
      <div>Discovery</div><div>Research</div><div>Strategy</div><div>Concept</div>
      <div>Execution</div><div>Refinement</div><div>Delivery</div>
    </div>
  </section>

  <section>
    <h2>Testimonials</h2>
    <div class="testimonial">
      “Jane transformed our brand into something premium, clear, and unforgettable.”
      <strong>— Michael Reed, Founder</strong>
    </div>
  </section>

  <section>
    <h2>Clients & Collaborations</h2>
    <div class="logos">
      <span>MONO</span><span>AXIS</span><span>LUMA</span><span>NOVA</span><span>ORBIT</span>
    </div>
  </section>

  <section>
    <h2>Awards & Features</h2>
    <p class="muted">Featured in Design Weekly, Brand Identity Showcase, and Creative Minds Journal.</p>
  </section>

  <section>
    <h2>Creative Experiments</h2>
    <div class="grid cards">
      <div>Poster Series</div><div>Typography Explorations</div><div>Sketch Studies</div>
    </div>
  </section>

  <section id="about">
    <h2>About Me</h2>
    <p class="wide">My design journey began with a fascination for posters, album covers, and editorial layouts. Today, I blend strategy and aesthetics to build visual systems that feel timeless, useful, and emotionally engaging.</p>
  </section>

  <section>
    <h2>Resume & Experience</h2>
    <p class="wide">Freelance Graphic Designer, Senior Brand Designer, BA in Visual Communication, Certified Adobe Creative Professional.</p>
    <a href="#" class="btn primary">Download Resume</a>
  </section>

  <section id="contact">
    <h2>Let’s create something memorable.</h2>
    <form>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Email Address" required />
      <textarea placeholder="Tell me about your project"></textarea>
      <button class="btn primary" type="submit">Send Message</button>
    </form>
    <p>Email: hello@janedoe.com</p>
  </section>

  <footer>
    <div class="logo">JD</div>
    <p>© 2026 Jane Doe. All rights reserved.</p>
    <a href="#top">Back to Top ↑</a>
  </footer>

  <script src="script.js"></script>
</body>
</html>
