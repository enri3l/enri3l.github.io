# Personal Website

Personal website and portfolio built with VitePress.

🌐 **Live Site**: [enri3l.github.io](https://enri3l.github.io)

## Tech Stack

- **VitePress**: Modern static site generator with Vue 3
- **TypeScript**: Strict configuration with comprehensive type safety
- **GitHub Pages**: Automated deployment via GitHub Actions
- **Vue 3**: Component-based architecture with modern tooling

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm docs:dev

# Build for production
pnpm docs:build

# Preview production build
pnpm docs:preview
```

## Quality Standards

- **ESLint**: Comprehensive linting with TypeScript integration
- **markdownlint-cli2**: Documentation consistency enforcement
- **TypeScript**: Strict mode with vue-tsc type checking
- **Prettier**: Consistent code formatting
- **Lefthook**: Pre-commit quality gates

## CI/CD

Automated deployment pipeline:

1. **Linting & Type Checking**: Quality validation on every push
2. **VitePress Build**: Static site generation
3. **GitHub Pages Deployment**: Automatic publishing to live site

## Project Structure

```text
docs/
├── .vitepress/
│   ├── config.ts          # Site configuration
│   └── theme/             # Custom theme components
├── index.md               # Homepage
├── projects/              # Project showcase
├── about.md               # Professional background
└── contact.md             # Contact information
```

## License

MIT

---

_Part of the Enrico Lionello development ecosystem alongside [aws-ts](https://github.com/enri3l/aws-ts) and [ts-template](https://github.com/enri3l/ts-template)_
