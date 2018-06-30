import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Header, Table, Segment, Image, Icon } from "semantic-ui-react";
import * as actions from "../../actions/matchActions";
import LoadingComponent from "../layout/LoadingComponent";
import { getHeroImage } from "../../utils/imageUtil";
class MatchOverview extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getMatch(id);
  }

  renderRadiant = () => {
    const { match } = this.props.matches;
    if (!match || !match.radiant_team) return;

    return (
      <Header as="h2" inverted>
        <Image src={match.radiant_team.logo_url} />
        <Header.Content>{match.radiant_team.name}</Header.Content>
      </Header>
    );
  };

  renderDire = () => {
    const { match } = this.props.matches;
    if (!match) return;

    return (
      <div>
        <Header as="h2" inverted>
          <Image src={match.dire_team.logo_url} />
          <Header.Content>{match.dire_team.name}</Header.Content>
        </Header>

        <Table inverted>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>
                <Header as="h5" inverted>
                  Players
                </Header>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {match.players.map(player => {
              return (
                <Table.Row key={player.account_id}>
                  <Table.Cell>
                    <Header as="h5" inverted>
                      <Image size="massive" />
                      <Header.Content
                        as={Link}
                        to={`/players/${player.account_id}`}
                      >
                        {player.personaname} <Icon name="angle right" />
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    );
  };

  render() {
    const { match } = this.props.matches;

    console.log(match);

    return (
      <Segment basic>
        {!match && <LoadingComponent />}
        {this.renderRadiant()}
        {this.renderDire()}
      </Segment>
    );
  }
}

const mapState = state => ({
  matches: state.matches
});

export default connect(
  mapState,
  actions
)(MatchOverview);
