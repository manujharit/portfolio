import backImg from "../../assets/backImg.svg";
import LINKS from "../content/links";

const {RESUME} = LINKS
const Home = () => {
  
  const divStyle = {
    background: `linear-gradient(to right,rgba(245,245,245,.8),rgba(245,245,245,.8)),url(${backImg})`,
    height: "100vh",
    width: "100%",
  };

  const nameStyle = { fontWeight: "800", fontSize: "6vh" };

  const contentStyle = {
    fontWeight: "200",
    fontSize: "2vh",
    margin: "0px 10vh",
  };

  const openResume = () => {
    window.open(RESUME, '_blank');
  }
  
  return (
    <div>
      <div
        className="d-flex align-items-center justify-content-center"
        style={divStyle}
      >
        <div className="text-center">
          <p style={nameStyle}>HEY, I'M MANUJ HARITWAL</p>
          <p style={contentStyle}>
            A Full Stack Web Developer building the Frontend and Backend of
            Websites and Web Applications that leads to the success of the
            overall product
          </p>
          <br />
          <button
            className="btn btn-dark"
            style={{ backgroundColor: "#7843e9", fontSize: "2vh" }}
            onClick={() => openResume()}
          >
            <b>Resume</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
