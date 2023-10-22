const skills = [
  { id: 123, skill: "dancing", level: "master" },
  { id: 456, skill: "singer", level: "beginner" },
  { id: 789, skill: "speech", level: "intermediate" },
];

function getAll() {
  return skills;
}

module.exports = {
  getAll,
};
