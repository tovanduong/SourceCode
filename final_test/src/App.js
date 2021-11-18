// import logo from './logo.svg';
import "./App.css";
import Main from "./component/mainComponent";
import { Router } from "react-router-dom";
import history from './helps/history'
import { ConfigureStore } from './redux/configureStore'
import { Provider } from "react-redux";
const store = ConfigureStore();
function App() {
  return (
    <Provider store={store}>
    <Router history={history}>
      <div className="App">
        <Main />
      </div>
    </Router>
    </Provider>
  );
}

export default App;
