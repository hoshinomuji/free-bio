import { Dialog } from '@base-ui/react/dialog';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ name }: { name: string }) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-zinc-950/70 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="font-semibold tracking-tight text-white">
          {name}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden gap-8 text-sm md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <Dialog.Root>
          <Dialog.Trigger
            className="rounded-md p-2 text-zinc-300 hover:bg-white/5 hover:text-white md:hidden"
            aria-label="Open menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Backdrop className="fixed inset-0 z-50 bg-black/60 transition-opacity duration-200 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0" />
            <Dialog.Popup className="fixed inset-y-0 right-0 z-50 flex w-72 flex-col gap-2 border-l border-white/10 bg-zinc-900 p-6 transition-transform duration-200 data-[ending-style]:translate-x-full data-[starting-style]:translate-x-full">
              <div className="mb-4 flex items-center justify-between">
                <Dialog.Title className="font-semibold text-white">Menu</Dialog.Title>
                <Dialog.Close className="rounded-md p-2 hover:bg-white/5" aria-label="Close menu">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                  </svg>
                </Dialog.Close>
              </div>
              {links.map((l) => (
                <Dialog.Close
                  key={l.href}
                  render={<a href={l.href} />}
                  nativeButton={false}
                  className="rounded-md px-3 py-2 text-left hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </Dialog.Close>
              ))}
            </Dialog.Popup>
          </Dialog.Portal>
        </Dialog.Root>
      </nav>
    </header>
  );
}
