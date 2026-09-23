# Syntax Guild Portfolio

An accessible, responsive developer portfolio built with Astro, React, and Tailwind CSS. The site includes a hero section, skills, selected projects, experience timeline, and a contact form.

## Requirements

- Node.js 22.12 or newer
- npm

## Getting started

```sh
npm install
npm run dev
```

The development server runs at `http://localhost:4321` by default.

## Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Build the production site in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run astro -- --help` | Show Astro CLI help |

## Project structure

```text
src/
  components/   React UI components
  data/         Portfolio content and site settings
  layouts/      Shared Astro layouts
  pages/        Route entrypoints
  styles/       Global CSS and Tailwind styles
public/         Static assets
```

## Customization

Edit `src/data/site.ts` to update the name, role, bio, social links, skills, projects, and work history. Replace the files in `public/` when adding custom static assets.

## Deployment

Run `npm run build` and deploy the generated `dist/` directory to any static host, including Netlify, Vercel, GitHub Pages, or Cloudflare Pages.

## License

See [LICENSE](./LICENSE).
