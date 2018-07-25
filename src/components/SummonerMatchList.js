import React from "react";
import SummonerMatchCard from "./SummonerMatchCard";
import SummonerMatchDetailsCard from "./SummonerMatchDetailsCard";
import { Grid, Container, Segment } from "semantic-ui-react";

class SummonerMatchList extends React.Component {
  render() {
    // console.log(this.props.matchDetails);
    // console.log(this.props.matchList);
    // console.log(this.props.summonerName);
    return (
      <Grid centered padded columns={2}>
        <Grid.Row centered columns={2}>
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
          <Grid.Column width={8}>
            {this.props.matchDetails.map((match) => (
              <SummonerMatchDetailsCard
                match={match}
                summonerName={this.props.summonerName}
              />
            ))}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default SummonerMatchList;

// {this.props.matchDetails.forEach((resp) =>
//   resp
//     .json()
//     .then((game) => <SummonerMatchCard gameDetails={game} />)
// )}
