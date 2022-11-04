import "./App.scss";
import Header from "./components/Header/Header";

import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div>
        test link
        <div>
          <button>
            <Link to="/admin">Admin</Link>
          </button>
          <button>
            <Link to="/user">User</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
