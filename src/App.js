// App.js
import React from "react";
import ReducerDemo from "./components/Reducer_demo";
import ReduxDemo from "./components/Redux_demo";
import { Provider } from "react-redux";
import store from "./states/store";

function App() {
  return (
    <div className="container-fluid">
      <div className="row text-center">
        <div className="p-0">
          <ReducerDemo />
        </div>
        <div className="py-4"></div>
        <div className="p-0">
          <Provider store={store}>
            <ReduxDemo />
          </Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
