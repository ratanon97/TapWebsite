/**
 * A short ruled list of label and value pairs: the facts column beside a
 * spread. Values are real figures from the stories; nothing is invented.
 */
export default function Facts({ rows }: { rows: Array<[string, string]> }) {
  return (
    <dl className="facts" data-sc-in data-sc-stagger="50">
      {rows.map(([k, v]) => (
        <div className="facts__row" key={k}>
          <dt>{k}</dt>
          <dd className="sc-nums">{v}</dd>
        </div>
      ))}
    </dl>
  );
}
