import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import HotelsList from "./pages/HotelsList";
import SingleHotel from "./pages/SingleHotel";
function App() {
  return (
    <>
     <Router>
     <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/hotels">
           <HotelsList/>
          </Route>
          <Route exact path="/hotel/:id">
            <SingleHotel/>
          </Route>
        </Switch>
     </Router>
    </>
  );
}

export default App;
