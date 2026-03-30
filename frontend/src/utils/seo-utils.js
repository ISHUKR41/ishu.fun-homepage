// seo-utils.js — Advanced SEO Utilities

// Generate dynamic sitemap
export function generateSitemap(pages) {
  const baseUrl = 'https://ishu.fun';
  const currentDate = new Date().toISOString().split('T')[0];

  const urls = pages.map((page) => `
  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${page.lastMod || currentDate}</lastmod>
    <changefreq>${page.changefreq || 'weekly'}</changefreq>
    <priority>${page.priority || '0.8'}</priority>
  </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

// Enhanced meta tags for social sharing
export const socialMetaTags = {
  generateOGTags: (data) => ({
    'og:type': data.type || 'website',
    'og:url': data.url,
    'og:title': data.title,
    'og:description': data.description,
    'og:image': data.image,
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:site_name': 'ishu.fun',
    'og:locale': 'en_IN',
  }),

  generateTwitterTags: (data) => ({
    'twitter:card': 'summary_large_image',
    'twitter:site': '@ishufun',
    'twitter:creator': '@ishufun',
    'twitter:title': data.title,
    'twitter:description': data.description,
    'twitter:image': data.image,
  }),
};

// Rich snippets / Structured data generators
export const structuredData = {
  // Website schema
  website: () => ({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ishu.fun',
    url: 'https://ishu.fun',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://ishu.fun/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }),

  // Organization schema
  organization: () => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ishu.fun',
    url: 'https://ishu.fun',
    logo: 'https://ishu.fun/images/logo.png',
    description: "India's #1 Platform for Sarkari Results, Government Jobs, Free PDF Tools",
    foundingDate: '2025',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-8986985813',
      contactType: 'customer support',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
    sameAs: [
      'https://twitter.com/ishufun',
      'https://instagram.com/ishufun',
      'https://t.me/ishufun',
      'https://youtube.com/@ishufun',
    ],
  }),

  // Video schema
  video: (video) => ({
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.name,
    description: video.description,
    thumbnailUrl: video.thumbnail,
    uploadDate: video.uploadDate,
    duration: video.duration,
    contentUrl: video.url,
  }),

  // Course schema
  course: (course) => ({
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.name,
    description: course.description,
    provider: {
      '@type': 'Organization',
      name: 'ishu.fun',
    },
  }),
};

// Canonical URL management
export function setCanonicalUrl(url) {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = url;
}

// Hreflang tags for internationalization
export function setHreflangTags(languages) {
  // Remove existing hreflang tags
  document.querySelectorAll('link[rel="alternate"]').forEach((tag) => tag.remove());

  languages.forEach((lang) => {
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.hreflang = lang.code;
    link.href = lang.url;
    document.head.appendChild(link);
  });
}

// Generate robots meta tag
export function setRobotsMeta(options = {}) {
  const {
    index = true,
    follow = true,
    noarchive = false,
    nosnippet = false,
    noimageindex = false,
  } = options;

  const directives = [];
  if (index) directives.push('index');
  else directives.push('noindex');

  if (follow) directives.push('follow');
  else directives.push('nofollow');

  if (noarchive) directives.push('noarchive');
  if (nosnippet) directives.push('nosnippet');
  if (noimageindex) directives.push('noimageindex');

  let meta = document.querySelector('meta[name="robots"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = 'robots';
    document.head.appendChild(meta);
  }
  meta.content = directives.join(', ');
}

// Preconnect to external domains
export function addPreconnect(domains) {
  domains.forEach((domain) => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
}

// DNS prefetch
export function addDNSPrefetch(domains) {
  domains.forEach((domain) => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = domain;
    document.head.appendChild(link);
  });
}

// Critical keywords for SEO
export const seoKeywords = {
  primary: [
    'sarkari result',
    'sarkari naukri',
    'sarkari result 2026',
    'govt jobs',
    'government jobs india',
    'free pdf tools',
  ],
  secondary: [
    'jee result 2026',
    'neet result 2026',
    'upsc result',
    'ssc result',
    'railway jobs',
    'bank jobs',
    'merge pdf',
    'compress pdf',
    'pdf converter',
  ],
  longTail: [
    'latest sarkari result today',
    'jee mains result 2026 check online',
    'neet ug result 2026 date',
    'free pdf merge tool online',
    'government job vacancy 2026',
    'whatsapp result notification',
  ],
};

export default {
  generateSitemap,
  socialMetaTags,
  structuredData,
  setCanonicalUrl,
  setHreflangTags,
  setRobotsMeta,
  addPreconnect,
  addDNSPrefetch,
  seoKeywords,
};
