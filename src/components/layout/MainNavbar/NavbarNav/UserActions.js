import React from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink
} from "shards-react";
import { connect } from "react-redux";

import * as auth from "../../../../services/Session";

class UserActions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.toggleUserActions = this.toggleUserActions.bind(this);
  }

  toggleUserActions() {
    this.setState({
      visible: !this.state.visible
    });
  }


  componentDidMount() {

  }

  testFun = () => {
    let userId = null;
    let userName = "";
    let arr = document.cookie.split("; ")
    for (let i = 0; i < arr.length; i++) {
      if ("signinUserId" == arr[i].split("=")[0]) {
        userId = arr[i].split("=")[1]
      } else if ("signinUserName" == arr[i].split("=")[0]) {
        userName = arr[i].split("=")[1]
      }
    }
    return {
      userId,
      userName
    }
  }

  signOut = () => {
    auth.clearSession();
    this.props.history.push('/');
  }

  render() {
    console.log("userAction.js ... ", this.props, document.cookie.signinUserName);
    return (
      <NavItem tag={Dropdown} caret toggle={this.toggleUserActions}>
        <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
          <img
            className="user-avatar rounded-circle mr-2"
            src={require("./../../../../images/avatars/0.jpg")}
            alt="User Avatar"
          />{" "}
          {/* <span className="d-none d-md-inline-block">{this.props.signinUser.Name}</span> */}
          {/* <span className="d-none d-md-inline-block">{this.testFun()['userName']}</span> */}
          <span className="d-none d-md-inline-block">{auth.getItem('name')}</span>
        </DropdownToggle>
        <Collapse tag={DropdownMenu} right small open={this.state.visible}>
          {/* <DropdownItem tag={Link} to="user-profile">
            <i className="material-icons">&#xE7FD;</i> Profile
          </DropdownItem>
          <DropdownItem tag={Link} to="edit-user-profile">
            <i className="material-icons">&#xE8B8;</i> Edit Profile
          </DropdownItem>
          <DropdownItem tag={Link} to="file-manager-list">
            <i className="material-icons">&#xE2C7;</i> Files
          </DropdownItem>
          <DropdownItem tag={Link} to="transaction-history">
            <i className="material-icons">&#xE896;</i> Transactions
          </DropdownItem>
          <DropdownItem divider /> */}
          {/* <DropdownItem tag={Link} to="/" onClick={this.props.signout} className="text-danger"> */}
          <DropdownItem tag={Link} to="" onClick={this.signOut} className="text-danger">
            <i className="material-icons text-danger">&#xE879;</i> 退出
          </DropdownItem>
        </Collapse>
      </NavItem>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    signinUser: state.signinUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signout: () => {
      dispatch({
        type: "SIGNOUT_ACTION"
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserActions);
