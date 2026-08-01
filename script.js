const scrollToTopButton = document.querySelector('.scroll-to-top');
const themeToggleButton = document.getElementById('themeToggle');
const body = document.body;
const header = document.getElementById('siteHeader');
const toggleIcon = themeToggleButton?.querySelector('.theme-toggle-icon');
const toggleLabel = themeToggleButton?.querySelector('.theme-toggle-label');

function toggleScrollToTop() {
  if (!scrollToTopButton) return;
  if (window.scrollY > 250) {
    scrollToTopButton.classList.add('visible');
  } else {
    scrollToTopButton.classList.remove('visible');
  }
}

function toggleHeaderScroll() {
  if (!header) return;
  if (window.scrollY > 30) {
    header.classList.add('scroll-active');
  } else {
    header.classList.remove('scroll-active');
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function applyTheme(theme) {
  const isLight = theme === 'light';
  body.classList.toggle('light-theme', isLight);

  if (themeToggleButton) {
    themeToggleButton.classList.toggle('is-light', isLight);
    themeToggleButton.setAttribute('aria-pressed', String(isLight));

    if (toggleIcon) {
      toggleIcon.textContent = isLight ? '☾' : '☀';
    }

    if (toggleLabel) {
      toggleLabel.textContent = isLight ? 'Dark' : 'Light';
    }
  }
}

function toggleTheme() {
  const isLight = body.classList.contains('light-theme');
  const nextTheme = isLight ? 'dark' : 'light';
  applyTheme(nextTheme);
  localStorage.setItem('portfolioTheme', nextTheme);
}

function loadTheme() {
  const savedTheme = localStorage.getItem('portfolioTheme');
  applyTheme(savedTheme === 'light' ? 'light' : 'dark');
}

window.addEventListener('scroll', () => {
  toggleScrollToTop();
  toggleHeaderScroll();
});

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = encodeURIComponent(formData.get('name'));
    const email = encodeURIComponent(formData.get('email'));
    const message = encodeURIComponent(formData.get('message'));
    const mailtoLink = `mailto:bpin.nakarmi77@gmail.com?subject=New message from ${name}&body=Name:%20${name}%0D%0AEmail:%20${email}%0D%0A%0D%0A${message}`;
    window.location.href = mailtoLink;
  });
}

if (scrollToTopButton) {
  scrollToTopButton.addEventListener('click', scrollToTop);
}

if (themeToggleButton) {
  themeToggleButton.addEventListener('click', toggleTheme);
}

const fallbackProjects = [
  {
    src: 'project-images/project-01.svg',
    alt: 'Featured project concept preview',
    title: 'Brand Identity',
    description: 'Editorial layouts and launch visuals for a modern product introduction.'
  },
  {
    src: 'project-images/project-02.svg',
    alt: 'Featured project interface layout',
    title: 'UI Motion',
    description: 'Interactive motion systems and polished transitions for a digital experience.'
  },
  {
    src: 'project-images/project-03.svg',
    alt: 'Featured project illustration preview',
    title: 'Illustration Pack',
    description: 'A flexible set of artwork and visual assets for cross-platform campaigns.'
  }
];

function renderFeaturedProjects(projects, grid) {
  grid.innerHTML = '';

  projects.forEach((project) => {
    const card = document.createElement('article');
    card.className = 'featured-project-item';
    card.innerHTML = `
      <img src="${project.src}" alt="${project.alt}" loading="lazy" />
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    `;
    grid.appendChild(card);
  });
}

async function loadFeaturedProjects() {
  const grid = document.getElementById('featuredProjectsGrid');
  if (!grid) return;

  try {
    const response = await fetch('./project-images/manifest.json', { cache: 'no-store' });
    if (!response.ok) throw new Error('Unable to load project manifest');
    const projects = await response.json();
    renderFeaturedProjects(projects, grid);
  } catch (error) {
    renderFeaturedProjects(fallbackProjects, grid);
  }
}

loadTheme();
loadFeaturedProjects();
