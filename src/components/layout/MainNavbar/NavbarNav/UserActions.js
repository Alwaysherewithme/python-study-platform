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
import { SIGNOUT_ACTION } from "../../../../store/ActionTypes";

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

  signOut = () => {
    auth.clearSession();
    this.props.history.push('/');
  }

  render() {
    return (
      <NavItem tag={Dropdown} caret toggle={this.toggleUserActions}>
        <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
          <img
            className="user-avatar rounded-circle mr-2"
            src={require("./../../../../images/avatars/0.jpg")}
            alt="User Avatar"
          />{" "}
          <span className="d-none d-md-inline-block">{auth.getItem('name')}</span>
        </DropdownToggle>
        <Collapse tag={DropdownMenu} right small open={this.state.visible}>
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
        type: SIGNOUT_ACTION
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserActions);