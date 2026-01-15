// ✅ Reusable Component: Page navigation with home, page links, and social icons

interface PageNavigationProps {
  activePage: 'introduction' | 'the-shift';
}

export function PageNavigation({ activePage }: PageNavigationProps) {
  return (
    <>
      {/* 🔽 Page Navigation - Desktop: fixed vertical on left, Mobile: absolute horizontal on top */}
      <div className="absolute md:fixed top-8 left-6 md:left-5 flex flex-row md:flex-col items-center gap-4 md:gap-[26px] text-black/40 font-mono text-xs uppercase tracking-wider z-20">
        <a
          href="https://itsprade.com/"
          className="hover:text-black/80"
          aria-label="Home"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
        </a>
        <a
          href="/"
          className={`hover:text-black/80 md:[writing-mode:vertical-lr] md:rotate-180 whitespace-nowrap ${
            activePage === 'introduction' ? 'text-black font-normal' : 'font-light'
          }`}
        >
          Introduction
        </a>
        <a
          href="/the-shift"
          className={`hover:text-black/80 md:[writing-mode:vertical-lr] md:rotate-180 whitespace-nowrap ${
            activePage === 'the-shift' ? 'text-black font-normal' : 'font-light'
          }`}
        >
          The Shift
        </a>
        <a
          href="https://x.com/itsprade"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex hover:text-black/80"
          aria-label="Twitter"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
      </div>
      {/* 🔽 Mobile Navigation - X icon on right */}
      <a
        href="https://x.com/itsprade"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-8 right-6 md:hidden text-black/40 hover:text-black/80 z-20"
        aria-label="Twitter"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </a>
    </>
  );
}
