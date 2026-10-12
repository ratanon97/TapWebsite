/**
 * The close of an inner page: the same colophon the front page ends on, with
 * the page's own way back set as a line of running text.
 */
export default function Colophon({ lead }: { lead: React.ReactNode }) {
  return (
    <footer className="colophon colophon--page" data-sc-in data-sc-stagger="60">
      <p>{lead}</p>
      <p>
        Write:{" "}
        <a href="mailto:ratanon97@hotmail.com" className="running__link">
          ratanon97@hotmail.com
        </a>
        {" · "}
        <a
          href="https://www.linkedin.com/in/ratanon-suksumrun"
          className="running__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        {" · "}
        <a href="/resume.pdf" className="running__link">
          CV (PDF)
        </a>
      </p>
      <p className="colophon__small">
        Set in Playfair Display and Geist. &copy; {new Date().getFullYear()} Tap Suksumrun.
      </p>
    </footer>
  );
}
