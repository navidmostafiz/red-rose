import React, { useState } from "react";
import { getNameTraitByTermAsync } from "./API";
import { log } from "./utils";

function App() {
  const [foundNameTraits, setFoundNameTraits] = useState(undefined);

  const getNameTraitByTermHandler = (e) => {
    log("nameTermSearchHandler: term=", e.target.value);
    getNameTraitByTermAsync(e.target.value).then((data) => {
      log(data);
      setFoundNameTraits(data[0]);
    });
  };

  return (
    <div className="box">
      <h3 align="center">red-rose</h3>
      <input
        autoFocus
        autoComplete="off"
        className="nameInput"
        name="name"
        placeholder="name...?"
        onChange={getNameTraitByTermHandler}
      />
      <br />
      <br />
      <span>
        {foundNameTraits &&
          foundNameTraits.name &&
          `${foundNameTraits.name}s are known to be...`}
      </span>
      <br />
      <br />
      <ul className="list_style">
        {foundNameTraits &&
          foundNameTraits.traits.length > 0 &&
          foundNameTraits.traits
            .slice(0, 3)
            .map((trait) => <li key={trait}>{trait}</li>)}
      </ul>
    </div>
  );
}

export default App;
