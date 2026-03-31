// components/SEO/EnhancedSEO.jsx
// Enhanced SEO component with AI-optimized meta tags and structured data

import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

/**
 * Enhanced SEO component with comprehensive meta tags
 * Optimized for search engines and AI crawlers
 */
export default function EnhancedSEO({
  title = "ishu.fun — Sarkari Result 2026, Govt Jobs, Free PDF Tools | India's #1 Student Platform",
  description = "Get instant Sarkari Results for JEE, NEET, UPSC, SSC, Railway. Free PDF tools — merge, compress, convert. Latest govt job vacancies & education news. 50L+ students trust ishu.fun.",
  keywords = "sarkari result, sarkari naukri, sarkari result 2026, jee result 2026, neet result 2026, ssc result, upsc result, free pdf tools, merge pdf, compress pdf, govt jobs india",
  image = "https://ishu.fun/og-image.jpg",
  url = "https://ishu.fun",
  type = "website",
  author = "ishu.fun",
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  locale = "en_IN",
  alternateLocales = ["hi_IN", "bn_IN", "ta_IN", "te_IN", "mr_IN"],
  structuredData = null,
  canonical,
  noindex = false,
  nofollow = false,
}) {
  // Generate structured data for rich results
  const defaultStructuredData = [
    // Website schema
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "ishu.fun",
      "alternateName": ["Ishu Fun", "ishu.fun Sarkari Result"],
      "url": "https://ishu.fun",
      "description": "India's #1 Platform for Sarkari Results, Government Jobs, Free PDF Tools and Education News",
      "inLanguage": "en-IN",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://ishu.fun/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      },
      "publisher": {
        "@type": "Organization",
        "name": "ishu.fun",
        "url": "https://ishu.fun",
        "logo": {
          "@type": "ImageObject",
          "url": "https://ishu.fun/images/logo.png",
          "width": 512,
          "height": 512
        },
        "sameAs": [
          "https://twitter.com/ishufun",
          "https://instagram.com/ishufun",
          "https://t.me/ishufun",
          "https://youtube.com/@ishufun"
        ]
      }
    },
    // BreadcrumbList schema
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://ishu.fun"
        }
      ]
    },
  ];

  const allStructuredData = structuredData
    ? [...defaultStructuredData, ...structuredData]
    : defaultStructuredData;

  const robotsContent = noindex || nofollow
    ? `${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical || url} />
      <meta name="author" content={author} />
      <meta name="publisher" content="ishu.fun" />

      {/* Robots */}
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />
      <meta name="bingbot" content="index, follow" />
      <meta name="yandex" content="index, follow" />

      {/* Open Graph (Facebook, WhatsApp, LinkedIn) */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content={locale} />
      {alternateLocales.map((altLocale) => (
        <meta key={altLocale} property="og:locale:alternate" content={altLocale} />
      ))}
      <meta property="og:site_name" content="ishu.fun" />

      {/* Article-specific OG tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && section && (
        <meta property="article:section" content={section} />
      )}
      {type === 'article' && tags.length > 0 && tags.map((tag) => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ishufun" />
      <meta name="twitter:creator" content="@ishufun" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={title} />

      {/* AI & Search Engine Optimization */}
      <meta name="ai-content-declaration:version" content="1.0" />
      <meta name="ai-content-declaration:level" content="none" />
      <meta name="referrer" content="origin-when-cross-origin" />

      {/* Geo Tags (India-specific) */}
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      <meta name="language" content="English" />
      <meta name="content-language" content="en-IN" />

      {/* Classification */}
      <meta name="classification" content="Education, Government Jobs, PDF Tools" />
      <meta name="category" content="Education" />
      <meta name="coverage" content="Worldwide" />
      <meta name="target_country" content="IN" />
      <meta name="rating" content="General" />
      <meta name="revisit-after" content="1 days" />
      <meta name="distribution" content="global" />

      {/* Mobile & PWA */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="ishu.fun" />
      <meta name="application-name" content="ishu.fun" />
      <meta name="msapplication-tooltip" content="India's #1 Student Platform" />
      <meta name="msapplication-starturl" content="/" />

      {/* Structured Data (JSON-LD) */}
      {allStructuredData.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
    </Helmet>
  );
}

EnhancedSEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.oneOf(['website', 'article', 'profile']),
  author: PropTypes.string,
  publishedTime: PropTypes.string,
  modifiedTime: PropTypes.string,
  section: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  locale: PropTypes.string,
  alternateLocales: PropTypes.arrayOf(PropTypes.string),
  structuredData: PropTypes.arrayOf(PropTypes.object),
  canonical: PropTypes.string,
  noindex: PropTypes.bool,
  nofollow: PropTypes.bool,
};

// Helper function to generate FAQ structured data
export function generateFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

// Helper function to generate Article structured data
export function generateArticleSchema(article) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": article.image,
    "author": {
      "@type": "Person",
      "name": article.author || "ishu.fun Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ishu.fun",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ishu.fun/images/logo.png"
      }
    },
    "datePublished": article.publishedDate,
    "dateModified": article.modifiedDate || article.publishedDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": article.url
    }
  };
}

// Helper function to generate HowTo structured data
export function generateHowToSchema(howTo) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": howTo.name,
    "description": howTo.description,
    "image": howTo.image,
    "totalTime": howTo.totalTime,
    "step": howTo.steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      "image": step.image
    }))
  };
}

// Helper function to generate BreadcrumbList structured data
export function generateBreadcrumbSchema(breadcrumbs) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
}
