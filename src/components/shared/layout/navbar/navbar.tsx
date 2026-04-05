'use client';

import RevealAnimation from '@/src/components/animation/reveal-animation';
import MobileMenu from '@/src/components/shared/layout/mobile-menu/mobile-menu';
import PrimaryLinkButton from '@/src/components/shared/ui/button/primary-link-button';
import { MobileMenuProvider } from '@/src/context/MobileMenuContext';
import { primaryNavLinks } from '@/src/data/site-navigation';
import { useNavbarScroll } from '@/src/hooks/useScrollHeader';
import { cn } from '@/src/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import MobileMenuButton from './mobile-menu-button';

const Navbar = () => {
  const { isScrolled } = useNavbarScroll(150);

  return (
    <MobileMenuProvider>
      <header
        className={cn(
          'lp:max-w-322.5! fixed top-5 left-1/2 z-50 mx-auto w-full max-w-87.5 -translate-x-1/2 rounded-[20px] transition-all duration-500 ease-in-out min-[425px]:max-w-93.75 min-[500px]:max-w-112.5 sm:max-w-135 md:max-w-180 lg:max-w-240 xl:max-w-285',
          isScrolled && 'top-2!'
        )}
      >
        <RevealAnimation direction="up" offset={100} delay={0.1} instant>
          <div className="bg-background-13/60 flex items-center justify-between rounded-[20px] px-1.5 py-2.5 backdrop-blur-[25px] xl:py-0">
            <div>
              <Link href="/" className="flex items-center gap-3 rounded-full px-3 py-2">
                <figure className="block w-10 sm:hidden">
                  <Image
                    src="/images/Bethy-icon.svg"
                    alt="Bethy icon"
                    width={40}
                    height={40}
                    className="h-auto w-full"
                    priority
                  />
                </figure>
                <figure className="hidden sm:block sm:w-[148px]">
                  <Image
                    src="/images/bethy-logo.svg"
                    alt="Bethy AI"
                    width={148}
                    height={38}
                    className="h-auto w-full"
                    priority
                  />
                </figure>
              </Link>
            </div>
            <nav className="hidden items-center xl:flex">
              <ul className="flex items-center">
                {primaryNavLinks.map((item) => (
                  <li key={item.label} className="py-2.5">
                    <Link
                      href={item.href}
                      className="text-tagline-3 font-ibm-plex-mono flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal text-white/60 transition-all duration-200 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="hidden items-center justify-center xl:flex">
              <PrimaryLinkButton className="py-2.5" href="/#waitlist">
                Join waitlist
              </PrimaryLinkButton>
            </div>
            <MobileMenuButton />
          </div>
        </RevealAnimation>
      </header>
      <MobileMenu />
    </MobileMenuProvider>
  );
};

export default Navbar;
