import React from "react";
import { Container, Segment, Grid } from "semantic-ui-react";

class SummonerMatchCard extends React.Component {
  render() {
    let championPicName;
    const champions = require(`../dragontail-8.14.1/8.14.1/data/en_US/champion.json`);
    const champId = this.props.match.champion;
    const championObjArr = Object.values(champions.data);
    const championPicArr = championObjArr.map(function(element) {
      return element.image.full;
    });

    const championName = Object.values(champions.data).map(function(element) {
      if (element.key == champId) {
        return element.name;
      }
    });

    const championPic = Object.values(champions.data).map(function(element) {
      if (element.key == champId) {
        championPicName = element.image.full;
        // console.log(championPicName);
        return championPicName;
      }
    });

    const championPicSource = require(`../dragontail-8.14.1/8.14.1/img/champion/${championPicName.toString()}`);

    const laneCheck = () => {
      if (this.props.match.lane === "NONE") {
        return "FILL";
      } else {
        return this.props.match.lane;
      }
    };

    // console.log(this.props.matchId);

    return (
      <Container>
        <Segment>
          <Grid>
            <Grid.Row>
              <Grid.Column width={3}>
                <img src={championPicSource} height="60" width="60" />
                <h4>{championName}</h4>
              </Grid.Column>
              <Grid.Column width={5}>
                <h3>Role: {laneCheck()}</h3>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    );
  }
}

export default SummonerMatchCard;
