const Firestore = require("@google-cloud/firestore");


const firestore = new Firestore({
    projectId: process.env.PROJECT_ID
})

module.exports = firestore;