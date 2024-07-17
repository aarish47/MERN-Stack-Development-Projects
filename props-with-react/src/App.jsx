// Application.jsx
import React from "react";
import List from "./components/Items.jsx";

function Application() {
  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center" }}>SHOP</h1>
      <List />
    </React.Fragment>
  );
}

export default Application;
