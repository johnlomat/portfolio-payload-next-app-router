import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use | John Lomat',
  description:
    'Read our Terms of Use to understand the rules and regulations for using our website.',
  openGraph: {
    title: 'Terms of Use | John Lomat',
    description:
      'Read our Terms of Use to understand the rules and regulations for using our website.',
    images:
      'https://res.cloudinary.com/dhaveyc4z/image/upload/v1722674666/portfolio/1722674662539_john-lomat-og-image.png',
  },
}

export default async function TermsPage() {
  return (
    <div className="page-content">
      <section className="relative bg-[radial-gradient(ellipse_at_center,_#FFFFFF_5%,#D7D7D7_70%)] py-24 md:pt-40">
        <div className="container flex flex-wrap space-y-6">
          <div className="flex w-full flex-col items-center space-y-20">
            <div className="w-full max-w-3xl rounded-lg bg-white p-6 shadow-md">
              <h1 className="mb-4 text-2xl font-bold">Terms of Use</h1>
              <p className="mb-4">
                Welcome to my portfolio website. By accessing or using this website, you agree to
                comply with and be bound by the following terms and conditions of use, which
                together with our privacy policy govern my relationship with you in relation to this
                website.
              </p>
              <p className="mb-4">
                The term &lsquo;I&lsquo; or &lsquo;me&lsquo; refers to the owner of the website. The
                term &lsquo;you&lsquo; refers to the user or viewer of this website.
              </p>
              <h2 className="mb-2 text-xl font-semibold">1. Use of the Website</h2>
              <p className="mb-4">
                The content of the pages of this website is for your general information and use
                only. It is subject to change without notice.
              </p>
              <h2 className="mb-2 text-xl font-semibold">2. Intellectual Property</h2>
              <p className="mb-4">
                This website contains material which is owned by or licensed to me. This material
                includes, but is not limited to, the design, layout, look, appearance, and graphics.
                Reproduction is prohibited other than in accordance with the copyright notice, which
                forms part of these terms and conditions.
              </p>
              <h2 className="mb-2 text-xl font-semibold">3. User Conduct</h2>
              <p className="mb-4">
                You must not misuse this website. You will not: commit or encourage a criminal
                offense; transmit or distribute a virus, trojan, worm, logic bomb or any other
                material which is malicious, technologically harmful, in breach of confidence or in
                any way offensive or obscene; hack into any aspect of the service; corrupt data;
                cause annoyance to other users; infringe upon the rights of any other person&lsquo;s
                proprietary rights; send any unsolicited advertising or promotional material,
                commonly referred to as &quot;spam&quot;; or attempt to affect the performance or
                functionality of any computer facilities of or accessed through this website.
              </p>
              <h2 className="mb-2 text-xl font-semibold">4. Limitation of Liability</h2>
              <p className="mb-4">
                The information on this website is provided on an &quot;as is&quot; basis. To the
                fullest extent permitted by law, I exclude all liability for any loss or damage
                arising out of or in connection with the use of this website.
              </p>
              <h2 className="mb-2 text-xl font-semibold">5. Changes to Terms</h2>
              <p className="mb-4">
                I may revise these terms of use at any time without notice. By using this website,
                you agree to be bound by the current version of these terms of use.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
