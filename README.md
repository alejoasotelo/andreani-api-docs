# andreani-docs

This is a Next.js application generated with
[Create Fumadocs](https://github.com/fuma-nama/fumadocs).

Run development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open http://localhost:3000 with your browser to see the result.

## Learn More

To learn more about Next.js and Fumadocs, take a look at the following
resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Fumadocs](https://fumadocs.vercel.app) - learn about Fumadocs

## Deploying to GitHub Pages

To deploy the documentation to GitHub Pages, follow these steps:

1. Ensure you have the `gh-pages` package installed. If not, you can install it by running:
   ```bash
   npm install gh-pages --save-dev
   ```

2. Add the following `deploy` script to your `package.json` file:
   ```json
   "scripts": {
     "deploy": "npm run build && npx gh-pages -d out"
   }
   ```

3. Run the deploy script to build and deploy the documentation to GitHub Pages:
   ```bash
   npm run deploy
   ```

4. Ensure the `out` directory is included in the `.gitignore` file to avoid committing build artifacts.
