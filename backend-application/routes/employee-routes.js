const express = require("express");
const {addEmployee} = require("../controller/employee-controller");

const router = express.Router();

router.post("/api/employee", addEmployee);
/*
router.get("/api/employee",getEmployees);
router.get("/api/employee/:id", getEmployee);
*/


module.exports = router;