import PageTitle from './pageTitle';
import stbeach from "../../shared/img/stbeach.jpg";
import MainFrame from '../../frames/MainFrame';
import './index.css';

function Landing() {
  return (
    <MainFrame title="Title" showHeader={false}>
      <div className="flex h-screen" style={{
        background: `url(${stbeach}) no-repeat center center fixed`,
        backgroundSize: "cover"
      }}>
        <PageTitle text="React App" style={{ position: "absolute", marginLeft: "auto", marginRight: "auto", left: 0, right: 0, top: "15vh", textAlign: "center" }} />
      </div>
    </MainFrame>
  );
}

export default Landing;
