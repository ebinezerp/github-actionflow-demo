const logger = require("../config/logger-config");
const EmployeeService = require("../services/employee-service");
const {generateResponse} = require("../util/response-util");


const employeeService = new EmployeeService();

exports.addEmployee = async (req,res,next) => {
    logger.info("employee-controller.js, addEmployee()");
    const employee = req.body;
    try {
        await employeeService.addEmployee(employee);
        return res.status(200).send(generateResponse('SUCCESS',undefined, "ADDED"))
    }catch (err){
        logger.error(err);
        if(err.code){
            return res.status(err.code).send(generateResponse("FAILURE", err, null));
        }
    }
}