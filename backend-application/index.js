const express = require("express");
const employeeRoutes = require("./routes/employee-routes");

const app = express();


app.use(employeeRoutes);

app.use("/",(req,res,next) => {
    return res.send("Root URL");
})

app.listen(process.env.PORT);