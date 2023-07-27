const logger = require("../config/logger-config");
const database = require("../config/db-config");
const BaseException = require("../exceptions/BaseException");

class EmployeeService {

    constructor() {
        this.empCollection = database.collection('employee');
    }

    async addEmployee(employee) {
        logger.info("EmployeeService, addEmployee()");
        try {
            await this.empCollection.add(JSON.parse(JSON.stringify(employee)));
        } catch (err) {
            if (err.code) {
                throw new BaseException(err.code, err.message)
            }
            throw new BaseException(500, err.message);
        }
    }

    async getEmployees() {
        logger.info("EmployeeService, getEmployees()");
        try {
            const docRefArray = await this.empCollection.listDocuments();
            const dataArray = await Promise.all(
                docRefArray.map(async docRef => {
                    const snapshot = await docRef.get();
                    if (snapshot.exists) {
                        return {
                            id: docRef.id, ...snapshot.data()
                        }
                    }
                }));
            return dataArray.filter(data => !!data);
        } catch (err) {

        }
    }
}

module.exports = EmployeeService;

