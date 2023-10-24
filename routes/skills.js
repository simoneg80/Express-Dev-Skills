var express = require('express');
var router = express.Router();
const skillsCtrl = require("../controller/skills");

/* GET users listing. */
router.get("/", skillsCtrl.index);


//GET /skill/new  new
router.get("/new", skillsCtrl.new);

//Create /skills 

router.post("/", skillsCtrl.create);

module.exports = router;
