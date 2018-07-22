import React from "react";
import { Container } from "semantic-ui-react";

class SummonerMatchCard extends React.Component {
  render() {
    const champions = require(`../dragontail-8.14.1/8.14.1/data/en_US/champion.json`);
    // const championList = JSON.parse(champion);
    Object.keys(champions.data).forEach(function(key) {
      console.log(key, champions.data[key]);
    });

    // champions.data.filter((champion) => console.log(champion));
    // ${this.props.summonerTier.toLowerCase()}.png
    return (
      <Container>
        <h1>{this.props.match.role}</h1>
        <h1>{this.props.match.lane}</h1>
      </Container>
    );
  }
}

export default SummonerMatchCard;

// Object.keys(obj).forEach(function(key) {
//   console.log(key, obj[key]);
// });
