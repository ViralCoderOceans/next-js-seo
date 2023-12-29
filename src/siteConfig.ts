"server-only"

interface ITwitter {
  username: string
  url: string
}
interface ISiteConfig {
  email: {
    shortName: string
    name: string
  }
  logo: string
  appUrl: string
  name: string
  siteName: string
  urlTemplateName: string
  shortName: string
  url: string
  meta: {
    title: string
    description: string
  }
  organization: {
    name: string
    url: string
    logo: string
  }
  creator: {
    name: string
    url: string
    twitter: ITwitter
  }
  publisher: string
  baseUrl: string
  twitter: ITwitter
  socialUrl: {
    facebook: string
    linkedIn: string
    instagram: string
    twitter: string
    github: string
    youtube: string
    pinterest: string
  }
}

const SiteConfig: ISiteConfig = {
  name: "Next.JS SEO",
  logo: `${process.env.SITE_URL}/logo.png`,
  email: {
    shortName: "Example",
    name: "Next.JS SEO",
  },
  siteName: "Next.JS SEO",
  urlTemplateName: "Next.JS SEO",
  shortName: "Next.JS SEO",
  twitter: {
    username: "@JagodanaStudio",
    url: "https://twitter.com/JagodanaStudio",
  },
  organization: {
    name: "JagodanaStudio",
    url: "https://www.jagodana.com",
    logo: `${process.env.SITE_URL}/logo.png`,
  },
  creator: {
    name: "JagodanaStudio",
    url: `${process.env.SITE_URL}`,
    twitter: {
      username: "@JagodanaStudio",
      url: "https://twitter.com/JagodanaStudio",
    },
  },
  publisher: "JagodanaStudio",
  url: `${process.env.SITE_URL}`,
  baseUrl: `${process.env.SITE_URL}`,
  meta: {
    // seo title length between 50 and 60
    title: "Next.JS SEO",
    // seo description length between 50 and 160
    description: "Transform text into captivating videos. Unleash your storytelling skills with Story Generator. Create visually stunning narratives effortlessly.",
  },
  socialUrl: {
    facebook: "https://www.facebook.com/jagodana.studio",
    linkedIn: "https://www.linkedin.com/in/jagodana-studio-bb87b3287",
    instagram: "https://www.instagram.com/jagodanastudio",
    twitter: "https://twitter.com/JagodanaStudio",
    github: "https://github.com/JagodanaStudio",
    youtube: "https://www.youtube.com/@JagodanaStudio",
    pinterest: "https://in.pinterest.com/JagodanaStudio/"
  },
  appUrl: `${process.env.SITE_URL}`,
}

export default SiteConfig
