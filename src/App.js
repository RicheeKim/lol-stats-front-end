import React, { Component } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import Navbar from "./components/Navbar";
import SummonerMatchList from "./components/SummonerMatchList";
import SummonerProfileCard from "./components/SummonerProfileCard";
// import Test from "./components/Test";

import { Header, Grid, Menu, Input, Image } from "semantic-ui-react";

const summonerNameURL = "http://localhost:3000/summoner_name";
const summonerDataURL = "http://localhost:3000/summoner_id_data";
const summonerMatchesURL = "http://localhost:3000/account_id_matches";
const summonerMatchDetailsURL = "http://localhost:3000/match_details";
let color = "#06CEFF";

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeItem: "home",
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
      matchIds: [],
      matchIdDetails: [],
      championList: []
    };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleChange = (e) => {
    let searchingTerm = e.target.value;

    this.setState({
      searchTerm: searchingTerm
    });
  };

  // setChampions = () => {
  //   Object.keys(champions.data).forEach(function(key) {
  //     this.setState({ championList: champions.data[key].key });
  //   });
  // };

  componentDidMount() {
    // this.setChampions();
    // this.searchSummonerName();
    // this.getSummonerMatches();
  }

  searchSummonerName = () => {
    if (this.state.searchTerm) {
      const URL =
        summonerNameURL + `/${this.state.searchTerm.split(" ").join("_")}`;
      return fetch(URL)
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
              this.getSummonerMatches();
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
    if (summoner === []) {
      console.log("hello");
    } else {
      return summoner.filter(
        (summoner) => summoner.queueType === "RANKED_SOLO_5x5"
      );
      //   console.log("no one here");
    }
  };

  getSummonerMatches = () => {
    fetch(summonerMatchesURL + `/${this.state.accountId}`)
      .then((res) => res.json())
      .then((matches) =>
        this.setState(
          {
            matchList: matches.matches,
            matchIds: matches.matches.map((match) => match.gameId)
          },
          () => this.getMatchDetails()
        )
      );
  };

  getMatchDetails = () => {
    const promises = this.state.matchIds.map((id) =>
      fetch(summonerMatchDetailsURL + `/${id}`)
    );
    Promise.all(promises).then((res) =>
      res.forEach((resp) =>
        resp.json().then((game) =>
          this.setState({
            matchIdDetails: [...this.state.matchIdDetails, game]
          })
        )
      )
    );
  };

  // mapThroughMatchDetails = (matchIds) => {
  //   matchIds.map((id) => id);
  // };
  //
  // getMatchDetails = () => {
  //   fetch(
  //     summonerMatchDetailsURL +
  //       `${this.mapThroughMatchDetails(this.state.matchIds)}`
  //   )
  //     .then((res) => res.json())
  //     .then((matches) => console.log(matches));
  // };

  // console.log(this.state.matchIds.map(matchId => matchId))
  // style={{ height: 10000, background: color }}
  render() {
    // this.state.matchIds.map((element) => console.log(element));
    const activeItem = this.state.activeItem;

    return (
      <div className="App" style={{ height: 10000, background: color }}>
        <br />
        <Header size="huge">LeagueStats</Header>

        <Menu color="red">
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}>
            Home
          </Menu.Item>

          <Menu.Item
            name="leaderboard"
            active={activeItem === "leaderboard"}
            onClick={this.handleItemClick}>
            Leaderboard
          </Menu.Item>

          <Menu.Item
            name="champions"
            active={activeItem === "champions"}
            onClick={this.handleItemClick}>
            Champions
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Searchbar
                handleSearch={this.handleChange}
                term={this.state.searchTerm}
                findSummoner={this.searchSummonerName}
              />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column width={5}>
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
            </Grid.Column>
            <Grid.Column width={10}>
              <SummonerMatchList
                matchList={this.state.matchList}
                matchIds={this.state.matchIds}
                matchDetails={this.state.matchIdDetails}
                summonerName={this.state.summonerName}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
