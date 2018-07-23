import React from "react";
import { Container, Segment } from "semantic-ui-react";

class SummonerMatchCard extends React.Component {
  render() {
    // const imgSrc = require(`../tier-icons/base-icons/${this.props.summonerTier.toLowerCase()}.png`);
    const champions = require(`../dragontail-8.14.1/8.14.1/data/en_US/champion.json`);
    const champId = this.props.match.champion;
    // console.log(this.props.match.champion);
    // console.log(Object.keys(champions.data));
    // console.log(this.props.findAChampion(champions));

    // console.log(champId.toString());

    // Object.values(champions.data).find(function(element) {
    //   console.log(element, champId);
    // });

    // console.log(Object.values(champions.data));
    //
    // {
    //   Object.keys(this.props.data).map((key, index) => {
    //     return <li key={index}>{this.props.data[key]}</li>;
    //   });
    // }
    //
    // {
    //   Object.keys(this.props.data).map(function(key, index) {
    //     return <li key={index}>{this.props.data[index]}</li>;
    //   }, this);
    // }
    // findChampion = () => {
    //   Object.values(champions.data).find(function(element) {
    //     return <h1>element.key === champId.toString()</h1>;
    //   });
    // };

    // champions.data.filter((champion) => console.log(champion));
    // ${this.props.summonerTier.toLowerCase()}.png
    // console.log(this.props.match.champion);

    return (
      <Container>
        <Segment style={{ height: "40vh" }}>
          <h1>{this.props.match.role}</h1>
          <h1>{this.props.match.lane}</h1>
          <h1>{this.props.match.champion}</h1>
          {Object.values(champions.data).map(function(element) {
            if (element.key == champId) {
              return <h1>{element.name}</h1>;
            }
          })}
        </Segment>
      </Container>
    );
  }
}

export default SummonerMatchCard;

// {
//   Object.values(champions.data).find(function(element) {
//     {
//       element.key == champId;
//     }
//     return <h1>{element.name}</h1>;
//   });
// }
