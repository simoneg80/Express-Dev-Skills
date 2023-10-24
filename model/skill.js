const skills = [
  { id: 123, skill: "dancing", done: true },
  { id: 456, skill: "singer", done: true },
  { id: 789, skill: "speech", done: true },
];

function getAll() {
  return skills;
}

function create(skill) {
  // Generate an id
  skill.id = Date.now() % 1000000;
  // Give yourself some credit, consider the skill done
  skill.done = true;
  skills.push(skill);

}

module.exports = {
  getAll,
  create,
};
