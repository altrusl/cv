import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/cv/",
  lang: "en",
  title: "Ruslan Makarov",
  description: "Software Architect / Principal Engineer",
  head: [
    // ["meta", { name: "og:type", content: "article" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:site_name", content: "Vue FAQ" }],
    ["meta", { property: "og:image", content: "/images/cv-logo.png" }],
    ["meta", { name: "twitter:image", content: "/images/cv-logo.png" }],
    ["link", { rel: "apple-touch-icon", sizes: "180x180", href: "/images/cv-logo.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/images/cv-logo.png" }],
    ["link", { rel: "shortcut icon", href: "/favicon.ico" }],
  ],
  themeConfig: {
    logo: "/images/cv-logo.png",
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
