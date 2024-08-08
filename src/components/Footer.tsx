'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  // Function to handle smooth scroll to top
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="bg-neutral-900 py-12 font-montserrat">
      <div className="container flex flex-wrap space-y-6">
        <div className="flex w-full flex-col items-center justify-center">
          <button
            onClick={handleScrollToTop}
            className="flex flex-col items-center justify-center focus:outline-none"
          >
            <Image
              src="/images/back-to-top-arrow.svg"
              alt="arrow top"
              width={9}
              height={10}
              className="mb-2"
            />
            <span className="font-bold uppercase text-white">Back to top</span>
          </button>
        </div>
        <div className="mx-auto flex w-full max-w-[16rem] flex-row justify-between">
          <a
            href="https://linkedin.com/in/john-lomat-3b0447121/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full hover:bg-white/30"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-[2rem] text-white" />
          </a>
          <a
            href="https://www.upwork.com/freelancers/~01bf699b1e5f882641"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full hover:bg-white/30"
          >
            <Image src="/images/upwork-logo.svg" alt="Upwork logo" width={30} height={21} />
          </a>
          <a
            href="https://www.onlinejobs.ph/jobseekers/info/1267464"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full hover:bg-white/30"
          >
            <Image
              src="/images/oj-logo-icon.png"
              alt="OnlineJobs PH logo"
              width={30}
              height={33}
              className="brightness-[100]"
            />
          </a>
          <a
            href="https://www.raket.ph/juandev23"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full hover:bg-white/30"
          >
            <Image
              src="/images/raketph-logo.svg"
              alt="Raket PH logo"
              width={30}
              height={28}
              className="brightness-[100]"
            />
          </a>
          <a
            href="mailto:edwardlomat1503@gmail.com"
            className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full hover:bg-white/30"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-[2rem] text-white" />
          </a>
        </div>
        <div className="w-full">
          <div className="text-center text-white">
            <Link href="/terms-of-use" className="hover:text-gray-300 hover:underline">
              Terms of Use
            </Link>{' '}
            |{' '}
            <Link href="/privacy-policy" className="hover:text-gray-300 hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="w-full">
          <div className="text-center text-white">
            <span className="font-bold">&copy; {currentYear} John Lomat</span> All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
