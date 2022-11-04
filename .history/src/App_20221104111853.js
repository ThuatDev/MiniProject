import "./App.scss";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div>test link</div>
      <div>
        <button>go to User page</button>
        <button>go to Admin page</button>
      </div>
    </div>
  );
};

export default App;
