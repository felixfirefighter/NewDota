import React from "react";

import { Table, Popup, Header } from "semantic-ui-react";
import MatchPlayerListItem from "./MatchPlayerListItem";

const MatchPlayerTable = ({ players }) => {
  return (
    <Table inverted>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>
            <Header as="h5" inverted>
              Players
            </Header>
          </Table.HeaderCell>
          <Table.HeaderCell>
            <Popup
              trigger={
                <Header as="h5" inverted>
                  LVL
                </Header>
              }
            >
              <Header as="h6">Level of hero</Header>
            </Popup>
          </Table.HeaderCell>
          <Table.HeaderCell>
            <Popup
              trigger={
                <Header as="h5" inverted color="green">
                  K
                </Header>
              }
            >
              <Header as="h6">Number of kills</Header>
            </Popup>
          </Table.HeaderCell>
          <Table.HeaderCell>
            <Popup
              trigger={
                <Header as="h5" inverted color="red">
                  D
                </Header>
              }
            >
              <Header as="h6">Number of deaths</Header>
            </Popup>
          </Table.HeaderCell>
          <Table.HeaderCell>
            <Popup
              trigger={
                <Header as="h5" inverted color="grey">
                  A
                </Header>
              }
            >
              <Header as="h6">Number of assists</Header>
            </Popup>
          </Table.HeaderCell>
          <Table.HeaderCell>
            <Popup
              trigger={
                <Header as="h5" inverted color="yellow">
                  GPM
                </Header>
              }
            >
              <Header as="h6">Gold per minute</Header>
            </Popup>
          </Table.HeaderCell>
          <Table.HeaderCell>
            <Popup
              trigger={
                <Header as="h5" inverted>
                  XPM
                </Header>
              }
            >
              <Header as="h6">Experience per minute</Header>
            </Popup>
          </Table.HeaderCell>
          <Table.HeaderCell>
            <Popup
              trigger={
                <Header as="h5" inverted>
                  LH
                </Header>
              }
            >
              <Header as="h6">Number of last hits</Header>
            </Popup>
          </Table.HeaderCell>
          <Table.HeaderCell>
            <Popup
              trigger={
                <Header as="h5" inverted>
                  DN
                </Header>
              }
            >
              <Header as="h6">Number of denied creep</Header>
            </Popup>
          </Table.HeaderCell>
          <Table.HeaderCell>
            <Popup
              trigger={
                <Header as="h5" inverted>
                  HD
                </Header>
              }
            >
              <Header as="h6">Amount of damage dealt to heroes</Header>
            </Popup>
          </Table.HeaderCell>
          <Table.HeaderCell>
            <Popup
              trigger={
                <Header as="h5" inverted>
                  HH
                </Header>
              }
            >
              <Header as="h6">Amount of health restored to heroes</Header>
            </Popup>
          </Table.HeaderCell>
          <Table.HeaderCell>
            <Popup
              trigger={
                <Header as="h5" inverted>
                  TD
                </Header>
              }
            >
              <Header as="h6">Amount of damage dealt to towers</Header>
            </Popup>
          </Table.HeaderCell>
          <Table.HeaderCell>
            <Popup
              trigger={
                <Header as="h5" inverted color="yellow">
                  G
                </Header>
              }
            >
              <Header as="h6">Total Gold</Header>
            </Popup>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {players.map(player => {
          return (
            <MatchPlayerListItem key={player.account_id} player={player} />
          );
        })}
      </Table.Body>
    </Table>
  );
};

export default MatchPlayerTable;
