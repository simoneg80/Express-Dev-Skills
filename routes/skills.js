var express = require('express');
var router = express.Router();
const skillsCtrl = require("../controller/skills");

/* GET users listing. */
router.get("/", skillsCtrl.index);

//GET /skill/new  new
router.get("/new", skillsCtrl.new);

//Get /skill/:id
router.get("/:id", skillsCtrl.show); // ask Kristina 

//Create /skills 
router.post("/", skillsCtrl.create);

//DELETE /skills/:id
router.delete("/:id", skillsCtrl.delete);

module.exports = router;
