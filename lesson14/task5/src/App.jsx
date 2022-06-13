import React, { Component, useEffect, useState } from "react";
import Clock from "./Clock.jsx";

const App = () => {
  const [visible, setToogle] = useState(true);

  return (
    <>
      <button
        onClick={() => {
          setToogle(!visible);
        }}
      >
        Toggle
      </button>

      {visible && (
        <>
          <Clock location="London" offset={0} />
          <Clock location="Kyiv" offset={2} />
          <Clock location="New York" offset={-5} />
        </>
      )}
    </>
  );
};

// class App extends Component {
//   state = {
//     visible: true,
//   };

//   toggle = () => {
//     this.setState({
//       visible: !this.state.visible,
//     });
//   };

//   render() {
//     return (
//       <>
//         <button onClick={this.toggle}>Toggle</button>

//         {this.state.visible && (
//           <>
//             <Clock location="London" offset={0} />
//             <Clock location="Kyiv" offset={2} />
//             <Clock location="New York" offset={-5} />
//           </>
//         )}
//       </>
//     );
//   }
// }

export default App;
