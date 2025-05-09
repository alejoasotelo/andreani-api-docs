import { generateFiles } from 'fumadocs-openapi';

void generateFiles({
  // the OpenAPI schema
  // For Vercel users, we recommend a URL instead.
  input: ['../../openapi.yaml'],
  output: './content/docs',
  // we recommend to enable it
  // make sure your endpoint description doesn't break MDX syntax.
  includeDescription: true,
});
