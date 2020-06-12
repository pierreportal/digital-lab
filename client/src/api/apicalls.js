import axios from "axios";
import React from "react";
import { Redirect } from "react-router-dom";

export const getProjects = () => {
  return axios
    .get(`/projects`)
    .then((res) => res.data)
    .catch((err) => err);
};

export const updateProject = (projectId, modifier) => {
  console.log("modifier:", modifier);
  axios
    .post(`/project/update/${projectId}`, modifier)
    .then((res) => res.data)
    .catch((err) => err);
};

export const postNewProject = (newProject) => {
  const { title, description, tags, author, state } = newProject;
  axios
    .post("/project/new", { title, description, tags, author, state })
    .then((res) => res.data)
    .catch((err) => err);
};

export const deleteProject = (props) => {
  const id = props;
  axios
    .post(`/project/delete/${id}`)
    .then((res) => res.data)
    .catch((err) => err);
};

export const signup = (newUser) => {
  const { username, password, email } = newUser;
  const user = {
    username: username,
    email: email,
    password: password,
  };
  axios
    .post("/auth/signup", user)
    .then((res) => res.data)
    .catch((err) => err);
};

export const login = (newUser) => {
  const { username, password } = newUser;
  const user = {
    username: username,
    password: password,
  };
  axios
    .post("/auth/login", user)
    .then(() => <Redirect to="/" />)
    .catch((err) => err);
};
