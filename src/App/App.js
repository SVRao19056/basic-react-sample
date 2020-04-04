import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.store || "App no props");
  }

  render() {
    return <div> Hello world</div>;
  }
}

export default App;
