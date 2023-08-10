import videoHomePage from "../../assets/video-homepage.mp4";
import { useSelector } from "react-redux";
const HomePage = (props) => {
  const inAuthenticate = useSelector((state) => state.user.isAuthenticated);
  // console.log("check inAuthenticate", inAuthenticate);
  // const account = useSelector((state) => state.user.account);
  // console.log("check account", account);
  return (
    <div className="homepage-container">
      <video autoPlay loop muted>
        <source src={videoHomePage} type="video/mp4" />
      </video>
      <div className="homepage-content">
        <div className="title-1">There's a better way to ask</div>
        <div className="title-2">
          You don't want to make a boring form. And your audience won't answer
          one. Create a typeform instead—and make everyone happy.
        </div>
        <div className="title-3">
          {inAuthenticate ?===false ?
          <button className="title-3">Get's started. It's free</button>
          : <button className="title-3">Login</button>
          }

        </div>
      </div>
    </div>
  );
};
export default HomePage;
