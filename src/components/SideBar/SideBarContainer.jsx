import React from "react";
import { connect } from "react-redux";
import SideBar from "./SideBar";
import { toogleIsOpen } from "../../redux/navigationReducer";

class HeaderContainer extends React.Component {
  toggleDrawer = (isOpen) => {
    this.props.toogleIsOpen(isOpen);
  };

  render() {
    return (
      <SideBar isOpen={this.props.isOpen} toggleDrawer={this.toggleDrawer} />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    isOpen: state.sideBar.isOpen,
  };
};
export default connect(mapStateToProps, { toogleIsOpen })(HeaderContainer);
