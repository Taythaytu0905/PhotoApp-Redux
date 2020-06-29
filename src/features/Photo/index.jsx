import NotFound from "components/NotFound";
import AddEditPage from "features/Photo/pages/AddEditPage";
import MainPage from "features/Photo/pages/MainPage";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

export default function Photo(props) {
  const match = useRouteMatch();

  return (
    <div className="App">
      <Switch>
        <Route exact path={match.url} component={MainPage} />

        <Route path={`${match.url}/add`} component={AddEditPage} />
        <Route path={`${match.url}/:photoId`} component={AddEditPage} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
