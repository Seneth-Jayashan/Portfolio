import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://www.sjaywebsolutions.lk';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`;
const SITE_NAME = 'S JAY Web Solutions';
const AUTHOR = 'Seneth Jayashan';
const TWITTER_HANDLE = '@SenethJay';

const pageMeta = {
  '/': {
    title: 'Seneth Jayashan — Full-Stack Web Developer & Founder of S JAY Web Solutions',
    description:
      'Seneth Jayashan builds fast, animated, and conversion-focused websites. Founder of S JAY Web Solutions — React, Node.js, and full-stack development in Sri Lanka.',
    keywords:
      'web developer Sri Lanka, full-stack developer Colombo, React developer, Node.js developer, S JAY Web Solutions, Seneth Jayashan, portfolio',
  },
  '/about': {
    title: 'About Seneth Jayashan — S JAY Web Solutions',
    description:
      'Learn about Seneth Jayashan, founder of S JAY Web Solutions. 5+ years of full-stack engineering, UX-focused builds, and scalable architecture.',
    keywords:
      'about Seneth Jayashan, S JAY Web Solutions founder, Sri Lanka web developer biography',
  },
  '/services': {
    title: 'Web Development Services — S JAY Web Solutions',
    description:
      'Frontend development, backend APIs, UI/UX design, WordPress builds, and website maintenance. Professional web services by S JAY Web Solutions, Sri Lanka.',
    keywords:
      'web development services Sri Lanka, React development, Node.js API, UI UX design, WordPress Sri Lanka, website maintenance',
  },
  '/projects': {
    title: 'Portfolio & Projects — S JAY Web Solutions',
    description:
      'Explore real-world web projects by Seneth Jayashan including KHB Associates, CleanWave, KASSS Advertising, and more. Modern, production-grade builds.',
    keywords:
      'portfolio Seneth Jayashan, web projects Sri Lanka, KHB Associates, CleanWave laundry system, KASSS advertising website',
  },
  '/skills': {
    title: 'Technical Skills — React, Node.js, MongoDB & More | S JAY Web Solutions',
    description:
      'Technical skill set of Seneth Jayashan: React.js, Node.js, Express, MongoDB, Tailwind CSS, WordPress, JavaScript, and growing expertise in Next.js and Docker.',
    keywords:
      'web developer skills, React proficiency, Node.js skills, MongoDB, Tailwind CSS, JavaScript developer Sri Lanka',
  },
  '/roadmap': {
    title: 'Learning Roadmap 2020–2027 — S JAY Web Solutions',
    description:
      `A transparent view of Seneth Jayashan's technical journey from HTML/CSS to full-stack React, and next targets including AI/ML engineering.`,
    keywords:
      'developer roadmap, learning timeline web developer, AI ML engineering future, Seneth Jayashan skills roadmap',
  },
  '/contact': {
    title: 'Contact — Start Your Project | S JAY Web Solutions',
    description:
      'Get in touch with Seneth Jayashan to discuss your next website or web app project. Based in Colombo, Sri Lanka — available globally.',
    keywords:
      'contact S JAY Web Solutions, hire web developer Sri Lanka, Seneth Jayashan contact, web development inquiry Colombo',
  },
};

const structuredDataOrg = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'S JAY Web Solutions (Pvt) Ltd',
  founder: {
    '@type': 'Person',
    name: 'Seneth Jayashan',
    jobTitle: 'Founder & Full-Stack Developer',
    url: BASE_URL,
    sameAs: [
      'https://www.linkedin.com/company/seneth-jayashan/',
      'https://github.com/Seneth-Jayashan',
      'https://facebook.com/s.jay20/',
    ],
  },
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description:
    'Full-stack web development, UI/UX design, and digital product engineering based in Colombo, Sri Lanka.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Colombo',
    addressRegion: 'Western Province',
    addressCountry: 'LK',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+94-70-3999-709',
    contactType: 'customer service',
    email: 'contact@sjaywebsolutions.lk',
  },
  serviceType: [
    'Frontend Development',
    'Backend Development',
    'UI/UX Design',
    'WordPress Development',
    'Website Maintenance',
  ],
};

function setMeta(name, content, useProperty = false) {
  if (!content) return;
  const attr = useProperty ? 'property' : 'name';
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function injectStructuredData(id, data) {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement('script');
    el.id = id;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export default function SEOHead() {
  const location = useLocation();
  const meta = pageMeta[location.pathname] || pageMeta['/'];
  const canonicalUrl = `${BASE_URL}${location.pathname}`;

  useEffect(() => {
    document.title = meta.title;

    setMeta('description', meta.description);
    setMeta('keywords', meta.keywords);
    setMeta('author', AUTHOR);
    setMeta('robots', 'index, follow');
    setMeta('theme-color', '#0a0f1f');

    // Open Graph
    setMeta('og:title', meta.title, true);
    setMeta('og:description', meta.description, true);
    setMeta('og:type', 'website', true);
    setMeta('og:url', canonicalUrl, true);
    setMeta('og:image', DEFAULT_IMAGE, true);
    setMeta('og:image:width', '1200', true);
    setMeta('og:image:height', '630', true);
    setMeta('og:site_name', SITE_NAME, true);
    setMeta('og:locale', 'en_US', true);

    // Twitter Card
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:site', TWITTER_HANDLE);
    setMeta('twitter:creator', TWITTER_HANDLE);
    setMeta('twitter:title', meta.title);
    setMeta('twitter:description', meta.description);
    setMeta('twitter:image', DEFAULT_IMAGE);

    // Canonical
    setLink('canonical', canonicalUrl);

    // Structured Data
    injectStructuredData('sd-org', structuredDataOrg);

    const breadcrumbData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
        location.pathname !== '/' && {
          '@type': 'ListItem',
          position: 2,
          name: meta.title.split('—')[0].trim(),
          item: canonicalUrl,
        },
      ].filter(Boolean),
    };
    injectStructuredData('sd-breadcrumb', breadcrumbData);
  }, [location.pathname, meta, canonicalUrl]);

  return null;
}