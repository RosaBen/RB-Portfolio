import avatar from "../assets/images/avatarRB.jpg";

export default function HomePage({
  name,
  role,
  bio,
  tags,
  email,
  website,
  label,
}) {
  const tagsPortfolio = tags.map((tag, index) => (
    <span key={index}>{tag}</span>
  ));
  return (
    <section className="home-page">
      <div className="image">
        <img src={avatar} alt={`avatar ${name}`} />
      </div>
      <h2>{name}</h2>
      <h3>{role}</h3>
      <div></div>
      <p>{bio}</p>
      <div className="tags">{tagsPortfolio}</div>
      <div className="links">
        <a href={website} target="_blank" rel="noopener noreferrer">
          🌐 {label}
        </a>
        <a href={`mailto:${email}`}>✉ Email</a>
      </div>
    </section>
  );
}
