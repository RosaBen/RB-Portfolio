import { coverPageData, contentTablePage } from "./assets/scripts/data";

import PortfolioCover from "./components/PortfolioCover";
import HomePage from "./components/HomePage";
import TableContents from "./components/TableContents";

import "./assets/styles/portfolioCover.css";
import "./assets/styles/homepage.css";
import "./assets/styles/tablecontents.css";

function App() {
  const { name, role, bio, tags, email, website, websiteLabel } = coverPageData;
  return (
    <main>
      <div className="container">
        <div className="left">
          <HomePage
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
          {/* <PortfolioCover /> */}
          <TableContents contents={contentTablePage} />
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
