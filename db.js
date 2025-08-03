const mongoose = require("mongoose")

const dbConnection = () => {
    const dbURI = process.env.MONGO_URI;
    mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Database connection passed ✅");
    })
    .catch(err => {
        console.error("Error in connection db ❌", err);
    });
};

module.exports = dbConnection 