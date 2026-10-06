/* ==========================================================
   EDIT THIS FILE to change your content.
   No need to touch index.html, styles.css or script.js.
   Colors for projects: any CSS color or a variable like
   var(--indigo), var(--marigold), var(--coral), var(--mint)
   Images: put files in /assets and set image: "assets/name.jpg"
   ========================================================== */
const PORTFOLIO = {
  name: "Bipin",
  role: "Graphic designer",
  location: "Kathmandu, Nepal",
  tagline: "Brand identities, print and digital design with a clear idea behind every shape.",
  logo: "Bipin",

  work: {
    title: "Selected work",
    text: "A few recent projects. Select any card to see the full case study on Behance."
  },

  projects: [
    { title: "Himal Coffee Roasters", category: "Branding", year: "2026",
      description: "Logo, packaging and menu system for a Thamel roastery.",
      color: "var(--indigo)", image: "", link: "https://behance.net/bipinnakarmi" },
    { title: "Newa Festival Poster Series", category: "Print", year: "2025",
      description: "Six typographic posters celebrating Newar festivals.",
      color: "var(--marigold)", image: "", link: "https://behance.net/bipinnakarmi" },
    { title: "Pathao Lane App Icons", category: "UI & Icons", year: "2025",
      description: "A friendly icon set for a ride-sharing concept.",
      color: "var(--coral)", image: "", link: "https://behance.net/bipinnakarmi" },
    { title: "Kora Magazine", category: "Editorial", year: "2024",
      description: "Layout and cover design for a quarterly travel magazine.",
      color: "var(--mint)", image: "", link: "https://behance.net/bipinnakarmi" }
  ],

  about: {
    title: "About",
    paragraphs: [
      "I'm a graphic designer with over three years of experience, working from Kathmandu.",
      "I like projects where type, color and layout have to do real work: making a small business look credible, or a festival easy to recognize from across the street.",
      "I also write React and use AI tools to speed up the unglamorous parts of design work."
    ],
    skills: ["Brand identity", "Logo design", "Print & packaging", "Social media design", "Layout & typography"],
    tools: ["Photoshop", "Illustrator", "InDesign", "Figma", "After Effects", "React"]
  },

  services: {
    title: "What I can do for you",
    items: [
      { title: "Brand identity", text: "Logo, color, type and guidelines so your brand looks the same everywhere." },
      { title: "Print & packaging", text: "Posters, brochures, labels and boxes, prepared for the press." },
      { title: "Digital graphics", text: "Social posts, banners and web visuals sized for each platform." },
      { title: "Motion basics", text: "Short animated logos and social clips in After Effects." }
    ]
  },

  contact: {
    title: "Let's work together",
    email: "bpin.nakarmi77@gmail.com",           // <- change me
    socials: [
      { label: "Behance", url: "https://behance.net/bipinnakarmi" },
      { label: "Instagram", url: "https://instagram.com/nakarmi07" },
      { label: "LinkedIn",  url: "https://linkedin.com/in/bipin-nakarmi-879842142" },
    ]
  }
};
