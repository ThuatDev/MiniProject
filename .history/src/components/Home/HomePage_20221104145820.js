import videoHomePage from "../../assets/videos/video-homepage.mp4";
const HomePage = (props) => {
  return (
    <div clasName="homepage-container">
      <video autoPlay loop muted>
        <source src={videoHomePage} type="video/mp4" />
      </video>
    </div>
  );
};
export default HomePage;
