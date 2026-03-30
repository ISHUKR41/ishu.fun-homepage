// SEO.jsx — Advanced SEO Component with Dynamic Meta Tags
import { useEffect } from 'react';

export default function SEO({
  title = "ishu.fun — Sarkari Result 2026, Govt Jobs, Free PDF Tools | India's #1 Student Platform",
  description = "Get instant Sarkari Results for JEE, NEET, UPSC, SSC, Railway. Free PDF tools — merge, compress, convert. Latest govt job vacancies & education news. 50L+ students trust ishu.fun.",
  keywords = "sarkari result, sarkari naukri, sarkari result 2026, jee result 2026, neet result 2026, ssc result, upsc result, free pdf tools, merge pdf, compress pdf, govt jobs india",
  canonical = "https://ishu.fun/",
  ogImage = "https://ishu.fun/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  jsonLd,
}) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name, content, attribute = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Primary meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Open Graph tags
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', ogImage, 'property');
    updateMetaTag('og:url', canonical, 'property');
    updateMetaTag('og:type', ogType, 'property');

    // Twitter Card tags
    updateMetaTag('twitter:card', twitterCard);
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);

    // JSON-LD structured data
    if (jsonLd) {
      let script = document.querySelector('script[data-type="json-ld-dynamic"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.setAttribute('data-type', 'json-ld-dynamic');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    }
  }, [title, description, keywords, canonical, ogImage, ogType, twitterCard, jsonLd]);

  return null;
}

// Pre-configured SEO templates
export const seoTemplates = {
  homepage: {
    title: "ishu.fun — Sarkari Result 2026, Govt Jobs, Free PDF Tools | India's #1 Student Platform",
    description: "Get instant Sarkari Results for JEE, NEET, UPSC, SSC, Railway. Free PDF tools — merge, compress, convert. Latest govt job vacancies & education news. 50L+ students trust ishu.fun.",
    keywords: "sarkari result, sarkari naukri, sarkari result 2026, jee result 2026, neet result 2026, ssc result, upsc result, free pdf tools, merge pdf, compress pdf, govt jobs india, education news india, sarkari result today, jee mains result, neet result check online, pdf compressor free, government job vacancy 2026, whatsapp result alert, admit card 2026, answer key 2026, exam calendar india",
  },
  results: {
    title: "Latest Sarkari Results 2026 — JEE, NEET, UPSC, SSC, Railway | ishu.fun",
    description: "Check latest sarkari results 2026 for JEE Mains, NEET, UPSC, SSC CGL, Railway RRB, Banking exams. Get instant notifications and direct official links.",
    keywords: "sarkari result, jee result 2026, neet result 2026, upsc result, ssc result, railway result, bank exam result, latest results 2026",
  },
  tools: {
    title: "Free PDF Tools — Merge, Compress, Convert, Sign PDFs Online | ishu.fun",
    description: "Free online PDF tools for students. Merge PDF, compress PDF, convert to PDF, e-sign, OCR, split, rotate. 100% free, secure, no registration required.",
    keywords: "free pdf tools, merge pdf online, compress pdf, pdf converter, e-sign pdf, ocr pdf, split pdf, pdf tools online free",
  },
};

// JSON-LD generators
export const generateBreadcrumbLD = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const generateArticleLD = (article) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.title,
  description: article.description,
  image: article.image,
  author: {
    '@type': 'Organization',
    name: 'ishu.fun',
  },
  publisher: {
    '@type': 'Organization',
    name: 'ishu.fun',
    logo: {
      '@type': 'ImageObject',
      url: 'https://ishu.fun/images/logo.png',
    },
  },
  datePublished: article.publishedDate,
  dateModified: article.modifiedDate || article.publishedDate,
});

export const generateEventLD = (event) => ({
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: event.name,
  description: event.description,
  startDate: event.startDate,
  endDate: event.endDate,
  location: {
    '@type': 'Place',
    name: event.location || 'India',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
  },
  organizer: {
    '@type': 'Organization',
    name: event.organizer,
  },
});

export const generateHowToLD = (howTo) => ({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: howTo.name,
  description: howTo.description,
  totalTime: howTo.totalTime,
  step: howTo.steps.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
});
