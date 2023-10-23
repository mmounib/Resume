import { Provider } from "react-redux";
import Resume from "./pages/Resume";
import "./styles/App.scss";
import store from "./state/store";

function App() {
  return (
    <div className="main">
      <Provider store={store}>
        <Resume />
      </Provider>
    </div>
  );
}

export default App;
