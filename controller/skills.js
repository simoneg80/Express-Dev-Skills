const Skill = require("../model/skill");
const index = (req, res) => {
  res.render("skills/index", {
    skills: Skill.getAll(),
    title: "New Skill",
  });
};

function newSkill(req, res) {
  res.render("skills/new");
}

function create(req, res) {
  //reference the model here
  Skill.create(req.body);
  res.redirect("/skills");
}

module.exports = {
  index,
  new: newSkill,
  create,
};
