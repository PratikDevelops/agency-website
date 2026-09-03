import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

    return [
        { url: `${baseUrl}/`, lastModified: new Date(), priority: 1.0 },
        { url: `${baseUrl}/services`, lastModified: new Date(), priority: 0.8 },
        { url: `${baseUrl}/services/web-development`, lastModified: new Date(), priority: 0.8 },
        { url: `${baseUrl}/work`, lastModified: new Date(), priority: 0.8 },
        { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.8 },
        { url: `${baseUrl}/pricing`, lastModified: new Date(), priority: 0.5 },
        { url: `${baseUrl}/about`, lastModified: new Date(), priority: 0.5 },
        { url: `${baseUrl}/insights`, lastModified: new Date(), priority: 0.5 },
    ];
}