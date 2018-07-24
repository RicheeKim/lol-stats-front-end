import React from "react";
import { Card } from "semantic-ui-react";

class SummonerProfileCard extends React.Component {
  render() {
    const imgSrc = require(`../tier-icons/base-icons/${this.props.summonerTier.toLowerCase()}.png`);

    return (
      <Card.Group>
        <Card centered>
          <div>
            <img src={imgSrc} alt="Rank" />
          </div>
          <Card.Content>
            <Card.Header>{this.props.summonerName}</Card.Header>
            <Card.Meta>
              <span>
                {this.props.summonerTier} {this.props.summonerRank}{" "}
              </span>
            </Card.Meta>
            <Card.Meta>
              <span>{this.props.summonerLP} LP</span>
            </Card.Meta>
            <Card.Description>
              Wins: {this.props.summonerWins} / Losses:{" "}
              {this.props.summonerLosses}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>{this.props.summonerQueue}</a>
          </Card.Content>
        </Card>
      </Card.Group>
    );
  }
}

export default SummonerProfileCard;
