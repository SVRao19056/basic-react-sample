import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.store || "App no props");
  }

  render() {
    return <div> Hello world</div>;
  }
}
App.propTypes = {
  store: PropTypes.object,
};
export default App;
