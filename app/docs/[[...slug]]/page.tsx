import { notFound } from 'next/navigation';
import { DocsPage } from 'fumadocs-ui/page';
import { source } from '@/lib/source';

type PageData = {
  body: any;
  toc: any;
  full: any;
};

export default function Page({ params }: { params: { slug: string[] } }) {
  const page = source.getPage('/' + (params.slug || []).join('/'));
  if (!page) notFound();

  const MDXContent = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <MDXContent />
    </DocsPage>
  );
}
