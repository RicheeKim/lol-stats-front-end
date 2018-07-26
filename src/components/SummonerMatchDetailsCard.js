import React from "react";
import { Container, Segment } from "semantic-ui-react";

class SummonerMatchDetailsCard extends React.Component {
  // const summonerName = this.props.summonerName
  //
  // findSummonerName = () => {
  //   this.props.match.participantIdentities.filter(
  //     (obj) => obj.player.summonerName === this.props.summonerName
  //   );
  //   return obj.player.summonerName;
  // };

  render() {
    const summonerName = this.props.summonerName;
    const foundParticipantIdObj = this.props.match.participantIdentities.filter(
      (obj) => obj.player.summonerName === summonerName
    );
    const foundParticipantId = foundParticipantIdObj[0].participantId;

    const foundParticipantIdStatsObj = this.props.match.participants.filter(
      (obj) => obj.participantId === foundParticipantId
    );

    const foundParticipantIdStats = foundParticipantIdStatsObj[0].stats;
    //
    // const winCheck = () => {
    //   return foundParticipantIdStats.win ? "Win" : "Loss";
    // };
    // console.log(foundParticipantIdStats.kills);

    // console.log(this.props.match);

    return (
      <div
        style={{
          height: 200,
          border: "3px solid blue"
        }}>
        <p>Level: {foundParticipantIdStats.champLevel}</p>
        <p>{foundParticipantIdStats.win ? "Win" : "Loss"}</p>
        <p>
          {foundParticipantIdStats.kills} / {foundParticipantIdStats.deaths} /{" "}
          {foundParticipantIdStats.assists}
        </p>
        <p>Total Gold: {foundParticipantIdStats.goldEarned}</p>
        <p>CS: {foundParticipantIdStats.totalMinionsKilled}</p>
      </div>
    );
  }
}

export default SummonerMatchDetailsCard;
