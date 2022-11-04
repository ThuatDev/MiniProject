import "./App.scss";
import Header from "./components/Header/Header";

import { Outlet, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div>
        test link
        <div>
          <button>
            <Link to="/admins">Admin</Link>
          </button>
          <button>
            <Link to="/users">User</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
