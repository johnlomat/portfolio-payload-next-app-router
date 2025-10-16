import Header from '@/components/Header'

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header variant="default" />
      {children}
    </>
  )
}
