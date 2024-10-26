import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faCodepen, faGithub } from '@fortawesome/free-brands-svg-icons'
import Separator from '@/components/ui/Separator'
import ContactForm from '@/components/forms/ContactForm'
import { HeadingTwo } from '@/components/ui/HeadingPreset'
import SkillsSection from '@/components/sections/SkillsSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import serialize from '@/components/richtext/serialize'

export async function generateMetadata() {
  const metaData = await fetch(
    `${process.env.PAYLOAD_SITE_URL}/api/pages?where[slug][equals]=home`,
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

export default async function Home() {
  const userData = await fetch(
    `${process.env.PAYLOAD_SITE_URL}/api/users?where[email][equals]=edwardlomat1503@gmail.com`,
    {
      next: {
        revalidate: 60,
      },
    },
  ).then(async (response) => (await response.json()).docs[0])

  const information = userData.information
  const socialLinks = userData.social_links

  return (
    <div className="page-content">
      <section className="relative bg-[#969696] bg-none bg-auto bg-no-repeat pt-0 md:pt-12 xl:bg-[#D7D7D7] xl:bg-[url('/images/section-background-1.svg')] xl:bg-[center_right_-20rem] min-[1500px]:bg-[center_right_-10rem] min-[1800px]:bg-right">
        <div className="container flex w-full flex-wrap space-y-6 lg:w-[95%]">
          <div className="bg-top-center absolute bottom-0 left-0 flex w-full items-center bg-[url('/images/rectangle-82.svg')] bg-cover bg-no-repeat px-4 py-[15%] md:static md:bottom-auto md:left-auto md:w-1/2 md:bg-none md:p-0">
            <div className="relative flex w-full flex-col pe-12 pt-[5.625rem] font-raleway md:w-auto md:p-0">
              <h1 className="mb-0 text-[1.25rem] font-bold text-white md:mb-4 md:text-[2.5rem] md:text-neutral-900">
                Hi, I am{' '}
                <span className="mt-0 block text-[2.1875rem] leading-none md:mt-6 md:text-[5rem]">
                  {information.first_name} {information.last_name}
                </span>
              </h1>
              <h2 className="text-[0.875rem] font-bold text-white md:text-[1.5rem] xl:text-[#909090]">
                {information.position}
              </h2>
              <div className="absolute bottom-0 right-0 mt-0 flex w-auto max-w-[10.5rem] flex-col justify-between space-y-4 md:static md:bottom-auto md:right-auto md:mt-12 md:w-full md:flex-row md:space-y-0">
                <Link
                  href={`${socialLinks.linkedin}`}
                  target="_blank"
                  aria-label="See my working experience"
                >
                  <div className="group flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-white hover:bg-black md:bg-[#C4C4C4]">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="text-[2rem] text-black group-hover:text-white"
                    />
                  </div>
                </Link>
                <Link
                  href={`${socialLinks.github}`}
                  target="_blank"
                  aria-label="See my Github projects"
                >
                  <div className="group flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-white hover:bg-black md:bg-[#C4C4C4]">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="text-[2rem] text-black group-hover:text-white"
                    />
                  </div>
                </Link>
                <Link
                  href={`${socialLinks.codepen}`}
                  target="_blank"
                  aria-label="See my Codepen projects"
                >
                  <div className="group flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-white hover:bg-black md:bg-[#C4C4C4]">
                    <FontAwesomeIcon
                      icon={faCodepen}
                      className="text-[2rem] text-black group-hover:text-white"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-[0!important] flex w-full justify-center md:w-1/2">
            <Image
              src="/images/john-lomat-profile-picture.png"
              alt="John Lomat profile picture"
              width={515}
              height={872}
              priority={true}
            />
          </div>
        </div>
      </section>

      <div className="bg-[radial-gradient(ellipse_at_center,_#FFFFFF_5%,#D7D7D7_70%)]">
        <section className="relative py-24" id="about-me">
          <div className="container flex flex-wrap space-y-6">
            <div className="flex w-full flex-col items-center space-y-20">
              <HeadingTwo title="About me" />
              <div className="w-full max-w-[46.875rem] space-y-4 text-center font-open-sans text-[1.0625rem]">
                {serialize(information.about_me)}
              </div>
            </div>
          </div>
        </section>

        <Separator />

        <SkillsSection />
      </div>

      <ProjectsSection />

      <section
        className="relative bg-[radial-gradient(ellipse_at_center,_#FFFFFF_5%,#D7D7D7_70%)] py-24"
        id="contact-me"
      >
        <div className="container flex flex-wrap space-y-6">
          <div className="flex w-full flex-col items-center space-y-20">
            <HeadingTwo title="Contact" />
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
