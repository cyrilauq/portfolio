export interface ContactLink {
  label: string
  href: string
  external: boolean
}

export const contactLinks: ContactLink[] = [
  { label: 'GitHub', href: 'https://github.com/cyrilauq', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/cyrilauquier', external: true },
  { label: 'Email', href: 'mailto:cyrilauquier@hotmail.fr', external: false },
]
