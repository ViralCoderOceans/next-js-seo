import SiteConfig from "@/siteConfig"
import { Metadata } from "next"

export const openGraphMetaData: Metadata["openGraph"] = {
  title: SiteConfig.meta.title,
  description: SiteConfig.meta.description,
  url: SiteConfig.baseUrl,
  type: "website",
  images: [
    {
      url: `${SiteConfig.appUrl}/images/open-graph/og.png`,
      width: 1200,
      height: 630,
      alt: SiteConfig.meta.title,
    },
  ],
}

export const twitterMetaData: Metadata["twitter"] = {
  card: "summary_large_image",
  site: SiteConfig.twitter.username,
  creator: SiteConfig.creator.twitter.username,
  title: SiteConfig.meta.title,
  description: SiteConfig.meta.description,
  images: [
    {
      url: `${SiteConfig.appUrl}/images/twitter/twitter.png`,
      width: 1200,
      height: 630,
      type: "image/png",
      alt: SiteConfig.meta.title,
    },
  ],
}

export const defaultMetadata = {
  title: {
    default: SiteConfig.name,
    template: `%s | ${SiteConfig.urlTemplateName}`,
  },
  description: SiteConfig.meta.description,
  applicationName: SiteConfig.shortName,
  generator: "Next.js",
  creator: SiteConfig.creator.name,
  publisher: SiteConfig.publisher,
  metadataBase: new URL(SiteConfig.baseUrl),
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: new URL(SiteConfig.baseUrl).toString(),
  },
  openGraph: {
    ...openGraphMetaData,
  },
  twitter: {
    ...twitterMetaData,
  },
  authors: [
    {
      name: SiteConfig.creator.name,
      url: SiteConfig.creator.url,
    },
  ],
};

export const pagesMetadata = [
  {
    title: 'Test',
    description: 'This is a Test title, All the latest updates, improvements, and fixes',
    twitter: {
      ...twitterMetaData,
      title: 'Test',
      description: 'This is a Test title, All the latest updates, improvements, and fixes',
    },
    openGraph: {
      ...openGraphMetaData,
      title: 'Test',
      description: 'This is a Test title, All the latest updates, improvements, and fixes',
    },
    alternates: {
      canonical: '/test',
    }
  },
  {
    title: 'Blog',
    description: 'This is a Blog title, All the latest updates, improvements, and fixes',
    twitter: {
      ...twitterMetaData,
      title: 'Blog',
      description: 'This is a Blog title, All the latest updates, improvements, and fixes',
    },
    openGraph: {
      ...openGraphMetaData,
      title: 'Blog',
      description: 'This is a Blog title, All the latest updates, improvements, and fixes',
    },
    alternates: {
      canonical: '/blog',
    }
  }
]