export default function TableContents({ contents }) {
  const contentspages = contents.map((content, index) => (
    <div className="content-item" key={index}>
      <span>{String(index + 1).padStart(2, "0")}</span>
      <div>
        <h5>{content.label}</h5>
        <div>
          <span></span>
          <span>{`p.${content.page + 1}`}</span>
        </div>
      </div>
    </div>
  ));
  return (
    <section className="table-contents-page">
      <h2>
        Sommaire<span></span>
      </h2>
      <div className="pages">{contentspages}</div>
    </section>
  );
}
