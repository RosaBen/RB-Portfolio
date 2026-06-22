import { coverPageData } from "./assets/scripts/data";

import PortfolioCover from "./components/PortfolioCover";
import CoverPage from "./components/CoverPage";

import "./assets/styles/portfolioCover.css";

function App() {
  const { name, role, bio, tags, email, website, websiteLabel } = coverPageData;
  return (
    <main>
      <div className="container">
        <div className="left">
          <CoverPage
            name={name}
            role={role}
            bio={bio}
            tags={tags}
            email={email}
            website={website}
            label={websiteLabel}
          />
        </div>
        <div className="spine">
          <span className="spine-text">Portfolio · {name}</span>
        </div>
        <div className="right">
          <PortfolioCover />
        </div>
      </div>
      <div className="nav-btns">
        <button type="button">← Précédent</button>
        <span className="nav-indicator">0/1</span>
        <button type="button">Suivant →</button>
      </div>
    </main>
  );
}

export default App;
