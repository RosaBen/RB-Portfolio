export default function AboutMe({ journey, strength, searching, skills }) {
  const skillsList = skills.map((skill, index) => <li key={index}>{skill}</li>);
  return (
    <section className="about-me-page">
      <h2>
        à propos<span></span>
      </h2>
      <div className="articles">
        <article>
          <h3>Mon parcours</h3>
          <p>{journey}</p>
        </article>
        <article>
          <h3>Mes forces</h3>
          <p>{strength}</p>
        </article>
        <article>
          <h3>Compétences techniques</h3>
          <ul>{skillsList}</ul>
        </article>
        <article>
          <h3>En recherche</h3>
          <p>{searching}</p>
        </article>
      </div>
    </section>
  );
}
