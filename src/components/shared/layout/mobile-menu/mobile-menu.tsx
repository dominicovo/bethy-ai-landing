'use client';
import MenuCloseButton from '@/src/components/shared/layout/mobile-menu/menu-close-button';
import { useMobileMenuContext } from '@/src/context/MobileMenuContext';
import { primaryNavLinks } from '@/src/data/site-navigation';
import { cn } from '@/src/utils/cn';
import Image from 'next/image';
import PrimaryLinkButton from '@/src/components/shared/ui/button/primary-link-button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MobileMenu = () => {
  const { isOpen, closeMenu } = useMobileMenuContext();
  const pathname = usePathname();

  const isActiveLink = (href: string) =>
    href.startsWith('/#') ? pathname === '/' : pathname === href || (href !== '#' && pathname.startsWith(href + '/'));

  return (
    <aside
      className={cn(
        'scroll-bar bg-background-13 fixed top-0 right-0 z-9999 h-screen w-full translate-x-full transition-all duration-300 sm:w-1/2 sm:rounded-l-3xl xl:hidden',
        isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      )}
    >
      <div className="space-y-4 p-5 sm:p-8 lg:p-9">
        <div className="flex items-center justify-between">
          <Link href="/" onClick={closeMenu} className="flex items-center">
            <figure className="w-10">
              <Image
                src="/images/Bethy-icon.svg"
                alt="Bethy icon"
                width={40}
                height={40}
                className="h-auto w-full"
                priority
              />
            </figure>
          </Link>
          <MenuCloseButton />
        </div>

        <div className="scroll-bar mt-6 h-[85vh] w-full overflow-x-hidden overflow-y-auto pb-10">
          <ul className="space-y-3">
            {primaryNavLinks.map((item, index) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className={cn(
                    'font-inter-tight text-tagline-2 border-stroke-1/10 block rounded-[22px] border px-4 py-4 text-left transition-all duration-500 ease-in-out',
                    index === 0 && 'mt-1',
                    isActiveLink(item.href)
                      ? 'bg-background-6 font-semibold text-white'
                      : 'bg-background-5/70 font-normal text-white/70 hover:bg-white/3 hover:text-white'
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <PrimaryLinkButton href="/#waitlist" wrapperClassName="w-full" className="w-full justify-center">
              Join waitlist
            </PrimaryLinkButton>
          </div>
        </div>
      </div>
    </aside>
  );
};

MobileMenu.displayName = 'MobileMenu';
export default MobileMenu;
