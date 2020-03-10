import React from "react";
import authors from "./data";
import Sidebar from "./Sidebar.js";
import AuthorList from "./AuthorList.js";
function App() {
  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-2">
      <div>
            < Sidebar/>
        </div>
        </div>
        <div className="content col-10">
          <AuthorList authors={authors} />
        </div>
      </div>
    </div>
  );
}

export default App;
