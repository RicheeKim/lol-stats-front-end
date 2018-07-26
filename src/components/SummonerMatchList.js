import React from "react";
// import _ from "lodash";
import SummonerMatchCard from "./SummonerMatchCard";
import SummonerMatchDetailsCard from "./SummonerMatchDetailsCard";
import { Grid, Container, Segment } from "semantic-ui-react";

class SummonerMatchList extends React.Component {
  render() {
    // const allMatchDetails = _.zip(
    //   this.props.matchList,
    //   this.props.matchDetails
    // );
    //
    // allMatchDetails.map((matchDetail) =>
    //   console.log(matchDetail[1].platformId)
    // );

    // console.log(allMatchDetails);
    // console.log(this.props.matchList);
    // console.log(this.props.summonerName);
    // console.log(this.props.matchDetails);

    return (
      <Grid columns={2}>
        <Grid.Row columns={2}>
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
    );
  }
}

export default SummonerMatchList;

// {this.props.matchDetails.forEach((resp) =>
//   resp
//     .json()
//     .then((game) => <SummonerMatchCard gameDetails={game} />)
// )}
