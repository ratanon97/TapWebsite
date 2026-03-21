export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 px-8 py-10 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
        <div>
          <p className="font-medium text-foreground/60">Turning complexity into clarity.</p>
          <p className="mt-1 text-xs">&copy; {new Date().getFullYear()} Tap. All rights reserved.</p>
        </div>
        <div className="flex gap-6">
          <a
            href="#"
            className="transition-colors hover:text-accent-warm"
          >
            Top
          </a>
          <a
            href="https://www.linkedin.com/in/ratanon-suksumrun"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent-warm"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
