import { redirect } from 'next/navigation';

export default function Home() {
  return (
    <div>
      <p style={{ textAlign: 'center', margin: '20px 0', fontStyle: 'italic' }}>
        Este sitio no es la documentación oficial de Andreani. Fue creado por Alejo Sotelo (<a href="https://alejosotelo.com.ar" target="_blank" rel="noopener noreferrer">alejosotelo.com.ar</a>).
      </p>
      {/* Redirección existente */}
      {redirect('/docs')}
    </div>
  );
}
