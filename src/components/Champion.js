import React from "react";

class Champion extends React.Component {
  render() {
    let championPicSource = require(`../dragontail-8.14.1/8.14.1/img/champion/${
      this.props.name
    }.png`);

    console.log(this.props.name);
    return <img src={championPicSource} height="60" width="60" />;
  }
}

export default Champion;
