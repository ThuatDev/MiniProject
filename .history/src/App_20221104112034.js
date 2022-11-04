import "./App.scss";
import Header from "./components/Header/Header";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div>test link</div>
      <div>
        <Link to="/User">go to User page</Link> |
        <button>go to User page</button>
        <button>go to Admin page</button>
      </div>
    </div>
  );
};

export default App;
