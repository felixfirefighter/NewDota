import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import axios from "axios";
import Home from "../home/Home";
import Navbar from "./Navbar";
import Teams from "../team/Teams";
import TeamOverview from "../team/TeamOverview";
import MatchNavbar from "../match/MatchNavbar";
import ProMatches from "../match/ProMatches";
import PublicMatches from "../match/PublicMatches";
import MatchOverview from "../match/MatchOverview";
import Heroes from "../heroes/Heroes";

axios.defaults.baseURL = "https://api.opendota.com/api";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Container style={{ paddingTop: "80px" }}>
            <Route exact path="/" component={Home} />
            <Route exact path="/teams" component={Teams} />
            <Route exact path="/teams/:id" component={TeamOverview} />
            <Route path="/matches" component={MatchNavbar} />
            <Switch>
              <Route exact path="/matches/pro" component={ProMatches} />
              <Route exact path="/matches/public" component={PublicMatches} />

              <Route exact path="/matches/:id" component={MatchOverview} />
            </Switch>
            <Route exact path="/heroes" component={Heroes} />
          </Container>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
