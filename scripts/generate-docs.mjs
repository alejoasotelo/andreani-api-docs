import * as OpenAPI from 'fumadocs-openapi';
import { rimraf } from 'rimraf';

export async function generateDocs() {
  await rimraf('./content/docs/*', { glob: { ignore: ['./content/docs/index.mdx', './content/docs/andreani.yaml'] } });

  await Promise.all([
    OpenAPI.generateFiles({
      input: ['./content/docs/andreani.yaml'],
      output: './content/docs/',
      per: 'operation',
      structurePath: {
        // Cambia la estructura de directorio para que todos los endpoints estén en la raíz
        pathRegex: /\/(v\d+)?\/?(.+)/,
        replacement: (groups) => `/${groups[1] || ''}/${groups[2]}`,
      },
    }),
  ]);
}