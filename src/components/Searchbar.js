import React from "react";
import { Input, Button } from "semantic-ui-react";

const Searchbar = (props) => {
  return (
    <div>
      <Input
        type="text"
        placeholder={"Search for a summoner"}
        value={props.term}
        onChange={props.handleSearch}
      />
      <Button onClick={props.findSummoner}> Search </Button>
    </div>
  );
};

export default Searchbar;
