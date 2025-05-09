import * as OpenAPI from 'fumadocs-openapi';
import { rimraf } from 'rimraf';

export async function generateDocs() {
  await rimraf('./content/docs/openapi/(generated)');

  await Promise.all([
    OpenAPI.generateFiles({
      input: ['./content/docs/openapi/andreani.yaml'],
      output: './content/docs/openapi/(generated)',
      per: 'operation',
      structurePath: {
        // Cambia la estructura de directorio para que todos los endpoints estén en la raíz
        pathRegex: /\/(v\d+)?\/?(.+)/,
        replacement: (groups) => `/${groups[1] || ''}/${groups[2]}`,
      },
    }),
  ]);
}