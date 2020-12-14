import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout, Signin } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import CodeTest from "./views/CodeTest";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import PostDetails from "./views/PostDetails";
import CoursePosts from "./views/CoursePosts";
import CourseSections from "./views/CourseSections";
import CourseTests from "./views/CourseTests";
import Login from "./components/login/Login";
import SidebarNavItem from "./components/layout/MainSidebar/SidebarNavItem";
import CodeTestDetail from "./views/CodeTestDetail";

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
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/code-test",
    layout: DefaultLayout,
    component: CodeTest
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
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  },
  {
    path: "/course-posts",
    layout: DefaultLayout,
    component: CoursePosts
  },
  {
    path: "/post-details",
    layout: DefaultLayout,
    component: PostDetails
  },
  {
    path: "/course-sections",
    layout: DefaultLayout,
    component: CourseSections
  },
  {
    path: "/course-tests",
    layout: DefaultLayout,
    component: CourseTests
  }
];
