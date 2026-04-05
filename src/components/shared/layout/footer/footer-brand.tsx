import RevealAnimation from '@/src/components/animation/reveal-animation';
import { SocialIcons } from '@/src/components/shared/social-icons';
import { footerContact, footerSocialLinks } from '@/src/data/footer';
import Image from 'next/image';
import Link from 'next/link';

const FooterBrand = () => (
  <RevealAnimation delay={0.1}>
    <div className="col-span-12 w-full max-w-130 text-center">
      <div className="space-y-8">
        <Link href="/" className="inline-flex justify-center">
          <figure className="w-42">
            <Image
              src="/images/bethy-logo.svg"
              alt="Bethy AI"
              width={168}
              height={44}
              className="h-auto w-full"
              priority
            />
          </figure>
        </Link>
        <div className="space-y-6">
          <div>
            <p className="text-tagline-2 text-background-11 mb-1 font-semibold">
              {footerContact.addressTitle}
            </p>
            <p className="text-tagline-3 font-normal text-white/50">{footerContact.address}</p>
          </div>
          <div>
            <p className="text-tagline-2 text-background-11 mb-1 font-semibold">
              {footerContact.contactTitle}
            </p>
            <a
              href={footerContact.phoneHref}
              className="text-tagline-3 font-normal text-white/50 hover:underline"
            >
              {footerContact.phone}
            </a>
            <br />
            <a
              href={footerContact.emailHref}
              className="text-tagline-3 font-normal text-white/50 hover:underline"
            >
              {footerContact.email}
            </a>
          </div>
        </div>
        {footerSocialLinks.length > 0 ? (
          <div className="flex justify-center">
            <SocialIcons links={footerSocialLinks} />
          </div>
        ) : null}
      </div>
    </div>
  </RevealAnimation>
);

export default FooterBrand;
