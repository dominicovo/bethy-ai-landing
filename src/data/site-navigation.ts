export interface SiteNavLink {
  label: string;
  href: string;
}

export const primaryNavLinks: readonly SiteNavLink[] = [
  { label: 'Approach', href: '/#approach' },
  { label: 'Features', href: '/#features' },
  { label: 'System', href: '/#system' },
  { label: 'Waitlist', href: '/#waitlist' },
];