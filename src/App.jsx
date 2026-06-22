import { coverPageData } from "./assets/scripts/data";

import PortfolioCover from "./components/PortfolioCover";

import "./assets/styles/portfolioCover.css";

function App() {
  const { name, role, bio, tags, email, phone, city, website, websiteLabel } =
    coverPageData;
  return (
    <main className="container">
      <div className="left"></div>
      <div className="spine">
        <span className="spine-text">Portfolio · {name}</span>
      </div>
      <div className="right">
        <PortfolioCover />
      </div>
    </main>
  );
}

export default App;
