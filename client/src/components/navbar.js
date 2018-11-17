import React from "react";
import "./HelloBootstrap.css";

class Dropdown extends React.Component {
    state = {
      isOpen: false
    };
  
    toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
  
    render() {
      const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
      return (
        <div className="dropdown" onClick={this.toggleOpen}>
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
          >
            Dropdown
          </button>
          <div className={menuClass} aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#nogo">
              Item 1
            </a>
            <a className="dropdown-item" href="#nogo">
              Item 2
            </a>
            <a className="dropdown-item" href="#nogo">
              Item 3
            </a>
          </div>
        </div>
      );
    }
  }
  
  ReactDOM.render(<Dropdown />, document.getElementById("root"));
  