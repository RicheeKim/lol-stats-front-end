import React from "react";
import Champion from "./Champion";
import { Grid, Container, Segment, Image } from "semantic-ui-react";
class ChampionsList extends React.Component {
  render() {
    // let championPicName;
    const champions = require(`../dragontail-8.14.1/8.14.1/data/en_US/champion.json`);

    const championNameArr = Object.keys(champions.data);

    // return championPicSource;

    // console.log(championNameArr);
    return (
      <Image.Group size="tiny" className="championlist">
        {championNameArr.map((name) => <Champion name={name} />)}
      </Image.Group>
    );
  }
}

export default ChampionsList;
