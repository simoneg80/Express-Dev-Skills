const skills = [
  { id: 123, skill: "dancing", done: true },
  { id: 456, skill: "singer", done: true },
  { id: 789, skill: "speech", done: true },
];

function getAll() {
  return skills;
}

function getOne(id){
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}
function create(skill) {
  // Generate an id
  skill.id = Date.now() % 1000;
  // Give yourself some credit, consider the skill done
  skill.done = true;
  skills.push(skill);
}

function deleteOne(id) {
  id = parseInt(id);
  //Find the index for the skill
  const idx = skills.findIndex((skill) => skill.id === id);
  skills.splice(idx, 1);
}

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
};
