import { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://estrelladorada.com',
      lastModified: new Date(),
    }
  ];
}
