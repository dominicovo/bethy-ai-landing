import { MobileMenuData } from '../interface';

export const mobileMenuData: MobileMenuData[] = [
  {
    id: 'navigate',
    title: 'Navigate',
    submenu: [
      { id: 'features', label: 'Features', href: '/#features' },
      { id: 'system', label: 'System', href: '/#system' },
      { id: 'waitlist', label: 'Waitlist', href: '/#waitlist' },
    ],
  },
  {
    id: 'company',
    title: 'Company',
    submenu: [
      { id: 'about', label: 'About', href: '/about' },
      { id: 'pricing', label: 'Pricing', href: '/pricing' },
    ],
  },
  {
    id: 'account',
    title: 'Account',
    submenu: [
      { id: 'signup', label: 'Sign up', href: '/signup' },
      { id: 'login', label: 'Login', href: '/login' },
    ],
  },
];
