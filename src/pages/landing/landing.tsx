import PageTitle from './pageTitle';
import stbeach from "../../shared/img/stbeach.jpg";
import './index.css';

function Landing() {
  return (
    <div className="flex h-screen" style={{
      background: `url(${stbeach}) no-repeat center center fixed`,
      backgroundSize: "cover"
    }}>
      <PageTitle text="React App" style={{ position: "absolute", marginLeft: "auto", marginRight: "auto", left: 0, right: 0, top: "10vh", textAlign: "center" }} />
    </div>
  );
}

export default Landing;
