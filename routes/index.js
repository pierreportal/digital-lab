const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

router.get("/projects", (req, res) => {
  return Project.find()
    .populate("author")
    .populate("involved")
    .then((data) => {
      res.json(data);
    })
    .catch((err) => err);
});

router.post("/project/new", (req, res) => {
  const { title, description, tags, state, author } = req.body;
  return Project.create({ title, description, tags, state, author })
    .then((newProject) => {
      return res.json(`New project ${newProject.title} Created !`);
    })
    .catch((err) => err);
});

router.post("/project/update/:id", (req, res) => {
  const { id } = req.params;
  const modifier = req.body;
  console.log("modifier:", modifier);
  console.log("id:", id);

  return Project.findByIdAndUpdate({ _id: id }, modifier)
    .then((updatedProject) => res.json(updatedProject))
    .catch((err) => err);
});

router.post("/project/delete/:id", (req, res) => {
  const { id } = req.params;

  return Project.findByIdAndDelete({ _id: id })
    .then(() => res.json("Project deleted."))
    .catch((err) => err);
});

module.exports = router;
