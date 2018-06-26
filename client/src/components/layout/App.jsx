import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import axios from "axios";
import Home from "../home/Home";
import Navbar from "./Navbar";
import Teams from "../team/Teams";
import TeamOverview from "../team/TeamOverview";
import Matches from "../match/Matches";
import MatchOverview from "../match/MatchOverview";

axios.defaults.baseURL = "https://api.opendota.com/api";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Container style={{ paddingTop: "80px" }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/teams" component={Teams} />
              <Route exact path="/teams/:id" component={TeamOverview} />
              <Route exact path="/matches" component={Matches} />
              <Route exact path="/matches/:id" component={MatchOverview} />
            </Switch>
          </Container>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
