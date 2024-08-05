import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | John Lomat',
  description:
    'Read our privacy policy to understand how we handle your data and protect your privacy.',
  openGraph: {
    title: 'Privacy Policy | John Lomat',
    description:
      'Read our privacy policy to understand how we handle your data and protect your privacy.',
    images:
      'https://res.cloudinary.com/dhaveyc4z/image/upload/v1722674666/portfolio/1722674662539_john-lomat-og-image.png',
  },
}

export default async function PrivacyPage() {
  return (
    <div className="page-content">
      <section className="relative bg-[radial-gradient(ellipse_at_center,_#FFFFFF_5%,#D7D7D7_70%)] py-24 md:pt-40">
        <div className="container flex flex-wrap space-y-6">
          <div className="flex w-full flex-col items-center space-y-20">
            <div className="w-full max-w-3xl rounded-lg bg-white p-6 shadow-md">
              <h1 className="mb-4 text-2xl font-bold">Privacy Policy</h1>
              <p className="mb-4">
                This Privacy Policy explains how we collect, use, disclose, and safeguard your
                information when you visit our website and use our contact form.
              </p>
              <p className="mb-4">
                By accessing or using this website, you agree to the terms of this Privacy Policy.
                If you do not agree to the terms of this Privacy Policy, please do not access the
                site.
              </p>
              <h2 className="mb-2 text-xl font-semibold">1. Information Collection</h2>
              <p className="mb-4">
                We collect information you provide directly to us through the contact form on our
                website. The information we may collect includes:
              </p>
              <ul className="mb-4 list-disc pl-5">
                <li>
                  Personal Data: Personally identifiable information, such as your name, email
                  address, and any other information you choose to provide in your message.
                </li>
              </ul>
              <h2 className="mb-2 text-xl font-semibold">2. Use of Information</h2>
              <p className="mb-4">
                We may use the information we collect from you in the following ways:
              </p>
              <ul className="mb-4 list-disc pl-5">
                <li>To respond to your comments, questions, and provide customer service.</li>
                <li>To improve our website and services.</li>
              </ul>
              <h2 className="mb-2 text-xl font-semibold">3. Disclosure of Information</h2>
              <p className="mb-4">
                We may share information we have collected about you in certain situations. Your
                information may be disclosed as follows:
              </p>
              <ul className="mb-4 list-disc pl-5">
                <li>
                  By Law or to Protect Rights: If we believe the release of information about you is
                  necessary to respond to legal process or to protect the rights, property, and
                  safety of others.
                </li>
                <li>
                  Business Transfers: In connection with or during negotiations of any merger, sale
                  of company assets, financing, or acquisition of all or a portion of our business
                  to another company.
                </li>
              </ul>
              <h2 className="mb-2 text-xl font-semibold">4. Security of Your Information</h2>
              <p className="mb-4">
                We use administrative, technical, and physical security measures to help protect
                your personal information. While we have taken reasonable steps to secure the
                personal information you provide to us, please be aware that despite our efforts, no
                security measures are perfect or impenetrable, and no method of data transmission
                can be guaranteed against any interception or other type of misuse.
              </p>
              <h2 className="mb-2 text-xl font-semibold">5. Changes to This Privacy Policy</h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time in order to reflect, for
                example, changes to our practices or for other operational, legal, or regulatory
                reasons.
              </p>
              <p className="mb-4">
                We encourage you to review this Privacy Policy periodically to be informed of how we
                are protecting your information.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
