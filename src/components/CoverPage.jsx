import avatar from "../assets/images/avatarRB.jpg";

export default function CoverPage({
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
    <section className="cover-page">
      <img src={avatar} alt={`avatar ${name}`} />
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
