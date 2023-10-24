import { Provider } from "react-redux";
import "./styles/App.scss";
import store from "./state/store";
import Routing from "./routes/routes";

function App() {
  return (
    <div className="main">
      <Provider store={store}>
        <Routing />
      </Provider>
    </div>
  );
}

export default App;
