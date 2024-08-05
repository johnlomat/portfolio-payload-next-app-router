import serialize from '@/components/richtext/serialize'

export async function generateMetadata() {
  const metaData = await fetch(
    `${process.env.PAYLOAD_SITE_URL}/api/pages?where[slug][equals]=privacy-policy`,
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

export default async function PrivacyPage() {
  const pageData = await fetch(
    `${process.env.PAYLOAD_SITE_URL}/api/pages?where[slug][equals]=privacy-policy`,
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
            <div className="w-full max-w-3xl space-y-4 rounded-lg bg-white p-6 shadow-md">
              <h1 className="text-2xl font-bold">{pageData.title}</h1>
              {serialize(pageData.content)}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
