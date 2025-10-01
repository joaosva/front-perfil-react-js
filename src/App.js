import React from "react";
import UserCard from "./components/UserCard";

function App() {
  return (
    <div className="app" style={{display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", background: "#f0f0f0"}}>
      <UserCard />
    </div>
  );
}

export default App;
