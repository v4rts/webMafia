import React from 'react';
import './App.css';
import Start from "./comp/Start";
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
      return (
          <BrowserRouter>
              <div className="wrapper">
                  <Route path="/" render={() => <Start/>} />
              </div>
          </BrowserRouter>
      )
}
export default App;
