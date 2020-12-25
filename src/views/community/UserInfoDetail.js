import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader
} from "shards-react";
import * as auth from "../../services/Session";


const UserInfoDetails = ({ userDetails }) => (
  <Card small className="mb-4 pt-3">
    <CardHeader className="border-bottom text-center">
      <div className="mb-3 mx-auto">
        <img
          className="rounded-circle"
          src={userDetails.avatar}
          alt={userDetails.name}
          width="110"
        />
      </div>
      <h4 className="mb-0">{userDetails.name}</h4>
    </CardHeader>
  </Card>
);

UserInfoDetails.propTypes = {
  /**
   * The user details object.
   */
  userDetails: PropTypes.object
};

let username = auth.getItem("name")
UserInfoDetails.defaultProps = {
  userDetails: {
    name: username,
    avatar: require("./../../images/avatars/0.jpg"),
    jobTitle: "Project Manager",
    performanceReportTitle: "Workload",
    performanceReportValue: 74,
    metaTitle: "Description",
    metaValue:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?"
  }
};

export default UserInfoDetails;
