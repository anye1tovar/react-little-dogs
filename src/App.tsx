import { Provider } from "react-redux";
import "./App.css";
import AppAxios from "./components/axios";
import AppFetch from "./components/fetch";
import AppRtkQuery from "./components/rtk-query";
import { store } from "./store";

function App() {
  return (
    <div className="app-container">
      <AppFetch />
      <AppAxios />
      <Provider store={store}>
        <AppRtkQuery />
      </Provider>
    </div>
  );
}

export default App;
