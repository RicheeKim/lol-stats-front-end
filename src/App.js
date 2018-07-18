import React, { Component } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import { Header } from "semantic-ui-react";
// import PropTypes from 'prop-types'
// import React, { Component } from 'react'
// import {
//   Button,
//   Container,
//   Divider,
//   Grid,
//   Header,
//   Icon,
//   Image,
//   List,
//   Menu,
//   Responsive,
//   Segment,
//   Sidebar,
//   Visibility,
// } from 'semantic-ui-react'

const summonerNameURL = "http://localhost:3000/summoner_name";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      summonerName: "",
      accountId: "",
      summonerId: "",
      matchList: [],
      championList: []
    };
  }

  handleChange = (e) => {
    let searchingTerm = e.target.value;

    this.setState({
      searchTerm: searchingTerm
    });
  };

  componentDidMount() {
    // this.getSummonerData();
  }

  getSummonerData = () => {
    fetch(summonerNameURL)
      .then((res) => res.json())
      .then((summoner) =>
        this.setState({
          summonerName: summoner.name,
          accountId: summoner.accountId,
          summonerId: summoner.id
        })
      );
  };

  searchSummonerName = () => {
    fetch(summonerNameURL + `/${this.state.searchTerm}`)
      .then((res) => res.json())
      .then((summoner) =>
        this.setState({
          summonerName: summoner.name,
          accountId: summoner.accountId,
          summonerId: summoner.id
        })
      );
  };

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
      </div>
    );
  }
}

export default App;
