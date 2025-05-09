import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import React from 'react';

export default function APIPage(props: any) {
  // Normalizar el path para que siempre apunte a la raíz del proyecto
  let normalizedDoc = props.document.replace(/^[.\/]+/, '');
  const docPath = path.resolve(process.cwd(), normalizedDoc);
  let operationInfo = null;
  let error = null;
  try {
    const file = fs.readFileSync(docPath, 'utf8');
    const openapi = yaml.load(file) as any;
    // Buscar la operación
    const op = props.operations?.[0];
    if (op && openapi.paths && openapi.paths[op.path] && openapi.paths[op.path][op.method]) {
      operationInfo = openapi.paths[op.path][op.method];
    } else {
      error = 'Operación no encontrada en el OpenAPI.';
    }
  } catch (e) {
    error = 'No se pudo leer el archivo OpenAPI.';
  }
  return (
    <div style={{border: '1px solid #4ade80', borderRadius: 8, padding: 24, background: '#222', color: '#fff', margin: '16px 0'}}>
      <h3 style={{marginTop: 0}}>APIPage</h3>
      {error && <div style={{color: 'red'}}>{error}</div>}
      {operationInfo && (
        <>
          <div><strong>Summary:</strong> {operationInfo.summary}</div>
          <div><strong>Description:</strong> <pre style={{whiteSpace:'pre-wrap'}}>{operationInfo.description}</pre></div>
        </>
      )}
      {props.children}
    </div>
  );
}
