import React from "react";
import PropTypes from "prop-types";

class SummonerMatchDetailsCard extends React.Component {
  render() {
    return <h1>{this.props.match.gameId}</h1>;
  }
}

export default SummonerMatchDetailsCard;
