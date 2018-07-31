import React from "react";

class SummonerMatchCard extends React.Component {
  render() {
    let championPicName;
    const champions = require(`../dragontail-8.14.1/8.14.1/data/en_US/champion.json`);
    const champId = this.props.match.champion;
    // const championObjArr = Object.values(champions.data);
    // const championPicArr = championObjArr.map(function(element) {
    //   return element.image.full;
    // });

    const championName = Object.values(champions.data).map(function(element) {
      if (element.key == champId) {
        return element.name;
      }
    });

    const championPic = Object.values(champions.data).map(function(element) {
      if (element.key == champId) {
        championPicName = element.image.full;

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

    return (
      <div
        style={{
          height: 200,
          borderBottom: "3px solid #3498DB",
          borderRadius: "7px 0px 0px 7px",
          background: "white"
        }}>
        <br />
        <img src={championPicSource} height="60" width="60" />
        <h4>{championName}</h4>
        <p>Role: {laneCheck()}</p>
      </div>
    );
  }
}

export default SummonerMatchCard;
