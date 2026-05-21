import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://hameddaoud.pages.dev/",
    title: "Hamed Daoud",
    description:
      "ML/AI engineer. CS senior at EJUST. Notes on diffusion models, agents, and applied ML.",
    author: "Hamed Daoud",
    profile: "https://hameddaoud.pages.dev/",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Africa/Cairo",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: { enabled: false },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/HamedDaoud" },
    { name: "linkedin", url: "https://www.linkedin.com/in/hameddaoud/" },
    { name: "mail",     url: "mailto:itshamedahmed@gmail.com" },
  ],
  shareLinks: [
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
