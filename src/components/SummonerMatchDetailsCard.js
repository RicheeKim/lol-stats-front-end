import React from "react";
import { Grid, Divider } from "semantic-ui-react";

class SummonerMatchDetailsCard extends React.Component {
  getTime = () => {
    var seconds = this.props.match.gameDuration;
    var date = new Date(seconds * 1000);
    var hh = date.getUTCHours();
    var mm = date.getUTCMinutes();
    var ss = date.getSeconds();

    if (hh < 10) {
      hh = "0" + hh;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    if (ss < 10) {
      ss = "0" + ss;
    }

    var t = mm + "m " + ss + "s";

    return t;
  };

  determineQueueType = () => {
    if (this.props.match.queueId == 420) {
      return "Ranked Solo";
    } else if (this.props.match.queueId == 440) {
      return "Ranked Flex";
    } else {
      return "Normal Game";
    }
  };

  // calculateKDA = () => {
  //   if (foundParticipantIdStats.deaths === 0) {
  //     return (
  //       foundParticipantIdStats.kills + foundParticipantIdStats.assists
  //     ).toFixed(2);
  //   } else {
  //     return (
  //   (foundParticipantIdStats.kills + foundParticipantIdStats.assists) /
  //   foundParticipantIdStats.deaths
  // ).toFixed(2);
  //   }
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

    return (
      <div
        style={{
          height: 200,
          borderBottom: "3px solid #3498DB",
          borderRadius: "0px 7px 7px 0px",
          background: "white"
        }}>
        <br />
        <br />
        <Grid>
          <Grid.Row>
            <Grid.Column width={5}>
              <p style={{ fontSize: 14 + "px", fontWeight: "bold" }}>
                {this.determineQueueType()}
              </p>
              <Divider />
              <p style={{ fontSize: 14 + "px", fontWeight: "bold" }}>
                {foundParticipantIdStats.win ? "Victory" : "Defeat"}
              </p>
              <p>{this.getTime()}</p>
            </Grid.Column>
            <Grid.Column width={5}>
              <br />
              <p style={{ fontSize: 14 + "px", fontWeight: "bold" }}>
                K / D / A
              </p>
              <p style={{ fontSize: 14 + "px", fontWeight: "bold" }}>
                {foundParticipantIdStats.kills} /{" "}
                {foundParticipantIdStats.deaths} /{" "}
                {foundParticipantIdStats.assists}
              </p>
            </Grid.Column>
            <Grid.Column width={5}>
              <p>Level: {foundParticipantIdStats.champLevel}</p>
              <p>CS: {foundParticipantIdStats.totalMinionsKilled}</p>
              <p>Total Gold: {foundParticipantIdStats.goldEarned}</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default SummonerMatchDetailsCard;
