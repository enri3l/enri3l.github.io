import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Enrico Lionello",
  description:
    "TypeScript developer focused on AWS automation and infrastructure tooling",

  // GitHub Pages configuration
  base: "/",

  // Carbon theme configuration
  themeConfig: {
    // Navigation
    nav: [
      { text: "Home", link: "/" },
      { text: "Projects", link: "/projects/" },
      { text: "About", link: "/about" },
      { text: "Contact", link: "/contact" },
    ],

    // Sidebar for projects section
    sidebar: {
      "/projects/": [
        {
          text: "Featured Projects",
          items: [
            { text: "aws-ts CLI", link: "/projects/aws-ts" },
            { text: "TypeScript Template", link: "/projects/ts-template" },
          ],
        },
      ],
    },

    // Social links
    socialLinks: [{ icon: "github", link: "https://github.com/enri3l" }],

    // Footer
    footer: {
      message: "Built with VitePress Carbon",
      copyright: "Copyright © 2025 Enrico Lionello",
    },

    // Search
    search: {
      provider: "local",
    },
  },

  // Markdown configuration
  markdown: {
    theme: {
      light: "github-light",
      dark: "github-dark",
    },
    lineNumbers: true,
  },

  // Enable dark mode by default
  appearance: "dark",

  // Site metadata
  head: [
    ["meta", { name: "author", content: "Enrico Lionello" }],
    [
      "meta",
      {
        name: "keywords",
        content: "TypeScript, AWS, CLI, Developer, Infrastructure, Automation",
      },
    ],
    [
      "meta",
      {
        property: "og:title",
        content: "Enrico Lionello - TypeScript Developer",
      },
    ],
    [
      "meta",
      {
        property: "og:description",
        content:
          "TypeScript developer focused on AWS automation and infrastructure tooling",
      },
    ],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:url", content: "https://enri3l.github.io" }],
  ],
});
