export interface FooterNavItem {
  label: string;
  href: string;
}

export interface FooterColumnData {
  title: string;
  items: readonly FooterNavItem[];
}

export interface FooterSocialLink {
  name: string;
  href: string;
}

export interface FooterContact {
  addressTitle: string;
  address: string;
  contactTitle: string;
  phone: string;
  phoneHref: string;
  email: string;
  emailHref: string;
}

export const footerContact: FooterContact = {
  address: 'AI-guided home repair for people who want clear next steps.',
  emailHref: 'mailto:hello@bethy.ai',
};

export const footerSocialLinks: readonly FooterSocialLink[] = [
];

export const footerColumns: readonly FooterColumnData[] = [
];

export const footerLegalLinks: readonly FooterNavItem[] = [];

export const footerCopyrightHolder = 'Bethy AI';
