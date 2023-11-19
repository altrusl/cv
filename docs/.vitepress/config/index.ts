import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/cv/",
  lang: "en",
  title: "Ruslan Makarov",
  titleTemplate: "Ruslan Makarov CV's - [Software Architect / Principal Engineer]",
  description: "Ruslan Makarov CV's - [Software Architect / Principal Engineer]",
  head: [
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:site_name", content: "Vue FAQ" }],
    ["meta", { property: "og:image", content: "/images/cv-logo.png" }],
    ["meta", { name: "twitter:image", content: "/images/cv-logo.png" }],
    ["link", { rel: "apple-touch-icon", sizes: "180x180", href: "/images/cv-logo.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/images/cv-logo.png" }],
    ["link", { rel: "shortcut icon", href: "/favicon.ico" }],
    ["script", { async: "", src: "https://www.googletagmanager.com/gtag/js?id=G-67MV8L1RGB" }],
        [
          "script",
          {},
          `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-67MV8L1RGB');`,
        ],
  ],
  themeConfig: {
    // logo: "/images/cv-logo.png",
    logo: {
      light: '/images/cv-logo.svg',
      dark: '/images/cv-logo-white.svg'
    },
    search: {
      provider: "local",
    },
    nav: [
      { text: "Home", link: "/" }
    ],    
    sidebar: [
      { text: "Summary", link: "/summary" },
      { text: "Education and Skills", link: "/skills" },
      { text: "Work experience", link: "/experience" },
      { text: "Side work", link: "/side-work" },
      { text: "Success story", link: "/success-story" },
      { text: "Contacts", link: "/contacts" },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/altrusl/cv" }],
  },
});
