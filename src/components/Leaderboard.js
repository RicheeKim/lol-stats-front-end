import React from "react";
import { Table } from "semantic-ui-react";

class Leaderboard extends React.Component {
  render() {
    const sortedLeaderboard = this.props.leaderboard.sort(function(a, b) {
      return b.leaguePoints - a.leaguePoints;
    });

    let counter = 1;

    return (
      <div className="leaderboard">
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign="center">Rank</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">
                Summoner Name
              </Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Tier</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">
                League Points
              </Table.HeaderCell>
              <Table.HeaderCell textAlign="center">
                Wins / Losses
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {sortedLeaderboard.map((player) => (
              <Table.Row>
                <Table.Cell textAlign="center">{counter++}</Table.Cell>
                <Table.Cell width={3} textAlign="center">
                  {player.playerOrTeamName}
                </Table.Cell>
                <Table.Cell textAlign="center">Challenger</Table.Cell>
                <Table.Cell textAlign="center">
                  {player.leaguePoints} LP
                </Table.Cell>
                <Table.Cell textAlign="center">
                  {player.wins} / {player.losses}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default Leaderboard;
