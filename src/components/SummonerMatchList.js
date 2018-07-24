import React from "react";
import SummonerMatchCard from "./SummonerMatchCard";
import SummonerMatchDetailsCard from "./SummonerMatchDetailsCard";

class SummonerMatchList extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     matchDetailz: []
  //   };
  // }
  //
  // componentDidMount() {
  //   this.setDetails();
  // }
  //
  // setDetails = () => {
  //   this.props.matchDetails.map((resp) =>
  //     resp
  //       .json()
  //       .then((game) =>
  //         this.setState({ matchDetailz: [...this.state.matchDetailz, game] })
  //       )
  //   );
  // };

  render() {
    console.log(this.props.matchDetails);
    // console.log(this.props.matchList);
    return (
      <div>
        {this.props.matchList.map((match) => (
          <SummonerMatchCard
            key={match.gameId}
            matchId={match.gameId}
            match={match}
            findAChampion={this.props.findChampion}
          />
        ))}
        {this.props.matchDetails.map((match) => (
          <SummonerMatchDetailsCard match={match} />
        ))}
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
