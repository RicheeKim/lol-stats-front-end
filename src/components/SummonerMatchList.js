import React from "react";
import SummonerMatchCard from "./SummonerMatchCard";

class SummonerMatchList extends React.Component {
  render() {
    return (
      <div>
        {this.props.matchList.map((match) => (
          <SummonerMatchCard key={match.gameId} match={match} />
        ))}
      </div>
    );
  }
}

export default SummonerMatchList;

// {
//   props.allTransactions.map((transaction) => (
//     <Transaction key={transaction.id} transaction={transaction} />
//   ));
// }
