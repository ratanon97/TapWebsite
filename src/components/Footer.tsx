export default function Footer() {
  return (
    <footer className="px-8 py-10 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-muted sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Tap. All rights reserved.</p>
        <div className="flex gap-6">
          <a
            href="#"
            className="transition-colors hover:text-accent-hover"
          >
            Top
          </a>
          <a
            href="https://www.linkedin.com/in/ratanon-suksumrun"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent-hover"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
