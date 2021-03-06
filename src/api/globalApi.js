import { API_HOST } from "./constants";
import * as auth from "../services/Session";

const GlobalAPISvc = (endPoint, method, data) => {
  const token = auth.getItem("token");
  const uuid = auth.getItem("uuid");
  return new Promise((resolve, reject) => {
    fetch(`${API_HOST}${endPoint}`, {
      method: method,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "x-authentication": token,
        uuid: uuid
      }
    })
      .then(res => {
        return res.json();
      })
      .then(json => {
        resolve(json);
      })
      .catch(error => {
        reject(error);
      });
  }).catch(error => {
    return error;
  });
};

export default GlobalAPISvc;