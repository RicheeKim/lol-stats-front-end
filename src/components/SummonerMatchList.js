import React from "react";
// import _ from "lodash";
import SummonerMatchCard from "./SummonerMatchCard";
import SummonerMatchDetailsCard from "./SummonerMatchDetailsCard";
import { Grid, Container, Segment } from "semantic-ui-react";

class SummonerMatchList extends React.Component {
  render() {
    return (
      <div className="matchlist">
        <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
              {this.props.matchList.map((match) => (
                <SummonerMatchCard
                  key={match.gameId}
                  matchId={match.gameId}
                  match={match}
                  findAChampion={this.props.findChampion}
                />
              ))}
            </Grid.Column>
            <Grid.Column width={12} style={{ marginLeft: -2.3 + "em" }}>
              {this.props.matchDetails.map((match) => (
                <SummonerMatchDetailsCard
                  match={match}
                  summonerName={this.props.summonerName}
                />
              ))}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default SummonerMatchList;

// {this.props.matchDetails.forEach((resp) =>
//   resp
//     .json()
//     .then((game) => <SummonerMatchCard gameDetails={game} />)
// )}
