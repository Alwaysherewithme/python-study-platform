// let API = "http://localhost:5000";
let API = "http://18.204.37.108:5000";
// let API_Socket = "http://localhost:8080";
let API_Socket = "http://3.236.104.115:8080";

/*
if (process.env.NODE_ENV === "development") {
  API = "http://localhost:5000";
  API_Socket = "http://localhost:8080";
} else if (process.env.NODE_ENV === "production") {
  API = "http://54.147.38.95:5000";
  API_Socket= "http://54.147.38.95:8000";
}
*/


export const GLOBAL_COURSE_ID = "1";
export const API_HOST = API;
export const API_HOST_Socket = API_Socket;
export const METHODS = {
  POST: "POST",
  GET: "GET",
  PUT: "PUT",
  DELETE: "DELETE",
  PATCH: "PATCH"
};
export const USER_REGISTER_URL = "/user/register";
export const USER_LOGIN_URL = "/api/sign-in";
export const TEST_DATA = "/tutorial/addLesson";
export const UPDATE_DATA = "/user/userUpdate";
export const GET_COURSES = "/course/allInActive";
export const GET_TUTORIALS = "/tutorial/allInActive";
export const GET_QUIZZES = "/quiz/allInActive";
export const TUTORIAL_DATA = "/tutorial/new";
export const COURSE_DATA = "/course/new";
export const QUIZ_DATA = "/quiz/new";
export const UPDATE_PASSWORD = "/user/updatePassword";
export const GET_COURSE_BY_ID = courseId => {
  return `/course/courseById/${courseId}`;
};
export const GET_TUTORIALS_BY_COURSE_ID = courseId => {
  return `/tutorial/course/${courseId}`;
};
export const GET_QUIZES_BY_COURSE_ID = courseId => {
  return `/quiz/course/${courseId}`;
};
export const GET_TUTORIAL_BY_ID = tutorialId => {
  return `/tutorial/tutorialById/${tutorialId}`;
};
export const GET_QUIZ_BY_ID = quizId => {
  return `/quiz/quizById/${quizId}`;
};
export const USER_ABOUT_INFO = uuid => {
  return `/user/${uuid}/update/about`;
};
export const TUTORIAL_UPDATE_CONTENT = tutorialId => {
  return `/tutorial/update/${tutorialId}`;
};
export const COURSE_UPDATE_DESCRIPTION = courseId => {
  return `/course/update/${courseId}`;
};
export const EMAIL_CONFIRMATION = email => {
  return `/user/emailExist/${email}`;
};
export const USER_BY_ID = uuid => {
  return `/user/userById/${uuid}`;
};
export const ADDING_TUTORIAL_TO_USER = (uuid, tutorialId, courseId) => {
  return `/user/${uuid}/tutorial/${tutorialId}/start/${courseId}`;
};
export const ADDING_QUIZ_TO_USER = (uuid, quizId, courseId) => {
  return `/user/${uuid}/quiz/${quizId}/start/${courseId}`;
};
export const UPDATE_USER_TUTORIAL_PROGRESS = (uuid, tutorialId) => {
  return `/user/${uuid}/tutorial/${tutorialId}/updateStatus`;
};
export const QUIZ_QUESTIONS_ADD = quizId => {
  return `/quiz/${quizId}/question/add`;
};
export const QUIZ_PROGRESS_UPDATE = (uuid, quizId) => {
  return `/user/${uuid}/quiz/${quizId}/updateStatus
  `;
};