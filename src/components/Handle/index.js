import React from "react";
import { generateRandomPastelColor } from "../../helpers/helpers";

import styles from "./index.module.css";

class Handle extends React.Component {
  constructor(props) {
    super(props);

    this.handle = React.createRef();
  }

  render() {
    return (
      <div
        className="ba bw2 handle"
        ref={this.handle}
        style={{
          cursor: "move",
          transition: "background-color .2s ease-in-out"
        }}
      >
        <div className="flex h2 items-center justify-center relative pa2">
          <div className="flex" style={{ position: "absolute", left: "8px" }}>
            <div className="w1 h1 bg-black mr2" />
            <div className="w1 h1 bg-black mr2" />
            <div className="w1 h1 bg-black" />
          </div>
          <p className={`${styles.filename} ma0 lh-solid`}>
            {this.props.filename}
          </p>
        </div>
      </div>
    );
  }

  componentDidMount() {
    setTimeout(
      () =>
        (this.handle.current.style.backgroundColor = generateRandomPastelColor()),
      1000
    );
  }
}

export default Handle;
