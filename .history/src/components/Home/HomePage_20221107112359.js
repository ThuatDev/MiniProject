import videoHomePage from "../../assets/video-homepage.mp4";
const HomePage = (props) => {
  return (
    <div clasName="homepage-container">
      <video autoPlay loop muted>
        <source src={videoHomePage} type="video/mp4" />
      </video>
      <div clasName="homepage-content">
        <div title-1>There's a better way to ask</div>
        <div>
          You don't want to make a boring form. And your audience won't answer
          one. Create a typeform instead—and make everyone happy.
        </div>
        <div>
          <button>Get's started. It's free</button>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
