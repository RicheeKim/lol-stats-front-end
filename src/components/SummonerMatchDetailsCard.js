import React from "react";
import { Container, Segment, Grid } from "semantic-ui-react";

class SummonerMatchDetailsCard extends React.Component {
  // getTime = () => {
  //   var date = new Date(this.props.match.gameCreation);
  //   // Hours part from the timestamp
  //   var hours = date.getHours();
  //   // Minutes part from the timestamp
  //   var minutes = "0" + date.getMinutes();
  //   // Seconds part from the timestamp
  //   var seconds = "0" + date.getSeconds();
  //
  //   // Will display time in 10:30:23 format
  //   var formattedTime =
  //     hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
  //
  //   return formattedTime;
  // };

  getTime = () => {
    var seconds = this.props.match.gameDuration;
    // multiply by 1000 because Date() requires miliseconds
    var date = new Date(seconds * 1000);
    var hh = date.getUTCHours();
    var mm = date.getUTCMinutes();
    var ss = date.getSeconds();
    // If you were building a timestamp instead of a duration, you would uncomment the following line to get 12-hour (not 24) time
    // if (hh > 12) {hh = hh % 12;}
    // These lines ensure you have two-digits
    if (hh < 10) {
      hh = "0" + hh;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    if (ss < 10) {
      ss = "0" + ss;
    }
    // This formats your string to HH:MM:SS
    var t = mm + "m " + ss + "s";

    return t;
  };

  determineQueueType = () => {
    if (this.props.match.queueId == 420) {
      return "Ranked Solo";
    } else {
      return "Normal Game";
    }
  };

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
          borderBottom: "3px solid #06CEFF",
          borderRadius: "0px 7px 7px 0px",
          background: "white"
        }}>
        <br />
        <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
              <p>{this.determineQueueType()}</p>
              <p>{foundParticipantIdStats.win ? "Victory" : "Defeat"}</p>
              <p>{this.getTime()}</p>
            </Grid.Column>
            <Grid.Column width={3}>
              <p>K / D / A</p>
              <p>
                {foundParticipantIdStats.kills} /{" "}
                {foundParticipantIdStats.deaths} /{" "}
                {foundParticipantIdStats.assists}
              </p>
            </Grid.Column>
            <Grid.Column width={3}>
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
