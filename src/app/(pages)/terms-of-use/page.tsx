import serialize from '@/components/richtext/serialize'

export async function generateMetadata() {
  const metaData = await fetch(
    `${process.env.PAYLOAD_SITE_URL}/api/pages?where[slug][equals]=terms-of-use`,
    { next: { revalidate: 60 } },
  ).then(async (response) => (await response.json()).docs[0])

  const meta = metaData.meta

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords.join(', ') || null,
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: meta.image.url,
    },
  }
}

export default async function TermsPage() {
  const pageData = await fetch(
    `${process.env.PAYLOAD_SITE_URL}/api/pages?where[slug][equals]=terms-of-use`,
    {
      next: {
        revalidate: 60,
      },
    },
  ).then(async (response) => (await response.json()).docs[0])

  return (
    <div className="page-content">
      <section className="relative bg-[radial-gradient(ellipse_at_center,_#FFFFFF_5%,#D7D7D7_70%)] py-24 md:pt-40">
        <div className="container flex flex-wrap space-y-6">
          <div className="flex w-full flex-col items-center space-y-20">
            <div className="w-full max-w-3xl rounded-lg bg-white p-6 shadow-md [&_h1]:mb-4 [&_h1]:text-2xl [&_h1]:font-bold [&_h2]:mb-2 [&_h2]:text-xl [&_h2]:font-semibold [&_p:last-child]:mb-0 [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5">
              <h1>{pageData.title}</h1>
              {serialize(pageData.content)}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
