
import React ,{ Component }  from "react";
// function MyFirstComponent() {
//     return (
//         <h1>I just created my first component</h1>
//     );
// }

// export default MyFirstComponent;
// Sidebar
function Sidebar() {
    return (
//<div className="col-2">
          <div id="sidebar">
            <img src="theindex.svg" className="logo" alt="the index logo" />
            <section>
              <h4 className="menu-item active">
                <button>AUTHORS</button>
              </h4>
            </section>
          </div>
//</div>
    );
}
export default Sidebar;