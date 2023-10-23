const Skill = require("../model/skill");
const index = (req, res)=> {
    res.render("skills/index", {
        skills: Skill.getAll(),
        title: "New Skill"
    });
};

module.exports = {
    index
};