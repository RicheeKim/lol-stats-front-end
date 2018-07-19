import React, { Component } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import SummonerDetails from "./components/SummonerDetails";
import SummonerProfileCard from "./components/SummonerProfileCard";
import { Header } from "semantic-ui-react";

const summonerNameURL = "http://localhost:3000/summoner_name";
const summonerDataURL = "http://localhost:3000/summoner_id_data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      summonerName: "",
      accountId: "",
      summonerId: "",
      summonerQueue: "",
      summonerLeagueName: "",
      summonerTier: "",
      summonerRank: "",
      summonerLP: "",
      summonerWins: "",
      summonerLosses: "",
      matchList: [],
      championList: []
    };
  }

  handleChange = (e) => {
    let searchingTerm = e.target.value;

    this.setState({
      searchTerm: searchingTerm.split(" ").join("_")
    });
  };

  componentDidMount() {
    // this.getSummonerDetails();
    // this.searchSummonerName();
  }

  searchSummonerName = () => {
    if (this.state.searchTerm) {
      return fetch(summonerNameURL + `/${this.state.searchTerm}`)
        .then((res) => res.json())
        .then((summoner) =>
          this.setState(
            {
              summonerName: summoner.name,
              accountId: summoner.accountId,
              summonerId: summoner.id
            },
            () => {
              this.getSummonerData();
            }
            // Promise.resolve(true)
          )
        );
    } else {
      // return Promise.resolve(false);
    }
  };

  getSummonerData = () => {
    fetch(summonerDataURL + `/${this.state.summonerId}`)
      .then((res) => res.json())
      .then((summoner) =>
        this.setState({
          summonerQueue: this.filterQueueType(summoner)[0].queueType,
          summonerLeagueName: this.filterQueueType(summoner)[0].leagueName,
          summonerTier: this.filterQueueType(summoner)[0].tier,
          summonerRank: this.filterQueueType(summoner)[0].rank,
          summonerLP: this.filterQueueType(summoner)[0].leaguePoints,
          summonerWins: this.filterQueueType(summoner)[0].wins,
          summonerLosses: this.filterQueueType(summoner)[0].losses
        })
      );
  };

  filterQueueType = (summoner) => {
    // console.log(summoner);
    return summoner.filter(
      (summoner) => summoner.queueType === "RANKED_SOLO_5x5"
    );
  };

  // getSummonerMatches = () => {
  //   fetch;
  // };

  // getSummonerDetails = () => {
  //   this.searchSummonerName().then(this.getSummonerData());
  // };

  // searchTransactions = () => {
  //   if (this.state.searchTerm) {
  //     return this.state.transactions.filter(
  //       (transaction) =>
  //         transaction.description
  //           .toLowerCase()
  //           .includes(this.state.searchTerm) ||
  //         transaction.category.toLowerCase().includes(this.state.searchTerm)
  //     );
  //   } else {
  //     return this.state.transactions;
  //   }
  // };

  render() {
    return (
      <div className="App">
        <Header size="huge">LeagueStats</Header>
        <Searchbar
          handleSearch={this.handleChange}
          term={this.state.searchTerm}
          findSummoner={this.searchSummonerName}
        />

        {this.state.summonerTier ? (
          <SummonerProfileCard
            summonerName={this.state.summonerName}
            accountId={this.state.accountId}
            summonerQueue={this.state.summonerQueue}
            summonerLeagueName={this.state.summonerLeagueName}
            summonerTier={this.state.summonerTier}
            summonerRank={this.state.summonerRank}
            summonerLP={this.state.summonerLP}
            summonerWins={this.state.summonerWins}
            summonerLosses={this.state.summonerLosses}
          />
        ) : null}
      </div>
    );
  }
}

// <SummonerDetails
//   summonerName={this.state.summonerName}
//   accountId={this.state.accountId}
//   summonerQueue={this.state.summonerQueue}
//   summonerLeagueName={this.state.summonerLeagueName}
//   summonerTier={this.state.summonerTier}
//   summonerRank={this.state.summonerRank}
//   summonerLP={this.state.summonerLP}
//   summonerWins={this.state.summonerWins}
//   summonerLosses={this.state.summonerLosses}
// />

export default App;
