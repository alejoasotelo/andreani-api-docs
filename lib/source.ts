import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { loader } from 'fumadocs-core/source';

// Read and parse the OpenAPI YAML file
const openapiPath = path.resolve(process.cwd(), 'openapi.yaml');
const openapiFile = fs.readFileSync(openapiPath, 'utf8');
const openapi = yaml.load(openapiFile) as any;

// Extract documentation from the OpenAPI file
const docs = {
  toFumadocsSource: () => {
    const paths = openapi.paths;
    const docsArray = Object.keys(paths).map((path) => {
      const methods = Object.keys(paths[path]);
      return methods.map((method) => {
        const operation = paths[path][method];
        return {
          path,
          method,
          summary: operation.summary,
          description: operation.description,
          body: operation.requestBody?.content['application/json']?.schema?.properties?.body, // Added body property
        };
      });
    }).flat();
    return docsArray;
  }
};

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  // it assigns a URL to your pages
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
});
