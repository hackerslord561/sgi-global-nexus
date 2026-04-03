import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    // This points Google directly to your sitemap
    sitemap: 'https://sregya.com/sitemap.xml',
  };
}