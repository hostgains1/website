import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // WICHTIG: www.hostgains.at ist die kanonische Domain
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/static/'],
      },
    ],
    sitemap: 'https://www.hostgains.at/sitemap.xml',
    host: 'https://www.hostgains.at',
  };
}
