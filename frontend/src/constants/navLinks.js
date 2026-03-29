// constants/navLinks.js
export const navLinks = [
  { label: 'Results', href: '/results', icon: 'ClipboardText' },
  { label: 'Jobs', href: '/jobs', icon: 'Briefcase' },
  { label: 'Tools', href: '/tools', icon: 'Toolbox' },
  { label: 'News', href: '/news', icon: 'Newspaper' },
  { label: 'Blog', href: '/blog', icon: 'BookOpen' },
];

export const moreLinks = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Test / Quiz', href: '/test', badge: 'Coming Soon' },
  { label: 'Telegram Channel', href: 'https://t.me/ishufun', external: true },
];

export const footerLinks = {
  results: [
    { label: 'JEE Results', href: '/results/jee' },
    { label: 'NEET Results', href: '/results/neet' },
    { label: 'UPSC Results', href: '/results/upsc' },
    { label: 'SSC Results', href: '/results/ssc' },
    { label: 'Railway Results', href: '/results/railway' },
    { label: 'All Results →', href: '/results' },
  ],
  tools: [
    { label: 'PDF Merger', href: '/tools/merge-pdf' },
    { label: 'Compress PDF', href: '/tools/compress-pdf' },
    { label: 'PDF to Word', href: '/tools/pdf-to-word' },
    { label: 'E-Sign PDF', href: '/tools/e-sign-pdf' },
    { label: 'OCR Tool', href: '/tools/pdf-ocr' },
    { label: 'All Tools →', href: '/tools' },
  ],
  info: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Blog', href: '/blog' },
    { label: 'Sitemap', href: '/sitemap' },
    { label: 'Careers', href: '/careers' },
    { label: 'Advertise', href: '/advertise' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Disclaimer', href: '/disclaimer' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'DMCA', href: '/dmca' },
    { label: 'Report Issue', href: '/report' },
  ],
};
