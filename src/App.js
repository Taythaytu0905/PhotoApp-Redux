import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import "./styles.css";
const Photo = React.lazy(() => import("./features/Photo"));

export default function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading....</div>}>
        <Router>
          <Header />
          <Switch>
            <Redirect exact from="/" to="/photos" />
            <Route path="/photos" component={Photo} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}
