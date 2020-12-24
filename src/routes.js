import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout, Signin } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserInfoLite from "./views/community/UserInfoLite";
import CodeTest from "./views/CodeTest";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import CourseSections from "./views/CourseSections";
import Login from "./components/login/Login";
import CodeTestDetail from "./views/CodeTestDetail";
import UserProfileLite from "./views/UserProfileLite";

export default [
  {
    path: "/",
    exact: true,
    layout: Signin,
    component: () => <Redirect to="/sign-in" />
  },
  {
    path: "/sign-in",
    layout: Signin,
    component: Login
  },
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/code-test",
    layout: DefaultLayout,
    component: CodeTest
  },
  {
    path: "/communication-community",
    layout: DefaultLayout,
    component: UserInfoLite
  },
  {
    path: "/test-detail",
    layout: DefaultLayout,
    component: CodeTestDetail
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/course-sections",
    layout: DefaultLayout,
    component: CourseSections
  }
];
